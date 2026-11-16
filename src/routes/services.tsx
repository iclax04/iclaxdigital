import { createFileRoute, Link } from "@tanstack/react-router";
import { UgcFilm } from "@/components/site/film";
import { ServiceGlyph } from "@/components/site/icons";
import { CtaBand, SiteShell, btnPrimary } from "@/components/site/chrome";
import { SERVICES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Digital Marketing Services | Google Ads, SEO and Social | ICLAX Digital",
      description:
        "Google Ads management, SEO services, local SEO, Google Business Profile management, social media marketing and AI video advertising.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <p className="eyebrow">Our services</p>
          <h1 className="mt-4 max-w-3xl font-logo text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Services that grow a business.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">
            Google Ads management, search engine optimisation, Google Business Profile management, social media marketing and AI video advertising. Scope is quoted for your business. We do not publish package prices.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <ol className="space-y-16">
          {SERVICES.map((service, index) => (
            <li key={service.id} id={service.id} className="grid gap-8 border-t border-line pt-12 md:grid-cols-12">
              <div className="md:col-span-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <ServiceGlyph name={service.icon} className="mt-5 size-6 text-ink" />
                <h2 className="mt-4 font-logo text-3xl font-bold leading-snug text-ink">{service.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-quiet">{service.body}</p>
                <Link
                  to="/contact"
                  search={{ service: service.title }}
                  className={`${btnPrimary} mt-6`}
                >
                  Request a Custom Quote
                </Link>
              </div>
              <div className="grid content-start gap-6 md:col-span-7">
                {service.id === "ai-ugc" ? (
                  <div className="flex justify-center bg-ink">
                    <UgcFilm className="max-h-[36rem] w-full bg-ink object-contain" />
                  </div>
                ) : null}
                <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-line bg-white p-6">
                  <h3 className="text-sm font-semibold text-ink">What we handle</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-quiet">
                    {service.handle.map((item) => (
                      <li key={item} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-line bg-white p-6">
                  <h3 className="text-sm font-semibold text-ink">Why it matters</h3>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-quiet">
                    {service.matters.map((item) => (
                      <li key={item} className="border-t border-line pt-3 first:border-t-0 first:pt-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <CtaBand
        title="Not sure where to begin?"
        body="Describe the business and the result you want. We will recommend a mix and send a quotation prepared for that work."
      />
    </SiteShell>
  );
}
