export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Sectors", href: "#sectors" },
  { label: "Clients", href: "#case-study" },
  { label: "About", href: "#credibility" },
] as const;

export const CLIENT_LOGOS = [
  "Airbus",
  "ESA",
  "Nokia",
  "Renault",
  "French Army",
  "Toshiba",
  "LG Electronics",
  "Korean Telecom",
  "ST Microelectronics",
  "ABB",
] as const;

export const PAIN_POINTS = [
  {
    icon: "AlertTriangle" as const,
    stat: "60%",
    statLabel: "of system failures",
    description:
      "trace back to specification errors caught too late in the development cycle.",
    color: "text-accent-warning",
    glowClass: "hover:shadow-[0_0_40px_rgba(255,107,53,0.15)]",
  },
  {
    icon: "Clock" as const,
    stat: "Months",
    statLabel: "of rework",
    description:
      "when process ambiguities surface during integration and testing phases.",
    color: "text-accent-primary",
    glowClass: "hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]",
  },
  {
    icon: "DollarSign" as const,
    stat: "Millions",
    statLabel: "in liability",
    description:
      "from operational flaws that formal verification would have caught before deployment.",
    color: "text-red-500",
    glowClass: "hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]",
  },
] as const;

export const SOLUTIONS = {
  process: {
    tag: "For Operations & Quality Leaders",
    title: "Verify your business processes before they go live.",
    description:
      "Model, execute, explore, and simulate your operational processes with BPMN. Detect deadlocks, ambiguities, and bottlenecks before they impact real operations.",
    benefits: [
      "Catch process flaws that human review misses",
      "Simulate time and cost under realistic scenarios",
      "Optimize resource allocation across activities",
      "Full BPMN standard compliance — your models are portable",
    ],
    cta: "Learn more about Process",
    badge: "Free editor available",
    gradient: "from-accent-primary/10 to-accent-secondary/5",
  },
  studio: {
    tag: "For System Engineers & Architects",
    title: "Specify, design, and test communicating systems — unambiguously.",
    description:
      "A complete toolchain to specify requirements, design architecture, generate tests, and trace execution for real-time and embedded systems.",
    pipeline: ["Specifier", "Developer", "Tester", "Tracer"],
    benefits: [
      "Eliminate spec-to-design misunderstandings",
      "Generate maintainable, self-documented code from models",
      "Automate validation and integration tests",
      "Trace and verify system properties against requirements",
    ],
    cta: "Learn more about Studio",
    badge: "Free for small projects",
    gradient: "from-accent-secondary/10 to-accent-primary/5",
  },
} as const;

export const SECTORS = [
  {
    icon: "Plane" as const,
    title: "Aerospace",
    description:
      "Verification of aircraft operational scenarios. Co-presented with Airbus at ERTS 2026.",
    product: "PragmaDev Studio",
    accentColor: "accent-primary",
  },
  {
    icon: "Shield" as const,
    title: "Defense & Government",
    description:
      "Outcome of a 2-year R&D project with the French Army, Eurocontrol, and Airbus DS.",
    product: "PragmaDev Process",
    accentColor: "accent-secondary",
  },
  {
    icon: "Train" as const,
    title: "Railway",
    description:
      "ETCS case study: demonstrated how formal verification could have prevented a real train accident.",
    product: "PragmaDev Studio",
    accentColor: "accent-success",
  },
  {
    icon: "Radio" as const,
    title: "Telecom",
    description:
      "ETSI conformance test suites for SIP protocols. Used by Nokia, Korean Telecom, LG Electronics.",
    product: "PragmaDev Tester",
    accentColor: "accent-warning",
  },
] as const;

export const CASE_STUDY = {
  supertitle: "Case Study — Railway Safety",
  headline:
    "How formal verification could have prevented a train accident.",
  steps: [
    {
      number: "01",
      title: "Real-world incident analysis",
      description:
        "A real train accident was analyzed using the European Train Control System (ETCS) specifications.",
    },
    {
      number: "02",
      title: "Formal modeling & verification",
      description:
        "The system was modeled in SDL and verified using automated test generation (TTCN-3).",
    },
    {
      number: "03",
      title: "Safety properties proven",
      description:
        "Critical safety properties were checked. The analysis proved the accident could have been avoided with formal verification.",
    },
  ],
  quote:
    "We demonstrate how the accident could have been avoided if the ETCS system was used.",
  quoteSource: "Published research, PragmaDev & partners",
  cta: "Read the full case study",
} as const;

export const CREDIBILITY = {
  awards: {
    title: "Awards & Recognition",
    items: [
      "Laureate of the national competition of the French Ministry of Research (2001)",
      "Member of France Innovation network",
      "Member of European DIGITAL SME Alliance",
    ],
  },
  academic: {
    title: "Academic Partners",
    items: [
      "ENSTA Paris Tech — University program",
      "ENSTA Bretagne — Joint research lab",
      "CEA LIST — PragmaList Lab",
      "NextMove — Training catalog",
    ],
  },
  industry: {
    title: "Industry Partners",
    items: [
      "MEGA International — HOPEX integration",
      "STMicroelectronics — Interrupt modeling",
      "Eurocontrol — Air traffic management",
      "ITU-T — Standards contributions",
    ],
  },
} as const;

export const TECHNOLOGIES = [
  {
    name: "BPMN",
    description: "Business Process Model and Notation — the standard for process modeling.",
  },
  {
    name: "BPSim",
    description: "Business Process Simulation — simulate time, cost, and resource allocation.",
  },
  {
    name: "SDL",
    description: "Specification and Description Language — for communicating systems design.",
  },
  {
    name: "SDL-RT",
    description: "SDL for Real-Time — extended SDL for embedded and real-time systems.",
  },
  {
    name: "TTCN-3",
    description: "Testing and Test Control Notation — international standard for test specification.",
  },
  {
    name: "ASN.1",
    description: "Abstract Syntax Notation — for defining data structures in protocols.",
  },
  {
    name: "UML",
    description: "Unified Modeling Language — architecture and behavior diagrams.",
  },
  {
    name: "FMI 2.0",
    description: "Functional Mock-up Interface — for co-simulation and model exchange.",
  },
] as const;

export const FOOTER_LINKS = {
  products: {
    title: "Products",
    links: [
      { label: "PragmaDev Process", href: "https://www.pragmadev.com/product/process.html" },
      { label: "PragmaDev Studio", href: "https://www.pragmadev.com/product/studio.html" },
      { label: "Specifier", href: "https://www.pragmadev.com/product/specifier.html" },
      { label: "Tester", href: "https://www.pragmadev.com/product/tester.html" },
    ],
  },
  technologies: {
    title: "Technologies",
    links: [
      { label: "BPMN", href: "#technologies" },
      { label: "SDL / SDL-RT", href: "#technologies" },
      { label: "TTCN-3", href: "#technologies" },
      { label: "ASN.1", href: "#technologies" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#case-study" },
      { label: "Documentation", href: "https://www.pragmadev.com" },
      { label: "Training", href: "https://www.pragmadev.com" },
      { label: "Downloads", href: "https://www.pragmadev.com" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About", href: "#credibility" },
      { label: "Partners", href: "#credibility" },
      { label: "Contact", href: "mailto:contact@pragmadev.com" },
    ],
  },
} as const;
