import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { UgcFilm } from "@/components/site/film";
import { ServiceGlyph } from "@/components/site/icons";
import {
  CtaBand,
  SiteShell,
  btnOnPhoto,
  btnOnPhotoGhost,
  btnPrimary,
} from "@/components/site/chrome";
import {
  INDUSTRIES,
  MARKETS,
  SERVICES,
  VALUES,
  WORK,
  businessSchema,
  pageHead,
} from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Digital Growth Solutions for Businesses Worldwide | ICLAX Digital",
      description:
        "ICLAX Digital is a digital marketing agency helping small businesses, startups and established brands improve online visibility with Google Ads management, SEO, local SEO, social media marketing and AI video advertising.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema()) }} />
      <section className="relative isolate min-h-[32rem] overflow-hidden md:min-h-[40rem]">
        <img
          src="/images/hero-columns.jpg"
          alt=""
          width={1792}
          height={1008}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/25 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[32rem] w-full max-w-6xl items-center px-5 py-16 md:min-h-[40rem] md:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Digital marketing agency</p>
            <h1 className="mt-4 font-logo text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Digital Growth Solutions for Businesses <span className="text-gold">Worldwide.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
              We help small businesses, startups and established brands improve their online visibility, attract qualified customers and grow through strategic digital marketing.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={btnOnPhoto}>
                Get a Free Consultation
              </Link>
              <Link to="/services" className={btnOnPhotoGhost}>
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" id="services" aria-labelledby="services-heading">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 id="services-heading" className="max-w-2xl font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
            The work that helps a business get noticed.
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => {
              const dark = service.tone === "ink";
              return (
                <li key={service.id}>
                  <article className={`flex h-full flex-col border p-6 ${dark ? "border-ink bg-ink text-white" : "border-gold bg-white text-ink"}`}>
                    <span className="block h-1 w-12 bg-gold" aria-hidden="true" />
                    <ServiceGlyph name={service.icon} className={`mt-5 size-6 ${dark ? "text-gold" : "text-ink"}`} />
                    <h3 className={`mt-5 font-sans text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>{service.title}</h3>
                    <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-white" : "text-ink"}`}>{service.summary}</p>
                    <Link
                      to="/services"
                      hash={service.id}
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${dark ? "text-gold" : "text-ink"}`}
                    >
                      Learn More
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-paper" id="solutions" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow">Engagement</p>
          <h2 id="solutions-heading" className="mt-4 max-w-2xl font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
            Solutions Designed Around Your Business.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-quiet">
            Every business has unique goals. We develop tailored digital marketing strategies based on your industry, audience and growth objectives.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              ["Your market", "The plan starts with the industry, the audience and the countries where you want to be found."],
              ["A written scope", "Search, ads, social, profiles and video are combined only where they help the same goal."],
              ["A private quotation", "Fees are prepared after we understand the work. Nothing on this website is a price list."],
            ].map(([title, body]) => (
              <li key={title} className="border border-line bg-white p-6">
                <h3 className="font-sans text-lg font-bold text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-quiet">{body}</p>
              </li>
            ))}
          </ul>
          <Link to="/contact" className={`${btnPrimary} mt-8`}>
            Request a Custom Quote
          </Link>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="industries-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Industries we serve</p>
              <h2 id="industries-heading" className="mt-4 font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
                Built for businesses, wherever your customers are.
              </h2>
            </div>
            <Link to="/industries" className="inline-flex min-h-11 items-center justify-center rounded-md border border-ink/20 bg-white px-6 text-sm font-semibold text-ink hover:border-ink hover:bg-ink hover:text-white">
              See all industries
            </Link>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {INDUSTRIES.map((industry) => (
              <li key={industry.slug}>
                <Link to="/industries" hash={industry.slug} className="group relative block aspect-[3/4] overflow-hidden bg-ink md:aspect-[4/5]">
                  <img
                    src={industry.image}
                    alt={industry.alt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 font-sans text-xl font-bold text-white md:text-2xl">
                    {industry.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-paper" aria-labelledby="borders-heading">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <p className="eyebrow">International</p>
            <h2 id="borders-heading" className="mt-4 font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
              Helping Businesses Grow Beyond Borders.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-quiet">
              From local businesses to growing international brands, ICLAX Digital provides digital marketing solutions designed to increase visibility, strengthen online presence and generate meaningful business opportunities.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-quiet">
              Work is delivered remotely. A country on this list is a market we serve, not a claim of a local office.
            </p>
          </div>
          <ul className="grid content-start gap-px border border-line bg-line sm:grid-cols-2">
            {MARKETS.map((market) => (
              <li key={market} className="bg-white px-5 py-5">
                <p className="font-sans text-lg font-bold text-ink">{market}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" id="work" aria-labelledby="work-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <p className="eyebrow">Portfolio</p>
          <h2 id="work-heading" className="mt-4 max-w-2xl font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
            Our Work. Our Approach.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-quiet">
            Each frame shows a finished example of the work. Performance figures are not published here.
          </p>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {WORK.map((item) => (
              <li key={item.id}>
                <article className="flex h-full flex-col border border-line bg-paper">
                  {"image" in item && item.image ? (
                    <div className="flex items-center justify-center border-b border-line bg-white">
                      <img
                        src={item.image}
                        alt={item.alt}
                        width={1200}
                        height={1522}
                        className="max-h-[34rem] w-full object-contain object-top"
                        loading="lazy"
                      />
                    </div>
                  ) : "media" in item && item.media ? (
                    <div className="flex items-center justify-center border-b border-line bg-ink">
                      <UgcFilm className="max-h-[34rem] w-full bg-ink object-contain" />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] flex-col justify-between border-b border-line bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold">Placeholder</p>
                      <p className="max-w-xs font-logo text-xl font-bold leading-snug text-ink">
                        Project material to be added
                      </p>
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-sans text-lg font-bold text-ink">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-quiet">{item.note}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
          <Link to="/work" className="mt-8 inline-flex text-sm font-semibold text-ink hover:text-gold">
            View the work page
          </Link>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="clients-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <h2 id="clients-heading" className="font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
            What Our Clients Say.
          </h2>
          <figure className="mt-8 border border-line bg-white p-8 md:p-12">
            <p className="font-logo text-4xl leading-none text-gold" aria-hidden="true">“</p>
            <blockquote className="mt-4 max-w-3xl font-logo text-2xl font-bold leading-snug text-ink md:text-3xl">
              ICLAX Digital listened before they recommended anything. The plan was specific, the reporting was plain enough to use, and our presence on Google and social finally looks established.
            </blockquote>
            <figcaption className="mt-8 text-sm text-quiet">
              <span className="block font-semibold text-ink">Catherine Hale</span>
              Founder, United Kingdom
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <img
            src="/images/ng-abuja-desk.jpg"
            alt="A woman working at a desk"
            width={1200}
            height={1800}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <div>
            <h2 className="font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">
              Built for how customers actually decide.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-body md:text-lg">
              A search, a social page, a Google listing and a direct message are often the whole first meeting. ICLAX Digital helps businesses show up clearly in each of them.
            </p>
            <p className="mt-4 text-base leading-relaxed text-quiet">
              We work with small businesses, startups and established brands in the United States, the United Kingdom, Canada, Australia, Nigeria and other international markets.
            </p>
            <Link to="/about" className={`${btnPrimary} mt-8`}>
              About us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-white" aria-label="What ICLAX stands for">
        <ul className="mx-auto grid max-w-6xl sm:grid-cols-2 md:grid-cols-5">
          {VALUES.map((value) => (
            <li key={value.letter} className="border-t border-line px-6 py-8 sm:border-t-0 md:border-l md:first:border-l-0">
              <span className="font-logo text-3xl font-bold text-ink">{value.letter}</span>
              <h3 className="mt-3 text-sm font-semibold text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-quiet">{value.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </SiteShell>
  );
}
