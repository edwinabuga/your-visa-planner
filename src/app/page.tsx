import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import {
  Plane,
  Briefcase,
  GraduationCap,
  Heart,
  Users,
  FileCheck,
  MessageSquare,
  Send,
  Star,
} from "lucide-react";

const services = [
  {
    title: "Standard Visitor Visa",
    description:
      "Visit the UK for tourism, business meetings, or to see family. We help you prepare a strong application.",
    href: "/services/visitor",
    icon: Plane,
  },
  {
    title: "Skilled Worker Visa",
    description:
      "Relocate to the UK for work with a licensed sponsor. We guide you through sponsorship and application requirements.",
    href: "/services/skilled-worker",
    icon: Briefcase,
  },
  {
    title: "Student Visa",
    description:
      "Study at a UK university or college. We help with CAS letters, financial evidence, and more.",
    href: "/services/student",
    icon: GraduationCap,
  },
  {
    title: "Spouse/Partner Visa",
    description:
      "Join your partner in the UK. We help you meet the relationship and financial requirements.",
    href: "/services/spouse",
    icon: Heart,
  },
  {
    title: "Other Visa Types",
    description:
      "Child dependant visas, transit visas, and other UK immigration routes. We cover all categories.",
    href: "/services/other",
    icon: Users,
  },
];

const steps = [
  {
    icon: MessageSquare,
    title: "1. Free Eligibility Check",
    description:
      "Complete our quick online assessment to find out which visa route suits your situation.",
  },
  {
    icon: FileCheck,
    title: "2. Expert Consultation",
    description:
      "Meet with our consultant to discuss your case in detail and create a personalised plan.",
  },
  {
    icon: Send,
    title: "3. Document Preparation",
    description:
      "We help you gather, organise, and review all required documents to build a strong application.",
  },
  {
    icon: Plane,
    title: "4. Application Submission",
    description:
      "We submit your application and support you through biometrics and any follow-up requests.",
  },
];

const testimonials = [
  {
    name: "Jane M.",
    location: "Nairobi",
    text: "Your Visa Planner made my UK visitor visa process so smooth. Edwin explained everything clearly and my visa was approved on the first attempt!",
  },
  {
    name: "David O.",
    location: "Mombasa",
    text: "I was nervous about applying for a Skilled Worker visa, but the team guided me through every step. Highly recommend their services.",
  },
  {
    name: "Sarah K.",
    location: "Nairobi",
    text: "Professional, thorough, and genuinely caring. They helped me and my spouse navigate the partner visa process with confidence.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              UK Visa Services We Offer
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Whether you&apos;re visiting, working, studying, or joining family
              in the UK, we have the expertise to help.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Our simple four-step process takes the stress out of your UK visa
              application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex rounded-full bg-primary-light p-4">
                  <step.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Hear from people we&apos;ve helped achieve their UK visa goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-neutral-200 p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
