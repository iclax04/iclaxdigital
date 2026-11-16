export function UgcFilm({ className }: { className?: string }) {
  return (
    <video
      className={className ?? "h-auto w-full bg-ink"}
      controls
      playsInline
      preload="metadata"
      poster="/images/ai-ugc-poster.jpg"
      src="/videos/ai-ugc-christmas.mp4"
    >
      A Christmas film from ICLAX Digital for hotels, supermarkets, restaurants and fashion businesses.
    </video>
  );
}
