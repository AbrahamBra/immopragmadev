export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Sectors", href: "#sectors" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
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
  "Nortel Networks",
  "Wipro",
  "Eurocontrol",
] as const;

export const PAIN_POINTS = [
  {
    icon: "AlertTriangle" as const,
    stat: "50%",
    statLabel: "of project issues",
    description:
      "trace back to specification-to-design misunderstandings that formal modeling eliminates.",
    color: "text-accent-warning",
    glowClass: "hover:shadow-[0_0_40px_rgba(255,107,53,0.15)]",
  },
  {
    icon: "Clock" as const,
    stat: "50%",
    statLabel: "effort reduction",
    description:
      "reported by engineering teams after adopting SDL-based model-driven development with PragmaDev tools.",
    color: "text-accent-primary",
    glowClass: "hover:shadow-[0_0_40px_rgba(0,212,255,0.15)]",
    source: "Devotek Communications / Kongsberg",
  },
  {
    icon: "Shield" as const,
    stat: "70%",
    statLabel: "fewer errors",
    description:
      "in communicating system development — measured across real-world telecom projects using PragmaDev.",
    color: "text-accent-success",
    glowClass: "hover:shadow-[0_0_40px_rgba(0,255,136,0.15)]",
    source: "Devotek Communications / Kongsberg",
  },
] as const;

export const SOLUTIONS = {
  process: {
    tag: "For Operations & Quality Leaders",
    title: "Verify your business processes before they go live.",
    description:
      "Model, execute, explore, and simulate your operational processes with BPMN. Detect deadlocks, ambiguities, and bottlenecks before they impact real operations. Outcome of a 2-year R&D project with the French Army, Eurocontrol, and Airbus DS.",
    benefits: [
      "Automatic deadlock detection — find situations where processes get stuck",
      "Unreachable path identification — highlighted in red automatically",
      "BPSim time & cost simulation with statistical distributions",
      "Resource optimization with availability calendars and role management",
      "Full BPMN standard compliance — import/export any BPMN diagram",
      "MEGA International HOPEX integration available",
    ],
    cta: "Learn more about Process",
    ctaLink: "https://www.pragmadev.com/product/process.html",
    badge: "Free editor — no restrictions",
    gradient: "from-accent-primary/10 to-accent-secondary/5",
  },
  studio: {
    tag: "For System Engineers & Architects",
    title: "Specify, design, and test communicating systems — unambiguously.",
    description:
      "A complete toolchain to specify requirements, design architecture, generate tests, and trace execution for real-time and embedded systems. Integrated in ESA's TASTE framework for space applications.",
    pipeline: ["Specifier", "Developer", "Tester", "Tracer"],
    pipelineDescriptions: [
      "SDL model editors & simulator with GUI prototyping",
      "SDL-RT to C code generation with RTOS integration",
      "TTCN-3 test suites with automatic test generation",
      "Free MSC/UML tracing tool with property verification",
    ],
    benefits: [
      "SDL code generator qualified DO-178B Level C for Airbus",
      "Model checking with OBP from ENSTA Bretagne research lab",
      "FMI 2.0 support for Cyber Physical System co-simulation",
      "Deployment simulator for IoT/M2M topologies",
      "Automatic TTCN-3 test generation from models",
      "Requirements traceability with impact analysis",
    ],
    cta: "Learn more about Studio",
    ctaLink: "https://www.pragmadev.com/product/studio.html",
    badge: "Free for small projects",
    gradient: "from-accent-secondary/10 to-accent-primary/5",
  },
} as const;

export const SECTORS = [
  {
    icon: "Plane" as const,
    title: "Aerospace",
    description:
      "ATC applications for A320, A340, A380, A400M, A350 developed by Airbus subcontractor CS with PragmaDev. SDL code generator qualified DO-178B Level C. Co-presenting with Airbus at ERTS 2026 on aircraft operational scenarios.",
    product: "PragmaDev Studio",
    accentColor: "accent-primary",
    link: "https://www.pragmadev.com/milaerospace.html",
    linkLabel: "See aerospace applications",
  },
  {
    icon: "Shield" as const,
    title: "Defense & Government",
    description:
      "VeriMoB: 2-year R&D project with DGA (French Army), Eurocontrol, and Airbus DS for BPMN mission verification. French Army uses BPMN to describe mission interactions between forces.",
    product: "PragmaDev Process",
    accentColor: "accent-secondary",
    link: "https://www.pragmadev.com/product/process.html",
    linkLabel: "See defense use case",
  },
  {
    icon: "Train" as const,
    title: "Railway",
    description:
      "ETCS case study with Telecom Paris Tech: proved a real train accident could have been avoided with formal verification. Asynchronous ERTMS modeling for SNCF rail signaling systems.",
    product: "PragmaDev Studio",
    accentColor: "accent-success",
    link: "https://www.pragmadev.com/papers.html",
    linkLabel: "Read the research paper",
  },
  {
    icon: "Radio" as const,
    title: "Telecom",
    description:
      "ETSI SIP conformance test suites freely available. Used by Nokia, Korean Telecom, LG Electronics. WiFi stack development by NewLogic integrated into consumer electronics products.",
    product: "PragmaDev Tester",
    accentColor: "accent-warning",
    link: "https://www.pragmadev.com/telecom.html",
    linkLabel: "See telecom applications",
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
        "A real train accident was analyzed using the European Train Control System (ETCS) specifications by researchers at Telecom Paris Tech and PragmaDev.",
    },
    {
      number: "02",
      title: "Formal modeling & verification",
      description:
        "The system was modeled in SDL and verified using automated test generation with TTCN-3 — the international standard for conformance testing.",
    },
    {
      number: "03",
      title: "Safety properties proven",
      description:
        "Critical safety properties were checked. The analysis proved the accident could have been avoided with formal verification of the ETCS system.",
    },
  ],
  quote:
    "We demonstrate how the accident could have been avoided if the ETCS system was used.",
  quoteSource:
    "R. Ameur-Boulifa, A. Cavalli, S. Maag — ICSoft 2019, published research",
  cta: "Read the full case study",
  ctaLink: "https://www.pragmadev.com/papers.html",
} as const;

export const TESTIMONIALS = [
  {
    quote:
      "Collaboration with PragmaDev allows CS to comply with a key requirement to continually improve the development environment.",
    company: "CS (Airbus subcontractor)",
    context: "ATC applications for A320, A340, A380, A400M, A350",
    sector: "Aerospace",
    accentColor: "accent-primary",
  },
  {
    quote:
      "PragmaDev has demonstrated the superiority and flexibility of its package compared to other tools.",
    company: "Renault",
    context: "SIPTOL — real-time vehicle manufacturing management",
    sector: "Automotive",
    accentColor: "accent-secondary",
  },
  {
    quote:
      "The utilization of the tool turned out to be indispensable in the project. The idea of generating diagrams from the traces allows saving time and getting a better understanding of the global architecture.",
    company: "ST-Ericsson",
    context: "OpenMAX IL software layer on ARM core",
    sector: "Semiconductor",
    accentColor: "accent-success",
  },
  {
    quote:
      "Development effort reduction of 50% and error reduction of 70% using PragmaDev tools with SDL.",
    company: "Devotek Communications",
    context: "Kongsberg subsidiary — GSM & 3G consultancy and development",
    sector: "Telecom",
    accentColor: "accent-warning",
  },
] as const;

export const TIMELINE_EVENTS = [
  {
    year: "2001",
    title: "PragmaDev founded",
    description:
      "Winner of the national competition on innovative technologies from the French Ministry of Research.",
    highlight: true,
  },
  {
    year: "2002",
    title: "Airbus ATC begins",
    description:
      "Airbus subcontractor CS starts developing Air Traffic Control applications with PragmaDev for A320/A340.",
    highlight: false,
  },
  {
    year: "2004",
    title: "SDL model simulator",
    description:
      "Major release RTDS G3 introduces full SDL support with model simulation capability.",
    highlight: false,
  },
  {
    year: "2007",
    title: "SDL Forum in Paris",
    description:
      "PragmaDev hosts the international SDL Forum. Co-edits proceedings published by Springer LNCS.",
    highlight: true,
  },
  {
    year: "2009",
    title: "TTCN-3 integration",
    description:
      "V4 introduces TTCN-3 international testing standard — enabling automated model-based testing.",
    highlight: false,
  },
  {
    year: "2010",
    title: "ESA TASTE framework",
    description:
      "PragmaDev Specifier integrated into ESA's open-source TASTE framework for space software development.",
    highlight: true,
  },
  {
    year: "2013",
    title: "CEA List partnership",
    description:
      "PragmaList joint research lab established with CEA List for symbolic analysis and test generation.",
    highlight: false,
  },
  {
    year: "2018",
    title: "VeriMoB project",
    description:
      "Collaborative R&D with DGA (French Army), Eurocontrol, and Airbus DS for BPMN verification.",
    highlight: true,
  },
  {
    year: "2019",
    title: "PragmaDev Process launches",
    description:
      "First release of the BPMN verification and simulation tool — born from the VeriMoB project.",
    highlight: false,
  },
  {
    year: "2022",
    title: "Studio V6.0",
    description:
      "New model checker (OBP), SDL broadcast support, native 64-bit, FMI 2.0 co-simulation.",
    highlight: true,
  },
  {
    year: "2026",
    title: "ERTS 2026 with Airbus",
    description:
      "Co-presenting paper on aircraft operational scenarios via SysML Activity Diagram to BPMN transformation.",
    highlight: true,
  },
] as const;

export const PRICING = [
  {
    name: "PragmaDev Process",
    description: "BPMN verification & simulation",
    free: "Editor — completely free, no restrictions",
    paid: "90",
    paidLabel: "€/month per license",
    features: [
      "BPMN editor with semantic verification",
      "Path exploration & complexity analysis",
      "Deadlock & unreachable path detection",
      "BPSim time & cost simulation",
      "Resource optimization",
      "Property verification (PSC/OBP)",
    ],
    ctaFree: "Download Free Editor",
    ctaFreeLink: "https://www.pragmadev.com/downloads/index.html",
    ctaPaid: "Get Full Version",
    ctaPaidLink: "mailto:info@pragmadev.com",
    accentColor: "accent-primary",
    popular: false,
  },
  {
    name: "PragmaDev Studio",
    description: "Complete SDL/TTCN-3 toolchain",
    free: "Free up to 50KB/file, 200KB/project",
    paid: "290",
    paidLabel: "€/month per license",
    features: [
      "Specifier + Developer + Tester + Tracer",
      "SDL & SDL-RT model editors & simulators",
      "TTCN-3 test suite editor & code generator",
      "Model checking (OBP explorer)",
      "C/C++ code generation",
      "Deployment & performance simulation",
      "FMI 2.0 co-simulation",
      "Requirements traceability",
    ],
    ctaFree: "Download Free Edition",
    ctaFreeLink: "https://www.pragmadev.com/downloads/index.html",
    ctaPaid: "Get Full License",
    ctaPaidLink: "mailto:info@pragmadev.com",
    accentColor: "accent-secondary",
    popular: true,
  },
  {
    name: "PragmaDev Tracer",
    description: "MSC/UML tracing & properties",
    free: "100% free — no license required",
    paid: "0",
    paidLabel: "Always free",
    features: [
      "MSC & UML 2.0 Sequence Diagrams",
      "Property Sequence Chart (PSC)",
      "On-line & off-line system tracing",
      "Socket-based live connection",
      "PNG, PostScript, HTML export",
      "Windows, Linux, macOS",
    ],
    ctaFree: "Download Tracer",
    ctaFreeLink: "https://www.pragmadev.com/downloads/index.html",
    ctaPaid: "",
    ctaPaidLink: "",
    accentColor: "accent-success",
    popular: false,
  },
] as const;

export const DEMO_VIDEOS = [
  {
    title: "Business Process Verification",
    description: "See PragmaDev Process main functionalities — deadlock detection, path exploration, and property verification in 10 minutes.",
    duration: "10 min",
    link: "https://www.pragmadev.com/presentations.html",
    product: "Process",
  },
  {
    title: "PragmaDev Studio Introduction",
    description: "Seven-minute overview of the complete SDL/TTCN-3 toolchain — from specification to code generation and testing.",
    duration: "7 min",
    link: "https://www.pragmadev.com/presentations.html",
    product: "Studio",
  },
  {
    title: "Business Process Simulation",
    description: "BPSim in action — simulate time, cost, and resource allocation with statistical distributions across your BPMN models.",
    duration: "10 min",
    link: "https://www.pragmadev.com/presentations.html",
    product: "Process",
  },
] as const;

export const STATS = [
  { value: "25+", label: "Years of innovation", suffix: "since 2001" },
  { value: "700+", label: "Education licenses", suffix: "worldwide" },
  { value: "60+", label: "Universities", suffix: "across 25+ countries" },
  { value: "DO-178B", label: "Level C qualified", suffix: "for Airbus ATC" },
] as const;

export const CREDIBILITY = {
  awards: {
    title: "Awards & Recognition",
    items: [
      "National innovation competition winner — French Ministry of Research (2001)",
      "\"Master de la création d'entreprise\" — Salon des Entrepreneurs, Paris (2002)",
      "Best-IT company selection — Capital-IT (2004)",
      "\"Master de la création d'entreprise\" — awarded at French Parliament (2005)",
      "Member of France Innovation network",
      "Member of European DIGITAL SME Alliance",
    ],
  },
  academic: {
    title: "Academic Partners",
    items: [
      "ENSTA Paris Tech — University program (700+ licenses)",
      "ENSTA Bretagne — Joint research lab (OBP model checker)",
      "CEA LIST — PragmaList Lab (symbolic analysis since 2013)",
      "Telecom Paris Tech — ETCS railway safety research",
      "NextMove — SDL & BPMN courses in training catalog",
      "60+ universities across 25+ countries",
    ],
  },
  industry: {
    title: "Industry Partners",
    items: [
      "MEGA International — HOPEX integration (since 2020)",
      "CIMPA — PLM partner for aerospace & defence (since 2020)",
      "ESA/ESTEC — TASTE framework integration (since 2010)",
      "STMicroelectronics — SDL interrupt modeling",
      "Eurocontrol — Air traffic management (VeriMoB)",
      "ITU-T — SDL/MSC/TTCN-3 standards contributions",
    ],
  },
} as const;

export const TECHNOLOGIES = [
  {
    name: "BPMN",
    fullName: "Business Process Model and Notation",
    description: "OMG standard for specifying business processes. PragmaDev Process provides editing, execution, exploration, and simulation.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "BPSim",
    fullName: "Business Process Simulation",
    description: "De facto standard extending BPMN with time, cost, and resource simulation using statistical distributions.",
    link: "https://www.pragmadev.com/product/processSimulation.html",
  },
  {
    name: "SDL",
    fullName: "ITU-T Z.100 — Specification and Description Language",
    description: "International standard for specifying communicating systems. Fully formal — enables simulation, verification, and code generation.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "SDL-RT",
    fullName: "ITU-T Z.104 — SDL for Real-Time",
    description: "Extended SDL replacing action language with C/C++ for embedded and real-time systems. Standardized in 2012.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "TTCN-3",
    fullName: "ITU-T Z.161 — Testing and Test Control Notation",
    description: "International standard for conformance testing. Used by ETSI and Autosar. PragmaDev provides editor, simulator, and C++ code generator.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "ASN.1",
    fullName: "ITU-T X.680 — Abstract Syntax Notation One",
    description: "Standardized interface notation with BER, PER, XER encoding rules. Integrated with OSS Nokalva and Marben tools.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "MSC/PSC",
    fullName: "ITU-T Z.120 — Message Sequence Charts",
    description: "Graphical trace notation with Property Sequence Charts for defining and verifying system properties.",
    link: "https://www.pragmadev.com/technology.html",
  },
  {
    name: "FMI 2.0",
    fullName: "Functional Mock-up Interface",
    description: "Co-simulation and model exchange for Cyber Physical Systems. Tested with OpenModelica and Ansys Scade.",
    link: "https://www.pragmadev.com/technology.html",
  },
] as const;

export const FOOTER_LINKS = {
  products: {
    title: "Products",
    links: [
      { label: "PragmaDev Process", href: "https://www.pragmadev.com/product/process.html" },
      { label: "PragmaDev Studio", href: "https://www.pragmadev.com/product/studio.html" },
      { label: "Specifier", href: "https://www.pragmadev.com/product/specifier.html" },
      { label: "Developer", href: "https://www.pragmadev.com/product/developer.html" },
      { label: "Tester", href: "https://www.pragmadev.com/product/tester.html" },
      { label: "Tracer", href: "https://www.pragmadev.com/product/tracer.html" },
    ],
  },
  technologies: {
    title: "Technologies",
    links: [
      { label: "BPMN / BPSim", href: "https://www.pragmadev.com/technology.html" },
      { label: "SDL / SDL-RT", href: "https://www.pragmadev.com/technology.html" },
      { label: "TTCN-3", href: "https://www.pragmadev.com/technology.html" },
      { label: "ASN.1", href: "https://www.pragmadev.com/technology.html" },
      { label: "FMI 2.0", href: "https://www.pragmadev.com/technology.html" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Success Stories", href: "https://www.pragmadev.com/successStories.html" },
      { label: "Use Cases", href: "https://www.pragmadev.com/useCases.html" },
      { label: "Papers", href: "https://www.pragmadev.com/papers.html" },
      { label: "Video Presentations", href: "https://www.pragmadev.com/presentations.html" },
      { label: "Downloads", href: "https://www.pragmadev.com/downloads/index.html" },
      { label: "FAQ", href: "https://www.pragmadev.com/support/faq.html" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "Vision", href: "https://www.pragmadev.com/company.html" },
      { label: "Partners", href: "https://www.pragmadev.com/partners.html" },
      { label: "Universities", href: "https://www.pragmadev.com/universities.html" },
      { label: "Services", href: "https://www.pragmadev.com/services.html" },
      { label: "News", href: "https://www.pragmadev.com/news.html" },
      { label: "Contact", href: "https://www.pragmadev.com/contact.html" },
    ],
  },
} as const;

export const COMPANY_INFO = {
  name: "PragmaDev SARL",
  address: "18, rue des Tournelles, 75004 Paris, France",
  phone: "+33 1 42 74 15 38",
  email: "info@pragmadev.com",
  supportEmail: "support@pragmadev.com",
  founded: "2001",
  founders: "Emmanuel Gaudin & Eric Brunel",
  tagline: "Modeling and testing tools since 2001",
} as const;
