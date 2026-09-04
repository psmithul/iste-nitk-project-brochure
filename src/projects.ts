export const tracks = [
  'Catalyst',
  'Charge',
  'Chronicle',
  'Clutch',
  'Concrete',
  'Create',
  'Credit',
  'Crypt',
] as const

export type Track = (typeof tracks)[number]

export type ProjectPerson = {
  name: string
  role: 'Project head' | 'Project lead'
  linkedinUrl?: string
  standoutFact?: string
}

export type Project = {
  id: number
  code: string
  track: Track
  title: string
  description: string
  highlights: string[]
  tags: string[]
  detailsAvailable: boolean
  people?: ProjectPerson[]
  featured?: boolean
}

export const trackDescriptions: Record<Track, string> = {
  Catalyst: 'Processes, modelling & control',
  Charge: 'Electronics, silicon & embedded systems',
  Chronicle: 'Stories, research & visual culture',
  Clutch: 'Mechanisms, motion & robotics',
  Concrete: 'Cities, structures & resilience',
  Create: 'Games, graphics & interactive worlds',
  Credit: 'Markets, strategy & startups',
  Crypt: 'Software, systems & intelligence',
}

const comingSoon =
  'This project is part of the current ISTE NITK roster. Its complete brief, learning path and expected deliverables are being prepared.'

const projectBriefs: Project[] = [
  {
    id: 1,
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
    detailsAvailable: true,
    featured: true,
    people: [
      { name: 'Antara Dongre', role: 'Project lead' },
      { name: 'Aysha K C', role: 'Project head' },
    ],
  },
  {
    id: 2,
    code: 'CATALYST04',
    track: 'Catalyst',
    title: 'Designing a Nature-Inspired Cooling System for Electric Vehicle Batteries',
    description:
      'Use leaf and fish-gill flow patterns to design a battery cold plate that improves temperature uniformity without demanding excessive pumping power.',
    highlights: [
      'Translate branching and gill geometries into manufacturable channels',
      'Run ANSYS Fluent studies across heat loads and flow rates',
      'Optimize maximum temperature, cell-to-cell spread and pressure drop',
    ],
    tags: ['ANSYS Fluent', 'EV Thermal', 'Biomimicry'],
    detailsAvailable: true,
    people: [
      { name: 'Pranjali', role: 'Project lead' },
      { name: 'Abhishek Mahato', role: 'Project head' },
    ],
  },
  {
    id: 3,
    code: 'CATALYST01',
    track: 'Catalyst',
    title: 'Decentralized PID vs. MPC for Binary Distillation Composition Control',
    description:
      'Model a methanol-water distillation column and compare conventional decentralized PID control with constrained model-predictive control.',
    highlights: [
      'Build and validate the distillation process in DWSIM',
      'Use RGA and step tests to derive loop pairings and dynamic models',
      'Compare PID and MPC on settling, error, interaction and constraints',
    ],
    tags: ['Process Control', 'DWSIM', 'MPC'],
    detailsAvailable: true,
    people: [
      { name: 'Nandini Eswaran', role: 'Project lead' },
      { name: 'Greeshma', role: 'Project head' },
    ],
  },
  {
    id: 4,
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
    detailsAvailable: true,
    people: [
      { name: 'Chowhan Deepak', role: 'Project lead' },
      { name: 'John', role: 'Project head' },
    ],
  },
  {
    id: 5,
    code: 'CATALYST05',
    track: 'Catalyst',
    title:
      'Time-Window Fault Detection, Diagnosis & Early Warning for the Tennessee Eastman Chemical Process: Correlation-Based vs Modern ML',
    description:
      'Use sliding windows and process-aware machine learning to detect, diagnose and warn about faults in the Tennessee Eastman benchmark plant.',
    highlights: [
      'Encode temporal and correlation structure from multivariable process data',
      'Compare XGBoost, MLP and physics-informed approaches',
      'Evaluate early-warning time, diagnosis quality and explainability',
    ],
    tags: ['Fault Detection', 'Machine Learning', 'Process Systems'],
    detailsAvailable: true,
    people: [{ name: 'Rudransh Pandey', role: 'Project lead' }],
  },
  {
    id: 6,
    code: 'CHARGE01',
    track: 'Charge',
    title: 'Smart Active Battery Management System (BMS) with Switched-Capacitor Cell Balancing',
    description:
      'Build a four-cell lithium battery manager that actively moves charge between cells while monitoring state, temperature and electrical faults.',
    highlights: [
      'Design switched-capacitor active balancing hardware',
      'Integrate a battery-monitor AFE with STM32 or ESP control',
      'Implement state estimation, protection cut-offs and system telemetry',
    ],
    tags: ['Battery Systems', 'Embedded', 'Power Electronics'],
    detailsAvailable: true,
    featured: true,
    people: [
      { name: 'Sanjeetha S', role: 'Project lead' },
      { name: 'Afrah Hajira', role: 'Project head' },
    ],
  },
  {
    id: 7,
    code: 'CHARGE02',
    track: 'Charge',
    title: 'SRAM Forge: Event-Stream SRAM-CIM for Edge Vision',
    description:
      'Explore compute-in-memory hardware for sparse event-camera data, keeping temporal state close to SRAM to reduce data movement and energy use.',
    highlights: [
      'Represent sparse visual changes as compact x, y, time and polarity event packets',
      'Design and simulate an event-native SRAM compute-in-memory macro in ngspice',
      'Co-simulate Verilog control with transistor-level sensing and measure energy, delay and robustness',
    ],
    tags: ['VLSI', 'Compute-in-Memory', 'Edge Vision'],
    detailsAvailable: true,
    people: [{ name: 'Rhea', role: 'Project lead' }],
  },
  {
    id: 8,
    code: 'CHARGE03',
    track: 'Charge',
    title: 'RISC-V SoC',
    description:
      'Create a working system-on-chip around a 32-bit RV32I processor core, from the instruction datapath and AXI memory interface to peripherals and bare-metal software.',
    highlights: [
      'Implement and verify a single-cycle RV32I core in SystemVerilog',
      'Add instruction and data caches with GPIO, UART, I²C, CLINT and PLIC support',
      'Bring up bare-metal C software, compliance tests and JTAG/OpenOCD debugging on FPGA',
    ],
    tags: ['RISC-V', 'SystemVerilog', 'Computer Architecture'],
    detailsAvailable: true,
    people: [
      { name: 'Devendranath R', role: 'Project lead' },
      { name: 'Sai Abhinay', role: 'Project head' },
    ],
  },
  {
    id: 9,
    code: 'CHARGE04',
    track: 'Charge',
    title: 'Digitally Tunable gm-C Low-Pass Filter in SKY130 & ML-Driven EDA Automation',
    description:
      'Design a digitally tunable analogue low-pass filter around a folded-cascode OTA, then accelerate weak-inversion transistor sizing with a learned EDA surrogate.',
    highlights: [
      'Design and characterize a folded-cascode OTA and gm-C filter in the SKY130 process',
      'Tune transconductance with a four-bit current-steering DAC while preserving closed-loop stability',
      'Automate ngspice sizing in Python and train an ANN surrogate for rapid design-space exploration',
    ],
    tags: ['Analog IC', 'SKY130', 'ML for EDA'],
    detailsAvailable: true,
    people: [
      { name: 'Shreyash', role: 'Project lead' },
      { name: 'Chinmay', role: 'Project head' },
    ],
  },
  {
    id: 10,
    code: 'CHARGE05',
    track: 'Charge',
    title: 'miniRTOS: A Bare-Metal Real-Time Operating System Kernel for ARM Cortex-M4',
    description:
      'Write a real-time operating-system kernel from scratch for the STM32F407 and prove its behaviour with measured context-switch, jitter and deadline data.',
    highlights: [
      'Implement SysTick and PendSV context switching with priority-based pre-emption',
      'Add priority-inheritance mutexes, semaphores, queues, event flags and static memory management',
      'Measure execution time, latency and jitter with DWT while running a five-task hardware demonstration',
    ],
    tags: ['RTOS', 'ARM Cortex-M4', 'Embedded C'],
    detailsAvailable: true,
    people: [
      { name: 'Rohini', role: 'Project lead' },
      { name: 'Swetha', role: 'Project head' },
    ],
  },
  {
    id: 7,
    code: 'CHRONICLE01',
    track: 'Chronicle',
    title: 'I Was There When It Rained: The Diary of an Umbrella',
    description:
      'Tell the life of an umbrella through six journals that rotate between writers every week, then shape the collected entries into an illustrated storybook.',
    highlights: [
      'Build one continuous story through a 12-week journal rotation',
      'Write the umbrella as a character with its own voice and memory',
      'Curate, edit and illustrate the journals for a final publication',
    ],
    tags: ['Creative Writing', 'Editorial', 'Illustration'],
    detailsAvailable: true,
    featured: true,
    people: [
      { name: 'B. Dhilleswari', role: 'Project lead' },
      { name: 'Hitee', role: 'Project head' },
    ],
  },
  {
    id: 8,
    code: 'CHRONICLE04',
    track: 'Chronicle',
    title: 'History and Evolution of Computers',
    description:
      'Trace how hardware constraints, operating systems and human-computer interaction evolved—and make that history tangible through an interactive timeline.',
    highlights: [
      'Connect hardware progress to new software and interface paradigms',
      'Research the people and institutions behind key breakthroughs',
      'Recreate interfaces from DOS and System 1 to Windows and the modern web',
    ],
    tags: ['Computing History', 'HCI', 'Web Development'],
    detailsAvailable: true,
    people: [{ name: 'Nithin Teja', role: 'Project lead' }],
  },
  {
    id: 9,
    code: 'CHRONICLE02',
    track: 'Chronicle',
    title: 'NITK-Animation',
    description:
      'Take an original visual story from a blank page to a finished animation while learning how writing, art, motion, editing and sound fit together.',
    highlights: [
      'Develop the concept, script and storyboard',
      'Design characters, backgrounds and production-ready assets',
      'Animate, edit and sound-design the finished film',
    ],
    tags: ['Animation', 'Storyboarding', 'Visual Design'],
    detailsAvailable: true,
    people: [
      { name: 'Kalyani', role: 'Project lead' },
      { name: 'Alphin', role: 'Project head' },
    ],
  },
  {
    id: 10,
    code: 'CHRONICLE03',
    track: 'Chronicle',
    title: 'What Does Success Mean to You?',
    description:
      'Interview people across the NITK community to understand how age, background and experience reshape the meaning of a good life.',
    highlights: [
      'Plan and conduct interviews across life stages and backgrounds',
      'Analyse recurring themes, tensions and changing priorities',
      'Turn the research into a documentary, portrait series or exhibit',
    ],
    tags: ['Interviews', 'Documentary', 'Research'],
    detailsAvailable: true,
    people: [
      { name: 'Deekshitha U M', role: 'Project lead' },
      {
        name: 'Kruthika C S',
        role: 'Project head',
        linkedinUrl: 'https://in.linkedin.com/in/kruthikacs29',
        standoutFact:
          'Built a low-cost portable evaporative cold-storage prototype that brought its chamber from 33°C to about 27°C using water, airflow and repurposed materials.',
      },
    ],
  },
  {
    id: 11,
    code: 'CLUTCH03',
    track: 'Clutch',
    title: 'XYLEM ENGINE: A Solar-Powered Artificial Tree for Desalination',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 12,
    code: 'CLUTCH04',
    track: 'Clutch',
    title: 'Active Vibration Isolation',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 13,
    code: 'CLUTCH01',
    track: 'Clutch',
    title: 'Regenerative Speed Breaker Energy Harvester',
    description:
      'Recover a portion of vehicle motion at a speed breaker and convert it into useful electrical power for nearby low-energy infrastructure.',
    highlights: [
      'Convert vertical travel to rotation with a rack-and-pinion mechanism',
      'Design the step-up gearing, spring return and damping system',
      'Generate and store DC power for a demonstrator such as lane sensors',
    ],
    tags: ['Mechanisms', 'Energy Harvesting', 'Prototyping'],
    detailsAvailable: true,
    featured: true,
    people: [
      {
        name: 'A Shaina Vanessa',
        role: 'Project head',
        linkedinUrl: 'https://in.linkedin.com/in/a-shaina-vanessa-584271374',
        standoutFact: 'Has already anchored 11 events at NITK, including formal alumni panels.',
      },
      {
        name: 'Param S',
        role: 'Project head',
        linkedinUrl: 'https://in.linkedin.com/in/params29',
      },
      {
        name: 'Yaagh Aiyappa',
        role: 'Project lead',
        linkedinUrl: 'https://in.linkedin.com/in/yaaghaiyappa',
        standoutFact:
          'A Mechanical Engineering student who cleared GATE 2026 in Electronics and Communication Engineering with AIR 2217.',
      },
    ],
  },
  {
    id: 14,
    code: 'CLUTCH02',
    track: 'Clutch',
    title: 'Enemy Drone Retrieval Launching Mechanism',
    description:
      'Design and prototype a reusable, net-based launcher intended to intercept and recover small UAVs without destroying them, using CAD-led mechanism selection and controlled testing.',
    highlights: [
      'Compare spring, elastic and pneumatic launch concepts before selecting a safe reusable mechanism',
      'Develop the structure, deployment system and recovery approach through CAD and engineering analysis',
      'Build a working prototype and evaluate launch consistency, capture behaviour and soft recovery',
    ],
    tags: ['Mechanism Design', 'UAV Retrieval', 'Prototyping'],
    detailsAvailable: true,
    people: [
      { name: 'Siddharth Mohan', role: 'Project lead' },
      { name: 'Shravani J Jogottu', role: 'Project head' },
    ],
  },
  {
    id: 14,
    code: 'CLUTCH05',
    track: 'Clutch',
    title: 'Adaptive Ergonomic Workstation',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 15,
    code: 'CONCRETE02',
    track: 'Concrete',
    title:
      'Finite Element-Informed Machine Learning Surrogate Model for Crack Initiation Prediction in Reinforced Concrete Beams',
    description:
      'Generate reinforced-concrete beam simulations and train a machine-learning surrogate that predicts when and where cracking begins.',
    highlights: [
      'Model three-point bending and concrete damage plasticity in Abaqus',
      'Create a parametric simulation dataset across beam configurations',
      'Compare surrogate models for accuracy, speed and interpretability',
    ],
    tags: ['Abaqus', 'Machine Learning', 'Structures'],
    detailsAvailable: true,
    featured: true,
    people: [
      {
        name: 'Grishma Mohan Kadangot',
        role: 'Project lead',
        linkedinUrl: 'https://in.linkedin.com/in/grishma-mohan-kadangot-543490312',
        standoutFact:
          'Her public project feed spotlights sustainable 3D concrete printing, including a formwork-free bench prototype shown at NITK’s Project Expo.',
      },
      { name: 'Molly Samadhiya', role: 'Project head' },
      { name: 'Tagnata', role: 'Project head' },
      { name: 'Bharath', role: 'Project head' },
    ],
  },
  {
    id: 16,
    code: 'CONCRETE05',
    track: 'Concrete',
    title: 'Near-Fault Directivity Effects and Their Implications',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 17,
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
    detailsAvailable: true,
    people: [
      { name: 'Vansh Goyal', role: 'Project lead' },
      { name: 'Vineesh', role: 'Project head' },
      { name: 'Saish Patil', role: 'Project head' },
    ],
  },
  {
    id: 18,
    code: 'CONCRETE04',
    track: 'Concrete',
    title: 'Performance-Based Seismic and Cost Optimization of RC Buildings Using ETABS and Python',
    description:
      'Automate ETABS from Python and search for reinforced-concrete building designs that balance seismic performance, constructability and cost.',
    highlights: [
      'Generate member sizes and reinforcement layouts through ETABS automation',
      'Enforce drift, strength and demand-capacity constraints',
      'Use genetic optimization and pushover analysis to validate Pareto designs',
    ],
    tags: ['ETABS', 'Optimization', 'Seismic Design'],
    detailsAvailable: true,
    people: [
      { name: 'Omair Ahmed J', role: 'Project lead' },
      { name: 'Vismaya K K', role: 'Project head' },
    ],
  },
  {
    id: 19,
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
    detailsAvailable: true,
    people: [
      { name: 'Bhagyavanti', role: 'Project lead' },
      { name: 'Revanasiddesh', role: 'Project head' },
    ],
  },
  {
    id: 20,
    code: 'CONCRETE06',
    track: 'Concrete',
    title:
      'Compressive Behavior of Sustainable Concrete Mixes: Experimental Testing and FEM Validation Using the Concrete Damaged Plasticity Model',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 21,
    code: 'CREATE01',
    track: 'Create',
    title: 'The Final Semester — A 2D Zombie Survival Adventure Game',
    description:
      'Build a 2D zombie-survival game set across a reimagined NITK campus, combining combat, exploration, crafting, story choices and mini-games.',
    highlights: [
      'Create campus-inspired zones, three zombie types and a combat loop in Unity',
      'Implement inventory, crafting, story flags and additive mini-game scenes',
      'Produce the art and audio, then balance the game through playtesting',
    ],
    tags: ['Unity', 'Game Design', '2D Art'],
    detailsAvailable: true,
    featured: true,
    people: [
      { name: 'Aditya Gireesh', role: 'Project lead' },
      { name: 'Chris', role: 'Project head' },
      { name: 'Yeshuraj', role: 'Project head' },
      {
        name: 'Vairavi Anbumani',
        role: 'Project head',
        linkedinUrl: 'https://in.linkedin.com/in/vairavi-anbumani-291828203',
        standoutFact:
          'Brings a Civil Engineering background to a game project and has also volunteered with ENGINEER, NITK.',
      },
    ],
  },
  {
    id: 22,
    code: 'CREDIT02',
    track: 'Credit',
    title: "Building the Founders’ Office at an Early-Stage Startup — Watchin It",
    description:
      'Work alongside an early-stage streaming and networking platform for independent filmmakers across product, outreach, partnerships and growth.',
    highlights: [
      'Translate filmmaker and viewer interviews into product iterations',
      'Run targeted filmmaker outreach and content acquisition',
      'Build festival partnerships, referral loops and a reusable growth playbook',
    ],
    tags: ['Product', 'Growth', 'Partnerships'],
    detailsAvailable: true,
    featured: true,
    people: [
      { name: 'Shashank', role: 'Project lead' },
      { name: 'Joseph V Francis', role: 'Project head' },
    ],
  },
  {
    id: 23,
    code: 'CREDIT04',
    track: 'Credit',
    title: 'Energy — The AI Fuel',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 24,
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
    detailsAvailable: true,
    people: [
      { name: 'Diya', role: 'Project lead' },
      { name: 'Banni Atharva', role: 'Project head' },
    ],
  },
  {
    id: 25,
    code: 'CREDIT03',
    track: 'Credit',
    title: 'VentureLens: Learning the Art of Venture Capital & Startup Evaluation',
    description:
      'Learn venture-capital thinking by evaluating a new startup each week and turning repeated analysis into a shared decision framework and dashboard.',
    highlights: [
      'Apply TAM/SAM/SOM, product-market fit, founder and moat frameworks',
      'Compare business models, traction and unit economics across ventures',
      'Build a persistent evaluation database and visual dashboard',
    ],
    tags: ['Venture Capital', 'Strategy', 'Analytics'],
    detailsAvailable: true,
    people: [
      { name: 'Adi', role: 'Project lead' },
      { name: 'Jay', role: 'Project head' },
      { name: 'Diya', role: 'Project head' },
    ],
  },
  {
    id: 26,
    code: 'CREDIT05',
    track: 'Credit',
    title: 'Live Projects: PURB AI, First Principle',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 27,
    code: 'CRYPT08',
    track: 'Crypt',
    title: 'CloudAgent: A Scalable Cloud Platform for Deploying and Managing AI Agents',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
    featured: true,
  },
  {
    id: 28,
    code: 'CRYPT09',
    track: 'Crypt',
    title: 'AI-Powered Research Paper Assistant',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 29,
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
    detailsAvailable: true,
    people: [
      { name: 'Thota Bhavya', role: 'Project lead' },
      { name: 'Mili Dholaria', role: 'Project head' },
    ],
  },
  {
    id: 30,
    code: 'CRYPT10',
    track: 'Crypt',
    title: 'VeloxDB',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
  },
  {
    id: 31,
    code: 'CRYPT11',
    track: 'Crypt',
    title: 'EdgeGrid OS',
    description: comingSoon,
    highlights: [],
    tags: ['Brief pending'],
    detailsAvailable: false,
    people: [
      { name: 'Rahul Javalagi', role: 'Project lead' },
      { name: 'Santosh Gouda', role: 'Project head' },
    ],
  },
  {
    id: 32,
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
    detailsAvailable: true,
    people: [{ name: 'Aryan Sharma', role: 'Project lead' }],
  },
  {
    id: 33,
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
    detailsAvailable: true,
    people: [
      { name: 'Umar Farooq', role: 'Project lead' },
      { name: 'Pranav', role: 'Project head' },
    ],
  },
  {
    id: 34,
    code: 'CRYPT02',
    track: 'Crypt',
    title: 'LeadFlow AI — Intelligent Lead Generation, Outreach and Engagement Automation Pipeline',
    description:
      'Create a source-transparent pipeline that discovers businesses, qualifies leads locally, verifies contact quality and supports controlled outreach.',
    highlights: [
      'Discover and enrich businesses with Places data and website crawling',
      'Score fit using a local language model and reusable target profiles',
      'Verify contacts, segment audiences and manage approval-based campaigns',
    ],
    tags: ['Local LLMs', 'Data Pipelines', 'Automation'],
    detailsAvailable: true,
    people: [
      { name: 'Aryan Bokolia', role: 'Project lead' },
      { name: 'Sannapuri Rohit', role: 'Project head' },
    ],
  },
  {
    id: 35,
    code: 'CRYPT01',
    track: 'Crypt',
    title: 'PhishGuard: URL Phishing Detection System',
    description:
      'Build an explainable phishing detector that combines fast URL screening with deeper domain analysis, isolated investigation and community threat signals.',
    highlights: [
      'Route suspicious URLs through lexical, DNS, TLS and threat-intelligence checks',
      'Explain XGBoost risk scores and detect brand impersonation',
      'Add a safe Chromium preview, honeypot verification and adaptive retraining',
    ],
    tags: ['Cybersecurity', 'XGBoost', 'Browser Automation'],
    detailsAvailable: true,
    featured: true,
    people: [{ name: 'Harsha B', role: 'Project lead' }],
  },
]

export const projects: Project[] = projectBriefs.map((project, index) => ({
  ...project,
  id: index + 1,
}))

export const trackCounts = tracks.reduce(
  (counts, track) => {
    counts[track] = projects.filter((project) => project.track === track).length
    return counts
  },
  {} as Record<Track, number>,
)
