import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { btnPrimary, Container, Eyebrow, pageMeta } from "@/components/ui";
import { contactWhatsApp, reasons } from "@/lib/site";

export const Route = createFileRoute("/why-us")({
  head: () =>
    pageMeta(
      "Why Choose Us | ICLAX DIGITAL",
      "Professional strategy, modern creative, data-led advertising, clear reporting and customised quotations from one Nigerian digital team.",
    ),
  component: WhyPage,
});

function WhyPage() {
  return (
    <main id="content">
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>Why choose us</Eyebrow>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-ink md:text-6xl">
              Because the work should be accountable.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-quiet md:text-lg">
              A polished page is not a strategy. Nigerian businesses choose us when they want marketing, a website and creative held to one standard, and reported in language a founder can use.
            </p>
            <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={`${btnPrimary} mt-8`}>
              Contact us
            </a>
          </div>
          <img
            src="/images/ng-lagos-suit.jpg"
            alt="A Nigerian businessman photographed in Lagos"
            className="aspect-[4/3] w-full rounded-3xl border border-line object-cover lg:rounded-none"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <ul className="grid gap-8 md:grid-cols-2">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-t border-mist pt-6">
                <p className="font-display text-4xl font-extrabold text-gold">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 font-display text-3xl text-ink">{reason.title}</h2>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-quiet">{reason.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Ready to take your business online?" />
    </main>
  );
}
