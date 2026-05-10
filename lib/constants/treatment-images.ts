/**
 * Treatment category visuals are stored on disk under `public/`.
 * Firestore documents use matching `slug` (document id) as the lookup key.
 */
export const TREATMENT_IMAGE_BY_SLUG: Record<string, string> = {
  "hair-restoration": "/assets/treatments/categories/hair-restoration.png",
  "dental-treatments": "/assets/treatments/categories/dental-treatments.png",
  "plastic-aesthetic-surgery":
    "/assets/treatments/categories/plastic-Aesthetic-surgery.png",
  ophthalmology: "/assets/treatments/categories/Ophthalmology.png",
  "orthopedics-traumatology":
    "/assets/treatments/categories/Orthopedics-traumatology.png",
  "reproductive-medicine":
    "/assets/treatments/categories/Reproductive-medicine.png",
  "cardiology-cardiovascular-surgery":
    "/assets/treatments/categories/Cardiology-Cardiovascular-Surgery.png",
  oncology: "/assets/treatments/categories/Oncology.png",
  "neurosurgery-neurology":
    "/assets/treatments/categories/Neurosurgery-Neurology.png",
  "transplant-surgery":
    "/assets/treatments/categories/transplant-surgery.png",
  "general-specialized-surgery":
    "/assets/treatments/categories/General-specialized-surgery.png"
};

export function treatmentImageSrcForSlug(slug: string): string | undefined {
  return TREATMENT_IMAGE_BY_SLUG[slug];
}
