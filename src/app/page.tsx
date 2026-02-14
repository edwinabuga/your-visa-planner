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
  Quote,
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
    number: "01",
    title: "Free Eligibility Check",
    description:
      "Complete our quick online assessment to find out which visa route suits your situation.",
  },
  {
    icon: FileCheck,
    number: "02",
    title: "Expert Consultation",
    description:
      "Meet with our consultant to discuss your case in detail and create a personalised plan.",
  },
  {
    icon: Send,
    number: "03",
    title: "Document Preparation",
    description:
      "We help you gather, organise, and review all required documents to build a strong application.",
  },
  {
    icon: Plane,
    number: "04",
    title: "Application Submission",
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

const packages = [
  {
    name: "Eligibility Check",
    price: "Free",
    description: "Quick online assessment to determine your visa options",
    features: [
      "Online questionnaire",
      "Visa route recommendation",
      "Response within 24 hours",
    ],
  },
  {
    name: "Standard Consultation",
    price: "KSh 5,000",
    description: "One-on-one consultation to discuss your case in depth",
    features: [
      "60-minute consultation",
      "Personalised advice",
      "Document checklist",
      "Follow-up email summary",
    ],
    highlighted: true,
  },
  {
    name: "Full Application Support",
    price: "From KSh 25,000",
    description: "End-to-end support from consultation to submission",
    features: [
      "Everything in Standard",
      "Document preparation & review",
      "Cover letter drafting",
      "Application submission support",
      "VFS appointment guidance",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Trust Bar */}
      <section className="py-10 px-4 border-b border-neutral-200">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">100+</p>
            <p className="text-sm text-neutral-500 mt-1">Successful Applications</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-neutral-200" />
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">Nairobi</p>
            <p className="text-sm text-neutral-500 mt-1">Based & Kenya-Focused</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-neutral-200" />
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">Personal</p>
            <p className="text-sm text-neutral-500 mt-1">Individual Case Handling</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
              What We Do
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
              UK Visa Services
            </h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
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
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
              Our Process
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
              A simple four-step process that takes the stress out of your UK
              visa application.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step) => (
              <div key={step.title}>
                <span className="font-heading text-4xl font-semibold text-neutral-200">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-primary mt-3 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
              Transparent Pricing
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
              Clear, Upfront Fees
            </h2>
            <p className="mt-4 text-lg text-neutral-500 max-w-xl mx-auto">
              No hidden charges. You know exactly what you&apos;re paying for
              before you commit.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-lg border p-8 ${pkg.highlighted
                    ? "border-accent bg-accent-light"
                    : "border-neutral-200 bg-white"
                  }`}
              >
                <h3 className="font-heading text-xl font-semibold text-primary mb-1">
                  {pkg.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-5">{pkg.description}</p>
                <p className="font-heading text-3xl font-semibold text-primary mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <span className="text-accent mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-sm tracking-widest uppercase text-accent font-medium mb-3">
              Client Stories
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-primary">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="border border-neutral-200 rounded-lg p-8"
              >
                <Quote size={24} className="text-accent/30 mb-4" strokeWidth={1.5} />
                <p className="text-neutral-600 leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="pt-4 border-t border-neutral-100">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-400">
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
