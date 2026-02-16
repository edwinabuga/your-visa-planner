import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,126,84,0.08),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-bronze-900/40 to-transparent" />

      <div className="mx-auto max-w-5xl px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-bronze-500/30 rounded-full px-4 py-1.5 mb-8 bg-bronze-950/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-bronze-200">
            Insider Experience
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
        <p className="max-w-2xl mx-auto text-lg text-zinc-400 leading-relaxed mb-10">
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
        <div className="mt-12 pt-8 border-t border-white/5">
          <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6 font-medium">
            Previous Professional Experience At
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {/* VFS Global */}
            <div className="group flex items-center gap-3 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-blue-200/40 group-hover:border-blue-200/70 flex items-center justify-center transition-colors">
                <span className="font-sans text-sm md:text-base italic text-blue-200/70 group-hover:text-blue-100 transition-colors">
                  vfs.
                </span>
              </span>
              <span className="font-sans font-semibold text-xl md:text-2xl tracking-wide text-blue-200/60 group-hover:text-blue-100 transition-colors">
                VFS<span className="text-blue-200/40 group-hover:text-blue-200/70 transition-colors">.</span>GLOBAL
              </span>
            </div>

            {/* TLScontact */}
            <div className="group flex items-center opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-default">
              <span className="font-sans font-bold text-2xl md:text-3xl text-blue-300/70 group-hover:text-blue-200 tracking-tight transition-colors">
                TLS
              </span>
              <span className="font-sans font-normal text-2xl md:text-3xl text-orange-400/60 group-hover:text-orange-300 tracking-tight transition-colors">
                contact
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
