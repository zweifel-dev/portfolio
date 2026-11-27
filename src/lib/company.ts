// Company facts shared by the header, footer, Home, Company, Contact and Support pages.

export interface LogoSet {
  crest: { src640: string; src1280: string };
  emblem: { src160: string; src320: string; src640: string };
  emblemMono: string;
  icon: { svg: string; ico: string };
  ogImage: string;
}

export const company = {
  legalName: "Zweifel Tech LLC" as const,
  shortName: "Zweifel Tech",
  positioning:
    "Zweifel Tech LLC designs, architects and scales software fast, and helps engineering organizations adopt AI: assessing AI maturity, setting up AI-enabled delivery and training developers to work with agents.",
  email: "brandon@zweifeltech.com",
  mailingAddress: ["Zweifel Tech LLC", "2501 Chatham Rd Ste 5816", "Springfield, IL 62704"],
  state: "Illinois",
  founder: "Brandon Zweifel",
  logo: {
    crest: { src640: "/brand/crest-640.webp", src1280: "/brand/crest-1280.webp" },
    emblem: { src160: "/brand/emblem-160.webp", src320: "/brand/emblem-320.webp", src640: "/brand/emblem-640.webp" },
    emblemMono: "/brand/emblem-mono-320.webp",
    icon: { svg: "/icons/fox.svg", ico: "/icons/favicon.ico" },
    ogImage: "/brand/og-default.png",
  } satisfies LogoSet,
};

/** A mailto link to the company address with a preset subject. */
export const mailto = (subject: string) => `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

export const copyright = () => `© ${new Date().getFullYear()} ${company.legalName}`;
