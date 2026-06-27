import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Abu Irfan collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    h: "1. Who we are",
    p: 'ABU IRFAN FOR GLASS & ALUMINUM INSTALLATION & MAINTENANCE EST. ("Abu Irfan", "we") is a Dubai-based glass and aluminium design, fabrication and installation company. This policy explains how we handle personal information collected through this website.',
  },
  {
    h: "2. Information we collect",
    p: "We collect the information you choose to give us through the contact form — name, email address, phone number, the service you are interested in, and your message. If you call or email us directly, we keep a record of that correspondence. If analytics is enabled, we also collect standard usage data (pages visited, device type, approximate location) to improve the site.",
  },
  {
    h: "3. Why we use it",
    p: "Solely to respond to your enquiry, provide a quotation, deliver our services, and — where relevant — arrange site visits and follow-up. We do not sell or rent your personal information to third parties.",
  },
  {
    h: "4. Legal basis & consent",
    p: "We process your information on the basis of the consent you give when submitting an enquiry, and to take steps at your request before entering a contract. You may withdraw consent or ask us to stop at any time.",
  },
  {
    h: "5. Retention",
    p: "We keep enquiry and project records for as long as needed to deliver the service and meet our legal and tax obligations, then delete or anonymise them.",
  },
  {
    h: "6. Sharing",
    p: "We share information only with trusted service providers who help us operate (for example email delivery or analytics), under appropriate confidentiality, or where required by law.",
  },
  {
    h: "7. Cookies",
    p: "The site uses only essential and, where enabled, analytics cookies. You can control cookies through your browser settings.",
  },
  {
    h: "8. Your rights",
    p: "You may request access to, correction of, or deletion of your personal information, or object to its processing. To exercise any of these rights, contact us at info@abuirfan.com.",
  },
  {
    h: "9. Contact",
    p: `For any privacy question or request, email ${contact.emails.general} or write to us at ${contact.address.line}.`,
  },
];

export default function PrivacyPage() {
  return (
    <Section variant="mist" padY="lg">
      <header className="max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-4 text-h1">Privacy Policy</h1>
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
