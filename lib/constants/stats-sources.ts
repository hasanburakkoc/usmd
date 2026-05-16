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

export const TURKEY_TRUST_FACTS = [
  {
    label: "JCI-accredited hospitals",
    detail:
      "Türkiye hosts dozens of Joint Commission International (JCI) accredited hospitals—an international benchmark many US patients recognize."
  },
  {
    label: "International patient volume",
    detail:
      "Türkiye is among the world’s leading destinations for medical travel, with modern facilities and experienced specialists across dental, aesthetic, and surgical care."
  }
] as const;
