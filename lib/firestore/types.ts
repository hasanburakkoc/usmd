export type HomeHighlightIconKey = "scissors" | "smile" | "heart-pulse" | "weight";

const ICON_KEYS = new Set<string>(["scissors", "smile", "heart-pulse", "weight"]);

export function parseHomeHighlightIcon(
  value: unknown
): HomeHighlightIconKey | null {
  if (typeof value !== "string") return null;
  return ICON_KEYS.has(value) ? (value as HomeHighlightIconKey) : null;
}

/** One treatment department row from Firestore (document id = slug). */
export interface TreatmentCategoryDoc {
  slug: string;
  name: string;
  treatments: string[];
  sortOrder: number;
  homeTeaser: string | null;
  homeIcon: HomeHighlightIconKey | null;
  homeSortOrder: number | null;
}

/** Homepage highlight card payload (Firestore + ordered for display). */
export interface TreatmentHomeHighlight {
  slug: string;
  category: string;
  teaser: string;
  icon: HomeHighlightIconKey;
}
