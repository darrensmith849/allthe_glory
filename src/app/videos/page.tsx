import Link from "next/link";
import { instagramPosts, videos } from "@/content/videos";

export default function VideosPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Videos</p>
      <h1 className="mt-3 font-display text-5xl">Visual Testimonies</h1>
      <div className="mt-8 grid gap-4">
        {videos.map((video) => (
          <article key={video.title} className="rounded-xl border border-[rgba(244,240,232,0.14)] p-6">
            <h2 className="font-display text-2xl">{video.title}</h2>
            <p className="mt-2 text-[var(--colour-accent-2)]">{video.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.12em] text-[var(--colour-accent-1)]">
              {video.youtubeId ? `YouTube ID: ${video.youtubeId}` : "YouTube ID: set in src/content/videos.ts"}
            </p>
            <Link href={video.href} className="mt-4 inline-block text-sm text-[var(--colour-glow)]">
              {video.youtubeId ? "Watch on YouTube" : "Watch placeholder"}
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-display text-3xl">Instagram Clips</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {instagramPosts.map((post) => (
            <article key={post.href} className="rounded-xl border border-[rgba(244,240,232,0.14)] p-3">
              <div className="overflow-hidden rounded-lg border border-[rgba(244,240,232,0.12)] bg-[rgba(244,240,232,0.03)]">
                <iframe
                  className="h-[440px] w-full"
                  src={`${post.href}embed`}
                  title={post.title}
                  loading="lazy"
                />
              </div>
              <Link
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm text-[var(--colour-glow)]"
              >
                Open on Instagram
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
