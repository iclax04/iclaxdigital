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
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-lg shadow-green/30 transition-transform duration-200 hover:scale-105"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
