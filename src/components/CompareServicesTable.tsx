import Link from "next/link";
import { Check, X } from "lucide-react";

const features = [
  "Application Form Filling",
  "Tailored Checklist",
  "Cover Letter & Itinerary",
  "Follow-up Call",
  "Ongoing Support",
  "VFS Briefing",
  "Refusal Analysis",
];

const tiers = [
  {
    name: "Form Filling Only",
    price: "KES 12,000",
    href: "/contact",
    included: [true, false, false, false, false, false, false],
  },
  {
    name: "Full Application Support",
    price: "KES 20,000",
    href: "/contact",
    featured: true,
    included: [true, true, true, true, true, true, false],
  },
  {
    name: "Reapplication (Standard)",
    price: "KES 20,000",
    href: "/contact",
    included: [true, true, true, true, true, true, true],
  },
  {
    name: "Reapplication (Complex)",
    price: "KES 30,000",
    href: "/contact",
    included: [true, true, true, true, true, true, true],
    note: "In-depth",
  },
];

export default function CompareServicesTable() {
  return (
    <section className="py-20 px-4 bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-3">
          Packages
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-zinc-900 dark:text-white mb-4">
          Compare Services
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-12 max-w-2xl">
          Choose the level of support that fits your needs. All packages include expert guidance for your UK Visitor Visa application.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-zinc-200 dark:border-zinc-800">
                <th className="text-left py-6 pr-8 text-sm font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wider w-1/3">
                  Feature
                </th>
                {tiers.map((tier, idx) => (
                  <th key={tier.name} className="text-center py-6 px-4 relative">
                    {tier.featured && (
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                        <span className="bg-bronze-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full whitespace-nowrap">
                          ⭐ Most Popular
                        </span>
                      </div>
                    )}
                    <div className="font-heading text-xl text-zinc-900 dark:text-white mb-2">
                      {tier.name}
                    </div>
                    <div className="text-base text-bronze-400 font-semibold">
                      {tier.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature} className="border-b border-zinc-100 dark:border-zinc-900 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/50 transition-colors">
                  <td className="py-5 pr-8 text-sm text-zinc-700 dark:text-zinc-300">
                    {feature}
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-5 px-4">
                      {tier.included[i] ? (
                        <div className="flex flex-col items-center gap-1">
                          <Check
                            size={20}
                            className="inline-block text-bronze-500"
                            strokeWidth={2.5}
                          />
                          {tier.note && i === features.length - 1 && (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400">
                              ({tier.note})
                            </span>
                          )}
                        </div>
                      ) : (
                        <X
                          size={20}
                          className="inline-block text-zinc-300 dark:text-zinc-700"
                          strokeWidth={2}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              {/* CTA Row */}
              <tr>
                <td className="pt-8"></td>
                {tiers.map((tier) => (
                  <td key={tier.name} className="text-center pt-8 px-4">
                    <Link
                      href={tier.href}
                      className={`inline-block px-6 py-2.5 text-sm font-medium transition-all ${
                        tier.featured
                          ? "bg-bronze-500 text-zinc-950 hover:bg-bronze-400"
                          : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-bronze-500 dark:hover:border-bronze-500 hover:text-bronze-500 dark:hover:text-bronze-400"
                      }`}
                    >
                      Get Started
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`border ${
                tier.featured
                  ? "border-bronze-500/30 dark:border-bronze-500/30 bg-zinc-100 dark:bg-zinc-900"
                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
              } p-6 rounded-lg relative`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-bronze-500 text-white text-xs uppercase font-bold px-3 py-1 rounded-full">
                    ⭐ Most Popular
                  </span>
                </div>
              )}
              <div className="font-heading text-2xl text-zinc-900 dark:text-white mb-1">
                {tier.name}
              </div>
              <div className="text-base text-bronze-400 font-semibold mb-6">
                {tier.price}
              </div>
              <ul className="space-y-3 mb-6">
                {features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm"
                  >
                    {tier.included[i] ? (
                      <>
                        <Check
                          size={18}
                          className="text-bronze-500 shrink-0"
                          strokeWidth={2.5}
                        />
                        <span className="text-zinc-700 dark:text-zinc-300">
                          {feature}
                          {tier.note && i === features.length - 1 && (
                            <span className="text-xs text-zinc-500 dark:text-zinc-400 ml-1">
                              ({tier.note})
                            </span>
                          )}
                        </span>
                      </>
                    ) : (
                      <>
                        <X
                          size={18}
                          className="text-zinc-300 dark:text-zinc-700 shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-zinc-400 dark:text-zinc-600">
                          {feature}
                        </span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`block w-full text-center px-6 py-3 text-sm font-medium transition-all ${
                  tier.featured
                    ? "bg-bronze-500 text-zinc-950 hover:bg-bronze-400"
                    : "border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:border-bronze-500 dark:hover:border-bronze-500 hover:text-bronze-500 dark:hover:text-bronze-400"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
