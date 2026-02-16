import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { CheckCircle, Clock, FileText, AlertCircle, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Schengen Visa",
  description:
    "Expert Schengen visa application support from Kenya. Tourism, business, family visits, and medical treatment across 26 European countries. Professional consultancy in Nairobi.",
};

export default function SchengenVisaPage() {
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
            Schengen Visa
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Travel to Europe with confidence. We handle your Schengen visa
            application from start to finish, covering tourism, business,
            family visits, and medical treatment across 26 European countries.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-14">
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-heading text-2xl text-white mb-4">
                  What Is a Schengen Visa?
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  A Schengen visa is a short-stay visa that allows you to travel
                  to 26 European countries within the Schengen Area. With a
                  single visa, you can visit countries like France, Germany,
                  Italy, Spain, the Netherlands, and more. The visa allows stays
                  of up to 90 days within any 180-day period.
                </p>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-white mb-5">
                  Types We Handle
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Tourism & Holidays", desc: "Explore European destinations for leisure and sightseeing." },
                    { title: "Business Meetings", desc: "Attend conferences, meetings, or trade events across Europe." },
                    { title: "Family Visits", desc: "Visit family members or friends living in a Schengen country." },
                    { title: "Medical Treatment", desc: "Travel for medical consultations or procedures in Europe." },
                  ].map((type) => (
                    <div key={type.title} className="border border-zinc-800 p-5">
                      <Globe size={20} className="text-bronze-500 mb-3" strokeWidth={1.5} />
                      <h3 className="font-semibold text-white text-sm mb-1">{type.title}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-heading text-2xl text-white mb-5">
                  Key Requirements
                </h2>
                <ul className="space-y-3">
                  {[
                    "A valid passport with at least 3 months validity beyond your planned return date",
                    "Travel insurance with minimum coverage of \u20AC30,000",
                    "Proof of accommodation for the duration of your stay",
                    "Return flight itinerary or travel booking",
                    "Proof of sufficient funds to cover your trip",
                    "Employment or business proof (payslips, business registration, etc.)",
                    "Invitation letter if visiting someone in Europe",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-bronze-500 shrink-0 mt-0.5" strokeWidth={1.5} />
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
                    "Determine the best embassy to apply through based on your itinerary",
                    "Prepare your full document package to meet embassy requirements",
                    "Review your financial evidence and bank statements",
                    "Draft a compelling cover letter for your application",
                    "Guide you through the appointment booking and biometrics process",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-bronze-500 shrink-0 mt-0.5" strokeWidth={1.5} />
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
                      q: "How long does processing take?",
                      a: "Standard processing takes around 15 working days from the date of your appointment. During peak seasons, it may take longer. We recommend applying at least 4 to 6 weeks before departure.",
                    },
                    {
                      q: "Which embassy should I apply through?",
                      a: "You should apply at the embassy of your primary destination. If spending equal time in multiple countries, apply at the embassy of your first point of entry.",
                    },
                    {
                      q: "Can I visit multiple countries with one Schengen visa?",
                      a: "Yes. A Schengen visa allows you to travel freely across all 26 Schengen countries during your approved stay.",
                    },
                  ].map((faq) => (
                    <div key={faq.q} className="border border-zinc-800 border-l-4 border-l-bronze-500/30 p-6">
                      <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                      <p className="text-sm text-zinc-500 leading-relaxed">{faq.a}</p>
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
                    <Clock size={18} className="text-bronze-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-white">Duration</p>
                      <p className="text-zinc-500">Up to 90 days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileText size={18} className="text-bronze-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-white">Processing Time</p>
                      <p className="text-zinc-500">~15 working days</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-bronze-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                    <div>
                      <p className="font-medium text-white">Validity</p>
                      <p className="text-zinc-500">Single or multiple entry</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900 p-8 text-white">
                <h3 className="font-heading text-xl mb-3">
                  Ready to Apply?
                </h3>
                <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                  Start with our free eligibility check to see if a Schengen
                  visa is right for your European travel plans.
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
