import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-light via-white to-white py-16 sm:py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 leading-tight">
              Your Trusted Partner for{" "}
              <span className="text-primary">UK Visa</span> Applications
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Based in Nairobi, we provide expert guidance to help Kenyans and
              East Africans successfully apply for UK visas. From visitor visas
              to skilled worker permits, we make the process simple and
              stress-free.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Expert guidance through every step",
                "Personalised document preparation",
                "High success rate applications",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle size={20} className="text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/eligibility"
                className="rounded-lg bg-accent px-8 py-3.5 text-center text-base font-semibold text-white hover:bg-accent-dark transition-colors"
              >
                Check Your Eligibility
              </Link>
              <Link
                href="/services"
                className="rounded-lg border-2 border-primary px-8 py-3.5 text-center text-base font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Why Choose Your Visa Planner?
              </h3>
              <ul className="space-y-4">
                {[
                  "Personal attention — your case is handled individually, never assembly-line processed",
                  "Honest assessment upfront — we tell you about any challenges before you commit",
                  "End-to-end support — from eligibility check through to VFS appointment day",
                  "Kenya-focused expertise — we understand the specific needs of Kenyan applicants",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-primary-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
