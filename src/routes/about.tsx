import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { btnPrimary, Container, Eyebrow, pageMeta } from "@/components/ui";
import { reasons, values } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Us | ICLAX DIGITAL",
      "ICLAX Digital is a digital growth agency helping businesses establish an online presence and compete with clarity.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main id="content">
      <section className="bg-white">
        <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <Eyebrow>About us</Eyebrow>
            <h1 className="font-display text-5xl font-extrabold leading-tight text-ink md:text-6xl">
              A team for businesses that want to grow.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-quiet md:text-lg">
              ICLAX Digital helps businesses attract customers, build a stronger online brand and compete in a market where people decide on a phone — often before they walk in.
            </p>
          </div>
          <img
            src="/images/ng-founders.jpg"
            alt="Two businesswomen working with laptops"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-4">
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              One team for the work that used to be split five ways.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-body md:col-span-8">
            <p>
              Most businesses do not need another tool. They need a partner who can see the whole picture: how the website reads, how the ads are aimed, how the Google profile looks at 9pm, and whether the creative still sounds like the company.
            </p>
            <p>
              We work with small and medium-sized businesses, startups, real estate companies, hotels and restaurants, fashion brands, retailers and corporate teams that want a stronger public presence. The work is local to each market. The standard is international.
            </p>
            <p>
              We do not publish prices. After we understand the business, we prepare a quotation for the actual scope — not a package that pretends every company is the same.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-ink text-white">
        <Container className="grid gap-10 py-16 md:grid-cols-2 md:py-20">
          <article>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our mission</p>
            <p className="mt-4 font-display text-3xl font-bold leading-snug">
              To empower businesses with innovative digital solutions that improve visibility, strengthen customer relationships and drive business growth.
            </p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">Our vision</p>
            <p className="mt-4 font-display text-3xl font-bold leading-snug">
              To become a trusted digital growth partner for businesses.
            </p>
          </article>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <Eyebrow>Our values</Eyebrow>
          <h2 className="max-w-xl font-display text-4xl leading-tight text-ink md:text-6xl">
            The name is the brief.
          </h2>
          <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <li key={value.word} className="border-t border-mist pt-5">
                <p className="font-display text-4xl font-extrabold text-gold">{value.letter}</p>
                <h3 className="mt-3 text-lg text-ink">{value.word}</h3>
                <p className="mt-2 text-sm leading-relaxed text-quiet">{value.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-paper">
        <Container className="py-20 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Eyebrow>Why choose ICLAX Digital</Eyebrow>
              <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
                A shorter list of reasons to stay.
              </h2>
            </div>
            <Link to="/why-us" className={btnPrimary}>
              Read why us
            </Link>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-2">
            {reasons.slice(0, 4).map((reason) => (
              <li key={reason.title} className="border border-mist p-6">
                <h3 className="text-lg text-ink">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-quiet">{reason.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Let's build something great together." text="Tell us about the business. We will tell you what we would do first, and what that work would cost — privately, not on a public price list." />
    </main>
  );
}
