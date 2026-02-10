import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your Visa Planner privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-primary-light py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl prose prose-neutral">
          <h2 className="text-2xl font-bold text-neutral-900 mt-0">
            Introduction
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Your Visa Planner (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
            is committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard your data when
            you use our website and services.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Information We Collect
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="text-neutral-600 space-y-2">
            <li>
              <strong>Personal details:</strong> Name, email address, phone
              number, and other contact information you provide through our
              forms.
            </li>
            <li>
              <strong>Visa-related information:</strong> Nationality, travel
              history, employment details, and other information relevant to your
              visa application.
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, and
              device information collected automatically when you visit our
              website.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            How We Use Your Information
          </h2>
          <ul className="text-neutral-600 space-y-2">
            <li>To provide visa consultancy services and respond to your enquiries</li>
            <li>To assess your eligibility for UK visa categories</li>
            <li>To communicate with you about your case and our services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Data Sharing
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We do not sell or rent your personal information to third parties. We
            may share your data only with your explicit consent, to comply with
            legal obligations, or with trusted service providers who assist us in
            operating our website (such as hosting and form providers).
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Data Security
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            We take reasonable measures to protect your personal information from
            unauthorised access, alteration, disclosure, or destruction. Our
            website uses SSL encryption to protect data transmitted online.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Your Rights
          </h2>
          <p className="text-neutral-600 leading-relaxed">You have the right to:</p>
          <ul className="text-neutral-600 space-y-2">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Cookies
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Our website may use cookies to improve your browsing experience.
            Cookies are small files stored on your device. You can control cookie
            settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-bold text-neutral-900 mt-10">
            Contact Us
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle
            your data, please contact us at{" "}
            <a
              href="mailto:edwin@yourvisaplanner.com"
              className="text-primary hover:underline"
            >
              edwin@yourvisaplanner.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
