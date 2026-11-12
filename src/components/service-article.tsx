import type { Service } from "@/lib/site";
import { whatsappHref } from "@/lib/site";
import { btnPrimary, cn } from "@/components/ui";

export function ServiceArticle({ service, index }: { service: Service; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <article id={service.slug} className="scroll-mt-28 border-t border-mist py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className={cn("overflow-hidden rounded-2xl bg-mist", flipped && "lg:order-2")}>
          <img
            src={service.image}
            alt={service.imageAlt}
            className="aspect-[4/3] h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl">
            {service.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-body">{service.description}</p>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-quiet">What we handle</h3>
              <ul className="mt-4 space-y-2">
                {service.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-quiet">Why it matters</h3>
              <ul className="mt-4 space-y-2">
                {service.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-col items-start gap-3">
            <a
              href={whatsappHref(`Hello ICLAX Digital, I would like a quotation for ${service.title}.`)}
              target="_blank"
              rel="noreferrer"
              className={btnPrimary}
            >
              Contact us
            </a>
            <p className="text-sm text-quiet">
              Ask for a personalised quotation. We do not list prices.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
