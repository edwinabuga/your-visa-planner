import Hero from "@/components/Hero";
import CTASection from "@/components/CTASection";
import Link from "next/link";
import {
  ShieldCheck,
  Eye,
  Lock,
  Check,
  Quote,
  ArrowRight,
  MessageCircle,
  Mail,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const services = [
  {
    icon: <span className="text-2xl font-heading italic text-bronze-400">UK</span>,
    title: "UK Visitor Visas",
    description:
      "Our core specialty. From form filling to refusal rescue, we provide end-to-end support for your journey to the United Kingdom.",
    highlight: "Insider Expertise",
    href: "/services/uk-visitor",
  },
  {
    icon: <span className="text-2xl font-heading italic text-zinc-500">EU</span>,
    title: "Schengen Visas",
    description:
      "Comprehensive support for Germany, France, Spain, Italy, and more. Navigate the diverse requirements of the Schengen area with confidence.",
    highlight: "Custom Strategy",
    href: "/services/schengen",
  },
  {
    icon: <span className="text-2xl font-heading italic text-zinc-500">US</span>,
    title: "USA & Canada",
    description:
      "Detailed documentation support for North American destinations. We help you present a compelling case to consular officers.",
    highlight: "Mock Interviews",
    href: "/services/custom",
  },
  {
    icon: <span className="text-2xl font-heading italic text-zinc-500">AE</span>,
    title: "UAE & Global",
    description:
      "Visiting Dubai or Abu Dhabi? We handle the paperwork so you can focus on planning your itinerary.",
    highlight: "Fast Processing",
    href: "/services/custom",
  },
];

const steps = [
  {
    num: "01",
    title: "Free Eligibility Check",
    desc: "Submit your details online. We analyze your profile and send a personalized PDF assessment within 2 hours.",
  },
  {
    num: "02",
    title: "Consultation Call",
    desc: "A 30–45 minute Google Meet video call to discuss your specific case, address red flags, and strategize.",
  },
  {
    num: "03",
    title: "Document Preparation",
    desc: "We create a tailored document checklist, write your cover letter, and refine your itinerary to match visa standards.",
  },
  {
    num: "04",
    title: "Submission & Briefing",
    desc: "We complete the forms, book your VFS appointment, and brief you on exactly what to expect on the day.",
  },
];

const testimonials = [
  {
    text: "The guidance was impeccable. Coming from a refusal, I was anxious, but Edwin broke down exactly what went wrong previously. Approved in 3 weeks.",
    name: "Sarah K.",
    visa: "UK Visitor Visa",
  },
  {
    text: "Professional, thorough, and genuinely caring. They helped me and my spouse navigate the partner visa process with confidence.",
    name: "David O.",
    visa: "UK Spouse Visa",
  },
  {
    text: "Your Visa Planner made my UK visitor visa process so smooth. Edwin explained everything clearly and my visa was approved on the first attempt!",
    name: "Jane M.",
    visa: "UK Visitor Visa",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Expertise — The Founder's Edge */}
      <section className="py-24 bg-zinc-900/30 relative">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
                The Founder&apos;s Edge
              </h2>
              <h3 className="font-heading text-4xl md:text-5xl text-white mb-8 leading-tight">
                Not just another agent.{" "}
                <br />
                <span className="italic text-zinc-500">An insider.</span>
              </h3>

              <div className="space-y-6 text-zinc-400 leading-relaxed">
                <p>
                  <strong className="text-bronze-200">
                    Edwin Abuga Gekonge
                  </strong>{" "}
                  founded Your Visa Planner in November 2025 to bridge the gap
                  between complex immigration rules and anxious applicants.
                </p>
                <p>
                  Unlike standard travel agents, Edwin gained years of
                  experience working directly inside the official{" "}
                  <span className="text-white">
                    visa application centers
                  </span>{" "}
                  used by the UK and Schengen governments.
                </p>
                <p>
                  He has handled applications daily for years from behind the
                  counter. He knows exactly why visas are rejected and what
                  officers are trained to look for. That insight is now your
                  advantage.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  icon: <Eye className="w-6 h-6" />,
                  title: "Insider Perspective",
                  desc: "Direct experience from inside the visa application centers.",
                },
                {
                  icon: <ShieldCheck className="w-6 h-6" />,
                  title: "Transparent Pricing",
                  desc: "No hidden fees. You know exactly what you pay for.",
                },
                {
                  icon: <Lock className="w-6 h-6" />,
                  title: "Remote First",
                  desc: "Full service via Google Meet & WhatsApp. No traffic, no office queues.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 border border-zinc-800 p-8 hover:border-bronze-800/50 transition-colors duration-300"
                >
                  <div className="text-bronze-500 mb-4">{item.icon}</div>
                  <h4 className="text-white font-heading text-xl mb-2">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services — Where do you want to go? */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-bronze-900/10 blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
              Global Reach
            </h2>
            <h3 className="font-heading text-4xl md:text-5xl text-white">
              Where do you want to go?
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group relative p-8 border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/50 transition-all duration-500 block"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-bronze-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="mb-6 w-12 h-12 flex items-center justify-center border border-zinc-800 rounded-full group-hover:border-bronze-500/30 transition-colors">
                  {service.icon}
                </div>

                <h4 className="text-xl text-white font-heading mb-3">
                  {service.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <span className="text-xs font-medium text-bronze-500 uppercase tracking-wider">
                  {service.highlight}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process — The Path to Approval */}
      <section className="py-24 bg-zinc-950 border-y border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
                Our Methodology
              </h2>
              <h3 className="font-heading text-4xl text-white">
                The Path to Approval
              </h3>
            </div>
            <p className="text-zinc-500 max-w-md mt-6 md:mt-0 md:text-right">
              A structured, professional approach that leaves nothing to chance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative pt-8 group">
                <div className="absolute top-0 left-0 w-full h-px bg-zinc-800 group-hover:bg-bronze-500/50 transition-colors duration-500" />
                <div className="absolute top-[-3px] left-0 w-1.5 h-1.5 rounded-full bg-bronze-500" />

                <span className="block text-5xl font-heading text-zinc-800 group-hover:text-zinc-700 transition-colors mb-4">
                  {step.num}
                </span>
                <h4 className="text-lg text-white mb-3 font-medium">
                  {step.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — UK Visitor Visa Packages */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
              Investment
            </h2>
            <h3 className="font-heading text-4xl text-white mb-6">
              UK Visitor Visa Packages
            </h3>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Transparent pricing in Kenyan Shillings. No hidden agent fees.
              <br />
              <span className="text-xs opacity-60">
                *Consultation fee of KES 5,000 paid upfront, deductible from
                total.
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Form Filling */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 flex flex-col">
              <div className="mb-6">
                <h4 className="text-white font-heading text-2xl mb-2">
                  Form Filling
                </h4>
                <p className="text-zinc-500 text-sm">
                  For those who have their documents ready.
                </p>
              </div>
              <div className="mb-8">
                <span className="text-3xl font-heading text-bronze-200">
                  KES 12,000
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Application Form Completion
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Appointment Booking
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm opacity-50">
                  <Check className="w-5 h-5 text-zinc-700 shrink-0" />
                  Document Checklist
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm opacity-50">
                  <Check className="w-5 h-5 text-zinc-700 shrink-0" />
                  Cover Letter & Itinerary
                </li>
              </ul>
              <Link
                href="/eligibility"
                className="block rounded-full border border-bronze-500 px-6 py-3 text-center text-sm font-medium uppercase tracking-wide text-bronze-200 hover:bg-bronze-900/30 hover:text-white hover:border-bronze-300 transition-all"
              >
                Select Basic
              </Link>
            </div>

            {/* Full Application Support — Featured */}
            <div className="bg-gradient-to-b from-zinc-800 to-zinc-900 border border-bronze-500/50 p-8 flex flex-col relative transform lg:-translate-y-4 shadow-2xl shadow-black/50">
              <div className="absolute top-0 right-0 bg-bronze-500 text-white text-xs uppercase font-bold px-3 py-1">
                Most Popular
              </div>
              <div className="mb-6">
                <h4 className="text-white font-heading text-2xl mb-2">
                  Full Application Support
                </h4>
                <p className="text-zinc-400 text-sm">
                  Comprehensive guidance from start to finish.
                </p>
              </div>
              <div className="mb-8">
                <span className="text-4xl font-heading text-white">
                  KES 20,000
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                  Everything in Form Filling
                </li>
                <li className="flex gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                  Tailored Document Checklist
                </li>
                <li className="flex gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                  Custom Cover Letter & Itinerary
                </li>
                <li className="flex gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                  Ongoing Support via WhatsApp
                </li>
                <li className="flex gap-3 text-white text-sm">
                  <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                  VFS Pre-appointment Briefing
                </li>
              </ul>
              <Link
                href="/eligibility"
                className="block rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-6 py-3 text-center text-sm font-medium uppercase tracking-wide text-white hover:from-bronze-500 hover:to-bronze-300 transition-all"
              >
                Select Full Support
              </Link>
            </div>

            {/* Refusal Rescue */}
            <div className="bg-zinc-900/30 border border-zinc-800 p-8 flex flex-col">
              <div className="mb-6">
                <h4 className="text-white font-heading text-2xl mb-2">
                  Refusal Rescue
                </h4>
                <p className="text-zinc-500 text-sm">
                  For complex cases or previous refusals.
                </p>
              </div>
              <div className="mb-8">
                <span className="text-3xl font-heading text-bronze-200">
                  KES 30,000
                </span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Full Application Support
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Refusal Letter Analysis
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Complex Case Strategy
                </li>
                <li className="flex gap-3 text-zinc-400 text-sm">
                  <Check className="w-5 h-5 text-bronze-600 shrink-0" />
                  Reapplication Assistance
                </li>
              </ul>
              <Link
                href="/eligibility"
                className="block rounded-full border border-bronze-500 px-6 py-3 text-center text-sm font-medium uppercase tracking-wide text-bronze-200 hover:bg-bronze-900/30 hover:text-white hover:border-bronze-300 transition-all"
              >
                Select Rescue
              </Link>
            </div>
          </div>

          {/* Discount/Add-on boxes */}
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-zinc-800 bg-zinc-900/20">
              <h5 className="text-white font-heading mb-2">
                Discounts Available
              </h5>
              <p className="text-sm text-zinc-500">
                Save <strong>KES 3,000</strong> for every additional adult on
                the same application. Children under 18 pay{" "}
                <strong>half price</strong>.
              </p>
            </div>
            <div className="p-6 border border-zinc-800 bg-zinc-900/20">
              <h5 className="text-white font-heading mb-2">
                Optional Add-ons
              </h5>
              <p className="text-sm text-zinc-500">
                Afterhours session (+KES 3,000) or In-person session within
                Nairobi (+KES 3,000).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="mb-16">
            <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
              Client Stories
            </h2>
            <h3 className="font-heading text-4xl text-white">
              Trusted by Travelers
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 p-8 relative"
              >
                <Quote className="absolute top-8 right-8 text-zinc-800 w-8 h-8" />
                <div className="mb-6 flex gap-1">
                  {[...Array(5)].map((_, star) => (
                    <span key={star} className="text-bronze-500 text-xs">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <span className="block text-white font-heading">
                    {t.name}
                  </span>
                  <span className="text-xs text-zinc-600 uppercase tracking-wider">
                    {t.visa}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <CTASection />
    </>
  );
}
