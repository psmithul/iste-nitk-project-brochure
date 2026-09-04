export const tracks = [
  'Chronicle',
  'Concrete',
  'Crypt',
  'Credit',
  'Clutch',
  'Charge',
  'Catalyst',
  'Create',
] as const

export type Track = (typeof tracks)[number]

export type Project = {
  id: number
  code: string
  track: Track
  title: string
  description: string
  highlights: string[]
  tags: string[]
  featured?: boolean
}

export const trackDescriptions: Record<Track, string> = {
  Chronicle: 'Stories, research & visual culture',
  Concrete: 'Cities, structures & resilience',
  Crypt: 'Software, systems & intelligence',
  Credit: 'Markets, strategy & startups',
  Clutch: 'Mechanisms, motion & robotics',
  Charge: 'Electronics, silicon & embedded systems',
  Catalyst: 'Processes, modelling & control',
  Create: 'Games, graphics & interactive worlds',
}

export const projects: Project[] = [
  {
    id: 1,
    code: 'CHRONICLE01',
    track: 'Chronicle',
    title: 'I Was There When It Rained',
    description:
      'Tell the life of an umbrella through six journals that rotate between writers every week, then shape the collected entries into an illustrated storybook.',
    highlights: [
      'Build one continuous story through a 12-week journal rotation',
      'Write the umbrella as a character with its own voice and memory',
      'Curate, edit and illustrate the journals for a final publication',
    ],
    tags: ['Creative Writing', 'Editorial', 'Illustration'],
    featured: true,
  },
  {
    id: 2,
    code: 'CHRONICLE02',
    track: 'Chronicle',
    title: 'NITK Animation',
    description:
      'Take an original visual story from a blank page to a finished animation while learning how writing, art, motion, editing and sound fit together.',
    highlights: [
      'Develop the concept, script and storyboard',
      'Design characters, backgrounds and production-ready assets',
      'Animate, edit and sound-design the finished film',
    ],
    tags: ['Animation', 'Storyboarding', 'Visual Design'],
  },
  {
    id: 3,
    code: 'CHRONICLE03',
    track: 'Chronicle',
    title: 'What Does Success Mean to You?',
    description:
      'Interview people across the NITK community to understand how age, background and experience reshape the meaning of success.',
    highlights: [
      'Plan and conduct interviews across life stages and backgrounds',
      'Analyse recurring themes, tensions and changing priorities',
      'Turn the research into a documentary, portrait series or exhibit',
    ],
    tags: ['Interviews', 'Documentary', 'Research'],
  },
  {
    id: 4,
    code: 'CHRONICLE04',
    track: 'Chronicle',
    title: 'The Evolution of Computers',
    description:
      'Trace how hardware constraints, operating systems and human-computer interaction evolved—and make that history tangible through an interactive timeline.',
    highlights: [
      'Connect hardware progress to new software and interface paradigms',
      'Research the people and institutions behind key breakthroughs',
      'Recreate interfaces from DOS and System 1 to Windows and the modern web',
    ],
    tags: ['Computing History', 'HCI', 'Web Development'],
  },
  {
    id: 5,
    code: 'CONCRETE01',
    track: 'Concrete',
    title: 'Smart Storm Water Drainage Design for a College Campus',
    description:
      'Map a real campus drainage network, estimate storm runoff and use hydraulic simulation to identify flood-prone links and practical upgrades.',
    highlights: [
      'Build a GIS inventory of drains, terrain and catchments',
      'Estimate runoff from rainfall and land-use data',
      'Model the network in SewerGEMS and propose resilient improvements',
    ],
    tags: ['GIS', 'Hydrology', 'SewerGEMS'],
    featured: true,
  },
  {
    id: 6,
    code: 'CONCRETE02',
    track: 'Concrete',
    title: 'FE-Based ML Surrogate for Crack Initiation Prediction in RC Beams',
    description:
      'Generate reinforced-concrete beam simulations and train a machine-learning surrogate that predicts when and where cracking begins.',
    highlights: [
      'Model three-point bending and concrete damage plasticity in Abaqus',
      'Create a parametric simulation dataset across beam configurations',
      'Compare surrogate models for accuracy, speed and interpretability',
    ],
    tags: ['Abaqus', 'Machine Learning', 'Structures'],
  },
  {
    id: 7,
    code: 'CONCRETE03',
    track: 'Concrete',
    title: 'Building Capacity on Stabilized Hill Slopes',
    description:
      'Study how much building load a stabilized hill slope can safely support by combining soil testing, slope simulation and structural modelling.',
    highlights: [
      'Characterise hill soil using laboratory engineering properties',
      'Model rainfall, loading and stabilization in PLAXIS 2D',
      'Link STAAD.Pro reactions to slope capacity and compare interventions',
    ],
    tags: ['PLAXIS 2D', 'STAAD.Pro', 'Geotechnical'],
  },
  {
    id: 8,
    code: 'CONCRETE04',
    track: 'Concrete',
    title: 'Performance-Based Seismic and Cost Optimization of RC Buildings',
    description:
      'Automate ETABS from Python and search for reinforced-concrete building designs that balance seismic performance, constructability and cost.',
    highlights: [
      'Generate member sizes and reinforcement layouts through ETABS automation',
      'Enforce drift, strength and demand-capacity constraints',
      'Use genetic optimization and pushover analysis to validate Pareto designs',
    ],
    tags: ['ETABS', 'Optimization', 'Seismic Design'],
    featured: true,
  },
  {
    id: 9,
    code: 'CRYPT01',
    track: 'Crypt',
    title: 'PhishGuard',
    description:
      'Build an explainable phishing detector that combines fast URL screening with deeper domain analysis, isolated investigation and community threat signals.',
    highlights: [
      'Route suspicious URLs through lexical, DNS, TLS and threat-intelligence checks',
      'Explain XGBoost risk scores and detect brand impersonation',
      'Add a safe Chromium preview, honeypot verification and adaptive retraining',
    ],
    tags: ['Cybersecurity', 'XGBoost', 'Browser Automation'],
    featured: true,
  },
  {
    id: 10,
    code: 'CRYPT02',
    track: 'Crypt',
    title: 'LeadFlow AI',
    description:
      'Create a source-transparent pipeline that discovers businesses, qualifies leads locally, verifies contact quality and supports controlled outreach.',
    highlights: [
      'Discover and enrich businesses with Places data and website crawling',
      'Score fit using a local language model and reusable target profiles',
      'Verify contacts, segment audiences and manage approval-based campaigns',
    ],
    tags: ['Local LLMs', 'Data Pipelines', 'Automation'],
  },
  {
    id: 11,
    code: 'CRYPT03',
    track: 'Crypt',
    title: 'TunnelForge',
    description:
      'Build a secure reverse-tunnelling platform that exposes local services through reliable relays, then stress it with failure and replay scenarios.',
    highlights: [
      'Implement TLS reverse tunnels and yamux stream multiplexing in Go',
      'Add host-based routing, multi-tenant identity and relay failover',
      'Ship a webhook inspector, request replay and configurable chaos mode',
    ],
    tags: ['Go', 'Networking', 'Distributed Systems'],
  },
  {
    id: 12,
    code: 'CRYPT05',
    track: 'Crypt',
    title: 'Mini Cursor',
    description:
      'Develop a repository-aware coding agent that maps unfamiliar codebases, retrieves task-specific context and makes controlled, test-verified edits.',
    highlights: [
      'Map code structure with AST and Tree-sitter analysis',
      'Orchestrate retrieval, editing and validation with a LangGraph state machine',
      'Bound the self-repair loop with permissions, timeouts and retry limits',
    ],
    tags: ['Developer Tools', 'Tree-sitter', 'Agents'],
  },
  {
    id: 13,
    code: 'CRYPT06',
    track: 'Crypt',
    title: 'CodeDuel',
    description:
      'Turn competitive programming into a live head-to-head experience with real-time matchmaking, synchronized progress and secure code judging.',
    highlights: [
      'Build the duel loop with React, Node.js and Socket.io',
      'Run submissions safely through Judge0',
      'Implement Rust/WASM matchmaking, ELO ratings and persistent profiles',
    ],
    tags: ['Real-time Web', 'Rust/WASM', 'Judge0'],
  },
  {
    id: 14,
    code: 'CREDIT01',
    track: 'Credit',
    title: 'Indian Stock Market Seasonality Dashboard',
    description:
      'Test how India-specific events affect NSE sectors and turn the results into an interactive dashboard instead of relying on market folklore.',
    highlights: [
      'Create an India-specific event calendar and sector return dataset',
      'Test event windows for magnitude, consistency and statistical significance',
      'Build a Streamlit dashboard that ranks and compares seasonal effects',
    ],
    tags: ['Markets', 'Statistics', 'Dashboard'],
  },
  {
    id: 15,
    code: 'CREDIT02',
    track: 'Credit',
    title: 'Building the Founder’s Office at Watchin It',
    description:
      'Work alongside an early-stage streaming and networking platform for independent filmmakers across product, outreach, partnerships and growth.',
    highlights: [
      'Translate filmmaker and viewer interviews into product iterations',
      'Run targeted filmmaker outreach and content acquisition',
      'Build festival partnerships, referral loops and a reusable growth playbook',
    ],
    tags: ['Product', 'Growth', 'Partnerships'],
    featured: true,
  },
  {
    id: 16,
    code: 'CREDIT03',
    track: 'Credit',
    title: 'VentureLens',
    description:
      'Learn venture-capital thinking by evaluating a new startup each week and turning repeated analysis into a shared decision framework and dashboard.',
    highlights: [
      'Apply TAM/SAM/SOM, product-market fit, founder and moat frameworks',
      'Compare business models, traction and unit economics across ventures',
      'Build a persistent evaluation database and visual dashboard',
    ],
    tags: ['Venture Capital', 'Strategy', 'Analytics'],
  },
  {
    id: 17,
    code: 'CLUTCH01',
    track: 'Clutch',
    title: 'Kinetic Energy Harvester for Speed Breakers',
    description:
      'Recover a portion of vehicle motion at a speed breaker and convert it into useful electrical power for nearby low-energy infrastructure.',
    highlights: [
      'Convert vertical travel to rotation with a rack-and-pinion mechanism',
      'Design the step-up gearing, spring return and damping system',
      'Generate and store DC power for a demonstrator such as lane sensors',
    ],
    tags: ['Mechanisms', 'Energy Harvesting', 'Prototyping'],
    featured: true,
  },
  {
    id: 18,
    code: 'CLUTCH02',
    track: 'Clutch',
    title: 'Enemy Drone Retrieval Launching Mechanism',
    description:
      'Design a reusable net-launching mechanism that captures a small hostile drone and brings it down safely enough for retrieval and inspection.',
    highlights: [
      'Compare pneumatic, spring and elastic launch architectures',
      'Design the net, launcher and parachute-assisted recovery concept',
      'Prototype and test payload, range, spread, reload and repeatability',
    ],
    tags: ['Mechanical Design', 'CAD', 'Testing'],
  },
  {
    id: 19,
    code: 'CHARGE01',
    track: 'Charge',
    title: 'Smart Active Battery Management System',
    description:
      'Build a 4-cell lithium battery manager that actively moves charge between cells while monitoring state, temperature and electrical faults.',
    highlights: [
      'Design switched-capacitor active balancing hardware',
      'Integrate a battery-monitor AFE with STM32/ESP control',
      'Implement state estimation, protection cut-offs and system telemetry',
    ],
    tags: ['Battery Systems', 'Embedded', 'Power Electronics'],
    featured: true,
  },
  {
    id: 20,
    code: 'CHARGE02',
    track: 'Charge',
    title: 'SPECTRA: Event-Stream SRAM-CIM for Edge Vision',
    description:
      'Explore compute-in-memory hardware for sparse event-camera data, keeping temporal state close to SRAM to reduce movement and energy.',
    highlights: [
      'Represent sparse events as compact x, y, time and polarity packets',
      'Design and simulate an SRAM compute-in-memory macro in ngspice',
      'Co-simulate control in Verilog and measure energy, delay and robustness',
    ],
    tags: ['VLSI', 'Compute-in-Memory', 'Edge Vision'],
  },
  {
    id: 21,
    code: 'CHARGE03',
    track: 'Charge',
    title: 'RISC-V SoC',
    description:
      'Create a working system-on-chip around an RV32I processor core, from the instruction pipeline and bus fabric to peripherals and bare-metal software.',
    highlights: [
      'Implement and verify an RV32I core in SystemVerilog',
      'Add AXI-connected caches, GPIO, UART, I²C, CLINT and PLIC',
      'Bring up bare-metal software, compliance tests and JTAG/OpenOCD debug',
    ],
    tags: ['RISC-V', 'SystemVerilog', 'Computer Architecture'],
  },
  {
    id: 22,
    code: 'CHARGE04',
    track: 'Charge',
    title: 'Digitally Tunable gm-C Low-Pass Filter',
    description:
      'Design an analogue low-pass filter whose cutoff can be tuned digitally, then accelerate transistor sizing with a learned EDA surrogate.',
    highlights: [
      'Design a folded-cascode OTA and gm-C filter in the SKY130 process',
      'Tune transconductance with a 4-bit current-steering DAC',
      'Characterise Xschem/ngspice simulations and train an ANN sizing model',
    ],
    tags: ['Analog IC', 'SKY130', 'ML for EDA'],
  },
  {
    id: 23,
    code: 'CHARGE05',
    track: 'Charge',
    title: 'miniRTOS',
    description:
      'Write a small real-time operating-system kernel for the STM32F407 and prove its behaviour with measured context-switch, jitter and deadline data.',
    highlights: [
      'Implement SysTick/PendSV context switching and priority pre-emption',
      'Add synchronization primitives and deterministic static memory',
      'Measure timing with DWT and demonstrate a five-task embedded system',
    ],
    tags: ['RTOS', 'ARM Cortex-M4', 'Embedded C'],
  },
  {
    id: 24,
    code: 'CATALYST01',
    track: 'Catalyst',
    title: 'Decentralized PID vs. MPC for Binary Distillation Control',
    description:
      'Model a methanol-water distillation column and compare conventional decentralized PID control with constrained model-predictive control.',
    highlights: [
      'Build and validate the distillation process in DWSIM',
      'Use RGA and step tests to derive loop pairings and dynamic models',
      'Compare PID and MPC on settling, error, interaction and constraints',
    ],
    tags: ['Process Control', 'DWSIM', 'MPC'],
    featured: true,
  },
  {
    id: 25,
    code: 'CATALYST02',
    track: 'Catalyst',
    title: 'Modelling and Control of an Organic Rankine Cycle',
    description:
      'Study how an Organic Rankine Cycle can turn industrial waste heat into useful power, then design controls that keep it stable as conditions change.',
    highlights: [
      'Build steady-state and dynamic models of the ORC loop',
      'Design and test control strategies for changing heat-source conditions',
      'Evaluate energy recovery and techno-economic feasibility',
    ],
    tags: ['Thermodynamics', 'Process Modelling', 'Control'],
  },
  {
    id: 26,
    code: 'CATALYST03',
    track: 'Catalyst',
    title: 'On-Site Carbon Valorization in Indian Cement Plants',
    description:
      'Turn captured cement-plant CO₂ and calcium recovered from kiln dust into precipitated calcium carbonate through an integrated on-site process.',
    highlights: [
      'Map calcium recovery from cement kiln dust and CO₂ mineralization',
      'Model and optimize the process in DWSIM and Simulink',
      'Quantify capture, product yield, energy demand and circular-resource value',
    ],
    tags: ['Carbon Capture', 'Process Design', 'Circularity'],
  },
  {
    id: 27,
    code: 'CATALYST04',
    track: 'Catalyst',
    title: 'Nature-Inspired Cooling for Electric Vehicle Batteries',
    description:
      'Use leaf and fish-gill flow patterns to design a battery cold plate that improves temperature uniformity without demanding excessive pumping power.',
    highlights: [
      'Translate branching and gill geometries into manufacturable channels',
      'Run ANSYS Fluent studies across heat loads and flow rates',
      'Optimize maximum temperature, cell-to-cell spread and pressure drop',
    ],
    tags: ['ANSYS Fluent', 'EV Thermal', 'Biomimicry'],
  },
  {
    id: 28,
    code: 'CATALYST05',
    track: 'Catalyst',
    title: 'Time-Window Fault Detection for the Tennessee Eastman Process',
    description:
      'Use sliding windows and process-aware machine learning to detect, diagnose and warn about faults in the Tennessee Eastman benchmark plant.',
    highlights: [
      'Encode temporal and correlation structure from multivariable process data',
      'Compare XGBoost, MLP and physics-informed approaches',
      'Evaluate early-warning time, diagnosis quality and explainability',
    ],
    tags: ['Fault Detection', 'Machine Learning', 'Process Systems'],
  },
  {
    id: 29,
    code: 'CREATE01',
    track: 'Create',
    title: 'The Final Semester',
    description:
      'Build a 2D zombie-survival game set across a reimagined NITK campus, combining combat, exploration, crafting, story choices and mini-games.',
    highlights: [
      'Create campus-inspired zones, three zombie types and a combat loop in Unity',
      'Implement inventory, crafting, story flags and additive mini-game scenes',
      'Produce the art and audio, then balance the game through playtesting',
    ],
    tags: ['Unity', 'Game Design', '2D Art'],
    featured: true,
  },
]

export const trackCounts = tracks.reduce(
  (counts, track) => {
    counts[track] = projects.filter((project) => project.track === track).length
    return counts
  },
  {} as Record<Track, number>,
)
