import Link from "next/link";
import { Check, X } from "lucide-react";

const features = [
  "Eligibility Assessment",
  "Visa Route Recommendation",
  "60-Minute Consultation",
  "Document Checklist",
  "Document Review & Feedback",
  "Cover Letter Drafting",
  "Full Application Support",
  "VFS Appointment Guidance",
];

const tiers = [
  {
    name: "Eligibility Check",
    price: "Free",
    href: "/eligibility",
    included: [true, true, false, false, false, false, false, false],
  },
  {
    name: "Standard Consultation",
    price: "KES 5,000",
    href: "/contact",
    included: [true, true, true, true, false, false, false, false],
  },
  {
    name: "Full Application Support",
    price: "From KES 20,000",
    href: "/contact",
    included: [true, true, true, true, true, true, true, true],
  },
];

export default function CompareServicesTable() {
  return (
    <section className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-3">
          Packages
        </p>
        <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
          Compare Services
        </h2>
        <p className="text-zinc-500 text-lg mb-12 max-w-2xl">
          Choose the level of support that fits your needs. Every journey starts
          with a free eligibility check.
        </p>

        {/* Desktop table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-zinc-800">
                <th className="text-left py-4 pr-8 text-sm font-medium text-zinc-500 w-1/3">
                  Feature
                </th>
                {tiers.map((tier) => (
                  <th key={tier.name} className="text-center py-4 px-4">
                    <div className="font-heading text-lg text-white">
                      {tier.name}
                    </div>
                    <div className="text-sm text-bronze-400 font-medium mt-1">
                      {tier.price}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={feature} className="border-b border-zinc-900">
                  <td className="py-4 pr-8 text-sm text-zinc-400">
                    {feature}
                  </td>
                  {tiers.map((tier) => (
                    <td key={tier.name} className="text-center py-4 px-4">
                      {tier.included[i] ? (
                        <Check
                          size={18}
                          className="inline-block text-bronze-500"
                          strokeWidth={2.5}
                        />
                      ) : (
                        <X
                          size={18}
                          className="inline-block text-zinc-700"
                          strokeWidth={2}
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="border border-zinc-800 p-6"
            >
              <div className="font-heading text-xl text-white mb-1">
                {tier.name}
              </div>
              <div className="text-sm text-bronze-400 font-medium mb-4">
                {tier.price}
              </div>
              <ul className="space-y-2.5">
                {features.map((feature, i) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm"
                  >
                    {tier.included[i] ? (
                      <Check
                        size={16}
                        className="text-bronze-500 shrink-0"
                        strokeWidth={2.5}
                      />
                    ) : (
                      <X
                        size={16}
                        className="text-zinc-700 shrink-0"
                        strokeWidth={2}
                      />
                    )}
                    <span
                      className={
                        tier.included[i] ? "text-zinc-300" : "text-zinc-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
