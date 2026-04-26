export const APP_NAME = "USMD";
export const APP_DESCRIPTION =
  "Premier health tourism platform for US citizens seeking trusted treatment in Turkey.";
export const CONTACT_EMAIL = "security@usmd.com";

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
