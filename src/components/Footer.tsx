import Link from "next/link";

const services = [
  { name: "UK Visitor Visas", href: "/services/uk-visitor" },
  { name: "Schengen Visas", href: "/services/schengen" },
  { name: "USA & Canada", href: "/services/custom" },
  { name: "Refusal Rescue", href: "/services/uk-visitor" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-heading text-2xl text-white mb-4">
              Your Visa Planner
            </h4>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-sm">
              Professional visa consultancy based in Nairobi, Kenya. Founded by
              Edwin Abuga Gekonge, leveraging insider experience from VFS Global
              and TLScontact to simplify your travel documentation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Services
            </h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="hover:text-bronze-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>Nairobi, Kenya</li>
              <li>Mon–Fri: 9AM – 6PM</li>
              <li className="pt-2 text-bronze-500">
                <a href="tel:+254796544253">+254 796 544 253</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; 2026 Your Visa Planner. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-zinc-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
