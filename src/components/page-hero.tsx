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
    <section className="border-b border-line bg-white">
      <Container className="py-14 md:py-20 lg:py-24">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-logo text-4xl font-bold leading-tight text-ink md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">{lede}</p>
      </Container>
    </section>
  );
}