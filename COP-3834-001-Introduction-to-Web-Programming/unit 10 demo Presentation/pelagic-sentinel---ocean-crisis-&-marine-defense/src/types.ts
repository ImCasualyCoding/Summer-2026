export type ThreatCategory = 'microplastics' | 'ghost_gear' | 'chemical_runoff';

export interface ThreatItem {
  id: ThreatCategory;
  title: string;
  subtitle: string;
  role: string;
  scale: string;
  targetEcosystems: string[];
  disintegrationTime: string;
  lethalityIndex: string; // e.g., "9.4 / 10"
  particleSize: string;
  trophicSpread: string;
  mitigationComplexity: string;
  primaryPathways: string[];
  keyChemicals: string[];
  description: string;
  caseStudy: string;
}

export type XRayFilter = 'PLASTICS' | 'CHEMICALS' | 'GHOST_NETS';

export interface HotspotPoint {
  id: string;
  code: string;
  name: string;
  shortDesc: string;
  fullDiagnostic: string;
  filterMatch: XRayFilter[];
  xPercent: number; // For SVG/Canvas coordinates (0-100)
  yPercent: number;
  severity: 'CRITICAL' | 'HIGH' | 'EXTREME';
  bioAccumulationPpm: number;
  physiologicalImpact: string[];
}

export interface MarineSpecies {
  id: string;
  name: string;
  scientificName: string;
  conservationStatus: string;
  habitat: string;
  averageLifespan: string;
  specGrid: {
    ingestionRate: string;
    mortalityFactor: string;
    criticalHabitatLoss: string;
    targetRestorationTimeline: string;
  };
  hotspots: HotspotPoint[];
}

export type MissionCategory = 'ALL' | 'POLICY & LAW' | 'FIELD RESTORATION' | 'SCIENTIFIC EVIDENCE';

export interface MissionEntry {
  id: string;
  title: string;
  category: Exclude<MissionCategory, 'ALL'>;
  location: string;
  date: string;
  coordinates: string;
  summary: string;
  impactMetrics: { label: string; value: string }[];
  fullReport: string;
  keyTakeaway: string;
  tags: string[];
}

export interface HotspotReport {
  id: string;
  locationName: string;
  latitude: number;
  longitude: number;
  wasteType: string;
  urgency: 'MODERATE' | 'HIGH' | 'CRITICAL';
  reporter: string;
  timestamp: string;
  description: string;
  status: 'VERIFIED' | 'DISPATCHED' | 'UNDER REVIEW';
}

export interface MandateSignature {
  name: string;
  country: string;
  email: string;
  organization?: string;
  timestamp: string;
}
