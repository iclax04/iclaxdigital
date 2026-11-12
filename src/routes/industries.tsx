import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { btnPrimary, Container, Eyebrow, pageMeta } from "@/components/ui";
import { contactWhatsApp, industries } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageMeta(
      "Industries We Serve | ICLAX DIGITAL",
      "ICLAX Digital works with businesses in real estate, hotels, fashion, retail, restaurants, education, technology and professional services.",
    ),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <main id="content">
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full bg-gold/20" aria-hidden="true" />
        <Container className="relative py-16 md:py-20">
          <Eyebrow>Industries we serve</Eyebrow>
          <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">
            Built for businesses.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">
            Real estate, hotels, fashion, retail, restaurants, education, technology and professional services. The offer changes. The need is the same: be found, be trusted, and make it easy to get in touch.
          </p>
        </Container>
      </section>
      <section className="bg-paper">
        <Container className="grid gap-6 py-16 md:grid-cols-2 md:py-24">
          {industries.map((industry) => (
            <article key={industry.title} className="overflow-hidden rounded-2xl border border-line bg-white">
              <img src={industry.image} alt={industry.alt} className="aspect-[16/9] w-full object-cover" />
              <div className="p-6">
                <h2 className="font-display text-3xl font-bold text-ink">{industry.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-quiet">
                  We help {industry.title === "Hotels" ? "hotels" : `${industry.title.toLowerCase()} businesses`} show up where customers already look — Google, Maps, social media and a website that explains the offer clearly.
                </p>
                <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={`${btnPrimary} mt-6`}>
                  Contact us
                </a>
              </div>
            </article>
          ))}
        </Container>
      </section>
      <CtaBand title="Let's help your business get noticed." />
    </main>
  );
}