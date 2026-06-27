import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Abu Irfan handles your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-h1">Privacy Policy</h1>
        <p className="mt-4 text-small text-steel">Last updated: June 2026</p>
      </header>

      <div className="mt-10 max-w-2xl space-y-6 text-body text-steel">
        <p>
          This is a placeholder privacy policy. Replace it with your final legal
          text before launch. At a minimum it should explain what information you
          collect through the contact form (name, email, phone, message), why you
          collect it, how long you keep it, and how visitors can request deletion.
        </p>
        <p>
          Enquiries submitted via this site are used only to respond to the
          enquiry. We do not sell personal information to third parties.
        </p>
        <p>
          For privacy requests, contact{" "}
          <a href={`mailto:${site.shortName.toLowerCase()}@abuirfan.com`} className="text-brand underline-offset-4 hover:underline">
            info@abuirfan.com
          </a>
          .
        </p>
      </div>
    </Section>
  );
}
