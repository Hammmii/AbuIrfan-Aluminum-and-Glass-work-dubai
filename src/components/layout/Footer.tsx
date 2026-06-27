import Link from "next/link";
import { cn } from "@/lib/cn";
import { site, contact, links, nav } from "@/lib/site";
import { Icon } from "@/components/icons";
import { Button } from "@/components/ui/Button";

/**
 * Footer.tsx — site footer (SERVER component, no "use client").
 *
 * 4-column layout above a bottom strip:
 *  1 Brand lockup + positioning line.
 *  2 Services — drawn from the two mega-menu parents in `nav[]`.
 *  3 Company — Home/Projects/About/Contact + Careers mailto.
 *  4 Contact — phone (click-to-call), 3 labelled emails, address, hours.
 *
 * A top CTA row ("Request a free quote" + WhatsApp Button) sits above the grid.
 *
 * Year: `new Date().getFullYear()` is evaluated by Next at build time for a
 * statically-rendered server component — acceptable per the task spec. No hooks,
 * no client JS, so this remains static.
 */

const companyLinks: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const servicesFromNav = nav
  .filter((item) => Array.isArray(item.children) && item.children.length > 0)
  .flatMap((item) =>
    (item.children ?? []).map((child) => ({ label: child.label, href: child.href })),
  );

const footerLinkClass = cn(
  "text-small text-steel transition-colors duration-300 ease-smooth hover:text-ink",
  "focus-visible:outline-2 focus-visible:outline-brand-bright",
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-border bg-mist">
      <div className="container-page py-12 md:py-16">
        {/* Top CTA row */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-border pb-10 md:flex-row md:items-center">
          <div>
            <span className="eyebrow">Start your project</span>
            <p className="mt-2 font-display text-h3 font-medium text-ink">
              Request a free quote
            </p>
          </div>
          <Button href={links.whatsapp} variant="whatsapp" size="md">
            Chat on WhatsApp
          </Button>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:gap-6">
          {/* Col 1 — Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex flex-col leading-none">
              <span className="font-display text-h3 font-semibold tracking-tight text-ink">
                ABU IRFAN
              </span>
              <span className="text-caption uppercase tracking-[0.2em] text-steel">
                Glass &amp; Aluminum
              </span>
            </div>
            <p className="mt-4 max-w-xs text-small text-steel">
              {site.positioning}
            </p>
          </div>

          {/* Col 2 — Services */}
          <nav aria-label="Services">
            <h2 className="font-display text-small font-medium text-ink">Services</h2>
            <ul className="mt-4 space-y-2.5">
              {servicesFromNav.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className={footerLinkClass}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Company */}
          <nav aria-label="Company">
            <h2 className="font-display text-small font-medium text-ink">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={footerLinkClass}>
                    {c.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={links.mail("hr")}
                  className={footerLinkClass}
                >
                  Careers
                </a>
              </li>
            </ul>
          </nav>

          {/* Col 4 — Contact */}
          <div>
            <h2 className="font-display text-small font-medium text-ink">Contact</h2>
            <ul className="mt-4 space-y-3 text-small text-steel">
              <li>
                <a
                  href={links.tel}
                  className={cn(
                    "inline-flex items-center gap-2 text-ink transition-colors duration-300 ease-smooth hover:text-brand",
                    "focus-visible:outline-2 focus-visible:outline-brand-bright",
                  )}
                >
                  <Icon name="phone" size={16} className="text-brand" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="space-y-1.5">
                {(
                  [
                    { label: "General", email: contact.emails.general, key: "general" as const },
                    { label: "HR", email: contact.emails.hr, key: "hr" as const },
                    { label: "Sales", email: contact.emails.sales, key: "sales" as const },
                  ]
                ).map((e) => (
                  <a
                    key={e.key}
                    href={links.mail(e.key)}
                    className={cn(
                      "flex items-center gap-2 transition-colors duration-300 ease-smooth hover:text-ink",
                      "focus-visible:outline-2 focus-visible:outline-brand-bright",
                    )}
                  >
                    <Icon name="mail" size={16} className="text-brand" />
                    <span>
                      <span className="text-steel">{e.label}: </span>
                      {e.email}
                    </span>
                  </a>
                ))}
              </li>
              <li className="flex items-start gap-2 pt-1">
                <Icon name="location-pin" size={16} className="mt-0.5 shrink-0 text-brand" />
                <span>{contact.address.line}</span>
              </li>
              <li className="text-steel">{contact.hours}</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-caption text-steel">
            &copy; {year} Abu Irfan for Glass &amp; Aluminum Co.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-caption text-steel">Dubai, UAE</span>
            <span className="h-3 w-px bg-border" aria-hidden />
            <Link href="/privacy" className={footerLinkClass}>
              Privacy
            </Link>
            <Link href="/terms" className={footerLinkClass}>
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
