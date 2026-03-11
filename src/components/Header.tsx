"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/#pricing" },
  { name: "FAQ", href: "/#faq" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

// Distinctive passport-stamp logo mark
function LogoMark() {
  return (
    <div className="p-2 border border-bronze-500/30 rounded-sm group-hover:border-bronze-400/60 transition-colors">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="text-bronze-400"
        aria-hidden="true"
      >
        {/* Passport book body */}
        <rect x="3.5" y="1.5" width="13" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        {/* Spine / binding */}
        <line x1="6.5" y1="1.5" x2="6.5" y2="18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        {/* Approval stamp circle (dashed) */}
        <circle cx="12" cy="10" r="3.8" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 1.2" />
        {/* Check mark inside */}
        <path d="M10.3 10.2l1.2 1.2 2.2-2.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

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
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-md py-4 border-b border-bronze-200/50 dark:border-bronze-900/50"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <LogoMark />
            <span className="font-heading text-xl font-bold tracking-tight text-bronze-800 dark:text-bronze-100">
              Your Visa Planner
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-bronze-600 dark:hover:text-bronze-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/eligibility"
              className="rounded-full border border-bronze-500 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-bronze-700 dark:text-bronze-200 hover:bg-bronze-100 dark:hover:bg-bronze-900/30 hover:text-bronze-900 dark:hover:text-white hover:border-bronze-400 dark:hover:border-bronze-300 transition-all"
            >
              Free Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-bronze-700 dark:text-bronze-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white dark:bg-zinc-950 flex flex-col">
          {/* Mobile header row: logo + controls */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-100 dark:border-zinc-900">
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LogoMark />
              <span className="font-heading text-lg font-bold tracking-tight text-bronze-800 dark:text-bronze-100">
                Your Visa Planner
              </span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button
                type="button"
                className="p-2 text-bronze-700 dark:text-bronze-200"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col px-8 pt-8 gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 text-lg font-heading text-zinc-700 dark:text-zinc-300 hover:text-bronze-600 dark:hover:text-bronze-400 border-b border-zinc-100 dark:border-zinc-900 last:border-b-0 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="px-8 mt-auto mb-10">
            <Link
              href="/eligibility"
              className="block rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 px-8 py-4 text-center text-sm font-medium uppercase tracking-wide text-white hover:from-bronze-500 hover:to-bronze-300 transition-all"
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
