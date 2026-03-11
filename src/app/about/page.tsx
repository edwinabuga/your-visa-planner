import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { Eye, ShieldCheck, Lock } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Edwin Abuga Gekonge, founder of Your Visa Planner. Insider experience from VFS Global and TLScontact, now helping Kenyans navigate international visa applications.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 sm:py-28 px-4 pt-32">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
            About Us
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-zinc-900 dark:text-white leading-[1.1]">
            Your Case Deserves Personal Attention
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Your Visa Planner was founded in November 2025 to make visa
            applications less stressful and more successful for Kenyans and
            East Africans.
          </p>
        </FadeIn>
      </section>

      {/* Founder section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              {/* Placeholder for professional photo */}
              <div className="aspect-[4/5] bg-gradient-to-br from-bronze-200/30 dark:from-bronze-900/30 to-stone-100 dark:to-black flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                <div className="text-center p-8">
                  <div className="w-32 h-32 rounded-full bg-zinc-100 dark:bg-white/5 mx-auto mb-4 flex items-center justify-center border border-bronze-500/30">
                    <span className="font-heading text-4xl text-bronze-700 dark:text-bronze-200">
                      EA
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
                Founder & Lead Consultant
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-8">
                Meet Edwin Abuga
              </h2>
              <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  <strong className="text-bronze-700 dark:text-bronze-200">
                    Edwin Abuga Gekonge
                  </strong>{" "}
                  gained years of experience working directly inside VFS Global
                  and TLScontact — the official visa application centers used by
                  the UK and Schengen governments.
                </p>
                <p>
                  Having seen first-hand how stressful and confusing the visa
                  application process can be, Edwin founded Your Visa Planner
                  with a clear mission: to provide professional, honest, and
                  affordable visa consultancy that truly puts clients first.
                </p>
                <p>
                  Every client receives individual attention, a tailored
                  strategy, and clear communication throughout the process. He
                  believes that with the right guidance, anyone with a genuine
                  case can put forward a strong application.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-stone-100/60 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-6xl">
          <FadeIn className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-3">
              Why Clients Trust Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-zinc-900 dark:text-white">
              Our Values
            </h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: Eye,
                title: "Insider Perspective",
                description:
                  "Direct experience from inside the visa application centers. We know exactly what officers look for.",
              },
              {
                icon: ShieldCheck,
                title: "Transparent Pricing",
                description:
                  "No hidden fees or surprises. You know exactly what you pay for before we begin.",
              },
              {
                icon: Lock,
                title: "Remote First",
                description:
                  "Full service via Google Meet & WhatsApp. No traffic, no office queues — just results.",
              },
            ].map((value) => (
              <StaggerItem
                key={value.title}
                className="bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 p-8 hover:border-bronze-300/50 dark:hover:border-bronze-800/50 transition-colors"
              >
                <value.icon
                  size={28}
                  className="text-bronze-500 mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {value.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-3">
            How We Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-zinc-900 dark:text-white mb-8">
            Our Approach
          </h2>
          <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            <p>
              At Your Visa Planner, we believe that a successful visa
              application starts with understanding your unique situation. We
              don&apos;t use templates or one-size-fits-all approaches.
            </p>
            <p>
              We begin with a thorough consultation to understand your
              background, your reasons for travelling, and your circumstances.
              From there, we create a personalised plan that addresses every
              requirement of your specific visa category.
            </p>
            <p>
              We handle the paperwork, review your documents with attention to
              detail, and prepare you for every stage of the process. Our goal is
              simple: to give you the best possible chance of approval.
            </p>
          </div>
        </FadeIn>
      </section>

      <CTASection />
    </>
  );
}
