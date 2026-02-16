import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  Briefcase,
  GraduationCap,
  Heart,
  ArrowRightLeft,
  Users,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Other UK Visas",
  description:
    "Specialised UK visa consultancy for Skilled Worker, Student, Spouse, Transit, Child Dependent, and other immigration routes. Custom pricing based on case complexity. Based in Nairobi, Kenya.",
};

const visaTypes = [
  {
    icon: Briefcase,
    title: "Skilled Worker Visa",
    description:
      "Relocate to the UK for work with a licensed sponsor employer. We guide you through the Certificate of Sponsorship process, document preparation, and application submission.",
  },
  {
    icon: GraduationCap,
    title: "Student Visa",
    description:
      "Study at a UK institution with the right visa. We help you navigate CAS letters, financial requirements, and the full application process from Kenya.",
  },
  {
    icon: Heart,
    title: "Spouse / Partner Visa",
    description:
      "Join your partner in the UK. We assist with gathering relationship evidence, meeting financial requirements, and building a strong application.",
  },
  {
    icon: ArrowRightLeft,
    title: "Transit Visa",
    description:
      "Passing through the UK on your way to another destination? We help determine if you need a transit visa and handle the application for you.",
  },
  {
    icon: Users,
    title: "Child Dependent Visa",
    description:
      "For children joining parents who hold a UK visa. We manage the application process for dependants of Skilled Worker, Student, and other visa holders.",
  },
  {
    icon: FileText,
    title: "Other Routes",
    description:
      "Ancestry visas, Global Talent, Innovator Founder, and more. Whatever your immigration route, we can assess your case and provide expert guidance.",
  },
];

export default function UKOtherVisasPage() {
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
            Other UK Visas
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            Beyond the Standard Visitor visa, the UK offers many immigration
            routes for work, study, family, and more. Each case is different, so
            we provide custom pricing tailored to the complexity of your
            situation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {visaTypes.map((visa) => {
              const Icon = visa.icon;
              return (
                <div
                  key={visa.title}
                  className="border border-zinc-800 p-8 hover:border-bronze-800/50 transition-all"
                >
                  <Icon
                    size={28}
                    className="text-bronze-500 mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-heading text-lg text-white mb-2">
                    {visa.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {visa.description}
                  </p>
                  <Link
                    href="/contact"
                    className="text-sm font-medium text-bronze-400 hover:underline"
                  >
                    Contact for a quote &rarr;
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-14 border border-zinc-800 p-10 text-center">
            <h2 className="font-heading text-2xl text-white mb-4">
              Pricing Varies by Case
            </h2>
            <p className="text-zinc-500 mb-8 max-w-xl mx-auto leading-relaxed">
              Pricing varies based on visa type and case complexity. Contact us
              for a personalised quote. We will assess your situation and
              provide a clear breakdown of costs before you commit.
            </p>
            <Link
              href="/eligibility"
              className="inline-block rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-10 py-4 text-base font-medium text-white hover:from-bronze-500 hover:to-bronze-300 transition-all"
            >
              Check Your Eligibility
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
