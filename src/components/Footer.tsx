import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Visitor Visa", href: "/services/visitor" },
  { name: "Skilled Worker Visa", href: "/services/skilled-worker" },
  { name: "Student Visa", href: "/services/student" },
  { name: "Spouse/Partner Visa", href: "/services/spouse" },
  { name: "Other Visas", href: "/services/other" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Your Visa Planner"
              width={140}
              height={140}
              className="h-10 w-auto mb-5 brightness-200"
            />
            <p className="text-sm leading-relaxed">
              Professional UK visa consultancy based in Nairobi, Kenya. We help
              you navigate the UK visa process with confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-widest mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-semibold text-neutral-200 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={16} className="shrink-0 text-accent" />
                <a href="tel:+254796544253" className="hover:text-accent transition-colors">
                  +254 796 544 253
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={16} className="shrink-0 text-accent" />
                <a href="mailto:edwin@yourvisaplanner.com" className="hover:text-accent transition-colors">
                  edwin@yourvisaplanner.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Your Visa Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
