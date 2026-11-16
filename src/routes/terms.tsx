import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/chrome";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms and Conditions | ICLAX Digital",
      description:
        "Terms for using the ICLAX Digital website, requesting a quotation, and how project examples are shown.",
      path: "/terms",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Legal"
        title="Terms and conditions"
        lede="These terms cover use of this website and the way quotations are requested. They were last updated on 16 November 2026."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-base leading-relaxed text-body md:px-8">
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">The website</h2>
          <p className="mt-3">
            This website is operated by ICLAX Digital from Nigeria. It describes our services and lets you contact us, including if you are in another country. Content is provided in good faith and may be updated without notice. Nothing on the site is an offer to start work until both sides have agreed a scope in writing. Mention of the United States, United Kingdom, Canada, Australia, Nigeria or other markets means we can work with clients there. It is not a claim of a physical office in those countries.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">No published prices</h2>
          <p className="mt-3">
            We do not display service prices, retainers or packages. Any fee is set out in a quotation prepared for your business after we understand the work. A quotation is valid for the period stated on it, and work begins only when you accept it. Advertising media budgets, where used, are separate from professional fees and are agreed before spend.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Enquiries</h2>
          <p className="mt-3">
            When you submit the contact form, you confirm that the details are accurate and that we may use them to reply, as described in the{" "}
            <Link to="/privacy" className="font-semibold text-ink underline">privacy policy</Link>. Sending an enquiry does not create a client relationship. The form prepares an email or WhatsApp message for you to send.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Intellectual property</h2>
          <p className="mt-3">
            The ICLAX Digital name, the design of this website and the text on it belong to the agency unless a credit says otherwise. You may not copy the site for your own commercial use. Work we create for a client is licensed or assigned only as the project agreement states.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Project examples</h2>
          <p className="mt-3">
            Portfolio frames marked as placeholders are spaces for future material. They are not completed case studies and must not be read as results or statistics.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Liability</h2>
          <p className="mt-3">
            We take care to keep the website accurate and available, but we do not guarantee that it will be uninterrupted or free of error. To the extent the law allows, we are not liable for loss arising only from use of the public website. Project work is governed by the agreement for that project.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">External links</h2>
          <p className="mt-3">
            Links to WhatsApp, email, social networks and other sites leave our control. Their terms and privacy practices apply once you leave.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Contact</h2>
          <p className="mt-3">
            Questions about these terms: {SITE.email}, {SITE.phoneDisplay}, Nigeria.
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
