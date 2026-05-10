import type { DocumentData } from "firebase-admin/firestore";
import { getFirestoreDb } from "@/lib/firebase/admin";
import { COLLECTION_TREATMENT_CATEGORIES } from "@/lib/firestore/collections";
import {
  parseHomeHighlightIcon,
  type TreatmentCategoryDoc,
  type TreatmentHomeHighlight,
  type HomeHighlightIconKey
} from "@/lib/firestore/types";

function mapCategoryDoc(docId: string, data: DocumentData): TreatmentCategoryDoc {
  const treatments = Array.isArray(data.treatments)
    ? data.treatments.map((t) => String(t))
    : [];

  const homeSortRaw = data.homeSortOrder;
  const homeSortOrder =
    typeof homeSortRaw === "number" && !Number.isNaN(homeSortRaw)
      ? homeSortRaw
      : null;

  const teaserRaw = data.homeTeaser;
  const homeTeaser =
    typeof teaserRaw === "string" && teaserRaw.trim() ? teaserRaw.trim() : null;

  const homeIcon = parseHomeHighlightIcon(data.homeIcon);

  return {
    slug: docId,
    name: String(data.name ?? docId),
    treatments,
    sortOrder:
      typeof data.sortOrder === "number" && !Number.isNaN(data.sortOrder)
        ? data.sortOrder
        : 0,
    homeTeaser,
    homeIcon,
    homeSortOrder
  };
}

export async function listTreatmentCategories(): Promise<TreatmentCategoryDoc[]> {
  const db = getFirestoreDb();
  const snap = await db
    .collection(COLLECTION_TREATMENT_CATEGORIES)
    .orderBy("sortOrder", "asc")
    .get();

  return snap.docs.map((doc) => mapCategoryDoc(doc.id, doc.data() as DocumentData));
}

export function toHomeHighlights(
  cats: TreatmentCategoryDoc[]
): TreatmentHomeHighlight[] {
  return cats
    .filter(
      (
        c
      ): c is TreatmentCategoryDoc & {
        homeTeaser: string;
        homeIcon: HomeHighlightIconKey;
        homeSortOrder: number;
      } =>
        c.homeSortOrder != null &&
        c.homeTeaser != null &&
        c.homeIcon != null
    )
    .sort((a, b) => a.homeSortOrder! - b.homeSortOrder!)
    .map((c) => ({
      slug: c.slug,
      category: c.name,
      teaser: c.homeTeaser,
      icon: c.homeIcon
    }));
}

export function treatmentNamesForLeadForm(cats: TreatmentCategoryDoc[]): string[] {
  return [...cats.map((c) => c.name), "Other"];
}
