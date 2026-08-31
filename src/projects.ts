export const tracks = [
  'Chronicle',
  'Concrete',
  'Crypt',
  'Credit',
  'Clutch',
  'Charge',
] as const

export type Track = (typeof tracks)[number]

export type Project = {
  id: number
  track: Track
  title: string
  description: string
  tags: string[]
  featured?: boolean
}

export const trackDescriptions: Record<Track, string> = {
  Chronicle: 'Stories, ideas & culture',
  Concrete: 'Cities, structures & resilience',
  Crypt: 'Software, systems & intelligence',
  Credit: 'Markets, strategy & startups',
  Clutch: 'Mechanisms, motion & control',
  Charge: 'Energy, electronics & storage',
}

export const projects: Project[] = [
  {
    id: 1,
    track: 'Chronicle',
    title: 'What Does a Good Life Mean?',
    description:
      'A philosophy-led inquiry into how purpose, choice and everyday experience shape a life worth living.',
    tags: ['Research', 'Interviews', 'Editorial'],
  },
  {
    id: 2,
    track: 'Chronicle',
    title: 'I Was There When It Rained: The Diary of an Umbrella',
    description:
      'A narrative experiment told through an object that saw the storm from the street—part memory, part visual storytelling.',
    tags: ['Storytelling', 'Writing', 'Visuals'],
    featured: true,
  },
  {
    id: 3,
    track: 'Chronicle',
    title: 'NITK Animation',
    description:
      'A motion-first portrait of campus life, translating NITK’s people, rituals and energy into animation.',
    tags: ['Animation', 'Campus', 'Direction'],
  },
  {
    id: 4,
    track: 'Concrete',
    title:
      'Finite Element-Informed Machine Learning Surrogate Model for Crack Initiation Prediction in Reinforced Concrete Beams',
    description:
      'Build a surrogate model that learns from finite-element simulations to estimate when and where reinforced concrete beams begin to crack.',
    tags: ['FEM', 'Machine Learning', 'Structures'],
    featured: true,
  },
  {
    id: 5,
    track: 'Concrete',
    title: 'Smart Storm Water Drainage Design for a College Campus',
    description:
      'Map campus runoff, identify pressure points and propose a resilient storm-water network built for intense monsoons.',
    tags: ['Hydrology', 'GIS', 'Campus'],
  },
  {
    id: 6,
    track: 'Concrete',
    title:
      'Performance-Based Seismic and Cost Optimization of RC Buildings Using ETABS and Python',
    description:
      'Link ETABS analysis with Python-led optimization to balance seismic performance, material use and project cost.',
    tags: ['ETABS', 'Python', 'Optimization'],
    featured: true,
  },
  {
    id: 7,
    track: 'Concrete',
    title: 'Building Capacity on Stabilized Hill Slopes',
    description:
      'Study how soil stabilization and slope geometry can unlock safer construction capacity on challenging hill terrain.',
    tags: ['Geotechnical', 'Safety', 'Design'],
  },
  {
    id: 8,
    track: 'Crypt',
    title: 'VeloxDB',
    description:
      'Design a database around speed: efficient storage, low-latency retrieval and a systems-minded performance benchmark.',
    tags: ['Databases', 'Systems', 'Performance'],
  },
  {
    id: 9,
    track: 'Crypt',
    title: 'EdgeGrid OS',
    description:
      'Explore an operating layer for distributed edge nodes—coordinating compute, workloads and resources beyond the cloud.',
    tags: ['Edge Compute', 'Distributed Systems', 'OS'],
  },
  {
    id: 10,
    track: 'Crypt',
    title: 'CodeDuel',
    description:
      'A competitive coding arena where participants can challenge one another, solve under pressure and learn in public.',
    tags: ['Full Stack', 'Realtime', 'Community'],
  },
  {
    id: 11,
    track: 'Crypt',
    title: 'Mini Cursor',
    description:
      'Build a focused AI coding companion with context-aware editing, code navigation and developer-first interactions.',
    tags: ['Developer Tools', 'AI', 'UX'],
  },
  {
    id: 12,
    track: 'Crypt',
    title: 'URL Phishing Detection System',
    description:
      'Turn suspicious URLs into explainable risk signals using lexical, domain and behavioural features.',
    tags: ['Cybersecurity', 'ML', 'Explainability'],
  },
  {
    id: 13,
    track: 'Crypt',
    title:
      'LeadFlow AI — Intelligent Lead Generation, Outreach and Engagement Automation Pipeline',
    description:
      'Prototype a responsible pipeline that discovers prospects, drafts outreach and coordinates follow-ups without losing human oversight.',
    tags: ['Automation', 'AI Agents', 'Product'],
    featured: true,
  },
  {
    id: 14,
    track: 'Credit',
    title: "Building the Founders’ Office at an Early-Stage Startup — Watchin It",
    description:
      'Work across research, strategy and execution inside an early-stage startup, learning how ambiguous priorities become shipped outcomes.',
    tags: ['Strategy', 'Operations', 'Startup'],
    featured: true,
  },
  {
    id: 15,
    track: 'Credit',
    title: 'VentureLens: Learning the Art of Venture Capital & Startup Evaluation',
    description:
      'Build an analyst’s lens for markets, teams and business models through hands-on startup evaluation.',
    tags: ['Venture Capital', 'Research', 'Finance'],
  },
  {
    id: 16,
    track: 'Credit',
    title: 'Live Projects: PURB AI, First Principle',
    description:
      'Partner with PURB AI and First Principle on real briefs where structured thinking has to survive contact with execution.',
    tags: ['Consulting', 'Live Briefs', 'Execution'],
  },
  {
    id: 17,
    track: 'Credit',
    title: 'Energy — The AI Fuel',
    description:
      'Investigate the infrastructure behind AI—from compute demand and grid constraints to the businesses powering the next wave.',
    tags: ['Energy', 'AI Economy', 'Thesis'],
  },
  {
    id: 18,
    track: 'Credit',
    title: 'Indian Stock Market Seasonality Dashboard',
    description:
      'Reveal recurring calendar patterns across Indian equities with an interactive, evidence-led dashboard.',
    tags: ['Markets', 'Data', 'Dashboard'],
  },
  {
    id: 19,
    track: 'Clutch',
    title: 'Harvesting Wasted Mechanical Energy from Vehicles',
    description:
      'Design a mechanism that captures otherwise-lost vehicle motion or vibration and converts it into useful electrical energy.',
    tags: ['Energy Harvesting', 'Vehicles', 'Prototyping'],
    featured: true,
  },
  {
    id: 20,
    track: 'Clutch',
    title: 'Active Vibration Isolation',
    description:
      'Sense unwanted motion, model the system and counter it in real time through feedback control.',
    tags: ['Controls', 'Dynamics', 'Sensors'],
  },
  {
    id: 21,
    track: 'Charge',
    title:
      'Smart Active Battery Management System (BMS) with Switched-Capacitor Cell Balancing',
    description:
      'Develop a smart BMS architecture that actively moves charge between cells to improve pack balance, health and usable capacity.',
    tags: ['BMS', 'Power Electronics', 'Embedded'],
    featured: true,
  },
]

export const trackCounts = Object.fromEntries(
  tracks.map((track) => [
    track,
    projects.filter((project) => project.track === track).length,
  ]),
) as Record<Track, number>
