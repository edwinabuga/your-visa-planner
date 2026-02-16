import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import CompareServicesTable from "@/components/CompareServicesTable";
import { Plane, FileText, Globe, Package } from "lucide-react";

export const metadata: Metadata = {
  title: "Visa Services",
  description:
    "Professional visa consultancy services for UK, Schengen, US, UAE, and other destinations. Based in Nairobi, Kenya.",
};

const services = [
  {
    title: "UK Standard Visitor Visa",
    description:
      "Planning a trip to the UK for tourism, business, or to visit family? We prepare your visitor visa application to give you the best chance of approval.",
    href: "/services/uk-visitor",
    icon: Plane,
  },
  {
    title: "Other UK Visas",
    description:
      "Skilled Worker, Student, Spouse, Transit, and more. Custom pricing tailored to the complexity of your case.",
    href: "/services/uk-other",
    icon: FileText,
  },
  {
    title: "Schengen Visa",
    description:
      "Travel to Europe with full application support. We handle tourism, business, and family visit Schengen applications.",
    href: "/services/schengen",
    icon: Globe,
  },
  {
    title: "US, UAE & Other Destinations",
    description:
      "Custom documentation and visa support packages for the United States, UAE, and other international destinations.",
    href: "/services/custom",
    icon: Package,
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-20 sm:py-28 px-4 pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm tracking-widest uppercase text-bronze-400 font-medium mb-4">
            Our Services
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl font-medium text-white leading-[1.1]">
            Visa Services
          </h1>
          <p className="mt-6 text-lg text-zinc-400 max-w-2xl mx-auto">
            Expert consultancy for UK, Schengen, US, UAE, and other
            destinations. Select a service below to learn more.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <CompareServicesTable />

      <CTASection />
    </>
  );
}
