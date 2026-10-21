import { cn } from "@/lib/utils";

interface PortraitProps {
  className?: string;
  /** Load right away (above the fold) instead of lazily */
  eager?: boolean;
}

// Headshot with a gold frame offset behind it. The full-size original (public/images/Brandon-Zweifel-headshot.jpg)
// is 9 MB, so pages use the 480/960 px copies made from it.
const Portrait = ({ className, eager }: PortraitProps) => (
  <div className={cn("relative mx-auto w-56 sm:w-64 lg:w-72", className)}>
    <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-lg border border-accent" />
    <picture>
      <source
        type="image/webp"
        srcSet="/images/Brandon-Zweifel-headshot-480.webp 480w, /images/Brandon-Zweifel-headshot-960.webp 960w"
        sizes="(min-width: 1024px) 288px, 256px"
      />
      <img
        src="/images/Brandon-Zweifel-headshot-480.jpg"
        srcSet="/images/Brandon-Zweifel-headshot-480.jpg 480w, /images/Brandon-Zweifel-headshot-960.jpg 960w"
        sizes="(min-width: 1024px) 288px, 256px"
        width={480}
        height={480}
        alt="Portrait of Brandon Zweifel"
        loading={eager ? "eager" : "lazy"}
        className="relative aspect-square w-full rounded-lg object-cover"
      />
    </picture>
  </div>
);

export default Portrait;
