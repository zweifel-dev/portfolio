// Company facts shared by the header, footer, Home, Company, Contact and Support pages.

export interface LogoSet {
  crest: { src640: string; src1280: string };
  emblem: { src160: string; src320: string; src640: string };
  /** The whole color emblem, squared with a transparent margin, for the header and footer */
  mark: { src96: string; src192: string };
  icon: { svg: string; ico: string };
  ogImage: string;
}

export const company = {
  legalName: "Zweifel Tech LLC" as const,
  shortName: "Zweifel Tech",
  positioning:
    "We design, build and scale software, and help engineering teams adopt AI: we assess AI maturity, set up AI-enabled delivery and train developers to work with agents.",
  email: "brandon@zweifeltech.com",
  mailingAddress: ["Zweifel Tech LLC", "2501 Chatham Rd Ste 5816", "Springfield, IL 62704"],
  state: "Illinois",
  founder: "Brandon Zweifel",
  logo: {
    crest: { src640: "/brand/crest-640.webp", src1280: "/brand/crest-1280.webp" },
    emblem: { src160: "/brand/emblem-160.webp", src320: "/brand/emblem-320.webp", src640: "/brand/emblem-640.webp" },
    mark: { src96: "/brand/mark-96.webp", src192: "/brand/mark-192.webp" },
    icon: { svg: "/icons/fox.svg", ico: "/icons/favicon.ico" },
    ogImage: "/brand/og-default.png",
  } satisfies LogoSet,
};

/** A mailto link to the company address with a preset subject. */
export const mailto = (subject: string) => `mailto:${company.email}?subject=${encodeURIComponent(subject)}`;

export const copyright = () => `© ${new Date().getFullYear()} ${company.legalName}`;
