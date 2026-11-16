import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaBand, PageIntro, SiteShell, btnGhost } from "@/components/site/chrome";
import { INDUSTRIES, pageHead } from "@/lib/site";

export const Route = createFileRoute("/industries")({
  head: () =>
    pageHead({
      title: "Industries We Serve | ICLAX Digital",
      description:
        "Digital marketing for real estate, hotels, fashion, retail, restaurants, education, technology and professional services, in local markets and internationally.",
      path: "/industries",
    }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Industries we serve"
        title="Built for businesses."
        lede="Real estate, hotels, fashion, retail, restaurants, education, technology and professional services. The offer changes. The need is the same: be found, be trusted, and make it easy to get in touch."
      />
      <ul className="mx-auto max-w-6xl space-y-16 px-5 py-16 md:px-8">
        {INDUSTRIES.map((industry, index) => (
          <li
            key={industry.slug}
            id={industry.slug}
            className="grid items-center gap-8 border-t border-line pt-12 md:grid-cols-2"
          >
            <img
              src={industry.image}
              alt={industry.alt}
              width={1200}
              height={1600}
              loading="lazy"
              className={`aspect-[4/3] w-full object-cover ${index % 2 === 1 ? "md:order-2" : ""}`}
            />
            <div>
              <h2 className="font-logo text-3xl font-bold text-ink">{industry.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-quiet">{industry.body}</p>
              <p className="mt-4 text-sm leading-relaxed text-quiet">
                The practical work is usually the same set: Google, Maps and social media.
              </p>
              <Link to="/contact" className={`${btnGhost} mt-6`}>
                Contact us
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <CtaBand
        title="Let’s help your business get noticed."
        body="Your next customer could be searching for you right now. Tell us about the business and we will prepare a quotation for the work."
      />
    </SiteShell>
  );
}
