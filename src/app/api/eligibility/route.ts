import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { escapeHtml } from "@/lib/utils";
import type { EligibilityFormData, FormApiResponse } from "@/lib/types";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<FormApiResponse>> {
  try {
    const resend = getResend();
    const data: EligibilityFormData = await request.json();

    if (
      !data.firstName ||
      !data.secondName ||
      !data.phone ||
      !data.purposeOfVisit ||
      !data.employmentStatus ||
      !data.bankBalance ||
      !data.bankStatements ||
      !data.maritalStatus ||
      !data.internationalTravel
    ) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!data.disclaimerAccepted) {
      return NextResponse.json(
        { success: false, message: "Please accept the disclaimer to continue." },
        { status: 400 }
      );
    }

    const fullName = `${data.firstName} ${data.secondName}`;

    await resend.emails.send({
      from: "Your Visa Planner <edwin@yourvisaplanner.com>",
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Eligibility Assessment — ${fullName}`,
      html: buildEmailHtml(data),
    });

    // Confirmation email to submitter (best-effort — don't fail if this errors)
    if (data.email && data.email.trim()) {
      try {
        await resend.emails.send({
          from: "Your Visa Planner <edwin@yourvisaplanner.com>",
          to: data.email.trim(),
          subject:
            "We've received your eligibility assessment — Your Visa Planner",
          html: buildConfirmationHtml(data),
        });
      } catch (confirmError) {
        console.error("Confirmation email failed:", confirmError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your eligibility assessment has been submitted successfully.",
    });
  } catch (error) {
    console.error("Eligibility form error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}

function buildEmailHtml(data: EligibilityFormData): string {
  const s = escapeHtml;
  const fullName = `${data.firstName} ${data.secondName}`;

  const purpose =
    data.purposeOfVisit === "Other" && data.purposeOther
      ? `Other — ${s(data.purposeOther)}`
      : s(data.purposeOfVisit);

  let employmentDetail = s(data.employmentStatus);
  if (data.employmentStatus === "Employed full-time" && data.jobDuration) {
    employmentDetail += ` (${s(data.jobDuration)} at current job)`;
  }
  if (
    data.employmentStatus === "Self-employed/Business owner" &&
    data.businessDuration
  ) {
    employmentDetail += ` (business operating ${s(data.businessDuration)})`;
  }

  let refusalDetail = s(data.previousUkVisa);
  if (data.previousUkVisa === "Yes, and it was refused") {
    if (data.timesRefused)
      refusalDetail += ` — ${s(data.timesRefused)}`;
    if (data.lastRefusalDate)
      refusalDetail += `, last refusal: ${s(data.lastRefusalDate)}`;
  }

  const row = (label: string, value: string, alt = false) =>
    `<tr${alt ? ' style="background: #f5f5f5;"' : ""}>
      <td style="padding: 8px 12px; font-weight: bold; width: 40%; vertical-align: top;">${label}</td>
      <td style="padding: 8px 12px;">${value}</td>
    </tr>`;

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #0f6b6e; margin-bottom: 16px;">New Eligibility Assessment</h2>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Personal Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Name", s(fullName))}
        ${row("Phone", `<a href="tel:${s(data.phone)}">${s(data.phone)}</a>`, true)}
        ${row("Email", data.email ? `<a href="mailto:${s(data.email)}">${s(data.email)}</a>` : "Not provided")}
      </table>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Travel Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Purpose of Visit", purpose)}
        ${row("Planned Travel Date", s(data.travelDate), true)}
        ${row("Duration of Stay", `${s(data.stayDurationAmount)} ${s(data.stayDurationUnit)}`)}
      </table>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Employment &amp; Income</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Employment Status", employmentDetail)}
        ${row("Monthly Income", data.monthlyIncome ? `KES ${s(data.monthlyIncome)}` : "Not provided", true)}
      </table>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Financial Position</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Bank Balance", `KES ${s(data.bankBalance)}`)}
        ${row("Bank Statements", s(data.bankStatements), true)}
        ${row("Financial Ties", data.financialTies.length > 0 ? data.financialTies.map(s).join(", ") : "None selected")}
      </table>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Personal Ties to Kenya</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Marital/Family Status", s(data.maritalStatus))}
        ${row("Ties to Kenya", data.tiesToKenya.length > 0 ? data.tiesToKenya.map(s).join(", ") : "None selected", true)}
      </table>

      <h3 style="color: #0f6b6e; margin-top: 20px;">Travel History</h3>
      <table style="width: 100%; border-collapse: collapse;">
        ${row("Previous UK Visa", refusalDetail)}
        ${row("International Travel", s(data.internationalTravel), true)}
      </table>

      <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />
      <p style="color: #737373; font-size: 12px;">This submission was sent from the eligibility form on yourvisaplanner.com</p>
    </div>
  `;
}

function buildConfirmationHtml(data: EligibilityFormData): string {
  const s = escapeHtml;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const whatsappUrl = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "";

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #0f6b6e; padding: 24px 32px; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 20px;">Your Visa Planner</h1>
      </div>

      <div style="padding: 32px; border: 1px solid #e5e5e5; border-top: none; border-radius: 0 0 8px 8px;">
        <h2 style="color: #0f6b6e; margin-top: 0;">We've received your assessment, ${s(data.firstName)}!</h2>

        <p style="line-height: 1.6;">
          Thank you for completing the eligibility assessment on our website. We have received your details and Edwin will personally review your submission.
        </p>

        <div style="background: #f0fafa; border-left: 4px solid #0f6b6e; padding: 16px 20px; margin: 24px 0; border-radius: 0 4px 4px 0;">
          <h3 style="color: #0f6b6e; margin: 0 0 8px 0; font-size: 15px;">What happens next?</h3>
          <ol style="margin: 0; padding-left: 20px; line-height: 1.8;">
            <li>Edwin will review your eligibility details</li>
            <li>You will receive a response within <strong>24 hours</strong></li>
            <li>We will discuss your options and recommended next steps</li>
          </ol>
        </div>

        ${whatsappUrl ? `
        <p style="line-height: 1.6;">
          Want a faster response? You can reach Edwin directly on WhatsApp:
        </p>
        <div style="text-align: center; margin: 24px 0;">
          <a href="${whatsappUrl}" style="display: inline-block; background: #25D366; color: #ffffff; padding: 12px 28px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 15px;">
            Continue on WhatsApp
          </a>
        </div>
        ` : ""}

        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 24px 0;" />

        <p style="color: #737373; font-size: 13px; line-height: 1.5; margin-bottom: 0;">
          This is an automated confirmation from Your Visa Planner. If you have urgent questions, contact us via WhatsApp${whatsappUrl ? ` at <a href="${whatsappUrl}" style="color: #0f6b6e;">${whatsappUrl}</a>` : ""}.
        </p>
      </div>
    </div>
  `;
}
