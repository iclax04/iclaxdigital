import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageIntro, SiteShell } from "@/components/site/chrome";
import { WHY, pageHead } from "@/lib/site";

export const Route = createFileRoute("/why-us")({
  head: () =>
    pageHead({
      title: "Why Choose ICLAX Digital | Digital Marketing Agency",
      description:
        "Why businesses choose ICLAX Digital: accountable marketing, custom quotations, reporting a founder can read, and search, ads, social and creative planned together.",
      path: "/why-us",
    }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Why choose us"
        title="Because the work should be accountable."
        lede="A polished page is not a strategy. Businesses choose us when they want marketing and creative held to one standard, and reported in language a founder can use."
      />
      <ol className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:grid-cols-2 md:px-8">
        {WHY.map((item, index) => (
          <li key={item.title} className="border border-line bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-3 font-sans text-lg font-bold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-quiet">{item.body}</p>
          </li>
        ))}
      </ol>
      <CtaBand />
    </SiteShell>
  );
}
