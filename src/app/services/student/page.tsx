import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { CheckCircle, Clock, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Student Visa",
  description:
    "Expert help with UK Student Visa applications from Kenya. CAS letter guidance, financial evidence, and full application support in Nairobi.",
};

export default function StudentVisaPage() {
  return (
    <>
      <section className="bg-primary-light py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/services"
            className="text-sm text-primary hover:underline mb-4 inline-block"
          >
            &larr; All Services
          </Link>
          <h1 className="text-4xl font-bold text-neutral-900">Student Visa</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
            The UK Student visa allows you to study at a recognised UK
            educational institution. From undergraduate degrees to postgraduate
            research, we help you get there.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Who Is This Visa For?
                </h2>
                <p className="text-neutral-600 leading-relaxed">
                  The Student visa is for people aged 16 or over who have been
                  offered a place on a course at a licensed student sponsor in the
                  UK. This covers university degrees, college diplomas, language
                  courses, and other approved programmes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Key Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "A Confirmation of Acceptance for Studies (CAS) from a licensed UK institution",
                    "Proof of English language proficiency (usually IELTS or equivalent)",
                    "Evidence of sufficient funds to cover tuition fees and living costs",
                    "A valid passport and tuberculosis (TB) test certificate",
                    "Genuine intention to study (you may be asked about your course and plans)",
                    "Academic qualifications that meet the course requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  How We Help
                </h2>
                <ul className="space-y-3">
                  {[
                    "Review your CAS and ensure all details are correct",
                    "Advise on the financial evidence needed for your specific course and location",
                    "Help you prepare your bank statements and financial documents",
                    "Guide you through the IELTS or alternative English language test",
                    "Prepare your application and supporting statement",
                    "Support you through biometrics and any credibility interviews",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Common Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is a CAS?",
                      a: "A Confirmation of Acceptance for Studies (CAS) is an electronic reference number issued by your UK educational institution. It confirms your course details, fees, and that you've met the academic requirements for the course.",
                    },
                    {
                      q: "How much money do I need to show?",
                      a: "You need to show your full course fees (minus any deposits paid) plus living costs: £1,334 per month for up to 9 months if studying in London, or £1,023 per month outside London.",
                    },
                    {
                      q: "Can I work while studying?",
                      a: "Yes, most Student visa holders can work up to 20 hours per week during term time and full-time during holidays. The exact allowance depends on your course level and institution.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-lg border border-neutral-200 p-5">
                      <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                      <p className="text-sm text-neutral-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">Quick Facts</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Duration</p>
                      <p className="text-neutral-600">Length of course + extra time</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Processing Time</p>
                      <p className="text-neutral-600">Around 3 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Work Allowed</p>
                      <p className="text-neutral-600">Up to 20 hrs/week in term</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-primary p-6 text-white">
                <h3 className="font-semibold mb-2">Got an Offer?</h3>
                <p className="text-sm text-primary-light mb-4">
                  Have a university offer? Let us help you with your Student visa application.
                </p>
                <Link
                  href="/eligibility"
                  className="block rounded-lg bg-accent px-6 py-3 text-center text-sm font-semibold text-white hover:bg-accent-dark transition-colors"
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
