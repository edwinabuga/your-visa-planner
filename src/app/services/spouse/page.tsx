import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { CheckCircle, Clock, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Spouse/Partner Visa",
  description:
    "Expert help with UK Spouse and Partner Visa applications from Kenya. Relationship evidence, financial requirements, and full application support.",
};

export default function SpouseVisaPage() {
  return (
    <>
      <section className="py-20 px-4 bg-neutral-50">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/services"
            className="text-sm text-accent hover:underline mb-4 inline-block"
          >
            &larr; All Services
          </Link>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary">
            Spouse/Partner Visa
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed">
            The UK Spouse or Partner visa allows you to join your husband, wife,
            civil partner, or long-term partner who is a British citizen or has
            settled status in the UK.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                  Who Is This Visa For?
                </h2>
                <p className="text-neutral-500 leading-relaxed">
                  This visa is for the spouse, civil partner, or unmarried
                  partner of someone who is a British citizen, has settled status
                  (Indefinite Leave to Remain), or has refugee status in the UK.
                  You must be in a genuine and subsisting relationship.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-5">
                  Key Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "Your partner must be a British citizen or have settled status in the UK",
                    "You must be legally married, in a civil partnership, or have lived together for 2+ years",
                    "Your relationship must be genuine and subsisting",
                    "Meet the minimum income requirement (usually £29,000 per year)",
                    "Prove your English language ability (at least CEFR Level A1)",
                    "Have suitable accommodation in the UK",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-neutral-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-5">
                  How We Help
                </h2>
                <ul className="space-y-3">
                  {[
                    "Assess whether you meet the relationship and financial requirements",
                    "Help you compile strong relationship evidence (photos, communications, joint finances)",
                    "Guide your UK-based partner through the financial requirement documents",
                    "Review your English language test options and help you prepare",
                    "Draft a detailed cover letter explaining your relationship history",
                    "Support you through the entire application process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span className="text-neutral-500">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-5">
                  Common Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What counts as relationship evidence?",
                      a: "Evidence includes wedding/civil partnership certificates, photos together over time, travel records, communication history (messages, calls), joint financial commitments, and statements from friends and family.",
                    },
                    {
                      q: "What is the financial requirement?",
                      a: "Your UK-based partner typically needs to earn at least £29,000 per year. This can also be met through a combination of income and savings. The rules changed in 2024, so we'll advise you on the latest requirements.",
                    },
                    {
                      q: "Can this lead to permanent residency?",
                      a: "Yes. After 5 years on a spouse/partner visa (with extensions), you can apply for Indefinite Leave to Remain (permanent settlement) in the UK.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-lg border border-neutral-200 p-6">
                      <h3 className="font-semibold text-primary mb-2">{faq.q}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-lg border border-neutral-200 p-8">
                <h3 className="font-semibold text-primary mb-5">Quick Facts</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-primary">Duration</p>
                      <p className="text-neutral-500">2.5 years (renewable)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-primary">Processing Time</p>
                      <p className="text-neutral-500">Up to 12 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-primary">Settlement</p>
                      <p className="text-neutral-500">Eligible after 5 years</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary p-8 text-white">
                <h3 className="font-heading text-xl font-semibold mb-3">Joining Your Partner?</h3>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  Find out if you qualify for a UK Spouse/Partner visa with our free assessment.
                </p>
                <Link
                  href="/eligibility"
                  className="block rounded-md bg-accent px-6 py-3.5 text-center text-sm font-medium text-white hover:bg-accent-dark transition-colors"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
