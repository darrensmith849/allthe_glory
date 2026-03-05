import Link from "next/link";

type VideoPlaceholderProps = {
  href?: string;
  youtubeId?: string;
};

export function VideoPlaceholder({ href = "#", youtubeId = "" }: VideoPlaceholderProps) {
  const embedUrl = youtubeId ? `https://www.youtube-nocookie.com/embed/${youtubeId}` : "";

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-[rgba(244,240,232,0.16)] bg-[linear-gradient(160deg,rgba(244,240,232,0.03),rgba(216,178,90,0.06))] p-8">
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Featured Video</p>
        <h3 className="mt-3 font-display text-2xl">{youtubeId ? "Featured Release" : "Video Embed Placeholder"}</h3>
        <p className="mt-2 text-[var(--colour-accent-2)]">
          {youtubeId ? "Configured from src/content/videos.ts." : "Add a YouTube video ID in src/content/videos.ts to render here."}
        </p>
        <div className="mt-5 overflow-hidden rounded-xl border border-[rgba(244,240,232,0.14)] bg-[rgba(9,8,14,0.7)]">
          {youtubeId ? (
            <iframe
              className="aspect-video w-full"
              src={embedUrl}
              title="Featured video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <div className="grid aspect-video place-items-center px-6 text-center text-sm text-[var(--colour-accent-2)]">
              YouTube embed placeholder
            </div>
          )}
        </div>
        <Link href={href} className="mt-5 inline-block rounded-full border border-[rgba(244,240,232,0.2)] px-5 py-2 text-sm">
          {youtubeId ? "Open on YouTube" : "Watch Soon"}
        </Link>
      </div>
    </section>
  );
}
