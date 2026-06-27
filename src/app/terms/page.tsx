import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms on which Abu Irfan supplies quotations and services.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "1. About these terms",
    p: 'These terms apply to your use of this website and to any enquiry, quotation or service supplied by ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST. ("Abu Irfan", "we"). By requesting a quotation or engaging us, you accept these terms.',
  },
  {
    h: "2. The website",
    p: "The information on this site is provided in good faith for general marketing purposes and may be updated at any time. It does not constitute a binding offer. Colours, finishes and specifications shown may vary from the final product.",
  },
  {
    h: "3. Quotations",
    p: "A quotation is an estimate based on the information available at the time and is valid for 30 days from its date unless stated otherwise. Final scope, materials, dimensions and price are confirmed in a written agreement after a site measure, and may differ from the estimate.",
  },
  {
    h: "4. Projects & scope",
    p: "Work is performed to the agreed scope set out in the written agreement. Any variation requested after agreement may affect price and timeline, and will be confirmed in writing before being carried out.",
  },
  {
    h: "5. Payment",
    p: "Payment terms (deposits, milestones and balance) are specified in the written agreement. Title to materials and risk passes as set out in that agreement.",
  },
  {
    h: "6. Warranties",
    p: "Workmanship and materials carry the warranties set out in the written agreement and any manufacturer warranty that applies. Warranties do not cover damage from misuse, modification by others, or normal wear.",
  },
  {
    h: "7. Limitation of liability",
    p: "To the maximum extent permitted by law, our liability for any matter connected with the website or services is limited to the value of the work performed. We are not liable for indirect or consequential loss.",
  },
  {
    h: "8. Governing law",
    p: "These terms and any dispute arising from them are governed by the laws of the United Arab Emirates and the Emirate of Dubai.",
  },
  {
    h: "9. Contact",
    p: `For any question about these terms, email ${contact.emails.general} or call ${contact.phoneDisplay}.`,
  },
];

export default function TermsPage() {
  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-h1">Terms &amp; Conditions</h1>
        <p className="mt-4 text-small text-steel">Last updated: June 2026</p>
      </header>

      <div className="mt-10 max-w-2xl space-y-8">
        {sections.map((s) => (
          <div key={s.h}>
            <h2 className="text-h3">{s.h}</h2>
            <p className="mt-3 text-body text-steel">{s.p}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
