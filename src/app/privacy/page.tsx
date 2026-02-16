import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Your Visa Planner privacy policy. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Last updated: February 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-zinc-400 leading-relaxed">
              Your Visa Planner (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
              is committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data when
              you use our website and services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Information We Collect
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              We may collect the following types of information:
            </p>
            <ul className="text-zinc-400 space-y-2 list-disc pl-5">
              <li>
                <strong className="text-zinc-200">Personal details:</strong>{" "}
                Name, email address, phone number, and other contact information
                you provide through our forms.
              </li>
              <li>
                <strong className="text-zinc-200">
                  Visa-related information:
                </strong>{" "}
                Nationality, travel history, employment details, and other
                information relevant to your visa application.
              </li>
              <li>
                <strong className="text-zinc-200">Technical data:</strong> IP
                address, browser type, and device information collected
                automatically when you visit our website.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <ul className="text-zinc-400 space-y-2 list-disc pl-5">
              <li>
                To provide visa consultancy services and respond to your
                enquiries
              </li>
              <li>To assess your eligibility for visa categories</li>
              <li>
                To communicate with you about your case and our services
              </li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Sharing
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We do not sell or rent your personal information to third parties.
              We may share your data only with your explicit consent, to comply
              with legal obligations, or with trusted service providers who
              assist us in operating our website (such as hosting and form
              providers).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Data Security
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              We take reasonable measures to protect your personal information
              from unauthorised access, alteration, disclosure, or destruction.
              Our website uses SSL encryption to protect data transmitted online.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="text-zinc-400 space-y-2 list-disc pl-5">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
            <p className="text-zinc-400 leading-relaxed">
              Our website may use cookies to improve your browsing experience.
              Cookies are small files stored on your device. You can control
              cookie settings through your browser preferences.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-zinc-400 leading-relaxed">
              If you have any questions about this Privacy Policy or how we
              handle your data, please contact us at{" "}
              <a
                href="mailto:edwin@yourvisaplanner.com"
                className="text-bronze-400 hover:underline"
              >
                edwin@yourvisaplanner.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
