import type { Metadata } from "next";
import EligibilityForm from "@/components/EligibilityForm";

export const metadata: Metadata = {
  title: "Check Your Eligibility",
  description:
    "Take our free UK visa eligibility assessment. Find out which visa route is right for you in just a few minutes.",
};

export default function EligibilityPage() {
  return (
    <>
      <section className="bg-primary-light py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-neutral-900">
            Check Your Eligibility
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
            Complete our free eligibility assessment to find out which UK visa
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
                className="rounded-lg border border-neutral-200 p-5 text-center"
              >
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
