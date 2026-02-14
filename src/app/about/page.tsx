import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { Award, Users, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Edwin Abuga, founder of Your Visa Planner. Learn about our mission to help Kenyans and East Africans successfully apply for UK visas.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 px-4 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
            About Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary">
            Your Case Deserves Personal Attention
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            Your Visa Planner was founded to make UK visa applications less
            stressful and more successful for Kenyans and East Africans.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              {/* Placeholder for professional photo */}
              <div className="aspect-[4/5] rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center border border-white/20">
                    <span className="font-heading text-4xl font-semibold">EA</span>
                  </div>
                  <p className="text-sm text-neutral-300">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
                Founder & Lead Consultant
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-8">
                Meet Edwin Abuga
              </h2>
              <div className="space-y-5 text-neutral-500 leading-relaxed">
                <p>
                  With years of experience in UK immigration consultancy, Edwin
                  has helped hundreds of clients across Kenya and East Africa
                  successfully navigate the UK visa process.
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
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
              Why Clients Trust Us
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: Award,
                title: "Experienced",
                description:
                  "Years of specialist UK visa consultancy experience with hundreds of successful applications.",
              },
              {
                icon: Users,
                title: "Personal Service",
                description:
                  "Every client gets individual attention. No assembly-line processing — your case is unique.",
              },
              {
                icon: Target,
                title: "Results-Focused",
                description:
                  "We focus on building the strongest possible application for your specific circumstances.",
              },
              {
                icon: Shield,
                title: "Honest Advice",
                description:
                  "We give you a realistic assessment upfront. If there are challenges, we tell you honestly.",
              },
            ].map((value) => (
              <div key={value.title}>
                <value.icon size={28} className="text-accent mb-4" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
            How We Work
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary mb-8">
            Our Approach
          </h2>
          <div className="space-y-5 text-neutral-500 leading-relaxed text-lg">
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
        </div>
      </section>

      <CTASection />
    </>
  );
}
