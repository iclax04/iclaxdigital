import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/chrome";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ICLAX Digital | Digital Marketing Agency" },
      { name: "theme-color", content: "#102A43" },
      { name: "apple-mobile-web-app-title", content: "ICLAX Digital" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <SiteShell>
      <section className="bg-paper px-5 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">404</p>
          <h1 className="mt-4 font-sans text-5xl font-extrabold leading-tight text-ink md:text-6xl">
            This page is not on the map.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-quiet">
            The link may be out of date. Go back to the homepage, or tell us what you were hoping to find.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/" className="inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-6 text-sm font-semibold text-white">
              Back home
            </a>
            <a href="/contact" className="inline-flex min-h-11 items-center justify-center rounded-md border border-ink/20 bg-white px-6 text-sm font-semibold text-ink">
              Contact us
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
