// Brandon's résumé for the personal About page (/brandon). It is a separate module so it loads only with that page:
// the build's content check allows the current employer's name only in the personal pages' code.
// Experity entries stay at résumé level (see "Content rules" in CLAUDE.md).

export interface Role {
  org: string;
  role: string;
  period: string;
  summary: string;
  points: string[];
}

export const experience: Role[] = [
  {
    org: "HHAeXchange",
    role: "Director of Software Engineering",
    period: "2026 – Present",
    summary: "Leading software engineering at HHAeXchange, a technology platform for home and community-based care.",
    points: [],
  },
  {
    org: "Zweifel Tech LLC",
    role: "Founder",
    period: "2026 – Present",
    summary:
      "A software company that designs, architects and scales software, and helps engineering teams adopt AI across the delivery lifecycle. It builds and sells Midnight Alibi and Vulpen Design.",
    points: [
      "Designed and built Midnight Alibi end to end: the constraint solver that generates and grades its cases, the game, and its App Store and Google Play releases.",
      "Designed and built Vulpen Design, floor-plan and space-planning software with public sign-ups and paid plans.",
    ],
  },
  {
    org: "Experity",
    role: "Sr. Director of Data Strategy, Analytics & AI",
    period: "2022 – 2026",
    summary: "Led data engineering, analytics and applied AI for a healthcare SaaS company serving urgent care.",
    points: [
      "Moved the data and analytics team to an agent-augmented operating model: agents draft models, metrics, tests and documentation; engineers review and merge.",
      "Shipped seven production AI agents, piloting on low-risk work first and keeping a human reviewer on every change.",
      "Built the enterprise data platform and a governed semantic layer, so metrics are defined and certified once and reused everywhere.",
      "Started a product analytics practice so product and executive leaders could base decisions on data.",
      "Led the AI transition on the people side: review guardrails, quality standards and hands-on training.",
    ],
  },
  {
    org: "Experity (formerly Practice Velocity)",
    role: "Director of Software Development",
    period: "2016 – 2022",
    summary: "Led software engineering through the merger of DocuTAP and Practice Velocity that formed Experity.",
    points: [
      "Led the software side of the post-merger platform integration.",
      "Led the move from a legacy monolith to cloud-native microservices.",
      "Grew the R&D team from 15 to 65+ people and built the mentoring and leadership programs to support it.",
    ],
  },
  {
    org: "Fatwallet",
    role: "Manager of Software Engineering",
    period: "2015 – 2016",
    summary: "",
    points: ["Drove $5M in additional revenue through UX optimization and cut page load times by 40%."],
  },
  {
    org: "Supplycore",
    role: "Manager of Software Engineering",
    period: "2012 – 2015",
    summary: "",
    points: [
      "Deployed ERP solutions saving clients $2.5M a year, and built real-time analytics generating $10M in revenue.",
    ],
  },
  {
    org: "U.S. Army",
    role: "Intelligence Analyst Officer",
    period: "2005 – 2013",
    summary: "",
    points: [
      "Led strategic intelligence analysis during a 13-month deployment to Iraq, including briefings for general officers.",
    ],
  },
];

export const competencies = [
  {
    title: "Leadership",
    items: [
      "Engineering organization design and scaling",
      "Agent-augmented operating models",
      "Post-merger platform integration",
      "Data strategy and governance",
      "Change management",
      "Mentoring and leadership development",
    ],
  },
  {
    title: "Technical",
    items: [
      "AI and agents: Strands Agents SDK, LangGraph, CrewAI, OpenAI Agents SDK, MCP",
      "Data: Snowflake, dbt, Kafka and CDC, Kimball modeling",
      "Cloud: AWS",
      "Languages: Python, SQL, JavaScript and TypeScript, C#",
      "Apps: React, Capacitor",
    ],
  },
  {
    title: "Domain",
    items: [
      "Healthcare SaaS",
      "EMR/EHR and revenue cycle",
      "HIPAA-compliant systems",
      "Metric certification and governance",
      "Consumer mobile apps",
    ],
  },
];
