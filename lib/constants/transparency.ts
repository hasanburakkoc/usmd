export type InclusionRow = {
  item: string;
  typical: "included" | "discussed" | "patient";
  note?: string;
};

export const PACKAGE_INCLUSION_ROWS: readonly InclusionRow[] = [
  {
    item: "Initial consultation & treatment planning",
    typical: "included"
  },
  {
    item: "Pre-operative tests and imaging (as required)",
    typical: "discussed",
    note: "Listed in your custom quote"
  },
  {
    item: "Procedure and hospital stay",
    typical: "included"
  },
  {
    item: "Anesthesia and in-hospital medications",
    typical: "discussed",
    note: "Per clinical plan"
  },
  {
    item: "Airport pickup and clinic transfers",
    typical: "included"
  },
  {
    item: "Hotel accommodation",
    typical: "discussed",
    note: "Options shared before you book"
  },
  {
    item: "Translator for key appointments",
    typical: "included"
  },
  {
    item: "Companion room or extra guest costs",
    typical: "discussed"
  },
  {
    item: "Follow-up calls after return (up to one year)",
    typical: "included"
  },
  {
    item: "International flights",
    typical: "patient",
    note: "You book your own flights"
  }
] as const;

export const US_TR_COMPARISON_ROWS = [
  {
    topic: "How you get a price",
    us: "Often fragmented bills from providers, facilities, and insurers—hard to predict upfront.",
    tr: "A single coordinated quote after medical review, with inclusions spelled out."
  },
  {
    topic: "Wait times",
    us: "Elective procedures may wait weeks or months depending on specialty and region.",
    tr: "Many procedures can be scheduled with shorter lead times once clinically cleared."
  },
  {
    topic: "Accreditation",
    us: "Varies by facility; patients research on their own.",
    tr: "Access to internationally accredited hospitals; we name your facility in advance."
  },
  {
    topic: "Travel logistics",
    us: "You arrange everything unless using a dedicated program.",
    tr: "USMD coordinates transfers, hotel options, and on-ground English support."
  },
  {
    topic: "Follow-up",
    us: "Depends on your local PCP and original provider.",
    tr: "One year of coordination follow-up calls with the same team."
  }
] as const;

export const TRANSPARENCY_DISCLAIMER =
  "USMD provides personalized quotes after clinical review. Figures on third-party sites are not binding estimates. USMD is a medical tourism facilitator, not a healthcare provider. This page is educational—not medical or financial advice.";
