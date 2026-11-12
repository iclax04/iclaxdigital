import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { ServiceArticle } from "@/components/service-article";
import { btnGhost, btnPrimary, Container, pageMeta } from "@/components/ui";
import { contactWhatsApp, getService, services } from "@/lib/site";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) {
      return pageMeta("Service not found | ICLAX DIGITAL", "This service is not part of the ICLAX Digital offer.");
    }
    return pageMeta(`${service.title} | ICLAX DIGITAL`, service.short);
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = getService(slug);

  if (!service) {
    return (
      <main id="content" className="bg-paper px-5 py-24">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Services</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold text-ink">That service is not listed.</h1>
          <p className="mt-5 max-w-xl text-quiet">
            Browse the full offer, or tell us what you need and we will recommend a starting point.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/services" className={btnPrimary}>
              All services
            </Link>
            <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={btnGhost}>
              Contact us
            </a>
          </div>
        </Container>
      </main>
    );
  }

  const index = services.findIndex((item) => item.slug === service.slug);
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main id="content">
      <section className="border-b border-line bg-white">
        <Container className="py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Service</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">{service.short}</p>
        </Container>
      </section>
      <Container>
        <ServiceArticle service={service} index={index < 0 ? 0 : index} />
      </Container>
      <section className="border-t border-mist bg-ivory">
        <Container className="py-16">
          <h2 className="font-display text-3xl text-ink md:text-4xl">Related services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: item.slug }}
                  className="block h-full rounded-2xl border border-mist bg-paper p-5 transition-colors hover:border-gold"
                >
                  <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-quiet">{item.short}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaBand title="Talk to our team." />
    </main>
  );
}
