export const APP_NAME = "USMD";
export const APP_DESCRIPTION =
  "Premier health tourism platform for US citizens seeking trusted treatment in Türkiye.";

/** Lucide icon key for homepage treatment highlights (mapped in TreatmentsPreview). */
export type HomeHighlightIconKey = "scissors" | "smile" | "heart-pulse" | "weight";

export interface TreatmentHomeHighlight {
  category: string;
  teaser: string;
  icon: HomeHighlightIconKey;
}

/** Matches `TREATMENT_CATEGORIES[].category` exactly — same four focus areas site-wide. */
export const TREATMENT_HOME_HIGHLIGHTS: TreatmentHomeHighlight[] = [
  {
    category: "Hair Restoration",
    teaser:
      "Advanced FUE and DHI techniques with natural-looking, lasting results.",
    icon: "scissors"
  },
  {
    category: "Dental Treatments",
    teaser:
      "Smile design, implants, and restorative care with coordinated support.",
    icon: "smile"
  },
  {
    category: "Plastic & Aesthetic Surgery",
    teaser:
      "Personalized cosmetic procedures by certified specialists.",
    icon: "heart-pulse"
  },
  {
    category: "General & Specialized Surgery",
    teaser:
      "Including bariatric and general surgery pathways with multidisciplinary care.",
    icon: "weight"
  }
];

export const LEAD_FORM_TREATMENT_OPTIONS = [
  ...TREATMENT_HOME_HIGHLIGHTS.map((h) => h.category),
  "Other"
] as const;

export interface TreatmentCategory {
  category: string;
  treatments: string[];
}

export const TREATMENT_CATEGORIES: TreatmentCategory[] = [
  {
    category: "Hair Restoration",
    treatments: ["Hair Transplant - FUE, DHI, Sapphire Techniques"]
  },
  {
    category: "Dental Treatments",
    treatments: ["Dental Implants", "Smile Design - Hollywood Smile"]
  },
  {
    category: "Plastic & Aesthetic Surgery",
    treatments: [
      "Rhinoplasty",
      "Breast Aesthetic Surgery",
      "Liposuction",
      "Facelift"
    ]
  },
  {
    category: "Ophthalmology",
    treatments: [
      "Cataract Surgery",
      "Laser Vision Correction - LASIK, PRK, SMILE",
      "Glaucoma Treatment & Surgery",
      "Retina Surgery"
    ]
  },
  {
    category: "Orthopedics & Traumatology",
    treatments: [
      "Knee Replacement",
      "Hip Replacement",
      "Sports Injury",
      "Joint Prosthetics",
      "Limb Lengthening"
    ]
  },
  {
    category: "Reproductive Medicine",
    treatments: ["IVF & Assisted Reproductive Technologies"]
  },
  {
    category: "Cardiology & Cardiovascular Surgery",
    treatments: [
      "Coronary Artery Bypass",
      "Heart Valve",
      "Interventional Cardiology"
    ]
  },
  {
    category: "Oncology",
    treatments: ["Chemotherapy", "Radiotherapy", "Tumor Surgery"]
  },
  {
    category: "Neurosurgery & Neurology",
    treatments: [
      "Brain Tumor",
      "Endoscopic Brain",
      "Neurovascular",
      "Spinal",
      "Vertebral Compression Fracture",
      "Trauma",
      "EMG"
    ]
  },
  {
    category: "Transplant Surgery",
    treatments: ["Organ Transplantation"]
  },
  {
    category: "General & Specialized Surgery",
    treatments: ["General Surgery", "Bariatric/Obesity Surgery"]
  }
];
