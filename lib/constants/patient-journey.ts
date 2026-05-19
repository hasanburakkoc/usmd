import type { LucideIcon } from "lucide-react";
import { Plane, ShieldCheck, Stethoscope, Video } from "lucide-react";

export type PatientJourneyStep = {
  title: string;
  description: string;
  bullets: readonly string[];
  icon: LucideIcon;
};

export const PATIENT_JOURNEY_INTRO = {
  title: "Your Patient Journey",
  description:
    "A clear, guided path designed to keep your treatment process safe, transparent, and stress-free—from your first video call through follow-up at home."
} as const;

export const PATIENT_JOURNEY_STEPS: readonly PatientJourneyStep[] = [
  {
    title: "Free Online Consultation",
    description:
      "Share your goals and medical history. We help you understand realistic options—no pressure.",
    bullets: [
      "Video or phone consultation in clear English",
      "Medical assessment aligned with partner hospitals",
      "Personalized, itemized quote after clinical review"
    ],
    icon: Video
  },
  {
    title: "Travel & VIP Transfer",
    description:
      "We coordinate logistics on the ground in Türkiye. You arrange your international flight.",
    bullets: [
      "Airport meet-and-greet and private transfers",
      "Hotel coordination near your clinic",
      "Dedicated coordinator reachable before you land"
    ],
    icon: Plane
  },
  {
    title: "Premium Treatment",
    description:
      "Care at vetted, internationally accredited facilities with an English-speaking host.",
    bullets: [
      "JCI-accredited hospital partners where applicable",
      "Pre-admission and discharge coordination",
      "Translator support during key appointments"
    ],
    icon: Stethoscope
  },
  {
    title: "Recovery & Safe Return",
    description:
      "Support does not end when you leave the hospital—or when you fly home.",
    bullets: [
      "Recovery guidance and local assistance while in Türkiye",
      "Safe return travel planning support",
      "One year of follow-up coordination calls after you are home"
    ],
    icon: ShieldCheck
  }
] as const;

export const PATIENT_JOURNEY_FOOTNOTE =
  "Questions only? That is fine. We are here to help you decide if medical travel is right for you.";

/** Condensed planning topics (formerly full Guides section). */
export const PATIENT_JOURNEY_GUIDE_BULLETS = [
  "JCI-accredited hospitals and coordinated travel—what international patients should know before deciding",
  "Recovery in Türkiye and up to one year of follow-up coordination after you return home",
  "Insurance and self-pay abroad—confirm coverage with your insurer; we do not sell insurance",
  "Custom quotes after medical review with inclusions spelled out—no surprise billing",
  "Airport meet-and-greet, transfers, and a dedicated coordinator reachable before you land"
] as const;
