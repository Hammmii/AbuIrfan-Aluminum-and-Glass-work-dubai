"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { services } from "@/data/services";
import { contact, links } from "@/lib/site";

const fieldCls =
  "w-full rounded-input border border-border bg-paper px-4 py-3 text-body text-ink placeholder:text-steel transition-colors duration-200 focus:border-brand-bright focus:outline-none focus-visible:outline-2 focus-visible:outline-brand-bright";

const labelCls = "mb-2 block text-small font-medium text-ink";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const empty: Fields = { name: "", email: "", phone: "", service: "", message: "" };

/**
 * QuoteForm — multi-field enquiry form.
 *
 * No backend yet (Resend/Formspree to be wired in Phase 8). On submit it
 * composes a pre-filled mailto: to the general inbox and shows a confirmation.
 * Native inputs for reliable styling; HTML5 required validation.
 */
export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const mailtoHref = (() => {
    const subject = encodeURIComponent(`New enquiry — ${fields.service || "Project"} — ${fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nPhone: ${fields.phone}\nService: ${fields.service}\n\n${fields.message}`,
    );
    return `mailto:${contact.emails.general}?subject=${subject}&body=${body}`;
  })();

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-paper p-8 text-center">
        <h3 className="text-h3">Thank you — your enquiry is ready to send.</h3>
        <p className="mx-auto mt-3 max-w-md text-body text-steel">
          We respond within 48 hours. Click below to send it straight to our
          inbox, or call us now.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={mailtoHref}
            className="inline-flex items-center justify-center rounded-button bg-brand px-7 py-3.5 font-display text-small font-medium text-paper transition-colors duration-300 ease-smooth hover:bg-brand-bright"
          >
            Send via email
          </a>
          <a
            href={links.tel}
            className="inline-flex items-center justify-center rounded-button border border-brand px-7 py-3.5 font-display text-small font-medium text-brand transition-colors duration-300 ease-smooth hover:text-paper"
          >
            <span className="relative">
              <span aria-hidden className="absolute inset-0 -z-10 origin-left scale-x-0 rounded bg-bronze transition-transform duration-300 ease-smooth hover:scale-x-100" />
              Call now
            </span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setFields(empty);
            setSubmitted(false);
          }}
          className="mt-6 text-small text-steel underline-offset-4 hover:text-ink hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="qf-name" className={labelCls}>Name *</label>
          <input id="qf-name" name="name" required value={fields.name} onChange={set("name")} className={fieldCls} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelCls}>Phone</label>
          <input id="qf-phone" name="phone" type="tel" value={fields.phone} onChange={set("phone")} className={fieldCls} placeholder="+971 …" />
        </div>
      </div>

      <div>
        <label htmlFor="qf-email" className={labelCls}>Email *</label>
        <input id="qf-email" name="email" type="email" required value={fields.email} onChange={set("email")} className={fieldCls} placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="qf-service" className={labelCls}>Service of interest</label>
        <select id="qf-service" name="service" value={fields.service} onChange={set("service")} className={cn(fieldCls, "appearance-none")}>
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>{s.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="qf-message" className={labelCls}>Project details *</label>
        <textarea id="qf-message" name="message" required rows={4} value={fields.message} onChange={set("message")} className={cn(fieldCls, "resize-y")} placeholder="Tell us about your project — location, scope, timeline…" />
      </div>

      <button
        type="submit"
        className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-button border border-brand px-7 py-3.5 font-display text-small font-medium text-brand transition-colors duration-300 ease-smooth hover:text-paper sm:w-auto"
      >
        <span aria-hidden className="absolute inset-0 origin-left scale-x-0 bg-bronze transition-transform duration-300 ease-smooth group-hover:scale-x-100" />
        <span className="relative z-10">Send enquiry</span>
      </button>
    </form>
  );
}
