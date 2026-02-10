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
      from: "Your Visa Planner <onboarding@resend.dev>",
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Eligibility Assessment — ${fullName}`,
      html: buildEmailHtml(data),
    });

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
