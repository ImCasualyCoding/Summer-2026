import { ThreatItem, MarineSpecies, MissionEntry, HotspotReport } from '../types';

export const THREAT_MATRIX_DATA: ThreatItem[] = [
  {
    id: 'microplastics',
    title: 'MICROPLASTICS & SYNTHETICS',
    subtitle: 'PERVASIVE. INTERNAL. LETHAL. ACCUMULATIVE.',
    role: 'Pervasive internal toxicity & gastrointestinal blockage across all marine trophic tiers.',
    scale: '170+ Trillion particles currently afloat worldwide',
    targetEcosystems: ['Pelagic Zones', 'Coral Reefs', 'Deep-Sea Trenches', 'Arctic Sea Ice'],
    disintegrationTime: '450 - 1,000 Years',
    lethalityIndex: '9.6 / 10',
    particleSize: '< 5.0 mm (Nano-pellets to fibers)',
    trophicSpread: '100% of examined pelagic species',
    mitigationComplexity: 'Extreme (Atmospheric & Hydrodynamic Dispersion)',
    primaryPathways: ['Tire wear abrasion', 'Synthetic clothing runoff', 'Degraded primary packaging', 'Industrial resin pellets (nurdles)'],
    keyChemicals: ['Bisphenol A (BPA)', 'Phthalates', 'Polycyclic Aromatic Hydrocarbons (PAHs)'],
    description: 'Microscopic polymer fragments absorb persistent organic pollutants (POPs) in seawater. When ingested by zooplankton and small marine organisms, toxic loads magnify up the food chain, causing cellular endocrine disruption, metabolic collapse, and starvation.',
    caseStudy: 'Mariana Trench Sediment Study: 100% of amphipods collected at 10,890 meters depth contained synthetic microfibers.'
  },
  {
    id: 'ghost_gear',
    title: 'GHOST FISHING GEAR',
    subtitle: 'INDISCRIMINATE. SILENT. DESTRUCTIVE. RECURRING.',
    role: 'Indiscriminate entanglement, drowning, benthic scouring, and perpetual ghost fishing.',
    scale: '1+ Million metric tons discarded annually',
    targetEcosystems: ['Migratory Corridors', 'Coastal Reefs', 'Kelp Forests', 'Seamounts'],
    disintegrationTime: '600+ Years (High-tenacity nylon)',
    lethalityIndex: '9.2 / 10',
    particleSize: 'Sub-surface drag nets (Up to 5.0 km length)',
    trophicSpread: 'Cetaceans, Pinnipeds, Sea Turtles, Elasmobranchs',
    mitigationComplexity: 'High (Requires ROV & Heavy Fleet Interventions)',
    primaryPathways: ['Abandoned commercial gillnets', 'Lost crab/lobster traps', 'Discarded monofilament longlines', 'Trawl net snagging on seamounts'],
    keyChemicals: ['Lead sinker toxicity', 'Non-biodegradable high-density polyethylene', 'PVC floats'],
    description: 'Lost or deliberately abandoned nets drift in ocean currents for decades, trapping whales, sea turtles, and fish in an endless cycle: trapped animals die, attract scavengers, who then become entangled in turn.',
    caseStudy: 'North Pacific Subtropical Gyre: Ghost gear constitutes 46% of total macro-debris weight in the Great Pacific Garbage Patch.'
  },
  {
    id: 'chemical_runoff',
    title: 'CHEMICAL RUNOFF & HEAVY METALS',
    subtitle: 'TOXIC. INVISIBLE. SYSTEMIC. CORROSIVE.',
    role: 'Reproductive failure, hypoxic dead zones, neurological damage, and severe ocean acidification.',
    scale: '80% of marine pollution originates from land-based activity',
    targetEcosystems: ['Estuaries', 'Coastal Wetlands', 'Spawning Grounds', 'Mangrove Swamps'],
    disintegrationTime: 'Persistent (Heavy Metals do not degrade)',
    lethalityIndex: '8.9 / 10',
    particleSize: 'Molecular / Aqueous Solution',
    trophicSpread: 'Apex Cetaceans, Coastal Fisheries, Bivalves',
    mitigationComplexity: 'Extreme (Requires Global Agricultural & Industrial Reform)',
    primaryPathways: ['Agricultural fertilizer runoff', 'Industrial heavy metal effluent', 'Untreated municipal wastewater', 'Pesticide leaching'],
    keyChemicals: ['Polychlorinated Biphenyls (PCBs)', 'Methylmercury', 'Nitrates & Phosphates', 'Cadmium'],
    description: 'Agricultural nutrient surges cause massive algal blooms that deplete dissolved oxygen, producing underwater "dead zones" devoid of oxygen. Heavy metals and PCBs accumulate in fatty tissues of apex predators, rendering milk toxic to whale calves.',
    caseStudy: 'Gulf of Mexico Hypoxic Zone: Annual summer dead zone spans over 6,000 square miles, annihilating benthic crustacean habitats.'
  }
];

export const MARINE_SPECIES_DATA: MarineSpecies[] = [
  {
    id: 'leatherback',
    name: 'LEATHERBACK SEA TURTLE',
    scientificName: 'Dermochelys coriacea',
    conservationStatus: 'CRITICALLY ENDANGERED',
    habitat: 'Pelagic Ocean & Subtropical Nesting Beaches',
    averageLifespan: '45 - 50 Years',
    specGrid: {
      ingestionRate: '52% of sea turtles globally',
      mortalityFactor: '100,000+ marine mammals annually',
      criticalHabitatLoss: '50% of coral reefs degraded',
      targetRestorationTimeline: '2030 Global Ocean Treaty Mandate'
    },
    hotspots: [
      {
        id: 'hs-gut',
        code: '01. GASTROINTESTINAL TRACT',
        name: 'Gastrointestinal Blockage & Perforation',
        shortDesc: 'Translucent plastic bags mistaken for bioluminescent jellyfish prey.',
        fullDiagnostic: 'Ingested flexible polyethylene sheeting blocks the pyloric valve, causing gas accumulation, positive buoyancy syndrome (inability to dive), false satiation, and systemic necrosis.',
        filterMatch: ['PLASTICS'],
        xPercent: 52,
        yPercent: 48,
        severity: 'EXTREME',
        bioAccumulationPpm: 1420,
        physiologicalImpact: [
          'Pyloric impaction preventing nutrient absorption',
          'Internal hemorrhaging from sharp rigid polymer edges',
          'Chronic starvation with visible shell muscle wasting'
        ]
      },
      {
        id: 'hs-blood',
        code: '02. BLOODSTREAM & TISSUE',
        name: 'PCB & Endocrine Disruption',
        shortDesc: 'Heavy organochlorine bioaccumulation in subcutaneous adipose tissue.',
        fullDiagnostic: 'Lipophilic contaminants absorb onto ingested microplastics and cross the gut lining. PCB concentrations reach 38 ppm in blubber, suppressing eggshell mineralization and immune antibody production.',
        filterMatch: ['CHEMICALS'],
        xPercent: 40,
        yPercent: 42,
        severity: 'CRITICAL',
        bioAccumulationPpm: 890,
        physiologicalImpact: [
          'Eggshell thinning leading to nest failure rates exceeding 65%',
          'Immunosuppression and heightened susceptibility to fibropapillomatosis',
          'Disrupted thyroid signaling altering migratory timing'
        ]
      },
      {
        id: 'hs-flipper',
        code: '03. RESPIRATORY & FIN STRUCTURES',
        name: 'Monofilament Constriction & Necrosis',
        shortDesc: 'Deep tissue slicing and fin amputation from abandoned longlines.',
        fullDiagnostic: 'Monofilament fishing lines wrap tightly around front flippers during swimming. Constriction cuts off blood flow, leading to tissue necrosis, osteomyelitis, and flipper loss.',
        filterMatch: ['GHOST_NETS'],
        xPercent: 28,
        yPercent: 62,
        severity: 'EXTREME',
        bioAccumulationPpm: 0,
        physiologicalImpact: [
          'Inability to achieve hydrodynamic propulsion',
          'Drowning due to entanglement preventing surfacing for respiration',
          'Exposed bone septicemia from continuous friction cut wounds'
        ]
      },
      {
        id: 'hs-sensory',
        code: '04. SENSORY ORGANS',
        name: 'Chemical Disorientation & Acoustic Trauma',
        shortDesc: 'Disrupted olfactory navigation and acoustic trauma from seismic testing.',
        fullDiagnostic: 'Heavy chemical scents in ocean currents mimic dimethyl sulfide (DMS) olfactory trails used to locate feeding zones, drawing turtles into polluted garbage gyres.',
        filterMatch: ['CHEMICALS', 'PLASTICS'],
        xPercent: 78,
        yPercent: 35,
        severity: 'HIGH',
        bioAccumulationPpm: 430,
        physiologicalImpact: [
          'Inability to locate natal nesting beaches across thousands of miles',
          'Chronic stress response elevated cortisol levels',
          'Ocular irritation from dissolved petroleum hydrocarbons'
        ]
      }
    ]
  },
  {
    id: 'orca',
    name: 'PACIFIC APEX ORCA',
    scientificName: 'Orcinus orca',
    conservationStatus: 'ENDANGERED (Southern Resident Pod)',
    habitat: 'North Pacific Temperate Coastal & Offshore Pelagic',
    averageLifespan: '50 - 80 Years',
    specGrid: {
      ingestionRate: '100% of Southern Resident pod tested positive for PCBs',
      mortalityFactor: '0% calf survival in high-toxin maternal lineages',
      criticalHabitatLoss: '70% salmon prey crash from toxic runoff',
      targetRestorationTimeline: '2028 Puget Sound Decontam Project'
    },
    hotspots: [
      {
        id: 'hs-orca-fat',
        code: '01. MATERNAL BLUBBER LAYER',
        name: 'Maternal Toxic Offloading to Calves',
        shortDesc: 'PCBs passed directly to newborn calves via nutrient-dense milk.',
        fullDiagnostic: 'Female orcas mobilize fat reserves during nursing, transferring up to 90% of accumulated organochlorines directly into first-born calves, resulting in infant mortality.',
        filterMatch: ['CHEMICALS'],
        xPercent: 48,
        yPercent: 38,
        severity: 'EXTREME',
        bioAccumulationPpm: 2450,
        physiologicalImpact: [
          'High neonatal mortality rate in first-born calves',
          'Complete immune system shutdown in juvenile cetaceans',
          'Severe reproductive organ malformation'
        ]
      },
      {
        id: 'hs-orca-stomach',
        code: '02. GASTRIC CAVITY',
        name: 'Macro-Plastic Prey Confusion',
        shortDesc: 'Synthetic buoy ropes and plastic debris lodged in multi-chamber stomach.',
        fullDiagnostic: 'Stomach contents of stranded orcas reveal industrial ropes, plastic bags, and synthetic packaging blocking movement between forestomach and main digestive chamber.',
        filterMatch: ['PLASTICS'],
        xPercent: 40,
        yPercent: 52,
        severity: 'CRITICAL',
        bioAccumulationPpm: 1120,
        physiologicalImpact: [
          'Chronic ulceration and gastric perforation',
          'Reduced hunting efficiency due to lethargy and pain',
          'False fullness leading to emaciation'
        ]
      },
      {
        id: 'hs-orca-tail',
        code: '03. DORSAL & FLUKE ENTANGLEMENT',
        name: 'Commercial Trawl Drag Trauma',
        shortDesc: 'Heavy drag nets entangled around fluke notch causing spinal trauma.',
        fullDiagnostic: 'Commercial synthetic mesh nets caught on the tail fluke exert hundreds of pounds of continuous drag, leading to muscle atrophy and eventual exhaustion drowning.',
        filterMatch: ['GHOST_NETS'],
        xPercent: 18,
        yPercent: 45,
        severity: 'EXTREME',
        bioAccumulationPpm: 0,
        physiologicalImpact: [
          'Fluke deformation and spinal misalignment',
          'Inability to breach or keep up with pod travel speeds',
          'Deep lacerations down to caudal peduncle vertebrae'
        ]
      },
      {
        id: 'hs-orca-melon',
        code: '04. ECHOLOCATION MELON',
        name: 'Chemical & Noise Interference',
        shortDesc: 'Acoustic clouding and chemical buildup in fatty lipid melon tissue.',
        fullDiagnostic: 'Heavy metal deposits in lipid-rich echolocation organs diminish sonar resolution, hampering cooperative hunting communication in muddy coastal waters.',
        filterMatch: ['CHEMICALS'],
        xPercent: 76,
        yPercent: 32,
        severity: 'HIGH',
        bioAccumulationPpm: 680,
        physiologicalImpact: [
          'Disrupted echolocation precision for hunting prey',
          'Loss of pod cohesion and acoustic orientation',
          'Chronic disorienting auditory distress'
        ]
      }
    ]
  },
  {
    id: 'albatross',
    name: 'LAYSAN ALBATROSS',
    scientificName: 'Phoebastria immutabilis',
    conservationStatus: 'NEAR THREATENED',
    habitat: 'North Pacific Ocean & Midway Atoll Nesting Colony',
    averageLifespan: '60+ Years',
    specGrid: {
      ingestionRate: '98% of chicks fed plastic by parents',
      mortalityFactor: '5 tons of plastic brought to Midway nestlings yearly',
      criticalHabitatLoss: '35% colony territory inundated by rising toxic tides',
      targetRestorationTimeline: '2029 Midway Zero-Plastic Sanctuary'
    },
    hotspots: [
      {
        id: 'hs-alb-crop',
        code: '01. PROVENTRICULUS & CROP',
        name: 'Chick Plastic Impaction',
        shortDesc: 'Bottle caps, lighters, and toys regurgitated into chick crops.',
        fullDiagnostic: 'Adult albatrosses mistake floating surface plastic for squid eggs and fish. Regurgitated plastic fills the small chick crop, preventing real food ingestion.',
        filterMatch: ['PLASTICS'],
        xPercent: 46,
        yPercent: 42,
        severity: 'EXTREME',
        bioAccumulationPpm: 3100,
        physiologicalImpact: [
          'Chick crop rupture and dehydration',
          'Inability to fledge due to severe malnutrition',
          'Direct stomach lining perforation by sharp bottle caps'
        ]
      },
      {
        id: 'hs-alb-liver',
        code: '02. LIVER & METABOLIC ORGANS',
        name: 'Flame Retardant Chemical Leaching',
        shortDesc: 'PBDEs and flame retardants from electronic waste leaching into liver.',
        fullDiagnostic: 'Plastics absorbed from floating e-waste fragments leach polybrominated diphenyl ethers into hepatic circulation, causing liver failure and toxic shock.',
        filterMatch: ['CHEMICALS'],
        xPercent: 38,
        yPercent: 55,
        severity: 'CRITICAL',
        bioAccumulationPpm: 1850,
        physiologicalImpact: [
          'Hepatic necrosis and metabolic toxemia',
          'Inability to synthesize essential flight lipids',
          'Enzyme inhibition in endocrine pathways'
        ]
      },
      {
        id: 'hs-alb-wing',
        code: '03. WING FEATHER MATRIX',
        name: 'Monofilament Wing Snagging',
        shortDesc: 'Discarded longlines wrapping wing primary feathers during ocean dives.',
        fullDiagnostic: 'During surface feeding plunges, longline hooks and nylon thread snag wing joints, breaking flight quills and trapping birds on open ocean water.',
        filterMatch: ['GHOST_NETS'],
        xPercent: 22,
        yPercent: 30,
        severity: 'EXTREME',
        bioAccumulationPpm: 0,
        physiologicalImpact: [
          'Complete loss of aerodynamic glide efficiency',
          'Waterlogging of primary down feathers leading to hypothermia',
          'Drowning due to weight of tethered submerged gear'
        ]
      },
      {
        id: 'hs-alb-beak',
        code: '04. BEAK & NASAL GLAND',
        name: 'Desalination Gland Heavy Metal Corrosion',
        shortDesc: 'Salt-excreting nasal gland impaired by cadmium and lead compounds.',
        fullDiagnostic: 'Heavy metal contaminants block specialized salt-secreting glands above the beak, preventing excess ocean salt removal and resulting in hypernatremia.',
        filterMatch: ['CHEMICALS'],
        xPercent: 82,
        yPercent: 36,
        severity: 'HIGH',
        bioAccumulationPpm: 740,
        physiologicalImpact: [
          'Fatal electrolyte imbalance in saline environment',
          'Corrosive lesions inside upper bill mandible',
          'Loss of scent detection for ocean upwelling zones'
        ]
      }
    ]
  }
];

export const MISSION_ARCHIVE_DATA: MissionEntry[] = [
  {
    id: 'mission-01',
    title: 'Great Pacific Garbage Patch Recovery - Operation System 002',
    category: 'FIELD RESTORATION',
    location: 'North Pacific Subtropical Gyre (32°N 145°W)',
    date: '2025-11-14',
    coordinates: '32.1492° N, 145.8201° W',
    summary: 'Deployed dual-vessel retention array across high-density debris convergence corridor, extracting over 250,000 lbs of abandoned ghost nets, longlines, and degraded macro-plastics.',
    impactMetrics: [
      { label: 'DEBRIS REMOVED', value: '113,400 KG' },
      { label: 'AREA CLEARED', value: '8,400 KM²' },
      { label: 'GHOST NETS RECOVERED', value: '1,240 UNITS' }
    ],
    fullReport: 'The expedition targeted a high-density accumulation zone within the Great Pacific Garbage Patch using real-time satellite imaging and oceanic drifter models. Over 30 continuous sweep cycles, the team extracted derelict purse seine nets, fish aggregating devices (FADs), and dense clusters of polypropylene rope. Biologists onboard released 14 entangled pelagic species back into wild waters after veterinary assessment.',
    keyTakeaway: 'Proves high-sea automated retention barriers can safely remove ghost gear without pelagic bio-catch when guided by real-time acoustic sonar triggers.',
    tags: ['Ghost Gear', 'Pacific Ocean', 'High-Seas Fleet', 'Automated Sonar']
  },
  {
    id: 'mission-02',
    title: 'Deep-Sea Trench Microplastic Audit — Mariana Trench Bathyal Sampling',
    category: 'SCIENTIFIC EVIDENCE',
    location: 'Challenger Deep, Mariana Trench',
    date: '2026-02-08',
    coordinates: '11.3733° N, 142.2500° E',
    summary: 'Submersible ROV extraction of benthic sediment cores at 10,890 meters depth confirmed synthetic microfibers present in 100% of abyssal samples.',
    impactMetrics: [
      { label: 'SAMPLING DEPTH', value: '10,890 M' },
      { label: 'FIBER DENSITY', value: '2,200 / KG SEDIMENT' },
      { label: 'POLYMER TYPES', value: 'NYLON, PET, PVC' }
    ],
    fullReport: 'Deep-sea exploration vessel Sentinel-4 deployed titanium coring tubes into the abyssal floor of Challenger Deep. Raman spectroscopy revealed micro-polymers originating from textile laundering and industrial resin pelleted runoffs deposited across centuries of deep ocean currents. The findings debunked myths that deep trenches act as harmless plastic sinks, demonstrating instead that abyss-dwelling amphipods absorb heavy chemical loads.',
    keyTakeaway: 'Conclusive empirical data proving plastic contamination is universally present across every bathymetric layer of Earth’s ocean floor.',
    tags: ['Microplastics', 'Mariana Trench', 'Raman Spectroscopy', 'Benthic Ecology']
  },
  {
    id: 'mission-03',
    title: 'Global Plastics Treaty Injunction — Binding Production Caps',
    category: 'POLICY & LAW',
    location: 'UN Environment Assembly, Geneva',
    date: '2026-04-19',
    coordinates: '46.2044° N, 6.1432° E',
    summary: 'Legal advocacy campaign uniting 85 coastal nations to enact mandatory 40% reductions in virgin polymer synthesis by 2035.',
    impactMetrics: [
      { label: 'SIGNATORY STATES', value: '85 NATIONS' },
      { label: 'TARGET REDUCTION', value: '-40% VIRGIN POLYMER' },
      { label: 'CORPORATE MANDATE', value: 'PRODUCER RESPONSIBILITY' }
    ],
    fullReport: 'In collaboration with environmental law coalitions, the Pelagic Sentinel legal team submitted 400 pages of bioaccumulation telemetry and economic damage audits to international negotiators. The resulting draft accord establishes legally binding global limits on single-use polymer manufacturing and mandates extended producer responsibility (EPR) funds for island nations.',
    keyTakeaway: 'Shifts regulatory enforcement from downstream cleanup to legally binding upstream production caps at chemical manufacturing plants.',
    tags: ['Global Treaty', 'UN Legal Framework', 'Polymer Caps', 'Extended Responsibility']
  },
  {
    id: 'mission-04',
    title: 'Coral Reef Chemical Decontamination — Hawaiian Sanctuary Strike',
    category: 'FIELD RESTORATION',
    location: 'Papahānaumokuākea Marine National Monument',
    date: '2026-05-30',
    coordinates: '25.7000° N, 171.7000° W',
    summary: 'Targeted removal of 45 tons of trapped ghost nets smothering shallow coral heads across 12 pristine atoll ecosystems.',
    impactMetrics: [
      { label: 'NET WEIGHT RECOVERED', value: '40,800 KG' },
      { label: 'CORAL HEADS FREED', value: '1,850 STRUCTURES' },
      { label: 'TURTLES RESCUED', value: '28 INDIVIDUALS' }
    ],
    fullReport: 'A specialized team of freedivers and marine robotics operators worked across a 3-week expedition to cut away heavy commercial trawl netting snagged on ancient Montipora coral formations. The operation restored water circulation across the reef system and eliminated continuous abrasion wounding on endangered monk seals.',
    keyTakeaway: 'Demonstrates immediate biological recovery of coral polyps within 30 days of removing suffocating synthetic netting.',
    tags: ['Coral Reefs', 'Hawaii Sanctuary', 'Freedive Strike', 'Biodiversity']
  },
  {
    id: 'mission-05',
    title: 'Agricultural Chemical Dead Zone Mapping — Mississippi Delta Sonar',
    category: 'SCIENTIFIC EVIDENCE',
    location: 'Gulf of Mexico Hypoxic Boundary',
    date: '2026-06-22',
    coordinates: '28.9500° N, 89.4000° W',
    summary: 'Autonomous surface vessel swarm mapped a 6,400 square mile hypoxic dead zone, tracking nitrate plume origins back to midwest agribusiness corridors.',
    impactMetrics: [
      { label: 'SURVEY AREA', value: '16,500 KM²' },
      { label: 'DISSOLVED O2 MIN', value: '0.4 MG / L' },
      { label: 'POINT SOURCES MAPPED', value: '42 WATERSHEDS' }
    ],
    fullReport: 'Deploying autonomous hydrographic vessels equipped with real-time fluorometers and oxygen sensors, the mission created a high-resolution 3D bathymetric map of Gulf hypoxia. The sensor grid linked seasonal oxygen crashes directly to specific agricultural fertilizer discharge points along major river tributaries.',
    keyTakeaway: 'Provides undeniable forensic evidence needed to bring Clean Water Act litigation against non-point industrial polluters.',
    tags: ['Hypoxia', 'Gulf of Mexico', 'Autonomous Swarm', 'Agricultural Runoff']
  }
];

export const INITIAL_HOTSPOT_REPORTS: HotspotReport[] = [
  {
    id: 'rep-001',
    locationName: 'North Sea Dogger Bank',
    latitude: 54.8,
    longitude: 2.7,
    wasteType: 'Abandoned Trawl Mesh & Buoy Lines',
    urgency: 'CRITICAL',
    reporter: 'Pelagic Survey Vessel #3',
    timestamp: '2026-08-07 09:14 UTC',
    description: 'Sub-surface ghost net suspended at 15m depth, trapping cod shoals and harbor porpoises.',
    status: 'DISPATCHED'
  },
  {
    id: 'rep-002',
    locationName: 'Lamu Archipelago Mangroves, Kenya',
    latitude: -2.27,
    longitude: 40.9,
    wasteType: 'Microplastic Nurdle Spill',
    urgency: 'HIGH',
    reporter: 'Coastal Citizen Ranger Unit',
    timestamp: '2026-08-06 18:30 UTC',
    description: 'Container ship loss created 4-inch layer of polypropylene nurdles along tidal roots.',
    status: 'VERIFIED'
  },
  {
    id: 'rep-003',
    locationName: 'Galapagos Marine Reserve Boundary',
    latitude: -0.6,
    longitude: -90.5,
    wasteType: 'Illegal Longline Drift Gear',
    urgency: 'CRITICAL',
    reporter: 'Ranger Drone Patrol-A',
    timestamp: '2026-08-07 11:05 UTC',
    description: '12-mile untagged longline drifting through shark sanctuary corridor with active hooks.',
    status: 'VERIFIED'
  }
];
