"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Your Visa Planner"
              width={140}
              height={140}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm tracking-wide text-neutral-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/eligibility"
              className="rounded-md border border-primary px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all"
            >
              Check Eligibility
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 border-t border-neutral-200">
            <div className="flex flex-col gap-1 pt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-3 text-base text-neutral-600 hover:text-primary hover:bg-neutral-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/eligibility"
                className="mx-3 mt-3 rounded-md border border-primary px-5 py-3 text-center text-sm font-medium text-primary hover:bg-primary hover:text-white transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Check Eligibility
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
