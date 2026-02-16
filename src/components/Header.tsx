"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Plane } from "lucide-react";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-4 border-b border-bronze-900/50"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 border border-bronze-500/30 rounded-sm group-hover:border-bronze-400/60 transition-colors">
              <Plane className="w-5 h-5 text-bronze-400" />
            </div>
            <span className="font-heading text-xl font-bold tracking-tight text-bronze-100">
              Your Visa Planner
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest text-zinc-400 hover:text-bronze-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/eligibility"
              className="rounded-full border border-bronze-500 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-bronze-200 hover:bg-bronze-900/30 hover:text-white hover:border-bronze-300 transition-all"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-bronze-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col">
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="p-2 text-bronze-200"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col px-8 pt-8 gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-lg font-heading text-zinc-300 hover:text-bronze-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="px-8 mt-10">
            <Link
              href="/eligibility"
              className="block rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-8 py-4 text-center text-sm font-medium uppercase tracking-wide text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
