import { useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { NAV, SITE, SOCIAL, WA_GENERAL, waLink } from "@/lib/site";

export function Logo({ tone = "ink" }: { tone?: "ink" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-ivory" : "text-ink";
  return (
    <span className="block leading-none">
      <span className={`wordmark ${text}`}>ICLAX</span>
      <span className="wordmark-rule" aria-hidden="true" />
      <span className={`wordmark-sub ${sub}`}>Digital</span>
    </span>
  );
}

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-6 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-charcoal";
export const btnGhost =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-ink/20 bg-white px-6 text-center text-sm font-semibold text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-white";
export const btnOnPhoto =
  "inline-flex min-h-11 items-center justify-center bg-white px-6 text-center text-sm font-semibold text-ink hover:bg-paper";
export const btnOnPhotoGhost =
  "inline-flex min-h-11 items-center justify-center border border-white px-6 text-center text-sm font-semibold text-white hover:bg-white hover:text-ink";

function SocialIcon({ label }: { label: string }) {
  const common = { viewBox: "0 0 24 24", "aria-hidden": true, className: "size-4", fill: "currentColor" };
  if (label === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M14 3h2.2a5.2 5.2 0 0 0 3.6 3.4v2.3a7.4 7.4 0 0 1-3.6-1v6.6A5.7 5.7 0 1 1 10 8.8v2.4a3.3 3.3 0 1 0 2.3 3.2V3z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (state) => state.location.pathname });

  function active(href: string) {
    return href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" aria-label="ICLAX Digital home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                active(item.href) ? "font-semibold text-gold" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/contact" className={`${btnPrimary} hidden sm:inline-flex`}>
            Contact us
          </Link>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-line bg-white text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-menu"
        className={`border-t border-line bg-white lg:hidden ${open ? "block" : "hidden"}`}
        aria-label="Primary"
      >
        <div className="mx-auto flex max-w-6xl flex-col px-5 py-3 md:px-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setOpen(false)}
              className={`border-b border-line py-3 text-sm font-medium ${
                active(item.href) ? "text-gold" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className={`${btnPrimary} my-4`}>
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-fog">
            {SITE.slogan} A digital marketing agency for businesses in the United States, United Kingdom,
            Canada, Australia, Nigeria and worldwide.
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SOCIAL.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="grid h-11 w-11 place-items-center border border-white/15 text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon label={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-widest text-gold">Company</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="text-fog hover:text-white">Home</Link></li>
            <li><Link to="/about" className="text-fog hover:text-white">About us</Link></li>
            <li><Link to="/services" className="text-fog hover:text-white">Our services</Link></li>
            <li><Link to="/industries" className="text-fog hover:text-white">Industries we serve</Link></li>
            <li><Link to="/work" className="text-fog hover:text-white">Our work</Link></li>
            <li><Link to="/why-us" className="text-fog hover:text-white">Why us</Link></li>
            <li><Link to="/contact" className="text-fog hover:text-white">Contact us</Link></li>
            <li><Link to="/privacy" className="text-fog hover:text-ivory">Privacy policy</Link></li>
            <li><Link to="/terms" className="text-fog hover:text-ivory">Terms and conditions</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-fog">
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>
              <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={waLink(WA_GENERAL)} target="_blank" rel="noreferrer" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li>Nigeria · serving clients worldwide</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-fog md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} ICLAX Digital. All rights reserved.</p>
          <p>Quotations are prepared for each business. We do not publish prices.</p>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={waLink("Hello ICLAX Digital, I would like to talk about growing my business.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with our team on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-1.5 rounded-full bg-ink py-2 pl-2 pr-4 text-white shadow-float ring-2 ring-white transition-colors duration-200 hover:bg-charcoal motion-reduce:transition-none"
    >
      <span className="grid size-8 place-items-center rounded-full bg-white/15">
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="size-5">
          <path d="M20.5 3.5A11 11 0 0 0 2.1 17.2L1 23l6-1.6A11 11 0 0 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3.5.9.9-3.4-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.3.1-.5l.5-.6.2-.4c0-.1 0-.3-.1-.4l-.8-1.8c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.6 2.5 3.9 3.4 1.4.6 2 .6 2.7.5.4-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.2-.1-.4-.2z" />
        </svg>
      </span>
      <span className="text-xs font-semibold">Chat with our team</span>
    </a>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-paper text-body">
      <Header />
      <main id="content">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-logo text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-quiet md:text-lg">{lede}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to take your business online?",
  body = "Tell us about the business. We will recommend a way forward and prepare a quotation for that work.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2 className="font-sans text-4xl font-extrabold leading-tight text-ink md:text-5xl">{title}</h2>
          <p className="mt-5 text-base leading-relaxed text-quiet">{body}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link to="/contact" className={btnPrimary}>
            Get a Free Consultation
          </Link>
          <Link to="/services" className={btnGhost}>
            Explore Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

