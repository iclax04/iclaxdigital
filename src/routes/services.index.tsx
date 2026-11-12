import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { ServiceArticle } from "@/components/service-article";
import { Container } from "@/components/ui";
import { pageMeta } from "@/components/ui";
import { services } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageMeta(
      "Our Services | ICLAX DIGITAL",
      "Google Ads, websites, SEO, social media, Meta advertising, Google Business Profile, branding and AI video — scoped and quoted for your business.",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Our services"
        title="Services that grow a business."
        lede="Google Ads, websites, SEO, social media, Facebook and Instagram advertising, Google Business Profile, branding and AI video. Every engagement is quoted for your business. There is no public price list."
      />
      <Container>
        {services.map((service, index) => (
          <ServiceArticle key={service.slug} service={service} index={index} />
        ))}
      </Container>
      <CtaBand
        title="Not sure where to begin?"
        text="Describe the business and the result you want. We will recommend the right mix and send a personalised quotation."
      />
    </main>
  );
}
