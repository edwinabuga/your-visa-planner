"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

const faqs = [
  {
    q: "How does the free eligibility assessment work?",
    a: "Submit your details via our eligibility form — it takes about 5 minutes. We review your profile and send you a personalised PDF assessment within 2 business hours (Mon–Fri, 9AM–6PM EAT). It's completely free and commits you to nothing.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No ethical consultant can guarantee a visa outcome — that decision rests solely with the consular officer. What we guarantee is a professionally prepared, thoroughly reviewed application that presents the strongest possible case on your behalf.",
  },
  {
    q: "How long does UK visitor visa processing take?",
    a: "UKVI standard processing is 15 working days from your biometric appointment at VFS. Priority processing (an additional UKVI fee) reduces this to 5 working days. We'll help you choose the right option based on your travel timeline and urgency.",
  },
  {
    q: "Can you help if I've been refused before?",
    a: "Absolutely — reapplication support is one of our core specialties. We analyse your refusal letter, identify exactly what went wrong, and build a stronger reapplication strategy tailored to your case. We offer a Standard Reapplication package for straightforward refusals and a Complex Reapplication package for multiple refusals or complicated circumstances.",
  },
  {
    q: "Do I need to visit your office?",
    a: "No. All consultations are conducted via Google Meet, and documents are shared securely via email and WhatsApp. Everything is handled remotely — no traffic, no office queues. If you prefer an in-person session in Nairobi, that's available as an optional add-on (KES 3,000).",
  },
  {
    q: "How does the two-gate payment work?",
    a: "We charge a KES 5,000 non-refundable consultation deposit to secure your appointment and cover initial case analysis. If you proceed with a full package, this amount is credited toward the total fee. The remaining balance is invoiced before document work begins. All fees are non-refundable.",
  },
  {
    q: "Do you handle family or group applications?",
    a: "Yes. We offer group discounts: KES 3,000 off per additional adult on the same application, and children under 18 pay half price. Reach out for a custom quote for larger groups or tour parties.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa, bank transfer, and mobile banking. Payment details are provided after your eligibility assessment and confirmed before your consultation call begins.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-zinc-200 dark:border-zinc-800 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-lg text-zinc-900 dark:text-white group-hover:text-bronze-600 dark:group-hover:text-bronze-300 transition-colors leading-snug">
          {q}
        </span>
        <span className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center border border-zinc-300 dark:border-zinc-700 rounded-full group-hover:border-bronze-400/60 transition-colors">
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-bronze-500" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-zinc-400 group-hover:text-bronze-500 transition-colors" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm pr-12">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 border-t border-zinc-200 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: heading */}
          <FadeIn>
            <h2 className="text-bronze-400 text-sm font-sans uppercase tracking-widest mb-4">
              Common Questions
            </h2>
            <h3 className="font-heading text-4xl text-zinc-900 dark:text-white leading-tight">
              Everything you need to know
            </h3>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              Still have a question? We&apos;re happy to help via WhatsApp or email — links are below.
            </p>
          </FadeIn>

          {/* Right: accordion */}
          <FadeIn delay={0.15}>
            <div className="border-t border-zinc-200 dark:border-zinc-800">
              {faqs.map((item, idx) => (
                <FAQItem
                  key={idx}
                  q={item.q}
                  a={item.a}
                  isOpen={openIndex === idx}
                  onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
