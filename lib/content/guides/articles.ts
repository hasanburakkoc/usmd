import type { GuideArticle } from "@/lib/content/guides/types";

export const GUIDE_ARTICLES: readonly GuideArticle[] = [
  {
    slug: "why-turkey-for-us-patients",
    title: "Why US Patients Choose Türkiye for Healthcare",
    description:
      "Accreditation, specialist depth, and coordinated travel—what American families should know before deciding.",
    publishedAt: "2026-05-01",
    sections: [
      {
        paragraphs: [
          "Türkiye has invested heavily in private hospitals that serve international patients. Many facilities hold Joint Commission International (JCI) accreditation—the same international standard many US patients look for when evaluating quality abroad.",
          "For Americans facing long wait times or high out-of-pocket costs at home, Türkiye offers a middle path: modern clinical infrastructure with a coordination layer that handles language, transfers, and follow-up."
        ]
      },
      {
        heading: "What USMD adds",
        paragraphs: [
          "We are not a directory. We assign a US-English coordinator, align you with a vetted hospital for your procedure, and stay with you for one year after you return home.",
          "You book your own flights. We handle the rest—transparently, with a written quote after medical review."
        ]
      }
    ]
  },
  {
    slug: "recovery-and-follow-up",
    title: "Recovery in Türkiye and Follow-Up at Home",
    description:
      "What to expect after your procedure—and how USMD stays involved when you land back in the US.",
    publishedAt: "2026-05-01",
    sections: [
      {
        paragraphs: [
          "Recovery timelines vary by procedure. Your hospital team sets clinical milestones; your USMD coordinator helps with logistics—hotel proximity, transfer timing, and questions in plain English.",
          "Before you fly home, we confirm discharge instructions and how to reach us if something feels off during travel."
        ]
      },
      {
        heading: "One year of follow-up",
        paragraphs: [
          "Our coordination commitment includes follow-up calls for up to one year after treatment. That continuity matters when your local doctor asks what was done abroad—we help you keep records straight."
        ]
      }
    ]
  },
  {
    slug: "us-insurance-and-turkey",
    title: "US Insurance and Treatment Abroad",
    description:
      "Educational overview—not legal or insurance advice. Always confirm coverage with your insurer.",
    publishedAt: "2026-05-01",
    sections: [
      {
        paragraphs: [
          "Most US commercial plans do not treat elective care abroad like domestic care. Some patients use health savings accounts, financing, or self-pay packages coordinated through USMD.",
          "We recommend discussing travel and medical complication insurance with a licensed broker. USMD can point to categories of coverage to ask about; we do not sell insurance."
        ]
      }
    ]
  },
  {
    slug: "how-custom-quotes-work",
    title: "How Custom Quotes Work (No Surprise Billing)",
    description:
      "Why we do not publish fixed procedure prices—and how your itemized quote is built.",
    publishedAt: "2026-05-01",
    sections: [
      {
        paragraphs: [
          "Every patient is different. A quote after medical review lists inclusions: hospital fees, transfers, hotel coordination, translator support, medications where applicable, and follow-up.",
          "International flights are yours to book. We say that upfront so nothing feels hidden."
        ]
      },
      {
        heading: "Compare before you commit",
        paragraphs: [
          "See our Inclusions page for a template of what is typically coordinated versus what is discussed line-by-line in your quote."
        ]
      }
    ]
  },
  {
    slug: "what-to-expect-at-the-airport",
    title: "What to Expect at the Airport in Türkiye",
    description:
      "VIP meet-and-greet, transfers, and who you will hear from first.",
    publishedAt: "2026-05-01",
    sections: [
      {
        paragraphs: [
          "When you land, your coordinator or driver meets you at the airport with your name on a sign—no guessing at taxi lines.",
          "We share contact numbers before departure and recommend saving our WhatsApp line for day-of questions across US time zones."
        ]
      }
    ]
  }
] as const;

export function getGuideBySlug(slug: string): GuideArticle | undefined {
  return GUIDE_ARTICLES.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return GUIDE_ARTICLES.map((g) => g.slug);
}
