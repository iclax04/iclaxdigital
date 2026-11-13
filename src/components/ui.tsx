import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export { cn };

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 md:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-gold">
      <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

export const btnPrimary =
  "inline-flex min-h-11 items-center justify-center bg-ink px-6 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-charcoal";

export const btnGhost =
  "inline-flex min-h-11 items-center justify-center border border-ink bg-white px-6 text-center text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-white";

export const btnOnGreen =
  "inline-flex min-h-11 items-center justify-center rounded-md bg-gold px-6 text-center text-xs font-semibold uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-gold-bright";

export const btnOnGreenGhost =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-white/70 px-6 text-center text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-white hover:text-ink";

export const btnWa =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-green px-6 text-center text-xs font-semibold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-green-deep";

export const btnInk =
  "inline-flex min-h-11 items-center justify-center rounded-md border border-ink px-6 text-center text-xs font-semibold uppercase tracking-widest text-ink transition-colors duration-200 hover:bg-ink hover:text-white";

export function pageMeta(title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
    ],
  };
}
