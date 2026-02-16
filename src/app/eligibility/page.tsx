import type { Metadata } from "next";
import EligibilityForm from "@/components/EligibilityForm";

export const metadata: Metadata = {
  title: "Check Your Eligibility",
  description:
    "Take our free visa eligibility assessment. Find out which visa route is right for you in just a few minutes.",
};

export default function EligibilityPage() {
  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
            Free Assessment
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            Check Your Eligibility
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Complete our free eligibility assessment to find out which visa
            route is best for your situation. It only takes a few minutes.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-2xl">
          <EligibilityForm />
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Free Assessment",
                description:
                  "Our eligibility check is completely free with no obligation.",
              },
              {
                title: "Quick & Easy",
                description:
                  "The assessment takes just a few minutes to complete.",
              },
              {
                title: "Expert Review",
                description:
                  "A consultant will review your answers and contact you with advice.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-zinc-800 p-5 text-center"
              >
                <h3 className="font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
