import { cn } from "@/components/ui";

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const onLight = tone === "dark";
  return (
    <span className={cn("block leading-none", className)}>
      <span
        className={cn(
          "block font-logo text-[1.35rem] font-bold tracking-[0.18em]",
          onLight ? "text-ink" : "text-white",
        )}
      >
        ICLAX
      </span>
      <span className={cn("mt-1.5 block h-px w-10", onLight ? "bg-gold" : "bg-gold")} aria-hidden="true" />
      <span
        className={cn(
          "mt-1.5 block text-[10px] font-semibold uppercase tracking-[0.34em]",
          onLight ? "text-ink" : "text-ivory",
        )}
      >
        Digital
      </span>
    </span>
  );
}
