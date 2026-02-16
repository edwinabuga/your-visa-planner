import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { CheckCircle, Clock, FileText, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Standard Visitor Visa",
  description:
    "Expert help with UK Standard Visitor Visa applications from Kenya. Tourism, business visits, family visits, and private medical treatment. Professional consultancy in Nairobi.",
};

export default function UKVisitorVisaPage() {
  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/services"
            className="text-sm text-bronze-400 hover:underline mb-4 inline-block"
          >
            &larr; All Services
          </Link>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            UK Standard Visitor Visa
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            The UK Standard Visitor visa allows you to visit the UK for up to 6
            months for tourism, business, medical treatment, or to see family
            and friends. We handle the entire application process so you can
            focus on planning your trip.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-heading text-2xl text-white mb-4">
                  Who Is This Visa For?
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  The Standard Visitor visa is for people who want to visit the
                  UK temporarily. This includes tourists exploring the country,
                  people visiting family and friends, those attending business
                  meetings or conferences, and people seeking private medical
                  treatment.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-white mb-5">
                  Key Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "A valid passport with at least 6 months validity",
                    "Proof of sufficient funds to cover your stay",
                    "Evidence of ties to your home country (job, property, family)",
                    "A clear travel itinerary or invitation letter",
                    "Proof of accommodation in the UK",
                    "No intention to work, study, or live in the UK permanently",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-bronze-500 shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-white mb-5">
                  How We Help
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Our experienced consultants will:
                </p>
                <ul className="space-y-3">
                  {[
                    "Assess your eligibility and advise on the best approach",
                    "Help you prepare and organise all required documents",
                    "Review your financial evidence to ensure it meets requirements",
                    "Draft a strong cover letter explaining your travel purpose",
                    "Prepare you for any potential interview questions",
                    "Guide you through the online application and biometrics process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-bronze-500 shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-white mb-5">
                  Common Questions
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "How long does the application process take?",
                      a: "Standard processing takes about 3 weeks from the date of your biometrics appointment. We recommend applying at least 6 weeks before your planned travel date.",
                    },
                    {
                      q: "How much bank balance do I need?",
                      a: "There is no fixed amount required. You need to show you can comfortably support yourself during your stay. We help you determine what is appropriate for your case.",
                    },
                    {
                      q: "Can I work on a visitor visa?",
                      a: "No. The Standard Visitor visa does not permit paid or unpaid work in the UK. You can attend business meetings, conferences, or training, but you cannot be employed.",
                    },
                  ].map((faq) => (
                    <div
                      key={faq.q}
                      className="border border-zinc-800 border-l-4 border-l-bronze-500/30 p-6"
                    >
                      <h3 className="font-semibold text-white mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border border-zinc-800 p-8">
                <h3 className="font-semibold text-white mb-5">Quick Facts</h3>
                <ul className="space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <Clock
                      size={18}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Duration</p>
                      <p className="text-zinc-500">Up to 6 months</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText
                      size={18}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Processing Time</p>
                      <p className="text-zinc-500">Around 3 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle
                      size={18}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Government Fee</p>
                      <p className="text-zinc-500">From &pound;100</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-8 text-white">
                <h3 className="font-heading text-xl mb-3">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  Start with our free eligibility check to see if a visitor visa
                  is right for you.
                </p>
                <Link
                  href="/eligibility"
                  className="block rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-6 py-3.5 text-center text-sm font-medium text-white hover:from-bronze-500 hover:to-bronze-300 transition-all"
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
