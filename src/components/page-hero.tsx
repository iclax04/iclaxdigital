import { Container, Eyebrow } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gold/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-gold/20" aria-hidden="true" />
      <Container className="relative py-16 md:py-20">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-ink md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">{lede}</p>
      </Container>
    </section>
  );
}