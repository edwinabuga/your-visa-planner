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
      className="group block rounded-xl border border-neutral-200 bg-white p-6 hover:shadow-lg hover:border-primary/30 transition-all"
    >
      <div className="mb-4 inline-flex rounded-lg bg-primary-light p-3">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-neutral-600 leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
        Learn more
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
