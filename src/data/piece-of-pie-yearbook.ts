export const YEARBOOK_BASE_PATH = "/piece-of-pie-yearbook";

export type Project = {
  slug: string;
  name: string;
  category: string;
  builders: string[];
  summary: string;
  tags: string[];
  builtOnCardano: boolean;
  repoUrl: string;
  appUrl: string;
  profileUrl: string;
  submissionUrl: string;
};

const projectData: Project[] = [
  {
    slug: "book-worm-ai",
    name: "Book-Worm AI",
    category: "Education & Credentials",
    builders: ["Ahmed"],
    summary:
      "A voice-powered reading platform for uploading books, talking with them in real time, and sharing conversations with other readers.",
    tags: ["AI", "Voice", "Reading"],
    builtOnCardano: false,
    repoUrl: "https://github.com/Mhizta-gab/bookworm-ai",
    appUrl: "https://bookwormai.vercel.app/",
    profileUrl: "https://x.com/mhiztagab1",
    submissionUrl: "https://github.com/Mhizta-gab/Piece-of-Pie_Submission",
  },
  {
    slug: "doba-world",
    name: "Doba World",
    category: "Media & Creator Economy",
    builders: ["Ian Njuguna"],
    summary:
      "A decentralized media archive that helps independent creators tokenize and manage their digital rights on-chain.",
    tags: ["Creator rights", "Media archive", "Tokenization"],
    builtOnCardano: true,
    repoUrl: "https://github.com/IanoNjuguna/bookish-worm",
    appUrl: "https://doba.world",
    profileUrl: "https://x.com/0xxxIaN0",
    submissionUrl:
      "https://github.com/IanoNjuguna/bookish-worm/blob/main/proof-of-pie.md",
  },
  {
    slug: "accordiax",
    name: "Accordiax",
    category: "Marketplaces & Work",
    builders: ["Kamarudeen Fad", "Jubril Wasiu", "Devbasrahtop"],
    summary:
      "A structured marketplace for students and educational consultants, designed to replace informal online agreements with clear delivery terms and accountability.",
    tags: ["Marketplace", "Escrow", "Education services"],
    builtOnCardano: false,
    repoUrl: "https://github.com/Dammy7942/accordiax",
    appUrl: "https://accordiax.vercel.app/",
    profileUrl: "https://x.com/Kamarudeen22205",
    submissionUrl:
      "https://docs.google.com/presentation/d/14jGbcHNnbkRV_MWgfdl_r-Bipv07P99sKTzK6w8e3as/edit",
  },
  {
    slug: "tixano",
    name: "Tixano",
    category: "Events & Ticketing",
    builders: ["Gideon"],
    summary:
      "A Web3 event platform where organizers create events and attendees receive NFT tickets and verifiable attendance records.",
    tags: ["Events", "NFT tickets", "Attendance"],
    builtOnCardano: true,
    repoUrl: "https://github.com/0xGIDHUB/tixano",
    appUrl: "https://tixanomainnet.vercel.app/",
    profileUrl: "https://x.com/0xGIDHUB",
    submissionUrl:
      "https://docs.google.com/document/d/1KtSX0bDgYas6psquQ9NWzi7zmG24pj2IP2TIAugjlI4/edit",
  },
  {
    slug: "beni",
    name: "Beni",
    category: "AI & Developer Tools",
    builders: ["Harrie"],
    summary:
      "A Cardano-native SDK and smart-contract suite that gives autonomous agents wallets with ledger-enforced spending guardrails.",
    tags: ["AI agents", "Wallets", "Aiken"],
    builtOnCardano: true,
    repoUrl: "https://github.com/IamHarrie-Labs/beni",
    appUrl: "https://usebeni.xyz/",
    profileUrl: "https://x.com/IamHarrie",
    submissionUrl:
      "https://github.com/IamHarrie-Labs/beni/blob/main/final_presentation.md",
  },
  {
    slug: "tracom-credentials",
    name: "TRACOM Credentials",
    category: "Education & Credentials",
    builders: ["Lewis Owen Nduati"],
    summary:
      "A credentialing portal that lets training institutions issue portable, tamper-resistant proof of student competency.",
    tags: ["Credentials", "Training", "Verification"],
    builtOnCardano: true,
    repoUrl: "https://github.com/lewis-nduati/Tracom-credentials.git",
    appUrl: "https://tracom-credentials.vercel.app/",
    profileUrl: "https://x.com/everydaylewis",
    submissionUrl:
      "https://github.com/lewis-nduati/Tracom-credentials/blob/main/docs/final-presentation.md",
  },
  {
    slug: "chaintask",
    name: "ChainTask",
    category: "Marketplaces & Work",
    builders: ["Abid"],
    summary:
      "An on-chain workforce marketplace where clients create jobs, escrow payments, and pay workers after approving completed work.",
    tags: ["Freelance", "Escrow", "Workforce"],
    builtOnCardano: true,
    repoUrl: "https://github.com/ArmanAbid/ChainTask",
    appUrl: "https://chaintask.net/",
    profileUrl: "https://x.com/_armanabid",
    submissionUrl:
      "https://github.com/ArmanAbid/ChainTask/blob/main/piece-of-pie-final.md",
  },
  {
    slug: "neonsoup",
    name: "NeonSoup",
    category: "Finance & Payments",
    builders: ["Adriano Fiorenza"],
    summary:
      "A cypherpunk liquidity layer designed for private, flexible financial activity in the Cardano ecosystem.",
    tags: ["Liquidity", "DeFi", "Privacy"],
    builtOnCardano: true,
    repoUrl: "https://github.com/GameChangerFinance/NeonSoup",
    appUrl: "https://neonsoup.trade/",
    profileUrl: "https://x.com/GameChangerOk",
    submissionUrl:
      "https://gist.github.com/zxpectre/9c1a2e842b1f0f4f8cc8544033802a73",
  },
  {
    slug: "next-ai-protocol",
    name: "Next.Ai Protocol",
    category: "AI & Developer Tools",
    builders: ["Blessed David"],
    summary:
      "An AI-powered platform that turns everyday user data and survey participation into rewards.",
    tags: ["AI", "Surveys", "Rewards"],
    builtOnCardano: true,
    repoUrl: "https://github.com/YungSlaiz53/GNXT",
    appUrl: "https://nextai-99aa5.web.app/",
    profileUrl: "https://x.com/ogleksb",
    submissionUrl:
      "https://github.com/YungSlaiz53/GNXT/releases/tag/Final_presentation",
  },
  {
    slug: "murmurations-ai",
    name: "Murmurations.ai",
    category: "AI & Developer Tools",
    builders: ["Nori Nishigaya"],
    summary:
      "An open-source TypeScript runtime that helps one human coordinate a murmuration of AI agents while keeping human agency at the center.",
    tags: ["AI agents", "Coordination", "Open source"],
    builtOnCardano: false,
    repoUrl: "https://github.com/murmurations-ai/flyway",
    appUrl: "https://murmurations-ai.github.io/flyway/presentation.html",
    profileUrl: "https://x.com/Xeeban",
    submissionUrl: "https://murmurations-ai.github.io/flyway/presentation.html",
  },
  {
    slug: "3rike-mobility",
    name: "3rike Mobility",
    category: "Logistics & Mobility",
    builders: ["Ndukwe Anita", "Martins", "Chibuikem"],
    summary:
      "A mobility-finance platform helping tricycle drivers in Accra own vehicles faster while giving investors a way to earn returns.",
    tags: ["Mobility", "Vehicle finance", "Investment"],
    builtOnCardano: true,
    repoUrl: "https://github.com/3rike12/3rike-Mobility_",
    appUrl: "https://trike-mobility.vercel.app/",
    profileUrl: "https://x.com/real_winni3",
    submissionUrl: "https://x.com/real_winni3/status/2078577952531362042",
  },
  {
    slug: "cardano-analytics-platform",
    name: "Cardano Analytics Platform",
    category: "Data & Analytics",
    builders: ["Dr. Marcio Moreno", "Dr. Rafael Brandao"],
    summary:
      "A natural-language analytics platform combining a Cardano-specialized language model, knowledge graph, and shareable dashboards.",
    tags: ["Analytics", "Knowledge graph", "LLM"],
    builtOnCardano: true,
    repoUrl: "https://github.com/mobr-ai/cap-pie",
    appUrl: "https://cap.mobr.ai/login",
    profileUrl: "https://x.com/mobrsys",
    submissionUrl:
      "https://drive.google.com/drive/u/0/folders/15LZZr0O-PrLeal9_K_H4K4g7MYgPxSCl",
  },
  {
    slug: "builder-season-playbook",
    name: "Builder Season Playbook",
    category: "Community & Collaboration",
    builders: ["Newman S. Lanier"],
    summary:
      "A reusable, forkable template for running builder-first community sprints with accountability, incentives, and open-web tooling.",
    tags: ["Community", "Playbook", "Open source"],
    builtOnCardano: false,
    repoUrl: "https://github.com/Newman5/builder-season-playbook",
    appUrl: "https://newman5.github.io/builder-season-playbook/use-this-model/",
    profileUrl: "https://x.com/newman5",
    submissionUrl:
      "https://github.com/Newman5/builder-season-playbook/blob/main/final_presentation.md",
  },
  {
    slug: "cohort15",
    name: "Cohort15",
    category: "Community & Collaboration",
    builders: ["Harsha Gullapalli"],
    summary:
      "A focused community product designed to connect small, high-intent groups around shared niche interests.",
    tags: ["Communities", "Groups", "Coordination"],
    builtOnCardano: false,
    repoUrl: "https://github.com/agentic-architecture-research/plugin-harness",
    appUrl: "https://cohort15.com/",
    profileUrl: "https://x.com/minustenexdev",
    submissionUrl:
      "https://docs.google.com/document/d/1kmouiGyuFv4Vc5DIahRpZxuHiqn18c01fNQQrjhHkYU/edit?usp=sharing",
  },
  {
    slug: "skillswap",
    name: "SkillSwap",
    category: "Education & Credentials",
    builders: ["Daniel Olanrewaju"],
    summary:
      "A peer-to-peer matching system that connects people who can teach each other and records completed exchanges as portable contributions.",
    tags: ["Skill exchange", "Learning", "Reputation"],
    builtOnCardano: true,
    repoUrl: "https://github.com/devfreeguy/skill-swap",
    appUrl: "https://myskillswap.xyz/",
    profileUrl: "https://x.com/devfreeguy",
    submissionUrl:
      "https://github.com/devfreeguy/skill-swap/blob/main/docs/final-presentation.md",
  },
  {
    slug: "haulink",
    name: "Haulink",
    category: "Logistics & Mobility",
    builders: [
      "Abdulazeez Folaranmi Bello",
      "Helen Ibanga Essien",
      "Hammed Quyum",
      "Web3 Creative",
    ],
    summary:
      "A logistics service helping Nigerian SMEs and producer groups book shared trailer space, track shipments, and verify delivery.",
    tags: ["Logistics", "Shared freight", "Proof of delivery"],
    builtOnCardano: true,
    repoUrl: "https://github.com/FoladDTechie/Haulink",
    appUrl: "https://haulink.xyz/",
    profileUrl: "https://x.com/Haulink_",
    submissionUrl:
      "https://github.com/FoladDTechie/Haulink/blob/main/SUBMISSION.md",
  },
  {
    slug: "the-quest",
    name: "The Quest",
    category: "Marketplaces & Work",
    builders: ["Opa"],
    summary:
      "A community-driven micro-task system where people discover, claim, and complete work while building a visible contribution record.",
    tags: ["Micro-tasks", "Reputation", "Community work"],
    builtOnCardano: true,
    repoUrl: "https://github.com/opa1/the-quest",
    appUrl: "https://thequesters.fun/",
    profileUrl: "https://x.com/Opa007i",
    submissionUrl:
      "https://github.com/opa1/the-quest/blob/main/docs/final-presentation.md",
  },
  {
    slug: "devmemory",
    name: "DevMemory",
    category: "AI & Developer Tools",
    builders: ["Muhammed Yuguda"],
    summary:
      "A local-first developer tool that preserves structured coding context across AI assistants, editors, and sessions.",
    tags: ["Developer tools", "AI context", "Local-first"],
    builtOnCardano: true,
    repoUrl: "https://github.com/Yuguda999/devmemory",
    appUrl: "https://devmemory.onrender.com/",
    profileUrl: "https://x.com/yugudap",
    submissionUrl:
      "https://github.com/Yuguda999/devmemory/blob/main/final_presentation.md",
  },
  {
    slug: "cardano-insights-lab",
    name: "Cardano Insights Lab (CIL)",
    category: "Data & Analytics",
    builders: ["Juanita Jaramillo Rivillas"],
    summary:
      "An independent observatory that analyzes blockchain, governance, and decentralized infrastructure with clarity, context, and a critical lens.",
    tags: ["Research", "Governance", "Blockchain analysis"],
    builtOnCardano: false,
    repoUrl: "https://github.com/JuanitaJaramill/cardano-insights-lab",
    appUrl: "https://cil-market-bridge.vercel.app/",
    profileUrl: "https://x.com/CInsigthLab",
    submissionUrl:
      "https://github.com/JuanitaJaramill/cardano-insights-lab/blob/main/FINAL_PRESENTATION.md",
  },
  {
    slug: "cogikids",
    name: "CogiKids",
    category: "Education & Credentials",
    builders: ["Kamal Aliyu"],
    summary:
      "A gamified, AI-powered mobile learning app for Nigerian children, using Hausa, Yoruba, and Igbo as language scaffolds in low-connectivity environments.",
    tags: ["Education", "AI", "Local languages"],
    builtOnCardano: false,
    repoUrl: "https://github.com/kamal-ogtl/cogikids",
    appUrl: "https://www.cogniedufy.app/",
    profileUrl: "https://x.com/cedufy",
    submissionUrl:
      "https://github.com/kamal-ogtl/cogikids/blob/main/SUBMISSION.md",
  },
  {
    slug: "mosaic-cardano",
    name: "Mosaic Cardano",
    category: "Media & Creator Economy",
    builders: ["Alfred Itodole", "David Timi"],
    summary:
      "A creative community platform for book clubs, poetry circles, writing groups, and explorer clubs to make and organize work together.",
    tags: ["Creative communities", "Writing", "Collaboration"],
    builtOnCardano: true,
    repoUrl: "https://github.com/sirxalfred/mosaic-cardano",
    appUrl: "https://mosaic-cardano-production-e6ae.up.railway.app/",
    profileUrl: "https://x.com/DavidTimi_1",
    submissionUrl:
      "https://github.com/sirXalfred/mosaic-cardano/blob/main/final-presentation.md",
  },
];

export const projects = projectData.sort((a, b) =>
  a.name.localeCompare(b.name),
);

export const categoryDescriptions: Record<string, string> = {
  "AI & Developer Tools":
    "Tools that help people build, coordinate, and work with intelligent systems.",
  "Community & Collaboration":
    "Products for gathering people, organizing participation, and building together.",
  "Data & Analytics":
    "Products that turn complex information into useful, explainable insight.",
  "Education & Credentials":
    "Learning experiences and portable proof of knowledge, skill, or participation.",
  "Events & Ticketing":
    "Tools for creating, attending, and verifying live experiences.",
  "Finance & Payments":
    "Products for liquidity, payments, financial access, and ownership.",
  "Logistics & Mobility":
    "Products that move people, vehicles, and goods more effectively.",
  "Marketplaces & Work":
    "Products that connect people to services, tasks, and economic opportunity.",
  "Media & Creator Economy":
    "Products that help creators publish, collaborate, and retain value from their work.",
};

export const categories = Object.keys(categoryDescriptions).sort();

export function categorySlug(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function categoryFromSlug(slug: string) {
  return categories.find((category) => categorySlug(category) === slug);
}

export function projectInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export function projectScreenshotUrl(slug: string) {
  return `/images/piece-of-pie-yearbook/projects/${slug}/screenshot-01.jpg`;
}

export type ProjectFilter = "all" | "cardano" | "non-cardano";

export function filterProjects(projectList: Project[], filter: ProjectFilter) {
  if (filter === "cardano") {
    return projectList.filter((project) => project.builtOnCardano);
  }
  if (filter === "non-cardano") {
    return projectList.filter((project) => !project.builtOnCardano);
  }
  return projectList;
}

export function projectFilterFromQuery(value: string | string[] | undefined) {
  const queryValue = Array.isArray(value) ? value[0] : value;
  return queryValue === "cardano" || queryValue === "non-cardano"
    ? queryValue
    : "all";
}
