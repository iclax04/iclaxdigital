import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clapperboard,
  MapPin,
  Megaphone,
  Monitor,
  PenTool,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { btnGhost, btnPrimary, Container, Eyebrow } from "@/components/ui";
import { brand, contactWhatsApp, industries, services, values } from "@/lib/site";

const serviceIcons = {
  "google-ads": Target,
  websites: Monitor,
  seo: Search,
  "social-media": Share2,
  "meta-ads": Megaphone,
  "google-business": MapPin,
  branding: PenTool,
  "ai-video": Clapperboard,
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${brand.name} | Innovating Your Digital Growth` },
      { name: "description", content: brand.support },
    ],
  }),
  component: Home,
});

function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "ICLAX DIGITAL",
    slogan: "Innovating your digital growth.",
    description: brand.support,
    areaServed: "Nigeria",
    email: "hello@iclaxdigital.com",
    telephone: "+2348143260133",
    address: { "@type": "PostalAddress", addressCountry: "NG" },
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-white">
        <Container className="grid items-center gap-10 py-10 md:py-16 lg:grid-cols-2 lg:py-20">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Let's grow your business <span className="text-gold">beyond</span> limits.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-quiet md:text-lg">
              Your business deserves to be seen. At ICLAX Digital, we help businesses attract customers, build powerful online brands and grow through innovative digital marketing and technology solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={btnPrimary}>
                Contact us
              </a>
              <Link to="/services" className={btnGhost}>
                Explore our services
              </Link>
            </div>
          </div>
          <img
            src="/images/ng-founders.jpg"
            alt="Two Nigerian businesswomen in Lagos holding laptops"
            className="aspect-[4/5] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[5/4] lg:border lg:border-line"
          />
        </Container>
      </section>

      <section className="bg-white" id="services">
        <Container className="py-6 pb-16 md:pb-24">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
            The work that helps a business get noticed.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-px lg:border lg:border-line lg:bg-line">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons];
              return (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="flex h-full flex-col rounded-xl border border-line bg-white p-6 transition-colors hover:border-ink lg:rounded-none lg:border-0 lg:p-8"
                  >
                    <Icon className="size-6 text-ink" aria-hidden="true" />
                    <h3 className="mt-5 font-display text-lg font-bold text-ink">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-quiet">{service.short}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid items-center gap-10 py-8 pb-16 lg:grid-cols-2 md:pb-24">
          <img
            src="/images/ng-abuja-desk.jpg"
            alt="A Nigerian woman working at her desk in Abuja"
            className="aspect-[4/3] w-full border border-line object-cover lg:border-line"
          />
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
              Built for how customers actually decide.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body md:text-lg">
              A search, an Instagram page, a Google listing and a WhatsApp message are often the whole first meeting. ICLAX Digital helps businesses show up clearly in all four.
            </p>
            <p className="mt-4 text-base leading-relaxed text-quiet">
              We work with entrepreneurs, startups and established companies in Lagos, Abuja, Port Harcourt and across the country. The creative standard is international. The market knowledge is local.
            </p>
            <Link to="/about" className={`${btnPrimary} mt-8`}>
              About us
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-white" aria-label="What ICLAX stands for">
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:max-w-7xl lg:grid-cols-5">
          {values.map((value) => (
            <li key={value.letter} className="border-t border-line px-6 py-8 sm:border-t-0 lg:border-l lg:first:border-l-0">
              <span className="font-logo text-3xl font-bold text-ink">{value.letter}</span>
              <h3 className="mt-3 text-sm font-semibold text-ink">{value.word}</h3>
              <p className="mt-2 text-sm leading-relaxed text-quiet">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper" id="industries">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">
                Built for businesses, wherever your customers are.
              </h2>
            </div>
            <Link to="/industries" className={btnGhost}>
              See all industries
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {industries.map((industry) => (
              <li key={industry.title}>
                <Link to="/industries" className="group relative block aspect-[3/4] overflow-hidden rounded-2xl bg-ink lg:aspect-[4/5] lg:rounded-none">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-display text-2xl font-bold text-white">
                    {industry.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand
        title="Ready to take your business online?"
        text="Let's help your business get noticed. Tell us what you sell and where your customers are. We will recommend a way forward and send a quotation made for that work."
      />
    </main>
  );
}