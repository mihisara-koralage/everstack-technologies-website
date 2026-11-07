export const siteConfig = {
  name: "Everstack Technologies",
  tagline: "Building Today. Sustaining Tomorrow.",
  description: "Independent software engineering and technology company based in Sri Lanka.",
  location: "Sri Lanka",
  // Replace these values when official contact channels are ready.
  email: "",
  linkedin: "",
  github: "",
  // Place the supplied logo files in public/images using these exact names.
  fullLogo: "/images/everstack-logo.png",
  emblem: "/images/everstack-emblem.png"
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Projects", href: "#projects" }
];

export const services = [
  { number: "01", title: "Custom Software Development", description: "Purpose-built software that supports the way your business works and grows.", points: ["Business applications", "Tailored software solutions", "API development & integration"], icon: "Code2" },
  { number: "02", title: "Web Application Development", description: "Thoughtful, responsive digital experiences built around your users and goals.", points: ["Modern responsive websites", "Business platforms", "Full-stack applications"], icon: "PanelsTopLeft" },
  { number: "03", title: "Software Maintenance & Support", description: "Keep critical software dependable, secure, and ready for what comes next.", points: ["Bug fixes & improvements", "Performance optimization", "Ongoing technical support"], icon: "Wrench" },
  { number: "04", title: "Cloud & DevOps Solutions", description: "Streamline delivery and run applications on dependable modern infrastructure.", points: ["Cloud deployment", "Docker & CI/CD automation", "Infrastructure management"], icon: "Cloud" },
  { number: "05", title: "System Integration", description: "Connect services, data, and platforms into a more cohesive technology ecosystem.", points: ["Third-party integrations", "Database integration", "Backend services"], icon: "Workflow" },
  { number: "06", title: "Software Consulting", description: "Make informed technical decisions with clear, practical engineering guidance.", points: ["Technical guidance", "Architecture planning", "Technology recommendations"], icon: "Compass" }
];

export const principles = [
  { title: "Engineering excellence", description: "We value thoughtful implementation, clear decisions, and quality at every stage.", icon: "BadgeCheck" },
  { title: "Long-term reliability", description: "We consider how software behaves after launch—not just how quickly it ships.", icon: "ShieldCheck" },
  { title: "Continuous improvement", description: "We keep learning, refining, and adapting as technology and business needs evolve.", icon: "TrendingUp" },
  { title: "Client-focused solutions", description: "We start with the real problem and shape the solution around the people using it.", icon: "Users" }
];

export const processSteps = [
  { number: "01", title: "Discover", description: "Understand your goals, users, challenges, and definition of success.", icon: "Search" },
  { number: "02", title: "Plan", description: "Shape the architecture, scope, priorities, and delivery roadmap.", icon: "ClipboardList" },
  { number: "03", title: "Build", description: "Develop, review, and test the solution with quality in mind.", icon: "Code2" },
  { number: "04", title: "Deploy", description: "Prepare the release and launch with a considered delivery process.", icon: "Rocket" },
  { number: "05", title: "Maintain", description: "Monitor, support, and improve the product as requirements change.", icon: "RefreshCw" }
];

// These are clearly marked concept/demo entries, not commercial client work.
export const projects = [
  { category: "Web application", title: "Business Operations Platform", description: "A concept for bringing everyday workflows, records, and team operations into one clear workspace.", tags: ["React", "API design", "UX"], status: "Concept project", code: "" },
  { category: "Cloud & DevOps", title: "Cloud Deployment Blueprint", description: "A demonstration of containerized delivery, automated builds, and repeatable cloud infrastructure.", tags: ["Docker", "CI/CD", "Cloud"], status: "Technical demonstration", code: "" },
  { category: "Developer tools", title: "Document Conversion Service", description: "A sample service exploring secure file handling and a straightforward document-processing workflow.", tags: ["Node.js", "Express", "Automation"], status: "Demonstration project", code: "" }
];
