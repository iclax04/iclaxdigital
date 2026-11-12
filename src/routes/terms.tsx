import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Container, pageMeta } from "@/components/ui";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageMeta(
      "Terms and Conditions | ICLAX DIGITAL",
      "The terms that apply when you use the ICLAX Digital website or ask us to prepare a quotation.",
    ),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Legal"
        title="Terms and conditions"
        lede="These terms cover use of this website and the way quotations are requested. They were last updated on 30 October 2026."
      />
      <Container className="max-w-3xl py-16 md:py-20">
        <div className="space-y-10 text-base leading-relaxed text-body">
          <section>
            <h2 className="font-display text-3xl text-ink">The website</h2>
            <p className="mt-4">
              This website is operated by ICLAX Digital in Nigeria. It describes our services and lets you contact us. Content is provided in good faith and may be updated without notice. Nothing on the site is an offer to start work until both sides have agreed a scope in writing.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">No published prices</h2>
            <p className="mt-4">
              We do not display service prices, retainers or packages. Any fee is set out in a quotation prepared for your business after we understand the work. A quotation is valid for the period stated on it, and work begins only when you accept it. Advertising media budgets, where used, are separate from professional fees and are agreed before spend.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Enquiries</h2>
            <p className="mt-4">
              When you submit the contact form, you confirm that the details are accurate and that we may use them to reply, as described in the{" "}
              <Link to="/privacy" className="underline decoration-gold underline-offset-4">
                privacy policy
              </Link>
              . Sending an enquiry does not create a client relationship.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Intellectual property</h2>
            <p className="mt-4">
              The ICLAX Digital name, the design of this website and the text on it belong to the agency unless a credit says otherwise. You may not copy the site for your own commercial use. Work we create for a client is licensed or assigned only as the project agreement states.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Sample testimonials</h2>
            <p className="mt-4">
              Any item marked as a sample is an illustration of tone. It is not a review from a real client and must not be treated as one.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Liability</h2>
            <p className="mt-4">
              We take care to keep the website accurate and available, but we do not guarantee that it will be uninterrupted or free of error. To the extent the law allows, we are not liable for loss arising only from use of the public website. Project work is governed by the agreement for that project.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">External links</h2>
            <p className="mt-4">
              Links to WhatsApp, email, social networks and other sites leave our control. Their terms and privacy practices apply once you leave.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Contact</h2>
            <p className="mt-4">
              Questions about these terms:{" "}
              <a className="underline decoration-gold underline-offset-4" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              , {contact.phoneDisplay}, {contact.location}.
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
