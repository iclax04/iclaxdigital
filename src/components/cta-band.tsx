import { Link } from "@tanstack/react-router";
import { btnGhost, btnPrimary } from "@/components/ui";
import { contactWhatsApp } from "@/lib/site";

export function CtaBand({
  title = "Let's build something great together.",
  text = "Your next customer could be searching for you right now. Tell us about the business and we will prepare a quotation for the work. We do not publish prices.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl font-extrabold leading-tight text-ink md:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-quiet">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={btnPrimary}>
            Contact us
          </a>
          <Link to="/services" className={btnGhost}>
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  );
}