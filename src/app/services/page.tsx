import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { Plane, Briefcase, GraduationCap, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "UK Visa Services",
  description:
    "Comprehensive UK visa consultancy services including Visitor, Skilled Worker, Student, Spouse, and other visa types. Based in Nairobi, Kenya.",
};

const services = [
  {
    title: "Standard Visitor Visa",
    description:
      "Planning a trip to the UK for tourism, business, or to visit family? We prepare your visitor visa application to give you the best chance of approval.",
    href: "/services/visitor",
    icon: Plane,
  },
  {
    title: "Skilled Worker Visa",
    description:
      "Moving to the UK for employment? We guide you through the Skilled Worker visa process, including Certificate of Sponsorship requirements.",
    href: "/services/skilled-worker",
    icon: Briefcase,
  },
  {
    title: "Student Visa",
    description:
      "Studying at a UK institution? We help with your student visa application, from CAS letters to financial documentation.",
    href: "/services/student",
    icon: GraduationCap,
  },
  {
    title: "Spouse/Partner Visa",
    description:
      "Joining your partner in the UK? We help you navigate relationship evidence, financial requirements, and English language needs.",
    href: "/services/spouse",
    icon: Heart,
  },
  {
    title: "Other Visa Types",
    description:
      "Child dependant visas, transit visas, ancestry visas, and other UK immigration routes. Whatever your situation, we can help.",
    href: "/services/other",
    icon: Users,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 px-4 bg-neutral-50">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-accent font-medium mb-4">
            Our Services
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl font-semibold text-primary">
            UK Visa Services
          </h1>
          <p className="mt-6 text-lg text-neutral-500 max-w-2xl mx-auto">
            We offer expert consultancy for all major UK visa categories. Select
            a service below to learn more about how we can help with your
            specific situation.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
