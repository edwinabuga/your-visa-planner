import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block border border-zinc-800 bg-zinc-950/50 p-8 hover:bg-zinc-900/50 hover:border-bronze-800/50 transition-all duration-500"
    >
      <Icon size={28} className="text-bronze-500 mb-5" strokeWidth={1.5} />
      <h3 className="font-heading text-xl text-white mb-3">
        {title}
      </h3>
      <p className="text-zinc-500 leading-relaxed mb-5">{description}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-bronze-400">
        Learn more
        <ArrowRight
          size={14}
          className="group-hover:translate-x-1 transition-transform"
        />
      </span>
    </Link>
  );
}
