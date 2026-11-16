import { Clapperboard, MapPin, Megaphone, Search, Share2 } from "lucide-react";
import type { ServiceIcon } from "@/lib/site";

export function ServiceGlyph({ name, className }: { name: ServiceIcon; className?: string }) {
  const props = { className: className ?? "size-6", "aria-hidden": true as const };
  if (name === "megaphone") return <Megaphone {...props} />;
  if (name === "search") return <Search {...props} />;
  if (name === "pin") return <MapPin {...props} />;
  if (name === "share") return <Share2 {...props} />;
  return <Clapperboard {...props} />;
}