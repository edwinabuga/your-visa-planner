import type { Metadata } from "next";
import Link from "next/link";
import { getFilloutFormUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Check Your Eligibility",
  description:
    "Take our free UK visa eligibility assessment. Find out which visa route is right for you in just a few minutes.",
};

export default function EligibilityPage() {
  const formUrl = getFilloutFormUrl();

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
        <div className="mx-auto max-w-4xl">
          {formUrl ? (
            <div className="rounded-xl border border-neutral-200 overflow-hidden">
              <iframe
                src={formUrl}
                width="100%"
                height="700"
                style={{ border: "none" }}
                title="Visa Eligibility Assessment Form"
              />
            </div>
          ) : (
            <div className="rounded-xl bg-neutral-50 p-12 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Eligibility Form Coming Soon
              </h2>
              <p className="text-neutral-600 mb-6 max-w-lg mx-auto">
                Our online eligibility assessment form is being set up. In the
                meantime, you can reach out to us directly for a free initial
                consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                >
                  Contact Us
                </Link>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          )}

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
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
