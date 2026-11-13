import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clapperboard,
  MapPin,
  Megaphone,
  Search,
  Share2,
  Star,
  Target,
} from "lucide-react";
import { CtaBand } from "@/components/cta-band";
import { btnGhost, btnPrimary, Container, Eyebrow } from "@/components/ui";
import { brand, contactWhatsApp, industries, values } from "@/lib/site";

const serviceLinks: Record<string, { section: string; title: string; Icon: typeof Target; explanation: string }> = {
  "Google Business Profile": {
    section: "google-business",
    title: "Google Business Profile",
    Icon: MapPin,
    explanation: "A complete Google profile so you can be found, trusted and chosen on Maps.",
  },
  SEO: {
    section: "google-seo",
    title: "Google SEO",
    Icon: Search,
    explanation: "Technical, on-page and local SEO so the right people can find you on Google.",
  },
  "Social media posts": {
    section: "social-posts",
    title: "Social media posts",
    Icon: Share2,
    explanation: "Consistent content, design and replies across the platforms your customers already use.",
  },
  "AI UGC videos": {
    section: "ai-ugc",
    title: "AI UGC videos",
    Icon: Clapperboard,
    explanation: "Promotional films, product stories and reels produced with modern AI workflows.",
  },
  "Social platforms": {
    section: "social-platforms",
    title: "Social platforms",
    Icon: Megaphone,
    explanation: "Management of the social platforms your customers already use, kept active and on brand.",
  },
  "Google Ads": {
    section: "google-ads",
    title: "Google Ads Management",
    Icon: Target,
    explanation: "Search, Display and YouTube campaigns built around the customers already looking for you.",
  },
};

const comparison = [
  { feature: "Monthly price", starter: "$49", growth: "$99", premium: "$199", strong: true },
  { feature: "Google Business Profile", starter: "Basic optimisation", growth: "Management", premium: "Full management" },
  { feature: "SEO", starter: "Basic SEO", growth: "Local SEO", premium: "Advanced Local SEO" },
  { feature: "Social media posts", starter: "2", growth: "4", premium: "6" },
  { feature: "AI UGC videos", starter: "2", growth: "2", premium: "4" },
  { feature: "Social platforms", starter: "1", growth: "Management", premium: "Full management" },
  { feature: "Google Ads", starter: "—", growth: "Management", premium: "Full management" },
  { feature: "Monthly report", starter: "✓", growth: "✓", premium: "✓" },
] as const;

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

      <section className="relative isolate min-h-[32rem] overflow-hidden md:min-h-[40rem]">
        <img
          src="/images/ng-founders.jpg"
          alt="Two Nigerian businesswomen in Lagos holding laptops"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-ink/60 md:bg-gradient-to-r md:from-ink/80 md:via-ink/55 md:to-ink/25" aria-hidden="true" />
        <Container className="relative flex min-h-[32rem] items-center py-16 md:min-h-[40rem] md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-logo text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Let's grow your business <span className="text-gold">beyond</span> limits.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              Your business deserves to be seen. At ICLAX Digital, we help businesses attract customers, build powerful online brands and grow through innovative digital marketing and technology solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactWhatsApp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center bg-white px-6 text-center text-sm font-semibold text-ink hover:bg-paper"
              >
                Contact us
              </a>
              <Link
                to="/services"
                className="inline-flex min-h-11 items-center justify-center border border-white bg-white px-6 text-center text-sm font-semibold text-ink hover:bg-paper"
              >
                Explore our services
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white" id="services">
        <Container className="py-6 pb-16 md:pb-24">
          <h2 className="max-w-2xl font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
            The work that helps a business get noticed.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {comparison
              .filter((row) => row.feature !== "Monthly price" && row.feature !== "Monthly report")
              .map((row, index) => {
              const link = serviceLinks[row.feature];
              const Icon = link.Icon;
              const navy = index % 2 === 0;
              return (
                <li key={row.feature}>
                  <Link
                    to="/services"
                    hash={link.section}
                    className={`flex h-full flex-col border p-6 ${navy ? "border-ink bg-ink text-white" : "border-gold bg-white text-ink"}`}
                  >
                    <span className="block h-1 w-12 bg-gold" aria-hidden="true" />
                    <Icon className={`mt-5 size-6 ${navy ? "text-gold" : "text-ink"}`} aria-hidden="true" />
                    <h3 className={`mt-5 font-display text-lg font-bold ${navy ? "text-white" : "text-ink"}`}>{link.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${navy ? "text-white" : "text-ink"}`}>{link.explanation}</p>
                    <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${navy ? "text-gold" : "text-ink"}`}>
                      See the work
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20" id="pricing" aria-label="Pricing">
        <Container>
          <h2 className="font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">Pricing</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm text-ink md:min-w-0">
              <thead>
                <tr className="border-b border-line">
                  <th className="sticky left-0 bg-white py-3 pr-3 font-display text-base font-bold md:py-4 md:pr-4">Services</th>
                  <th className="px-3 py-4 text-center font-display text-base font-bold">Starter</th>
                  <th className="px-3 py-4 text-center font-display text-base font-bold">
                    <span className="inline-flex items-center justify-center gap-1">
                      Growth
                      <Star className="size-4 fill-gold text-gold" aria-label="Most popular" />
                    </span>
                  </th>
                  <th className="px-3 py-4 text-center font-display text-base font-bold">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.feature} className="border-b border-line">
                    <th className="sticky left-0 bg-white py-3 pr-3 text-left text-sm font-medium text-ink md:py-4 md:pr-4">{row.feature}</th>
                    {(["starter", "growth", "premium"] as const).map((plan) => (
                      <td
                        key={plan}
                        className={`px-3 py-4 text-center ${"strong" in row && row.strong ? "text-lg font-bold" : "font-medium"}`}
                      >
                        {row[plan]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-paper" id="industries">
        <Container className="py-16 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <Eyebrow>Industries we serve</Eyebrow>
              <h2 className="font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
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
                <Link to="/industries" className="group relative block aspect-[3/4] overflow-hidden bg-ink md:aspect-[4/5]">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-display text-xl font-bold text-white md:text-2xl">
                    {industry.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-white">
        <Container className="grid items-center gap-10 py-8 pb-16 md:grid-cols-2 md:pb-24">
          <img
            src="/images/ng-abuja-desk.jpg"
            alt="A Nigerian woman working at her desk in Abuja"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <h2 className="font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
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
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <li key={value.letter} className="border-t border-line px-6 py-8">
              <span className="font-logo text-3xl font-bold text-ink">{value.letter}</span>
              <h3 className="mt-3 text-sm font-semibold text-ink">{value.word}</h3>
              <p className="mt-2 text-sm leading-relaxed text-quiet">{value.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        title="Ready to take your business online?"
        text="Let's help your business get noticed. Tell us what you sell and where your customers are. We will recommend a way forward and send a quotation made for that work."
      />
    </main>
  );
}