// Products Zweifel Tech LLC designed, built and sells. Home, Projects, Support and the footer read this list.
// To retire a sold or discontinued product, set status to "retired": its tile and support section disappear.

export interface Project {
  slug: "midnight-alibi" | "vulpen-design";
  name: string;
  tagline: string;
  category: string;
  platforms: string[];
  built: string[];
  primaryAction: { label: string; href: string; external: boolean };
  support: { help: string; helpLabel: string; email?: string; privacy: string; terms: string; deleteData?: string; note?: string };
  art: { image: string; alt: string; srcSet?: string; position?: string; contain?: boolean };
  /** Tailwind color group from the --project-* tokens in index.css */
  colors: "ma" | "vd";
  status: "active" | "retired";
}

export const projects: Project[] = [
  {
    slug: "midnight-alibi",
    name: "Midnight Alibi",
    tagline: "A murder-mystery logic puzzle: rebuild every suspect's night, hour by hour, and name the killer.",
    category: "Puzzle game and book",
    platforms: ["iPhone", "iPad", "Android"],
    built: [
      "A constraint solver that generates every case and grades it by the deduction techniques it needs",
      "The game, built as a web app and shipped to the App Store and Google Play with Capacitor",
      "In-app purchases and optional Cloud Save through Game Center and Google Play Games, on Firebase",
      "Book 1, published in hardcover",
    ],
    primaryAction: { label: "Get the game", href: "/midnight-alibi/", external: false },
    support: {
      help: "/midnight-alibi/how-to-play/",
      helpLabel: "How to play",
      privacy: "/midnight-alibi/privacy/",
      terms: "/midnight-alibi/terms/",
      deleteData: "/midnight-alibi/delete-account/",
      note: "Writing about your account? Include your Player ID from Settings, then About.",
    },
    art: { image: "/midnight-alibi/assets/manor-night.webp", alt: "A dark manor house under a night sky, from the game", position: "center 35%" },
    colors: "ma",
    status: "active",
  },
  {
    slug: "vulpen-design",
    name: "Vulpen Design",
    tagline: "Floor plans for remodeling contractors and homeowners: draw in 2D, check in 3D, and send drawings and quantities.",
    category: "Floor-plan software",
    platforms: ["Web app", "Installable on desktop and mobile"],
    built: [
      "A 2D and 3D plan editor with quantities, title blocks and PDF, DXF and DWG export",
      "Accounts, organizations and seats, with subscriptions and billing through Stripe",
      "AI-rendered room images, priced as prepaid credit",
      "Hosting, data and functions on Firebase and Google Cloud",
    ],
    primaryAction: { label: "Try it free", href: "https://vulpendesign.com", external: true },
    support: {
      help: "https://vulpendesign.com/contact",
      helpLabel: "Help and contact",
      email: "support@vulpendesign.com",
      privacy: "https://vulpendesign.com/privacy",
      terms: "https://vulpendesign.com/terms",
      note: "You can delete your account and its projects yourself in Account settings.",
    },
    art: {
      image: "/brand/vulpen-design-640.webp",
      alt: "The Vulpen Design logo, a fox head on navy",
      srcSet: "/brand/vulpen-design-640.webp 640w, /brand/vulpen-design-1280.webp 1280w",
      position: "center",
      contain: true,
    },
    colors: "vd",
    status: "active",
  },
];

export const activeProjects = projects.filter((p) => p.status === "active");
