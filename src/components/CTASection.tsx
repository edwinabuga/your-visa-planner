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
    <section className="bg-primary py-20 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-5">
          {title}
        </h2>
        <p className="text-neutral-300 text-lg leading-relaxed mb-10">
          {description}
        </p>
        <Link
          href="/eligibility"
          className="inline-block rounded-md bg-accent px-10 py-4 text-base font-medium text-white hover:bg-accent-dark transition-colors"
        >
          Check Your Eligibility
        </Link>
      </div>
    </section>
  );
}
