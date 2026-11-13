import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { btnGhost, btnPrimary } from "@/components/ui";
import { brand, contactWhatsApp, tracking } from "@/lib/site";
import appCss from "../styles.css?url";

const verification = /^[A-Za-z0-9_-]{8,}$/.test(tracking.googleSiteVerification)
  ? tracking.googleSiteVerification
  : "";

const analyticsId = /^G-[A-Z0-9]+$/i.test(tracking.googleAnalyticsId)
  ? tracking.googleAnalyticsId
  : "";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${brand.name} | Innovating Your Digital Growth` },
      {
        name: "description",
        content: brand.support,
      },
      { name: "theme-color", content: "#102A43" },
      ...(verification
        ? [{ name: "google-site-verification", content: verification }]
        : []),
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootComponent() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <style dangerouslySetInnerHTML={{ __html: "html{visibility:hidden}" }} />
        <link rel="stylesheet" href={appCss} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Manrope:wght@400;500;600;700;800&display=block"
        />
        <style dangerouslySetInnerHTML={{ __html: "html{visibility:visible;background:#f7f5f1;color:#243447}" }} />
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <div className="min-h-screen bg-paper text-body">
            <SiteHeader />
            <Outlet />
            <SiteFooter />
            <WhatsAppFloat />
          </div>
        </AuthProvider>
        {analyticsId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${analyticsId}');`,
              }}
            />
          </>
        ) : null}
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main id="content" className="bg-paper px-5 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">404</p>
        <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight text-ink md:text-6xl">This page is not on the map.</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-quiet">
          The link may be out of date. Go back to the homepage, or tell us what you were hoping to find.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to="/" className={btnPrimary}>
            Back home
          </Link>
          <a href={contactWhatsApp} target="_blank" rel="noreferrer" className={btnGhost}>
            Contact us
          </a>
        </div>
      </div>
    </main>
  );
}
