import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const services = [
  { name: "Visitor Visa", href: "/services/visitor" },
  { name: "Skilled Worker Visa", href: "/services/skilled-worker" },
  { name: "Student Visa", href: "/services/student" },
  { name: "Spouse/Partner Visa", href: "/services/spouse" },
  { name: "Other Visas", href: "/services/other" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">
              Your Visa Planner
            </h3>
            <p className="text-sm leading-relaxed">
              Professional UK visa consultancy based in Nairobi, Kenya. We help
              you navigate the UK visa process with confidence.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+254796544253" className="hover:text-white transition-colors">
                  +254 796 544 253
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:edwin@yourvisaplanner.com" className="hover:text-white transition-colors">
                  edwin@yourvisaplanner.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-neutral-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Visa Planner. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
