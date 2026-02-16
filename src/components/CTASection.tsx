import Link from "next/link";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Ready to secure your visa?",
  description = "Begin with a free eligibility assessment. We review your details and send you a personalized PDF report within 2 hours during business days.",
}: CTASectionProps) {
  return (
    <section className="py-24 relative bg-zinc-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-90" />

      <div className="mx-auto max-w-3xl px-6 relative z-10 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
          {title}
        </h2>
        <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/eligibility"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide uppercase rounded-full bg-gradient-to-r from-bronze-600 to-bronze-400 text-white hover:from-bronze-500 hover:to-bronze-300 shadow-[0_0_15px_rgba(180,102,70,0.3)] hover:shadow-[0_0_25px_rgba(206,155,119,0.5)] transition-all duration-300"
          >
            Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase rounded-full border border-bronze-500 text-bronze-200 hover:bg-bronze-900/30 hover:text-white hover:border-bronze-300 transition-all duration-300"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-zinc-400">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-bronze-500" />
            <span>WhatsApp: +254 796 544 253</span>
          </a>
          <a
            href="mailto:edwin@yourvisaplanner.com"
            className="flex items-center gap-3 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 text-bronze-500" />
            <span>edwin@yourvisaplanner.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
