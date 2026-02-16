import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  Building2,
  Landmark,
  Globe,
  MessageSquare,
  FileCheck,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "US, UAE & Other Destinations",
  description:
    "Custom visa documentation and application support packages for the United States, UAE, and other international destinations. Tailored services from Nairobi, Kenya.",
};

const destinations = [
  {
    icon: Building2,
    title: "United States",
    description:
      "B1/B2 visitor visa support including DS-160 form assistance, interview preparation, and thorough documentation review.",
    note: "Documentation support only",
  },
  {
    icon: Landmark,
    title: "UAE",
    description:
      "Tourist visa, visit visa, and transit visa support for the United Arab Emirates. We handle documentation preparation and guide you through requirements.",
    note: null,
  },
  {
    icon: Globe,
    title: "Other Destinations",
    description:
      "Custom packages for any country. Whether heading to Canada, Australia, or anywhere else, we provide documentation review and guidance.",
    note: null,
  },
];

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell Us Your Plans",
    description:
      "Share your destination, travel purpose, and timeline. We will assess the visa requirements for your specific case.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Get a Quote",
    description:
      "We evaluate the complexity of your application and provide a clear, personalised quote with no hidden fees.",
  },
  {
    icon: Send,
    number: "03",
    title: "We Prepare Your Package",
    description:
      "We compile your documentation, review every detail, and prepare a complete application package for submission.",
  },
];

export default function CustomVisaPage() {
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
            US, UAE &amp; Other Destinations
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl leading-relaxed">
            For destinations beyond the UK and Schengen, we offer tailored
            documentation and application support packages. Each case is unique,
            so we provide personalised quotes based on your specific needs.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {destinations.map((dest) => {
              const Icon = dest.icon;
              return (
                <div
                  key={dest.title}
                  className="border border-zinc-800 p-8 hover:border-bronze-800/50 transition-all"
                >
                  <Icon size={28} className="text-bronze-500 mb-4" strokeWidth={1.5} />
                  <h3 className="font-heading text-lg text-white mb-2">
                    {dest.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  {dest.note && (
                    <span className="inline-block text-xs font-medium text-bronze-400 bg-bronze-950/50 rounded-full px-3 py-1">
                      {dest.note}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl text-white">
              How Our Custom Packages Work
            </h2>
            <p className="mt-4 text-lg text-zinc-500 max-w-xl mx-auto">
              A straightforward process tailored to your destination and
              circumstances.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-bronze-950/50 border border-bronze-500/30 mb-5">
                    <Icon size={24} className="text-bronze-400" strokeWidth={1.5} />
                  </div>
                  <span className="block font-heading text-sm font-medium text-bronze-400 mb-2">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-zinc-500 leading-relaxed">
            All custom packages include a consultation call, a personalised
            document checklist, and a thorough review of your application
            materials. We make sure everything is in order before you submit.
          </p>
        </div>
      </section>

      <CTASection
        title="Need Help With Your Visa Application?"
        description="Tell us where you are heading and we will put together a custom package for your destination. Start with a free eligibility check."
      />
    </>
  );
}
