import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Right-aligned on wide screens, e.g. a "see all" link */
  action?: ReactNode;
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, action, className }: SectionHeadingProps) => (
  <div className={cn("mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between", className)}>
    <div className="max-w-2xl">
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2 className="text-foreground">{title}</h2>
      {description && <p className="mt-3 text-lg leading-relaxed text-muted-foreground">{description}</p>}
    </div>
    {action && <div className="shrink-0">{action}</div>}
  </div>
);

export default SectionHeading;
