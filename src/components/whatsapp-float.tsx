import { WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref(
        "Hello ICLAX Digital, I would like to talk about growing my business.",
      )}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with ICLAX Digital on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] py-2 pl-2 pr-3 text-white shadow-[0_6px_18px_rgba(37,211,102,0.4)] ring-2 ring-white transition-transform duration-200 hover:scale-105"
    >
      <span className="grid size-8 place-items-center rounded-full bg-white/15">
        <WhatsAppIcon className="size-5" />
      </span>
      <span className="text-xs font-semibold">WhatsApp</span>
    </a>
  );
}
