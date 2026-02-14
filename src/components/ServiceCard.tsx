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
      className="group block rounded-lg border border-neutral-200 bg-white p-8 hover:border-accent/40 hover:shadow-md transition-all"
    >
      <Icon size={28} className="text-accent mb-5" strokeWidth={1.5} />
      <h3 className="font-heading text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-neutral-500 leading-relaxed mb-5">
        {description}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
        Learn more
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
