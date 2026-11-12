import { process } from "@/lib/site";
import { Container, Eyebrow } from "@/components/ui";

export function ProcessBlock({ tone = "light" }: { tone?: "dark" | "light" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink text-ivory" : "bg-paper text-body"}>
      <Container className="py-20 md:py-28">
        <Eyebrow>Our process</Eyebrow>
        <h2
          className={`max-w-xl font-display text-4xl leading-tight md:text-6xl ${dark ? "text-ivory" : "text-ink"}`}
        >
          A clear path from the first conversation to the report.
        </h2>
        <p className={`mt-5 max-w-2xl text-base leading-relaxed ${dark ? "text-fog" : "text-quiet"}`}>
          The same five steps for a website, a search programme or a paid campaign, whether the business is in one city or trading nationwide.
        </p>
        <ol className="mt-12 grid gap-10 md:grid-cols-5">
          {process.map((step) => (
            <li key={step.n}>
              <span className="font-display text-5xl text-gold">{step.n}</span>
              <h3 className={`mt-4 text-lg ${dark ? "text-ivory" : "text-ink"}`}>{step.title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-fog" : "text-quiet"}`}>
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
