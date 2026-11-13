import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { btnPrimary, Container, pageMeta } from "@/components/ui";
import { whatsappHref } from "@/lib/site";

const offered = [
  {
    id: "google-business",
    title: "Google Business Profile",
    image: "/images/work/gbp-phone.jpg",
    imageAlt: "A managed Google Business Profile for a phone accessories shop",
    photos: [
      { src: "/images/work/gbp-phone.jpg", alt: "Managed Google Business Profile for a phone accessories shop" },
      { src: "/images/work/gbp-beauty.jpg", alt: "Managed Google Business Profile for a beauty salon" },
      { src: "/images/work/gbp-dj.jpg", alt: "Managed Google Business Profile for a DJ service" },
      { src: "/images/work/gbp-spa.jpg", alt: "Managed Google Business Profile for a beauty salon and spa" },
    ],
    work: "Four live profiles under our management. Each shows a 5.0 rating, photos of the premises, call and directions. The salon, spa and DJ profiles also have WhatsApp. Business names are covered.",
    explanation:
      "When someone searches for a service nearby, your Google Business Profile is often the first thing they judge. We set the profile up properly, keep the name, category, hours, services and photos accurate, and strengthen how the business appears on Google Maps. Reviews are handled with care, so the listing looks complete and trustworthy rather than abandoned. On the Starter plan this is a basic optimisation. Growth includes ongoing management. Premium is full management, so the profile stays current as the business changes.",
    includes: [
      "Profile setup and category selection",
      "Hours, services and contact details kept accurate",
      "Photos and posts that show the real business",
      "Google Maps visibility",
      "Support for how reviews are handled",
    ],
    matters: [
      "Customers can find you before they find a competitor",
      "A complete profile is easier to trust",
      "Local searches lead to calls and direction requests",
    ],
  },
  {
    id: "google-seo",
    title: "Google SEO",
    explanation:
      "Google SEO is the work of making the right pages visible when people search for what you sell. We look at the technical issues that block a site, the words customers actually type, and the pages that should answer them. Local results are part of the same job, because many enquiries start with a search near home or work. Starter covers basic SEO. Growth moves into local SEO, so the business can show up for nearby searches. Premium is advanced local SEO, with a deeper plan for the pages, the location and the searches that bring paying customers.",
    includes: [
      "Technical checks that affect visibility",
      "On-page improvements for the pages that matter",
      "Keyword research based on real demand",
      "Local SEO for customers near the business",
      "A clear list of what to change next",
    ],
    matters: [
      "Search traffic does not stop when an ad is paused",
      "Pages match the way customers describe the offer",
      "You can see what was done and why",
    ],
  },
  {
    id: "social-posts",
    title: "Social media posts",
    explanation:
      "A quiet page does not build recognition. Each month we plan, design and publish a set number of posts so the business stays present on the platforms its customers already use. The posts cover the offer, the proof and the reason to get in touch, written in the business’s own voice rather than a generic caption. Starter includes 2 posts a month. Growth includes 4. Premium includes 6. The number is fixed, so you know exactly what is being published.",
    includes: [
      "A monthly set of posts, as listed in the package",
      "Captions written for the business, not a template",
      "Design prepared for the platform",
      "Scheduling so the page does not go quiet",
    ],
    matters: [
      "Customers see the business between campaigns",
      "The offer stays visible without daily effort from you",
      "The volume matches the package you chose",
    ],
  },
  {
    id: "ai-ugc",
    title: "AI UGC videos",
    image: "/images/ng-ai-video.jpg",
    imageAlt: "A creator producing a video with a camera and an editing screen",
    video: "/videos/iclax-christmas-ugc.mp4",
    work: "A finished ICLAX Digital film for hotels, supermarkets, restaurants and fashion, made to get those businesses ready for Christmas.",
    explanation:
      "AI UGC videos are short, direct films that feel like a person recommending the business, not a polished commercial that never gets watched. We use them for product stories, offers, explainers and social reels that can run on a page or in an ad. The idea still starts with what you sell and who it is for. The production is simply faster than waiting on a full crew. Starter includes 2 AI UGC videos a month. Growth includes 2. Premium includes 4.",
    includes: [
      "A set number of AI UGC videos each month",
      "Scripts built around the offer",
      "Cuts prepared for social pages and ads",
      "Product and service stories told plainly",
    ],
    matters: [
      "A video can explain an offer faster than a caption",
      "You can publish without a heavy production schedule",
      "The monthly number is agreed in the package",
    ],
  },
  {
    id: "social-platforms",
    title: "Social platforms",
    explanation:
      "Posts are only useful if someone is looking after the account they appear on. Platform management covers the profiles themselves: keeping the page in order, publishing into the right account, and staying close to the comments and messages that turn attention into a conversation. Starter covers 1 social platform. Growth includes management. Premium is full management. You choose the platforms your customers already use, and we manage those accounts for the month.",
    includes: [
      "Management of 1 platform on Starter, management on Growth, and full management on Premium",
      "Profile details kept accurate",
      "Posts published to the agreed accounts",
      "Attention to comments and messages",
    ],
    matters: [
      "The page does not depend on you remembering to post",
      "Replies are not left sitting for days",
      "The number of platforms is clear before work starts",
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads Management",
    image: "/images/work/google-ads-laptop.jpg",
    imageAlt: "A laptop screen showing a Google Ads account with campaigns, views, leads and clicks",
    work: "A live account view: campaigns, views, leads and clicks on one screen, so the month’s management can be checked.",
    explanation:
      "Google Ads puts the business in front of people at the moment they are searching, watching or browsing. We structure the campaigns, choose the keywords, prepare the creative and measure which clicks become enquiries. This is not included in Starter. Growth includes management. Premium is full management. Campaigns are scoped to the offer and the market. The monthly package covers the management. Media spend is separate and agreed with you.",
    includes: [
      "Search, Display and YouTube campaign structure",
      "Keyword research and campaign setup",
      "Creative prepared for the offer",
      "Conversion tracking and monthly reporting",
    ],
    matters: [
      "You reach people while they are already looking",
      "Spend is tied to an enquiry, not just a click",
      "Management on Growth, and full management on Premium",
    ],
  },
] as const;

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "Our Services | ICLAX DIGITAL",
      "Detailed explanations of Google Business Profile, Google SEO, social media posts, AI UGC videos, social platforms and Google Ads Management.",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Our services"
        title="Services that grow a business."
        lede="A closer look at Google Business Profile, Google SEO, social media posts, AI UGC videos, social platforms and Google Ads Management."
      />
      <Container>
        {offered.map((service, index) => (
          <article key={service.id} id={service.id} className="scroll-mt-28 border-t border-line py-16 md:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-logo text-3xl font-bold leading-snug text-ink sm:text-4xl">{service.title}</h2>
              <p className="mt-5 text-base leading-relaxed text-body">{service.explanation}</p>
              {"video" in service && service.video ? (
                <figure className="mt-6">
                  <figcaption className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                    Work evidence
                  </figcaption>
                  <video
                    src={service.video}
                    poster="/videos/iclax-christmas-ugc-cover.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] max-h-[32rem] w-full border border-line bg-ink object-contain"
                  />
                  <figcaption className="mt-3 text-sm leading-relaxed text-quiet">{service.work}</figcaption>
                </figure>
              ) : "photos" in service && service.photos ? (
                <figure className="mt-6">
                  <figcaption className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                    Work evidence
                  </figcaption>
                  <ul className="grid grid-cols-2 gap-3">
                    {service.photos.map((photo) => (
                      <li key={photo.src}>
                        <img src={photo.src} alt={photo.alt} className="w-full border border-line bg-white object-contain" />
                      </li>
                    ))}
                  </ul>
                  <figcaption className="mt-3 text-sm leading-relaxed text-quiet">{service.work}</figcaption>
                </figure>
              ) : "image" in service && service.image ? (
                <figure className="mt-6">
                  <figcaption className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold">
                    Work evidence
                  </figcaption>
                  <img src={service.image} alt={service.imageAlt} className="w-full border border-line object-cover" />
                  <figcaption className="mt-3 text-sm leading-relaxed text-quiet">{service.work}</figcaption>
                </figure>
              ) : null}
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-quiet">What we handle</h3>
                    <ul className="mt-4 space-y-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-quiet">Why it matters</h3>
                    <ul className="mt-4 space-y-2">
                      {service.matters.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-ink">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <a
                  href={whatsappHref(`Hello ICLAX Digital, I would like to talk about ${service.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`${btnPrimary} mt-8`}
                >
                  Contact us
                </a>
            </div>
          </article>
        ))}
      </Container>
      <CtaBand
        title="Not sure where to begin?"
        text="Describe the business and the result you want. We will recommend the right mix and send a personalised quotation."
      />
    </main>
  );
}
