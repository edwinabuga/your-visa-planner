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
      <section className="bg-primary-light py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-neutral-900">About Us</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
            Your Visa Planner was founded to make UK visa applications less
            stressful and more successful for Kenyans and East Africans.
          </p>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Placeholder for professional photo */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold">EA</span>
                  </div>
                  <p className="text-sm text-primary-light">
                    Professional photo coming soon
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Meet Edwin Abuga
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  Edwin Abuga is the founder and lead consultant at Your Visa
                  Planner. With years of experience in UK immigration
                  consultancy, Edwin has helped hundreds of clients across Kenya
                  and East Africa successfully navigate the UK visa process.
                </p>
                <p>
                  Having seen first-hand how stressful and confusing the visa
                  application process can be, Edwin founded Your Visa Planner
                  with a clear mission: to provide professional, honest, and
                  affordable visa consultancy that truly puts clients first.
                </p>
                <p>
                  Edwin&apos;s approach is personal. Every client receives
                  individual attention, a tailored strategy, and clear
                  communication throughout the process. He believes that with the
                  right guidance, anyone with a genuine case can put forward a
                  strong application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">
            Why Clients Trust Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary-light p-4">
                  <value.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-6">
            Our Approach
          </h2>
          <div className="space-y-4 text-neutral-600 leading-relaxed">
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
