export type PatientConcern = {
  id: string;
  question: string;
  answer: string;
};

export const PATIENT_CONCERNS: readonly PatientConcern[] = [
  {
    id: "safety",
    question: "Is it actually safe?",
    answer:
      "We only place patients in JCI-accredited hospitals meeting the exact same safety standards required in the US and Europe. Accreditation is verified — not assumed."
  },
  {
    id: "communication",
    question: "What if I can't communicate?",
    answer:
      "Your coordinator speaks fluent American English and is with you from the airport to your last appointment. You'll never be left to figure it out alone."
  },
  {
    id: "complications",
    question: "What if something goes wrong?",
    answer:
      "Since 2025, Turkey mandates complication insurance for all health tourism providers. We also stay in contact through your entire recovery back home."
  },
  {
    id: "qualifications",
    question: "Are the doctors actually qualified?",
    answer:
      "Many Turkish surgeons trained in Europe and the US. In specialties like hair restoration and cosmetic surgery, they perform higher volumes than most US counterparts."
  }
] as const;
