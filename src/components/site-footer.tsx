import { Link, useRouterState } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { SocialIcon } from "@/components/icons";
import { brand, contact, contactWhatsApp } from "@/lib/site";

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const onHome = pathname === "/";
  const email = onHome ? "contact@iclaxdigital.com" : contact.email;

  return (
    <footer className="border-t border-line bg-ink text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 lg:max-w-7xl">
        <div className={onHome ? "md:col-span-6" : "md:col-span-4"}>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog">
            {brand.tagline} Digital marketing and technology for businesses across Nigeria.
          </p>
          <ul className="mt-6 flex gap-3">
            {(onHome ? contact.socials.filter((social) => social.label !== "YouTube") : contact.socials).map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid h-11 w-11 place-items-center border border-line text-ivory transition-colors hover:border-gold hover:text-gold"
                >
                  <SocialIcon label={social.label} className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {!onHome && (
        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-gold">Company</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/" className="text-fog hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-fog hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-fog hover:text-white">
                Our services
              </Link>
            </li>
            <li>
              <Link to="/industries" className="text-fog hover:text-white">
                Industries we serve
              </Link>
            </li>
            <li>
              <a href={contactWhatsApp} target="_blank" rel="noreferrer" className="text-fog hover:text-white">
                Contact us
              </a>
            </li>
            <li>
              <Link to="/why-us" className="text-fog hover:text-white">
                Why us
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="text-fog hover:text-ivory">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-fog hover:text-ivory">
                Terms and conditions
              </Link>
            </li>
          </ul>
        </div>
        )}

        <div className={onHome ? "md:col-span-6" : "md:col-span-4"}>
          <p className="text-xs uppercase tracking-widest text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-fog">
            <li>
              <a href={`mailto:${email}`} className="inline-flex items-start gap-2 hover:text-white">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                {email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneTel}`} className="inline-flex items-start gap-2 hover:text-white">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li className="inline-flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              {contact.location}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-fog md:flex-row md:items-center md:justify-between md:px-8 lg:max-w-7xl">
          <p>© {new Date().getFullYear()} ICLAX Digital. All rights reserved.</p>
          <p>Quotations are prepared for each business. We do not publish prices.</p>
        </div>
      </div>
    </footer>
  );
}
