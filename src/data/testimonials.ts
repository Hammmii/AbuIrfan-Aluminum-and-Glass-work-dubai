export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  /** Optional reference to a project slug. */
  project?: string;
};

/**
 * Placeholder testimonials — replace with verified client quotes and a Google
 * review profile link when supplied (RULES.md: never reuse competitor reviews).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The glass room they built holds its cool even in peak summer, and the finishing is the cleanest I've seen in Dubai. One team handled design through installation — no finger-pointing.",
    name: "Rashid Al-Marri",
    role: "Villa Owner",
    project: "jbr-glass-room",
  },
  {
    quote:
      "Our curtain-wall facade went up on schedule and sealed perfectly against a sandstorm the following week. Genuine engineering, not just fabrication.",
    name: "Lena Hoffmann",
    role: "Project Manager",
    project: "business-bay-facade",
  },
  {
    quote:
      "From the first measure to handover, the detail was obsessive in the best way. Every joint, every alignment — exactly what a premium property deserves.",
    name: "Aditya Nair",
    role: "Interior Architect",
    project: "difc-partitions",
  },
];
