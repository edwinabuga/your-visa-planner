import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,126,84,0.08),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bronze-900/40 to-transparent" />

      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-bronze-500/30 rounded-full px-4 py-1.5 mb-8 bg-bronze-950/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-bronze-200">
            Insider Visa Application Center Experience
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-tight mb-8">
          <span className="block text-white">Visa Applications,</span>
          <span className="block text-zinc-500 italic">
            Mastered from the Inside.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-12">
          Stop guessing. Get guidance from a consultant who handled applications
          daily for years from behind the counter. We turn anxiety into approval
          for the UK, Schengen, USA, and beyond.
        </p>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Link
            href="/eligibility"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 text-white hover:from-bronze-500 hover:to-bronze-300 shadow-[0_0_15px_rgba(180,102,70,0.3)] hover:shadow-[0_0_25px_rgba(206,155,119,0.5)] transition-all duration-300 min-w-[200px]"
          >
            Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase rounded-full border border-bronze-500 text-bronze-200 hover:bg-bronze-900/30 hover:text-white hover:border-bronze-300 transition-all duration-300 min-w-[200px]"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* VFS / TLS Logo Strip */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-zinc-600 text-xs uppercase tracking-widest mb-8 font-medium">
            Previous Professional Experience At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
            {/* VFS Global */}
            <div className="group flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="font-sans font-bold text-3xl md:text-4xl text-zinc-300 group-hover:text-white tracking-tight transition-colors">
                VFS
                <span className="font-light text-zinc-500 group-hover:text-bronze-400 transition-colors">
                  GLOBAL
                </span>
              </span>
              <span className="h-0.5 w-0 bg-bronze-500 group-hover:w-full transition-all duration-500 mt-2" />
            </div>

            {/* TLScontact */}
            <div className="group flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="font-sans font-bold text-3xl md:text-4xl text-zinc-300 group-hover:text-white tracking-tighter transition-colors">
                TLS
                <span className="text-zinc-500 group-hover:text-bronze-400 transition-colors">
                  contact
                </span>
              </span>
              <span className="h-0.5 w-0 bg-bronze-500 group-hover:w-full transition-all duration-500 mt-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
