export type SourcedStat = {
  id: string;
  stat: string;
  title: string;
  body: string;
  sourceLabel: string;
  sourceUrl: string;
};

/** Use conservative wording; verify URLs periodically. */
export const SOURCED_STATS: readonly SourcedStat[] = [
  {
    id: "kff-delay",
    stat: "36%",
    title: "U.S. adults delayed or skipped care",
    body: "KFF reports that more than one in three U.S. adults skipped or postponed needed healthcare in the past 12 months because of cost—driving many families to explore coordinated care abroad.",
    sourceLabel: "KFF Health Tracking Poll",
    sourceUrl: "https://www.kff.org/health-costs/"
  }
] as const;

export type UsHealthcareStatCard = {
  id: string;
  stat: string;
  description: string;
  source: string;
};

/** Shown in WhyTurkeyStats green box on the home page. */
export const US_HEALTHCARE_STAT_CARDS: readonly UsHealthcareStatCard[] = [
  {
    id: "gallup-sacrifices",
    stat: "82M",
    description: "People made sacrifices to afford healthcare",
    source: "Gallup/West Health 2025"
  },
  {
    id: "kff-skipped",
    stat: "36%",
    description: "Skipped or postponed needed care due to cost",
    source: "KFF Health Tracking Poll 2025"
  },
  {
    id: "oecd-gdp",
    stat: "17.3%",
    description: "Of US GDP spent on healthcare — highest in the world",
    source: "OECD 2024"
  },
  {
    id: "kff-insured",
    stat: "37%",
    description: "Of insured people still can't afford the care they need",
    source: "KFF 2025"
  }
] as const;

export const TURKEY_TRUST_FACTS = [
  {
    label: "JCI-accredited hospitals",
    detail:
      "Türkiye hosts dozens of Joint Commission International (JCI) accredited hospitals—an international benchmark many patients recognize worldwide."
  },
  {
    label: "International patient volume",
    detail:
      "Türkiye is among the world’s leading destinations for medical travel, with modern facilities and experienced specialists across dental, aesthetic, and surgical care."
  }
] as const;
