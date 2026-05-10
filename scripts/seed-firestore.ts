/**
 * Seeds `treatment_categories` from former static catalog.
 * Reads `.env.local` automatically (same folder as package.json).
 * Needs: GOOGLE_CLOUD_PROJECT / FIREBASE_PROJECT_ID plus either
 * FIREBASE_SERVICE_ACCOUNT_PATH (easiest on Windows) or FIREBASE_SERVICE_ACCOUNT_JSON.
 *
 * Usage: npm run seed:firestore
 */
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

import { getFirestoreDb } from "@/lib/firebase/admin";
import { COLLECTION_TREATMENT_CATEGORIES } from "@/lib/firestore/collections";

type SeedCat = {
  slug: string;
  name: string;
  treatments: string[];
  sortOrder: number;
  homeTeaser: string | null;
  homeIcon: "scissors" | "smile" | "heart-pulse" | "weight" | null;
  homeSortOrder: number | null;
};

const ROWS: SeedCat[] = [
  {
    slug: "hair-restoration",
    name: "Hair Restoration",
    treatments: ["Hair Transplant - FUE, DHI, Sapphire Techniques"],
    sortOrder: 0,
    homeTeaser:
      "Advanced FUE and DHI techniques with natural-looking, lasting results.",
    homeIcon: "scissors",
    homeSortOrder: 1
  },
  {
    slug: "dental-treatments",
    name: "Dental Treatments",
    treatments: ["Dental Implants", "Smile Design - Hollywood Smile"],
    sortOrder: 1,
    homeTeaser:
      "Smile design, implants, and restorative care with coordinated support.",
    homeIcon: "smile",
    homeSortOrder: 2
  },
  {
    slug: "plastic-aesthetic-surgery",
    name: "Plastic & Aesthetic Surgery",
    treatments: [
      "Rhinoplasty",
      "Breast Aesthetic Surgery",
      "Liposuction",
      "Facelift"
    ],
    sortOrder: 2,
    homeTeaser: "Personalized cosmetic procedures by certified specialists.",
    homeIcon: "heart-pulse",
    homeSortOrder: 3
  },
  {
    slug: "ophthalmology",
    name: "Ophthalmology",
    treatments: [
      "Cataract Surgery",
      "Laser Vision Correction - LASIK, PRK, SMILE",
      "Glaucoma Treatment & Surgery",
      "Retina Surgery"
    ],
    sortOrder: 3,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "orthopedics-traumatology",
    name: "Orthopedics & Traumatology",
    treatments: [
      "Knee Replacement",
      "Hip Replacement",
      "Sports Injury",
      "Joint Prosthetics",
      "Limb Lengthening"
    ],
    sortOrder: 4,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "reproductive-medicine",
    name: "Reproductive Medicine",
    treatments: ["IVF & Assisted Reproductive Technologies"],
    sortOrder: 5,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "cardiology-cardiovascular-surgery",
    name: "Cardiology & Cardiovascular Surgery",
    treatments: [
      "Coronary Artery Bypass",
      "Heart Valve",
      "Interventional Cardiology"
    ],
    sortOrder: 6,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "oncology",
    name: "Oncology",
    treatments: ["Chemotherapy", "Radiotherapy", "Tumor Surgery"],
    sortOrder: 7,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "neurosurgery-neurology",
    name: "Neurosurgery & Neurology",
    treatments: [
      "Brain Tumor",
      "Endoscopic Brain",
      "Neurovascular",
      "Spinal",
      "Vertebral Compression Fracture",
      "Trauma",
      "EMG"
    ],
    sortOrder: 8,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "transplant-surgery",
    name: "Transplant Surgery",
    treatments: ["Organ Transplantation"],
    sortOrder: 9,
    homeTeaser: null,
    homeIcon: null,
    homeSortOrder: null
  },
  {
    slug: "general-specialized-surgery",
    name: "General & Specialized Surgery",
    treatments: ["General Surgery", "Bariatric/Obesity Surgery"],
    sortOrder: 10,
    homeTeaser:
      "Including bariatric and general surgery pathways with multidisciplinary care.",
    homeIcon: "weight",
    homeSortOrder: 4
  }
];

async function main() {
  const db = getFirestoreDb();
  const col = db.collection(COLLECTION_TREATMENT_CATEGORIES);
  let n = 0;
  for (const row of ROWS) {
    await col.doc(row.slug).set({
      name: row.name,
      treatments: row.treatments,
      sortOrder: row.sortOrder,
      homeTeaser: row.homeTeaser,
      homeIcon: row.homeIcon,
      homeSortOrder: row.homeSortOrder
    });
    n++;
    console.warn(`Wrote ${row.slug}`);
  }
  console.warn(`Done. ${n} categories.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
