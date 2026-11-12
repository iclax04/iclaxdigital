import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Container, pageMeta } from "@/components/ui";
import { contact } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () =>
    pageMeta(
      "Privacy Policy | ICLAX DIGITAL",
      "How ICLAX Digital collects, uses and looks after information you share through this website.",
    ),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main id="content">
      <PageHero
        eyebrow="Legal"
        title="Privacy policy"
        lede="This policy explains what ICLAX Digital collects through this website and how it is used. It was last updated on 30 October 2026."
      />
      <Container className="max-w-3xl py-16 md:py-20">
        <div className="space-y-10 text-base leading-relaxed text-body">
          <section>
            <h2 className="font-display text-3xl text-ink">Who we are</h2>
            <p className="mt-4">
              ICLAX Digital is a digital marketing and technology agency operating in Nigeria. For privacy questions, email{" "}
              <a className="text-ink underline decoration-gold underline-offset-4" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>{" "}
              or call{" "}
              <a className="text-ink underline decoration-gold underline-offset-4" href={`tel:${contact.phoneTel}`}>
                {contact.phoneDisplay}
              </a>
              .
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">What we collect</h2>
            <p className="mt-4">
              If you submit the enquiry form, message us on WhatsApp, call or email, we receive the details you choose to send: your name, business name, email address, phone number, the service you are asking about and your project description.
            </p>
            <p className="mt-4">
              The site may also receive ordinary technical logs from the host, such as browser type and pages requested, which are used to keep the site reliable. If a Google Analytics measurement ID is later added, aggregated usage statistics will be collected under Google’s terms. No analytics tag is active until that ID is configured.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">How we use it</h2>
            <p className="mt-4">We use enquiry details to:</p>
            <ul className="mt-4 space-y-2">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                Reply to you and prepare a quotation
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                Understand the service you need
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                Keep a record of the conversation if we work together
              </li>
            </ul>
            <p className="mt-4">
              We do not sell personal information. We do not use it for unrelated marketing without a reason to contact you about work you asked about.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">WhatsApp, email and other tools</h2>
            <p className="mt-4">
              The enquiry form can open WhatsApp or your email app with the message you wrote, so you can send it yourself. If a form delivery service is later connected, the same details are sent to that provider solely so we can read the enquiry. Social links leave this website and are governed by those platforms.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">How long we keep it</h2>
            <p className="mt-4">
              Enquiry records are kept for as long as needed to respond, to complete a project, or to meet a legal or accounting obligation. You may ask us to delete an enquiry that has not become a client record by emailing {contact.email}.
            </p>
          </section>
          <section>
            <h2 className="font-display text-3xl text-ink">Your choices</h2>
            <p className="mt-4">
              You can ask what we hold about you, ask for a correction, or object to how a particular enquiry is being used. Contact us using the details above. You may also read the{" "}
              <Link to="/terms" className="text-ink underline decoration-gold underline-offset-4">
                terms and conditions
              </Link>
              .
            </p>
          </section>
        </div>
      </Container>
    </main>
  );
}
