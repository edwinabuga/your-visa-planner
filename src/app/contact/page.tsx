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
      <section className="bg-primary-light py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold text-neutral-900">Contact Us</h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl">
            Ready to start your UK visa journey? Get in touch with us today.
            We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* CTA Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                Start Your Visa Assessment
              </h2>
              <p className="text-neutral-600 mb-6 max-w-lg">
                The fastest way to get started is to complete our free
                eligibility assessment. We&apos;ll review your details and get
                back to you within 24 hours with personalised advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/eligibility"
                  className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors text-center"
                >
                  Check Your Eligibility
                </Link>
                <a
                  href={getWhatsAppUrl(
                    "Hello! I'd like to enquire about UK visa services."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-3 text-sm font-semibold text-white hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-neutral-200 p-6">
                <h3 className="font-semibold text-neutral-900 mb-4">
                  Contact Details
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Location</p>
                      <p className="text-sm text-neutral-600">Nairobi, Kenya</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Phone</p>
                      <p className="text-sm text-neutral-600">
                        <a
                          href="tel:+254796544253"
                          className="hover:text-primary"
                        >
                          +254 796 544 253
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">Email</p>
                      <p className="text-sm text-neutral-600">
                        <a
                          href="mailto:edwin@yourvisaplanner.com"
                          className="hover:text-primary"
                        >
                          edwin@yourvisaplanner.com
                        </a>
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock
                      size={20}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-medium text-neutral-900">
                        Office Hours
                      </p>
                      <p className="text-sm text-neutral-600">
                        Mon — Fri: 9:00 AM — 5:00 PM
                      </p>
                      <p className="text-sm text-neutral-600">
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
                className="flex items-center gap-3 rounded-xl bg-[#25D366] p-6 text-white hover:bg-[#20bd5a] transition-colors"
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
