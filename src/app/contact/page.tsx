import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Your Visa Planner. Reach out via WhatsApp, email, or phone for help with your visa application.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Ready to start your visa journey? Get in touch with us today.
            We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* CTA Section */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-white mb-4">
                Start Your Visa Assessment
              </h2>
              <p className="text-zinc-400 mb-8 max-w-lg leading-relaxed">
                The fastest way to get started is to complete our free
                eligibility assessment. We&apos;ll review your details and get
                back to you within 24 hours with personalised advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/eligibility"
                  className="rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-8 py-3.5 text-sm font-medium text-white text-center hover:from-bronze-500 hover:to-bronze-300 transition-all"
                >
                  Check Your Eligibility
                </Link>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="border border-zinc-800 p-8">
                <h3 className="font-semibold text-white mb-5">
                  Contact Details
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-sm text-zinc-500">Nairobi, Kenya</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-sm text-zinc-500">
                        <a
                          href="tel:+254796544253"
                          className="hover:text-bronze-400 transition-colors"
                        >
                          +254 796 544 253
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      size={20}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-sm text-zinc-500">
                        <a
                          href="mailto:edwin@yourvisaplanner.com"
                          className="hover:text-bronze-400 transition-colors"
                        >
                          edwin@yourvisaplanner.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={20}
                      className="text-bronze-500 shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-white">Office Hours</p>
                      <p className="text-sm text-zinc-500">
                        Mon — Fri: 9:00 AM — 5:00 PM
                      </p>
                      <p className="text-sm text-zinc-500">
                        Sat: 10:00 AM — 2:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
