import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Icon } from "@/components/icons";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { contact, links } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free quote or talk to Abu Irfan about your glass & aluminium project in Dubai. Phone, email, address and an enquiry form — we respond within 48 hours.",
  alternates: { canonical: "/contact" },
};

const emails = [
  { label: "General", value: contact.emails.general, key: "general" as const },
  { label: "HR / Careers", value: contact.emails.hr, key: "hr" as const },
  { label: "Sales", value: contact.emails.sales, key: "sales" as const },
];

export default function ContactPage() {
  return (
    <>
      <Section variant="mist" padY="lg">
        <header className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 text-h1">Let&apos;s talk about your project.</h1>
          <p className="mt-5 text-body-lg text-steel">
            Send us your requirements or call directly. We typically respond
            within 48 hours with next steps.
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Form */}
          <Reveal>
            <div className="rounded-lg border border-border bg-paper p-7 md:p-9">
              <h2 className="text-h3">Request a free quote</h2>
              <p className="mt-2 text-small text-steel">
                Fill in the form and we&apos;ll be in touch.
              </p>
              <div className="mt-6">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          {/* Info */}
          <Reveal delay={0.05}>
            <div className="space-y-8">
              <div>
                <h2 className="text-h3">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-body">
                  <li>
                    <a href={links.tel} className="inline-flex items-center gap-3 text-ink transition-colors duration-300 ease-smooth hover:text-brand">
                      <Icon name="phone" size={18} className="text-brand" />
                      {contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="space-y-2">
                    {emails.map((e) => (
                      <a key={e.key} href={links.mail(e.key)} className="flex items-center gap-3 text-ink transition-colors duration-300 ease-smooth hover:text-brand">
                        <Icon name="mail" size={18} className="text-brand" />
                        <span><span className="text-steel">{e.label}: </span>{e.value}</span>
                      </a>
                    ))}
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="location-pin" size={18} className="mt-1 shrink-0 text-brand" />
                    <span className="text-steel">{contact.address.line}</span>
                  </li>
                  <li className="flex items-center gap-3 text-steel">
                    <Icon name="consult" size={18} className="text-brand" />
                    {contact.hours}
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-lg border border-border">
                <iframe
                  title="Abu Irfan location — Dubai"
                  src="https://www.google.com/maps?q=Port+Saeed,+Dubai&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
