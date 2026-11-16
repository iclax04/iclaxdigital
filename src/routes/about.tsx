import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, SiteShell, btnPrimary } from "@/components/site/chrome";
import { VALUES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About ICLAX Digital | Digital Marketing Agency",
      description:
        "ICLAX Digital helps businesses build stronger online visibility and sustainable digital growth through SEO, paid advertising, social media and AI-powered creative work.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteShell>
      <section className="border-b border-line bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <p className="eyebrow">About us</p>
            <h1 className="mt-4 font-logo text-4xl font-bold leading-tight text-ink sm:text-5xl">
              A team for businesses that want to grow.
            </h1>
          </div>
          <img
            src="/images/ng-office.jpg"
            alt="Two professionals working together in an office"
            width={1400}
            height={933}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <h2 className="font-logo text-3xl font-bold text-ink">Who we are</h2>
        <div className="mt-6 space-y-5 text-base leading-relaxed text-body">
          <p>
            ICLAX Digital is a digital marketing agency focused on helping businesses build stronger online visibility and achieve sustainable digital growth.
          </p>
          <p>
            We combine strategic marketing, search engine optimisation, paid advertising, social media management and AI-powered creative solutions to help businesses connect with their target audiences.
          </p>
          <p>
            Our approach is built around understanding each business, developing effective strategies and continuously improving digital performance.
          </p>
          <p className="text-quiet">
            Most businesses do not need another tool. They need a partner who can see the whole picture: how the website reads, how the ads are aimed, how the Google profile looks in the evening, and whether the creative still sounds like the company.
          </p>
        </div>
        <Link to="/why-us" className={`${btnPrimary} mt-8`}>
          Read why us
        </Link>
      </section>

      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">Our mission</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              To empower businesses with innovative digital solutions that improve visibility, strengthen customer relationships and drive business growth.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gold">Our vision</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink">
              To become a trusted digital growth partner for businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper" aria-labelledby="values-heading">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
          <h2 id="values-heading" className="font-logo text-3xl font-bold text-ink">The name is the brief.</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-5">
            {VALUES.map((value) => (
              <li key={value.letter} className="border border-line bg-white p-5">
                <span className="font-logo text-3xl font-bold text-ink">{value.letter}</span>
                <h3 className="mt-3 text-sm font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-quiet">{value.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand
        title="Let’s build something considered."
        body="Tell us about the business. We will tell you what we would do first, and prepare a quotation privately."
      />
    </SiteShell>
  );
}
