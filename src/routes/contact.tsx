import { useState, type FormEvent, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { PageIntro, SiteShell } from "@/components/site/chrome";
import { COUNTRY_SUGGESTIONS, SERVICES, SITE, waLink, pageHead } from "@/lib/site";

type ContactSearch = { service?: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () =>
    pageHead({
      title: "Contact ICLAX Digital | Free Consultation",
      description:
        "Tell ICLAX Digital about your business. Request a free consultation or a custom quote for Google Ads, SEO, social media or AI video.",
      path: "/contact",
    }),
  component: ContactPage,
});

type Fields = {
  fullName: string;
  businessName: string;
  email: string;
  country: string;
  service: string;
  project: string;
  phone: string;
  website: string;
};

const empty: Fields = {
  fullName: "",
  businessName: "",
  email: "",
  country: "",
  service: "",
  project: "",
  phone: "",
  website: "",
};

function ContactPage() {
  const preset = Route.useSearch().service;
  const [fields, setFields] = useState<Fields>({ ...empty, service: preset ?? "" });
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [ready, setReady] = useState<{ mailto: string; whatsapp: string } | null>(null);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (fields.website.trim()) return;
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.fullName.trim().length < 2) next.fullName = "Add your full name.";
    if (fields.businessName.trim().length < 2) next.businessName = "Add the business name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) next.email = "Add a valid email address.";
    if (fields.country.trim().length < 2) next.country = "Add your country.";
    if (!fields.service) next.service = "Choose a service.";
    if (fields.project.trim().length < 12) next.project = "Add a short description of the project.";
    setErrors(next);
    if (Object.keys(next).length) {
      setReady(null);
      return;
    }
    const body = [
      `Full name: ${fields.fullName.trim()}`,
      `Business name: ${fields.businessName.trim()}`,
      `Email: ${fields.email.trim()}`,
      `Country: ${fields.country.trim()}`,
      fields.phone.trim() ? `Phone: ${fields.phone.trim()}` : "",
      `Service required: ${fields.service}`,
      "",
      "Project details:",
      fields.project.trim(),
    ]
      .filter(Boolean)
      .join("\n");
    const subject = `Enquiry from ${fields.businessName.trim()}`;
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const whatsapp = waLink(`Hello ICLAX Digital, I would like a quotation.\n\n${body}`);
    setReady({ mailto, whatsapp });
    window.location.href = mailto;
  }

  return (
    <SiteShell>
      <PageIntro
        eyebrow="Contact"
        title="Let’s Talk About Growing Your Business."
        lede="Have a project in mind or looking to improve your online presence? Tell us about your business and let’s explore how ICLAX Digital can help."
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-12 md:px-8">
        <div className="lg:col-span-7">
          {ready ? (
            <div className="rounded-md border border-line bg-white p-6 md:p-8" role="status">
              <h2 className="font-logo text-2xl font-bold text-ink">Your enquiry is ready to send.</h2>
              <p className="mt-4 text-sm leading-relaxed text-quiet">
                Your email app should open with this message addressed to {SITE.email}. Nothing is stored on this website until you send it. If the app did not open, use the buttons below. WhatsApp remains available.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={ready.mailto} className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white">
                  Email this enquiry
                </a>
                <a href={ready.whatsapp} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center justify-center rounded-md border border-ink/20 bg-white px-6 text-sm font-semibold text-ink">
                  Send on WhatsApp
                </a>
              </div>
              <button
                type="button"
                className="mt-6 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                onClick={() => setReady(null)}
              >
                Edit the enquiry
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={submit} className="border border-mist bg-white p-5 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Full Name" id="full-name" error={errors.fullName}>
                  <input id="full-name" name="fullName" autoComplete="name" required className="field" value={fields.fullName} onChange={(event) => update("fullName", event.target.value)} />
                </Field>
                <Field label="Business Name" id="business-name" error={errors.businessName}>
                  <input id="business-name" name="businessName" autoComplete="organization" required className="field" value={fields.businessName} onChange={(event) => update("businessName", event.target.value)} />
                </Field>
                <Field label="Email Address" id="email" error={errors.email}>
                  <input id="email" name="email" type="email" autoComplete="email" required className="field" value={fields.email} onChange={(event) => update("email", event.target.value)} />
                </Field>
                <Field label="Country" id="country" error={errors.country}>
                  <input id="country" name="country" list="countries" autoComplete="country-name" required className="field" value={fields.country} onChange={(event) => update("country", event.target.value)} />
                  <datalist id="countries">
                    {COUNTRY_SUGGESTIONS.map((country) => (
                      <option key={country} value={country} />
                    ))}
                  </datalist>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Phone number (optional)" id="phone">
                  <input id="phone" name="phone" type="tel" autoComplete="tel" className="field" value={fields.phone} onChange={(event) => update("phone", event.target.value)} />
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Service Required" id="service" error={errors.service}>
                  <select id="service" name="service" required className="field" value={fields.service} onChange={(event) => update("service", event.target.value)}>
                    <option value="">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Not sure yet — advise me">Not sure yet — advise me</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Project Details" id="project" error={errors.project}>
                  <textarea
                    id="project"
                    name="project"
                    rows={6}
                    required
                    className="field min-h-36"
                    placeholder="What do you sell, who is the customer, and what should change?"
                    value={fields.project}
                    onChange={(event) => update("project", event.target.value)}
                  />
                </Field>
              </div>
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" tabIndex={-1} autoComplete="off" name="website" value={fields.website} onChange={(event) => update("website", event.target.value)} />
              </div>
              <button type="submit" className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white hover:bg-charcoal sm:w-auto">
                Submit Enquiry
              </button>
              <p className="mt-4 text-sm leading-relaxed text-quiet">
                By sending this enquiry you agree that we may use these details to reply, as described in our privacy policy. Fees are quoted individually — nothing here is a price list.
              </p>
            </form>
          )}
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-sans text-3xl font-extrabold text-ink">Speak to the team directly.</h2>
          <ul className="mt-6 space-y-5 text-sm">
            <li>
              <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-ink">
                <Mail className="mt-0.5 size-4 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-quiet">Email</span>
                  {SITE.email}
                </span>
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="flex items-start gap-3 text-ink">
                <Phone className="mt-0.5 size-4 text-gold" aria-hidden="true" />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-quiet">Phone</span>
                  {SITE.phoneDisplay}
                </span>
              </a>
            </li>
            <li>
              <a href={waLink("Hello ICLAX Digital, I would like a quotation.")} target="_blank" rel="noreferrer" className="flex items-start gap-3 text-ink">
                <span className="mt-0.5 text-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor">
                    <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.5.9.9-3.4-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
                  </svg>
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-quiet">WhatsApp</span>
                  Message the team
                </span>
              </a>
            </li>
            <li className="text-quiet">
              <span className="block text-xs uppercase tracking-widest">Location</span>
              Nigeria · clients served worldwide, without claiming offices we do not have
            </li>
          </ul>
          <p className="mt-8 text-sm leading-relaxed text-quiet">
            We reply with a recommended scope and a quotation prepared for your business. Media budgets, where relevant, are discussed with you before anything is spent.
          </p>
        </aside>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-quiet">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm font-medium text-ink">
          {error}
        </p>
      ) : null}
    </div>
  );
}
