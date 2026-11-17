import { createFileRoute, Link } from "@tanstack/react-router";
import { PageIntro, SiteShell } from "@/components/site/chrome";
import { SITE, pageHead } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageHead({
      title: "Privacy Policy | ICLAX Digital",
      description:
        "How ICLAX Digital uses enquiry details sent by email, phone or WhatsApp, and the choices you have about that information.",
      path: "/privacy",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteShell>
      <PageIntro
        eyebrow="Legal"
        title="Privacy policy"
        lede="This policy explains what ICLAX Digital collects through this website and how it is used. It was last updated on 16 November 2026."
      />
      <article className="mx-auto max-w-3xl space-y-10 px-5 py-16 text-base leading-relaxed text-body md:px-8">
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Who we are</h2>
          <p className="mt-3">
            ICLAX Digital is a digital marketing agency operating from Nigeria and working with clients in other countries remotely. For privacy questions, email{" "}
            <a className="font-semibold text-ink underline" href={`mailto:${SITE.email}`}>{SITE.email}</a> or call {SITE.phoneDisplay}.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">What we collect</h2>
          <p className="mt-3">
            If you submit the enquiry form, message us on WhatsApp, call or email, we receive the details you choose to send: your name, business name, email address, country, phone number if you provide one, the service you are asking about and your project details.
          </p>
          <p className="mt-3">
            The site may also receive ordinary technical logs from the host, such as browser type and pages requested, which are used to keep the site reliable. Google Tag Manager (GTM-MW8TJDKX) loads on each page and may send usage data, including pages visited, device type and approximate location, to Google Analytics.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">How we use it</h2>
          <p className="mt-3">We use enquiry details to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Reply to you and prepare a quotation</li>
            <li>Understand the service you need</li>
            <li>Keep a record of the conversation if we work together</li>
          </ul>
          <p className="mt-3">
            We do not sell personal information. We do not use it for unrelated marketing without a reason to contact you about work you asked about.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">WhatsApp, email and other tools</h2>
          <p className="mt-3">
            The enquiry form opens your email app, or WhatsApp if you choose that button, with the message you wrote, so you can send it yourself. Social links leave this website and are governed by those platforms.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">How long we keep it</h2>
          <p className="mt-3">
            Enquiry records are kept for as long as needed to respond, to complete a project, or to meet a legal or accounting obligation. You may ask us to delete an enquiry that has not become a client record by emailing {SITE.email}.
          </p>
        </section>
        <section>
          <h2 className="font-sans text-2xl font-bold text-ink">Your choices</h2>
          <p className="mt-3">
            You can ask what we hold about you, ask for a correction, or object to how a particular enquiry is being used. You may also read the{" "}
            <Link to="/terms" className="font-semibold text-ink underline">terms and conditions</Link>.
          </p>
        </section>
      </article>
    </SiteShell>
  );
}
