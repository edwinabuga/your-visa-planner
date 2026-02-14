import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import { Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Other UK Visa Types",
  description:
    "Expert consultancy for Child Dependant visas, Transit visas, Ancestry visas, and other UK immigration routes. Based in Nairobi, Kenya.",
};

const otherVisas = [
  {
    title: "Child Dependant Visa",
    description:
      "For children under 18 who want to join a parent in the UK. We help with the application for children of Skilled Worker, Student, and other visa holders.",
  },
  {
    title: "Transit Visa",
    description:
      "If you need to pass through the UK on your way to another country, you may need a transit visa. We help determine if you need one and assist with the application.",
  },
  {
    title: "UK Ancestry Visa",
    description:
      "For Commonwealth citizens with a grandparent born in the UK. This visa allows you to live and work in the UK for 5 years.",
  },
  {
    title: "Global Talent Visa",
    description:
      "For leaders or potential leaders in academia, research, arts, culture, or digital technology. We help you navigate the endorsement and application process.",
  },
  {
    title: "Innovator Founder Visa",
    description:
      "For experienced business people who want to set up a business in the UK. We guide you through the endorsement body process and application.",
  },
  {
    title: "Family Reunion",
    description:
      "For close family members of refugees or people with humanitarian protection in the UK. We help reunite families through the proper immigration channels.",
  },
];

export default function OtherVisasPage() {
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
            Other UK Visa Types
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl leading-relaxed">
            Beyond the main visa categories, there are many other UK immigration
            routes. Whatever your situation, we can help you find the right path.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {otherVisas.map((visa) => (
              <div
                key={visa.title}
                className="rounded-lg border border-neutral-200 p-8 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <Users size={28} className="text-accent mb-4" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                  {visa.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {visa.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-lg bg-white border border-neutral-200 p-10 text-center">
            <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
              Not Sure Which Visa You Need?
            </h2>
            <p className="text-neutral-500 mb-8 max-w-xl mx-auto">
              Our expert consultants can assess your situation and recommend the
              best visa route for you. Start with our free eligibility assessment.
            </p>
            <Link
              href="/eligibility"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-8 py-3.5 text-base font-medium text-white hover:bg-accent-dark transition-colors"
            >
              Check Your Eligibility
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
