export type FAQ = {
  question: string;
  answer: string;
  /** 'general' or a service slug — lets the accordion filter by context. */
  category: "general" | string;
};

/** General FAQs surfaced on the Home FAQ teaser. */
export const faqs: FAQ[] = [
  {
    category: "general",
    question: "Do you handle design, fabrication and installation yourselves?",
    answer:
      "Yes — all three, in-house. One accountable team owns the project from first consultation to final handover, which is how we keep quality and timing under control.",
  },
  {
    category: "general",
    question: "Are your systems built for the Dubai climate?",
    answer:
      "Every system is specified for the Gulf: thermal-break aluminium frames, double-glazing, UV-stable finishes and weather-rated sealing against heat, dust and humidity.",
  },
  {
    category: "general",
    question: "How do I get a quote?",
    answer:
      "Send us your requirements via the quote form or by phone. We'll review the scope and come back — typically within 48 hours — with next steps and an indication of cost.",
  },
  {
    category: "general",
    question: "Do you work on both villas and commercial buildings?",
    answer:
      "Both. We deliver for residential villas, commercial towers, and retail and hospitality spaces across Dubai and the wider UAE.",
  },
  {
    category: "general",
    question: "Do glass rooms get too hot in a Dubai summer?",
    answer:
      "Not when specified correctly. With the right glazing and thermal-break framing, a glass room stays comfortable and usable year-round — that engineering is exactly what we design for.",
  },
  {
    category: "general",
    question: "What areas do you cover?",
    answer:
      "Dubai and across the UAE. Get in touch with your location and we'll confirm coverage and logistics for your project.",
  },
];
