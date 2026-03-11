import Link from "next/link";

const services = [
  { name: "UK Visitor Visas", href: "/services/uk-visitor" },
  { name: "Other UK Visas", href: "/services/uk-other" },
  { name: "Schengen Visas", href: "/services/schengen" },
  { name: "USA, UAE & Global", href: "/services/custom" },
  { name: "Refusal Rescue", href: "/services/uk-visitor#refusal" },
];

const company = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-50 dark:bg-black py-12 border-t border-zinc-200 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-heading text-2xl text-zinc-900 dark:text-white mb-4">
              Your Visa Planner
            </h4>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              Professional visa consultancy based in Nairobi, Kenya. Founded by
              Edwin Abuga Gekonge, leveraging insider experience from VFS Global
              and TLScontact to simplify your travel documentation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-zinc-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Services
            </h5>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
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
            <h5 className="text-zinc-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h5>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Nairobi, Kenya</li>
              <li>Mon–Fri: 9AM – 6PM EAT</li>
              <li className="pt-2 text-bronze-500">
                <a href="tel:+254796544253" className="hover:text-bronze-400 transition-colors">
                  +254 796 544 253
                </a>
              </li>
              <li className="text-bronze-500">
                <a href="mailto:edwinabuga@gmail.com" className="hover:text-bronze-400 transition-colors">
                  edwinabuga@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 dark:text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Your Visa Planner. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            {company.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
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
