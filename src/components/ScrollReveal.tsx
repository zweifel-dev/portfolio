import { ReactNode } from "react";

// These wrappers used to fade content in as it scrolled into view. That left everything below the first screen at
// opacity 0 in the prerendered HTML, so link previews, crawlers and readers without JavaScript saw blank sections.
// Content now renders fully visible; the components stay so pages keep their structure (research.md R3, FR-028).

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  once?: boolean;
}

const ScrollReveal = ({ children, className }: ScrollRevealProps) => <div className={className}>{children}</div>;

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export const StaggerContainer = ({ children, className }: StaggerContainerProps) => (
  <div className={className}>{children}</div>
);

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

export const StaggerItem = ({ children, className }: StaggerItemProps) => <div className={className}>{children}</div>;

export default ScrollReveal;
