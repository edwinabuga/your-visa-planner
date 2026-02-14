import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-20 sm:py-28 px-4 bg-neutral-50">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm tracking-widest uppercase text-accent font-medium mb-6">
          UK Visa Consultancy · Nairobi, Kenya
        </p>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary leading-tight">
          Expert UK Visa Guidance for Kenyans
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-neutral-500 leading-relaxed max-w-2xl mx-auto">
          We provide personal, end-to-end support for UK visa applications.
          From your first eligibility check to VFS appointment day, every case
          gets individual attention — never assembly-line processed.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/eligibility"
            className="rounded-md bg-primary px-8 py-4 text-base font-medium text-white hover:bg-primary-dark transition-colors"
          >
            Check Your Eligibility
          </Link>
          <Link
            href="/services"
            className="rounded-md border border-neutral-300 px-8 py-4 text-base font-medium text-neutral-700 hover:border-primary hover:text-primary transition-colors"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
