import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Ready to Start Your UK Visa Journey?",
  description = "Take our free eligibility assessment to find out which UK visa is right for you. Our expert consultants will guide you every step of the way.",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-16 px-4">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-primary-light text-lg mb-8">{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/eligibility"
            className="rounded-lg bg-accent px-8 py-3 text-base font-semibold text-white hover:bg-accent-dark transition-colors"
          >
            Check Your Eligibility
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border-2 border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
