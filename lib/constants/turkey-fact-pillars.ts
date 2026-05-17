import type { LucideIcon } from "lucide-react";
import {
  Building2,
  DollarSign,
  Plane,
  Scissors,
  ShieldCheck,
  Users
} from "lucide-react";

export type TurkeyFactPillar = {
  id: string;
  title: string;
  description: string;
  source: string;
  icon: LucideIcon;
};

export const TURKEY_FACT_PILLARS: readonly TurkeyFactPillar[] = [
  {
    id: "jci-hospitals",
    title: "World-class hospitals",
    description:
      "Turkey has over 40 JCI-accredited hospitals — the same gold standard as top US and European facilities.",
    source: "JCI Directory 2024",
    icon: Building2
  },
  {
    id: "patient-volume",
    title: "2 million patients a year",
    description:
      "Turkey hosted 2 million international health tourists in 2024 alone, generating $10B in health tourism revenue.",
    source: "Turkish Ministry of Health 2024",
    icon: Users
  },
  {
    id: "specialist-volume",
    title: "Specialists who do this every day",
    description:
      "Turkish surgeons perform some procedures — like hair transplants — at volumes that give them unmatched precision and expertise.",
    source: "#1 global destination for hair restoration",
    icon: Scissors
  },
  {
    id: "regulated",
    title: "Regulated & accredited",
    description:
      "Since April 2025, Turkey requires mandatory complication insurance and portal registration for all health tourism providers.",
    source: "HealthTürkiye portal, 2025",
    icon: ShieldCheck
  },
  {
    id: "cost-savings",
    title: "50-70% less. Always.",
    description:
      "Procedures consistently cost 50-80% less than equivalent private-pay pricing in the US — without compromising quality.",
    source: "IMARC / Mordor Intelligence 2025",
    icon: DollarSign
  },
  {
    id: "recovery-travel",
    title: "Recovery meets travel",
    description:
      "The average medical tourist spends 12-19 days in Turkey — blending recovery with one of the world's most stunning destinations.",
    source: "IMARC Research 2024",
    icon: Plane
  }
] as const;
