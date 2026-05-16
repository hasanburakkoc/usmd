export type TeamMember = {
  role: string;
  name: string;
  bio: string;
};

export const TEAM_PLACEHOLDERS: readonly TeamMember[] = [
  {
    role: "Founder & US Patient Advocacy",
    name: "Leadership (profile coming soon)",
    bio: "Bridges American expectations with ethical, transparent medical travel—focused on continuity from first call to follow-up at home."
  },
  {
    role: "Clinical Partnerships, Türkiye",
    name: "Clinical team (profile coming soon)",
    bio: "Maintains relationships with accredited hospitals and specialists across dental, aesthetic, surgical, and restorative care."
  },
  {
    role: "US Patient Coordination",
    name: "Coordination team (profile coming soon)",
    bio: "Schedules consultations, quotes, and travel windows in US English—your single point of contact before and during your trip."
  },
  {
    role: "Logistics & On-Ground Support",
    name: "Operations team (profile coming soon)",
    bio: "Handles transfers, hotel coordination, and day-of logistics so your focus stays on recovery—not paperwork."
  }
] as const;
