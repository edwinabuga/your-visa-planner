import React from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";

const features = [
  { label: "Application Form Filling", note: null },
  { label: "Tailored Document Checklist", note: null },
  { label: "Cover Letter & Itinerary", note: null },
  { label: "Follow-up Consultation Call", note: null },
  { label: "Ongoing WhatsApp Support", note: null },
  { label: "VFS Pre-appointment Briefing", note: null },
  { label: "Refusal Letter Analysis", note: "In-depth for Complex" },
];

const tiers = [
  {
    name: "Form Filling",
    tagline: "You have your documents.",
    price: "KES 12,000",
    href: "/eligibility",
    featured: false,
    included: [true, false, false, false, false, false, false],
  },
  {
    name: "Full Support",
    tagline: "End-to-end guidance.",
    price: "KES 20,000",
    href: "/eligibility",
    featured: true,
    included: [true, true, true, true, true, true, false],
  },
  {
    name: "Reapplication (Standard)",
    tagline: "One prior refusal.",
    price: "KES 20,000",
    href: "/eligibility",
    featured: false,
    included: [true, true, true, true, true, true, true],
  },
  {
    name: "Reapplication (Complex)",
    tagline: "Multiple refusals.",
    price: "KES 30,000",
    href: "/eligibility",
    featured: false,
    included: [true, true, true, true, true, true, true],
  },
];

export default function CompareServicesTable() {
  return (
    <section className="py-24 px-4 border-t border-zinc-200 dark:border-white/5">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-3">
            Packages
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-zinc-900 dark:text-white mb-4">
            Compare Services
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-xl">
            All packages start with a free eligibility assessment. UK Visitor
            Visa pricing shown — other visa types quoted on request.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr] rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800">

            {/* Header row */}
            <div className="bg-zinc-50 dark:bg-zinc-900/50 px-6 py-5 flex items-end">
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-medium">
                Feature
              </span>
            </div>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`px-5 py-5 flex flex-col justify-between border-l border-zinc-200 dark:border-zinc-800 ${
                  tier.featured
                    ? "bg-bronze-50 dark:bg-bronze-950/30"
                    : "bg-zinc-50 dark:bg-zinc-900/50"
                }`}
              >
                <div>
                  {tier.featured && (
                    <span className="inline-block mb-2 text-xs font-bold uppercase tracking-wide bg-bronze-500 text-white px-2 py-0.5 rounded-sm">
                      Most Popular
                    </span>
                  )}
                  <p
                    className={`font-heading text-base leading-tight mb-1 ${
                      tier.featured
                        ? "text-bronze-800 dark:text-bronze-100"
                        : "text-zinc-900 dark:text-white"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                    {tier.tagline}
                  </p>
                  <p
                    className={`font-heading text-xl font-semibold ${
                      tier.featured
                        ? "text-bronze-600 dark:text-bronze-300"
                        : "text-zinc-900 dark:text-white"
                    }`}
                  >
                    {tier.price}
                  </p>
                </div>
              </div>
            ))}

            {/* Feature rows */}
            {features.map((feature, i) => (
              <React.Fragment key={i}>
                <div
                  className={`px-6 py-4 text-sm text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800 flex items-center ${
                    i % 2 === 0 ? "" : "bg-zinc-50/50 dark:bg-zinc-900/20"
                  }`}
                >
                  {feature.label}
                </div>
                {tiers.map((tier) => (
                  <div
                    key={`${tier.name}-${i}`}
                    className={`px-5 py-4 flex items-center justify-center border-t border-l border-zinc-200 dark:border-zinc-800 ${
                      tier.featured
                        ? "bg-bronze-50 dark:bg-bronze-950/20"
                        : i % 2 !== 0
                        ? "bg-zinc-50/50 dark:bg-zinc-900/20"
                        : ""
                    }`}
                  >
                    {tier.included[i] ? (
                      <Check
                        size={18}
                        className={
                          tier.featured
                            ? "text-bronze-500"
                            : "text-bronze-400 dark:text-bronze-500"
                        }
                        strokeWidth={2.5}
                      />
                    ) : (
                      <Minus
                        size={16}
                        className="text-zinc-300 dark:text-zinc-700"
                        strokeWidth={1.5}
                      />
                    )}
                  </div>
                ))}
              </React.Fragment>
            ))}

            {/* CTA row */}
            <div className="px-6 py-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50" />
            {tiers.map((tier) => (
              <div
                key={`cta-${tier.name}`}
                className={`px-4 py-5 border-t border-l border-zinc-200 dark:border-zinc-800 ${
                  tier.featured
                    ? "bg-bronze-50 dark:bg-bronze-950/20"
                    : "bg-zinc-50 dark:bg-zinc-900/50"
                }`}
              >
                <Link
                  href={tier.href}
                  className={`block w-full text-center py-2.5 text-xs font-medium uppercase tracking-wide rounded-sm transition-all ${
                    tier.featured
                      ? "bg-bronze-500 text-white hover:bg-bronze-400"
                      : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-bronze-400 hover:text-bronze-600 dark:hover:border-bronze-500 dark:hover:text-bronze-400"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <p className="mt-5 text-xs text-zinc-400 dark:text-zinc-600">
            * All packages require a KES 5,000 non-refundable consultation
            deposit, credited toward the total if you proceed. Group discounts
            available.
          </p>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-lg border overflow-hidden ${
                tier.featured
                  ? "border-bronze-400/50 dark:border-bronze-700/50"
                  : "border-zinc-200 dark:border-zinc-800"
              }`}
            >
              {/* Card header */}
              <div
                className={`px-5 py-5 ${
                  tier.featured
                    ? "bg-bronze-50 dark:bg-bronze-950/30"
                    : "bg-zinc-50 dark:bg-zinc-900/40"
                }`}
              >
                {tier.featured && (
                  <span className="inline-block mb-2 text-xs font-bold uppercase tracking-wide bg-bronze-500 text-white px-2 py-0.5 rounded-sm">
                    Most Popular
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-heading text-xl text-zinc-900 dark:text-white leading-tight">
                      {tier.name}
                    </p>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-0.5">
                      {tier.tagline}
                    </p>
                  </div>
                  <p className="font-heading text-xl text-bronze-600 dark:text-bronze-300 whitespace-nowrap">
                    {tier.price}
                  </p>
                </div>
              </div>

              {/* Feature list */}
              <div className="px-5 py-4 bg-white dark:bg-zinc-950 space-y-3">
                {features.map((feature, i) => (
                  <div key={feature.label} className="flex items-center gap-3">
                    {tier.included[i] ? (
                      <>
                        <Check
                          size={16}
                          className="text-bronze-500 shrink-0"
                          strokeWidth={2.5}
                        />
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">
                          {feature.label}
                        </span>
                      </>
                    ) : (
                      <>
                        <Minus
                          size={16}
                          className="text-zinc-300 dark:text-zinc-700 shrink-0"
                          strokeWidth={1.5}
                        />
                        <span className="text-sm text-zinc-400 dark:text-zinc-600">
                          {feature.label}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-5 pb-5 bg-white dark:bg-zinc-950">
                <Link
                  href={tier.href}
                  className={`block w-full text-center py-3 text-sm font-medium uppercase tracking-wide rounded-sm transition-all ${
                    tier.featured
                      ? "bg-bronze-500 text-white hover:bg-bronze-400"
                      : "border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-bronze-400 hover:text-bronze-600 dark:hover:border-bronze-500 dark:hover:text-bronze-400"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
