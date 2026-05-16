import type { LucideIcon } from "lucide-react";
import { Plane, ShieldCheck, Stethoscope, Video } from "lucide-react";

export type HowItWorksStep = {
  title: string;
  description: string;
  bullets: readonly string[];
  icon: LucideIcon;
};

export const HOW_IT_WORKS_INTRO = {
  title: "How It Works",
  description:
    "A clear, guided journey designed to keep your treatment process safe, transparent, and stress-free—from your first video call through follow-up at home."
} as const;

export const HOW_IT_WORKS_STEPS: readonly HowItWorksStep[] = [
  {
    title: "Free Online Consultation",
    description:
      "Share your goals and medical history. We help you understand realistic options—no pressure.",
    bullets: [
      "Video or phone consultation in US English",
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
      "Care at vetted, internationally accredited facilities with a US-English speaking host.",
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

export const HOW_IT_WORKS_FOOTNOTE =
  "Questions only? That is fine. We are here to help you decide if medical travel is right for you.";
