import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contactWhatsApp } from "@/lib/site";
import { Logo } from "@/components/logo";
import { btnPrimary, cn } from "@/components/ui";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/industries", label: "Industries We Serve" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" aria-label="ICLAX Digital home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-sm font-medium text-ink transition-colors hover:text-gold",
                  active && "font-semibold text-gold",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/"
            hash="pricing"
            className="text-sm font-medium text-ink transition-colors hover:text-gold"
          >
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={cn(btnPrimary, "hidden sm:inline-flex")}>
            Contact us
          </a>
          <button
            type="button"
            className={cn(
              "grid h-11 w-11 place-items-center border lg:hidden",
              open ? "border-ink bg-ink text-white" : "border-line bg-white text-ink",
            )}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <nav className="hidden border-t border-line md:block lg:hidden" aria-label="Primary">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-8 py-3">
          {links.map((link) => {
            const active = link.to === "/" ? pathname === "/" : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={cn("text-sm font-medium text-ink hover:text-gold", active && "font-semibold text-gold")}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/15 bg-ink md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobile">
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="border-b border-white/15 py-4 text-base font-medium text-white">
                {link.label}
              </Link>
            ))}
            <Link to="/" hash="pricing" className="border-b border-white/15 py-4 text-base font-medium text-white">
              Pricing
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}