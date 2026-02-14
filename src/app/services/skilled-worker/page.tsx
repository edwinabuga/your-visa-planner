import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { CheckCircle, Clock, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Skilled Worker Visa",
  description:
    "Expert consultancy for UK Skilled Worker Visa applications from Kenya. Sponsorship guidance, document preparation, and application support in Nairobi.",
};

export default function SkilledWorkerVisaPage() {
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
            Skilled Worker Visa
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed">
            The Skilled Worker visa lets you come to or stay in the UK to do an
            eligible job with an approved employer. This is the main route for
            working in the UK long-term.
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
                  The Skilled Worker visa is for people who have a job offer from
                  a UK employer that holds a valid sponsor licence. The job must
                  be at the required skill level and meet minimum salary
                  thresholds. This visa can lead to permanent settlement
                  (Indefinite Leave to Remain) after 5 years.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl font-semibold text-primary mb-5">
                  Key Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "A Certificate of Sponsorship (CoS) from a licensed UK employer",
                    "The job must be at RQF Level 3 or above (equivalent to A-level)",
                    "Meet the minimum salary threshold (usually £26,200 or the going rate for the job)",
                    "Proof of English language ability (at least CEFR Level B1)",
                    "Sufficient funds to support yourself (at least £1,270 in savings)",
                    "A valid tuberculosis (TB) test certificate",
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
                    "Verify your job offer meets Skilled Worker visa requirements",
                    "Guide you through the Certificate of Sponsorship process with your employer",
                    "Help you gather and organise all supporting documents",
                    "Assist with English language test booking and preparation",
                    "Prepare your financial evidence to meet the maintenance requirement",
                    "Support you with the online application, biometrics, and any follow-up",
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
                      q: "What is a Certificate of Sponsorship (CoS)?",
                      a: "A CoS is an electronic document issued by your UK employer. It's not a physical certificate — it's a reference number that contains information about your job, salary, and role. Your employer must be a licensed sponsor to issue one.",
                    },
                    {
                      q: "Can I bring my family?",
                      a: "Yes. Your spouse/partner and children under 18 can apply as your dependants. They'll need to meet their own requirements and pay separate application fees.",
                    },
                    {
                      q: "Can this lead to permanent residency?",
                      a: "Yes. After 5 years on a Skilled Worker visa, you may be eligible to apply for Indefinite Leave to Remain (ILR), which is permanent settlement in the UK.",
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
                      <p className="text-neutral-500">Up to 5 years (renewable)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-primary">Processing Time</p>
                      <p className="text-neutral-500">Around 3 weeks</p>
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
                <h3 className="font-heading text-xl font-semibold mb-3">Have a Job Offer?</h3>
                <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
                  Check if your job offer qualifies for a Skilled Worker visa with our free assessment.
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
