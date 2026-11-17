import { useEffect, useRef } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts, useRouterState } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/site/chrome";
import appCss from "../styles.css?url";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const GTM_ID = "GTM-MW8TJDKX";

const gtmHeadScript = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`;

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
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
    scripts: [{ children: gtmHeadScript }],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function AnalyticsPageViews() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const searchStr = useRouterState({ select: (state) => state.location.searchStr });
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    const dataLayer = (window.dataLayer = window.dataLayer || []);
    dataLayer.push({
      event: "page_view",
      page_path: `${pathname}${searchStr}`,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, searchStr]);

  return null;
}

function RootComponent() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <PreviewHostBridge />
        <AuthProvider>
          <AnalyticsPageViews />
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