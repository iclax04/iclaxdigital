import { useState, type FormEvent, type ReactNode } from "react";
import { z } from "zod";
import { contact, mailtoHref, serviceOptions, services, whatsappHref } from "@/lib/site";
import { btnPrimary } from "@/components/ui";

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name."),
  businessName: z.string().trim().min(2, "Enter your business name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a phone number we can reach."),
  service: z.string().trim().min(1, "Choose a service, or tell us you are unsure."),
  project: z
    .string()
    .trim()
    .min(20, "Describe the project in at least a sentence so we can respond usefully."),
  website: z.string().optional(),
});

type Fields = z.infer<typeof schema>;
type Errors = Partial<Record<keyof Fields, string>>;

const inputClass =
  "mt-2 w-full min-h-11 rounded-md border border-mist bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-quiet focus:border-gold";

export function ContactForm({ preset }: { preset?: string }) {
  const presetTitle = services.find((service) => service.slug === preset)?.title ?? "";
  const [values, setValues] = useState<Fields>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    service: presetTitle,
    project: "",
    website: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ready" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  function messageBody(data: Fields) {
    return [
      `Name: ${data.fullName}`,
      `Business: ${data.businessName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Service: ${data.service}`,
      "",
      data.project,
    ].join("\n");
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !next[key as keyof Fields]) {
          next[key as keyof Fields] = issue.message;
        }
      }
      setErrors(next);
      setStatus("idle");
      return;
    }
    setErrors({});
    if (parsed.data.website) {
      setStatus("sent");
      return;
    }

    const body = messageBody(parsed.data);

    if (contact.formEndpoint) {
      setStatus("sending");
      try {
        const response = await fetch(contact.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: parsed.data.fullName,
            business: parsed.data.businessName,
            email: parsed.data.email,
            phone: parsed.data.phone,
            service: parsed.data.service,
            message: parsed.data.project,
          }),
        });
        if (!response.ok) throw new Error("Request failed");
        setStatus("sent");
        return;
      } catch {
        setStatus("error");
        setFormError("The enquiry could not be delivered automatically. Use WhatsApp or email below — your details are still here.");
      }
    }

    const popup = window.open(whatsappHref(`Hello ICLAX Digital,\n\n${body}`), "_blank", "noopener,noreferrer");
    if (!popup) {
      setFormError("Your browser blocked the new window. Use the WhatsApp or email button below to send this enquiry.");
    }
    setStatus("ready");
  }

  const summary = messageBody(values);
  const subject = `Enquiry from ${values.businessName || "a business"} — ${values.service || "new project"}`;

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-mist bg-white p-5 shadow-sm md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName} htmlFor="full-name">
          <input
            id="full-name"
            name="fullName"
            autoComplete="name"
            value={values.fullName}
            onChange={(event) => update("fullName", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Business name" error={errors.businessName} htmlFor="business-name">
          <input
            id="business-name"
            name="businessName"
            autoComplete="organization"
            value={values.businessName}
            onChange={(event) => update("businessName", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Email address" error={errors.email} htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
        <Field label="Phone number" error={errors.phone} htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className={inputClass}
            required
          />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Service required" error={errors.service} htmlFor="service">
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(event) => update("service", event.target.value)}
            className={inputClass}
            required
          >
            <option value="">Select a service</option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Project description" error={errors.project} htmlFor="project">
          <textarea
            id="project"
            name="project"
            rows={6}
            value={values.project}
            onChange={(event) => update("project", event.target.value)}
            className={inputClass}
            placeholder="What do you sell, who is the customer, and what should change in the next few months?"
            required
          />
        </Field>
      </div>
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </div>
      <button type="submit" className={`${btnPrimary} mt-6 w-full sm:w-auto`} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Submit enquiry"}
      </button>
      <p className="mt-4 text-sm leading-relaxed text-quiet">
        By sending this enquiry you agree that we may use these details to reply, as described in our privacy policy. Fees are quoted individually — nothing here is a price list.
      </p>
      {formError ? (
        <p className="mt-4 text-sm text-ink" role="alert">
          {formError}
        </p>
      ) : null}
      {status === "sent" ? (
        <p className="mt-4 rounded-md border border-gold bg-paper p-4 text-sm text-ink" role="status">
          Thank you. Your enquiry has been submitted. We will reply using the email or phone you provided.
        </p>
      ) : null}
      {status === "ready" || status === "error" ? (
        <div className="mt-4 rounded-md border border-gold bg-paper p-4 text-sm text-ink" role="status">
          <p>
            Your enquiry is ready. WhatsApp should open with the message — press send so it reaches ICLAX Digital. You can also email it directly.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              className={btnPrimary}
              href={whatsappHref(`Hello ICLAX Digital,\n\n${summary}`)}
              target="_blank"
              rel="noreferrer"
            >
              Send on WhatsApp
            </a>
            <a className="inline-flex min-h-11 items-center justify-center border border-ink px-6 text-xs font-medium uppercase tracking-widest text-ink" href={mailtoHref(subject, summary)}>
              Email this enquiry
            </a>
          </div>
        </div>
      ) : null}
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-xs uppercase tracking-widest text-quiet">
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-sm text-ink" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
