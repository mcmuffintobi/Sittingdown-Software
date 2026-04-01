export interface Project {
  slug: string;
  title: string;
  tagline: string;
  categories: ("Website" | "Software" | "Tool")[];
  year: number;
  client?: string;
  heroImage: string;
  /** Gradient colors for the card thumbnail placeholder [from, to] */
  brandColors?: [string, string];
  overview: string;
  role: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  repoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: "autotyper-ninja",
    title: "AutoTyper Ninja",
    tagline: "A Windows app that automates typing with realistic human-like patterns.",
    categories: ["Software", "Website"],
    year: 2026,
    heroImage: "/projects/autotyper-hero.png",
    brandColors: ["#1a0533", "#2d1b69"],
    overview:
      "AutoTyper Ninja is a Windows desktop application that simulates natural human typing. It goes beyond simple auto-typing by replicating realistic keystroke rhythms, common typos, fatigue modeling, and adjustable speed profiles. The Pro version adds a full analytics dashboard, typing profiles, and a configurable mistake engine with eight different error types. Built to be simple to use with a three-step setup: Download, Configure, Type.",
    role: "Full product design, development, marketing site, and distribution.",
    techStack: ["Windows", "Desktop App", "Analytics", "PDF/CSV Export"],
    features: [
      "Adjustable typing speed from 10-200 WPM with presets",
      "Four timing distributions for authentic keystroke patterns",
      "Eight realistic mistake types including transposed letters and capitalization errors",
      "Fatigue modeling that simulates degraded performance over time",
      "Analytics dashboard with PDF, CSV, and JSON export",
    ],
    liveUrl: "https://autotyper.ninja/",
    gallery: [],
  },
  {
    slug: "eureka-downs",
    title: "Eureka Downs",
    tagline: "The official website for a historic Kansas horse racing venue reopening in 2026.",
    categories: ["Website"],
    year: 2026,
    client: "Eureka Downs",
    heroImage: "/projects/eureka-downs-hero.jpg",
    brandColors: ["#1a3a2a", "#c8a951"],
    overview:
      "Eureka Downs is one of the oldest continuously recognized racing venues in the Midwest, established in 1872 and home to 1938 Kentucky Derby winner Lawrin. With the track reopening in 2026, they needed a modern website to announce the season, sell the history, and serve both fans and horsemen. We built a content-rich, bilingual site with event scheduling, a horsemen portal, and community-focused storytelling.",
    role: "Full design and development, from branding through deployment on Railway.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Railway"],
    features: [
      "Bilingual support with English and Spanish toggle",
      "Race schedule with event details for Thoroughbred, Quarter Horse, and Paint Horse racing",
      "Horsemen portal for stall applications, licensing, and condition books",
      "Plan Your Visit section with directions, parking, seating, and concessions",
      "Newsletter subscription for race alerts and news updates",
    ],
    liveUrl: "https://eureka-downs-production.up.railway.app/",
    gallery: [],
  },
  {
    slug: "royal-edge-landscaping",
    title: "Royal Edge Landscaping",
    tagline: "A professional website for a family-owned landscaping company in Kansas.",
    categories: ["Website"],
    year: 2026,
    client: "Royal Edge Landscaping",
    heroImage: "/projects/royal-edge-hero.jpg",
    brandColors: ["#1a3c1a", "#c9a84c"],
    overview:
      "Royal Edge Landscaping is a family-owned business serving Rose Hill and Derby, Kansas. They needed a premium website to showcase their services, display past projects, and generate leads through quote requests. We built a polished, conversion-focused site with a project portfolio, client testimonials, and a free quote system.",
    role: "Full design and development, from wireframes through deployment on Railway.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Railway"],
    features: [
      "Free quote request system for lead generation",
      "Service showcase for Lawn Maintenance, Hardscaping, and Garden Design",
      "Project portfolio grid with hover-reveal descriptions",
      "Client testimonials with star ratings",
      "Community values section highlighting veteran discount and family ownership",
    ],
    liveUrl: "https://royal-edge-landscaping-production.up.railway.app/",
    gallery: [],
  },
];
