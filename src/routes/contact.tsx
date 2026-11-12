import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialIcon, WhatsAppIcon } from "@/components/icons";
import { Container, Eyebrow, pageMeta } from "@/components/ui";
import { contact, whatsappHref } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } => {
    if (typeof search.service === "string" && search.service.length > 0) {
      return { service: search.service };
    }
    return {};
  },
  head: () =>
    pageMeta(
      "Contact Us | ICLAX DIGITAL",
      "Request a personalised quotation from ICLAX Digital. Tell us about your business and the service you need. We do not publish prices.",
    ),
  component: ContactPage,
});

function ContactPage() {
  const { service } = Route.useSearch();
  return (
    <main id="content">
      <section className="border-b border-line bg-white">
        <Container className="py-16 md:py-20">
          <Eyebrow>Contact us</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            Let's help your business get noticed.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">
            Tell us what you sell and where your customers are. We reply with a plan and a quotation prepared for that business. There is no public price list.
          </p>
        </Container>
      </section>
      <section className="bg-paper">
        <Container className="grid gap-12 py-16 lg:grid-cols-12 md:py-24">
          <div className="lg:col-span-7">
            <ContactForm preset={service ?? ""} />
          </div>
          <aside className="lg:col-span-5">
            <h2 className="font-display text-3xl text-ink">Speak to the team directly.</h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-start gap-3 text-ink">
                  <Mail className="mt-0.5 size-4 text-gold" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-quiet">Email</span>
                    {contact.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={`tel:${contact.phoneTel}`} className="flex items-start gap-3 text-ink">
                  <Phone className="mt-0.5 size-4 text-gold" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-quiet">Phone</span>
                    {contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref("Hello ICLAX Digital, I would like a quotation.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-ink"
                >
                  <WhatsAppIcon className="mt-0.5 size-4 text-green" />
                  <span>
                    <span className="block text-xs uppercase tracking-widest text-quiet">WhatsApp</span>
                    Message the team
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-ink">
                <MapPin className="mt-0.5 size-4 text-gold" />
                <span>
                  <span className="block text-xs uppercase tracking-widest text-quiet">Location</span>
                  {contact.location}
                </span>
              </li>
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-quiet">
              We reply with a recommended scope and a quotation prepared for your business. Media budgets, where relevant, are discussed with you before anything is spent.
            </p>
            <ul className="mt-6 flex flex-wrap gap-3">
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-md border border-mist text-ink transition-colors hover:border-gold hover:text-gold"
                  >
                    <SocialIcon label={social.label} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </Container>
      </section>
    </main>
  );
}
