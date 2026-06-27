import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of using the Abu Irfan website.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-h1">Terms &amp; Conditions</h1>
        <p className="mt-4 text-small text-steel">Last updated: June 2026</p>
      </header>

      <div className="mt-10 max-w-2xl space-y-6 text-body text-steel">
        <p>
          This is a placeholder terms document. Replace it with your final legal
          text before launch, covering site usage, quotations, project scope,
          payment terms, warranties and limitation of liability.
        </p>
        <p>
          All quotations are valid for 30 days unless stated otherwise. Final
          scope, materials and pricing are confirmed in a written agreement
          before any work begins.
        </p>
      </div>
    </Section>
  );
}
