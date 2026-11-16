import { createFileRoute } from "@tanstack/react-router";
import { UgcFilm } from "@/components/site/film";
import { CtaBand, PageIntro, SiteShell } from "@/components/site/chrome";
import { WORK, pageHead } from "@/lib/site";

export const Route = createFileRoute("/work")({
  head: () =>
    pageHead({
      title: "Our Work. Our Approach. | ICLAX Digital",
      description:
        "Portfolio spaces for Google Business Profile optimisation, SEO projects, Google Ads campaigns, AI video advertising and social media marketing.",
      path: "/work",
    }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Portfolio"
        title="Our Work. Our Approach."
        lede="Each frame shows a finished example of the work. Performance figures are not published here."
      />
      <ul className="mx-auto grid max-w-6xl gap-6 px-5 py-16 md:grid-cols-2 md:px-8">
        {WORK.map((item) => (
          <li key={item.id} id={item.id} className="border border-line bg-white">
            {"image" in item && item.image ? (
              <div className="flex items-center justify-center bg-white">
                <img
                  src={item.image}
                  alt={item.alt}
                  width={1200}
                  height={1522}
                  className="max-h-[40rem] w-full object-contain object-top"
                  loading="lazy"
                />
              </div>
            ) : "media" in item && item.media ? (
              <div className="flex items-center justify-center bg-ink">
                <UgcFilm className="max-h-[40rem] w-full bg-ink object-contain" />
              </div>
            ) : (
              <div className="flex aspect-video flex-col justify-between bg-paper p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold">Placeholder · not a completed case</p>
                <p className="max-w-sm font-logo text-2xl font-bold leading-snug text-ink">
                  Screenshot, video or notes to be added
                </p>
              </div>
            )}
            <div className="p-6">
              <h2 className="font-sans text-xl font-bold text-ink">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-quiet">{item.note}</p>
            </div>
          </li>
        ))}
      </ul>
      <CtaBand
        title="Have a project you want documented properly?"
        body="Start with a conversation. If we work together, published examples appear here only with your agreement."
      />
    </SiteShell>
  );
}
