"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const visaTypes = [
  "Standard Visitor Visa",
  "Skilled Worker Visa",
  "Student Visa",
  "Spouse/Partner Visa",
  "Child Dependant Visa",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, connect this to a form handler (e.g., Fillout, Formspree, or API route)
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
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
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Send Us a Message
              </h2>
              {submitted ? (
                <div className="rounded-xl bg-primary-light p-8 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-neutral-600">
                    We&apos;ve received your message and will get back to you
                    within 24 hours. For faster responses, reach out via
                    WhatsApp.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                        placeholder="+254 796 544 253"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="visaType"
                        className="block text-sm font-medium text-neutral-700 mb-1"
                      >
                        Visa Type
                      </label>
                      <select
                        id="visaType"
                        name="visaType"
                        className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                      >
                        <option value="">Select a visa type</option>
                        {visaTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-vertical"
                      placeholder="Tell us about your visa needs..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              )}
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
                        <a href="tel:+254796544253" className="hover:text-primary">
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
