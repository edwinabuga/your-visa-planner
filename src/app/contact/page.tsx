import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Your Visa Planner. Reach out via WhatsApp, email, or phone for help with your UK visa application.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-20 px-4 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
            Get in Touch
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary">
            Contact Us
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">
            Ready to start your UK visa journey? Get in touch with us today.
            We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* CTA Section */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-semibold text-primary mb-4">
                Start Your Visa Assessment
              </h2>
              <p className="text-neutral-500 mb-8 max-w-lg leading-relaxed">
                The fastest way to get started is to complete our free
                eligibility assessment. We&apos;ll review your details and get
                back to you within 24 hours with personalised advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/eligibility"
                  className="rounded-md bg-primary px-8 py-3.5 text-sm font-medium text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Check Your Eligibility
                </Link>
                <a
                  href={getWhatsAppUrl(
                    "Hello! I'd like to enquire about UK visa services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-md bg-[#25D366] px-8 py-3.5 text-sm font-medium text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border border-neutral-200 p-8">
                <h3 className="font-semibold text-primary mb-5">
                  Contact Details
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-primary">Location</p>
                      <p className="text-sm text-neutral-500">Nairobi, Kenya</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-primary">Phone</p>
                      <p className="text-sm text-neutral-500">
                        <a
                          href="tel:+254796544253"
                          className="hover:text-accent transition-colors"
                        >
                          +254 796 544 253
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-primary">Email</p>
                      <p className="text-sm text-neutral-500">
                        <a
                          href="mailto:edwin@yourvisaplanner.com"
                          className="hover:text-accent transition-colors"
                        >
                          edwin@yourvisaplanner.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={20}
                      className="text-accent shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-medium text-primary">
                        Office Hours
                      </p>
                      <p className="text-sm text-neutral-500">
                        Mon — Fri: 9:00 AM — 5:00 PM
                      </p>
                      <p className="text-sm text-neutral-500">
                        Sat: 10:00 AM — 2:00 PM
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <a
                href={getWhatsAppUrl(
                  "Hello! I'd like to enquire about UK visa services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg bg-[#25D366] p-6 text-white hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={28} />
                <div>
                  <p className="font-semibold">Chat on WhatsApp</p>
                  <p className="text-sm text-white/90">
                    Get a faster response via WhatsApp
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
