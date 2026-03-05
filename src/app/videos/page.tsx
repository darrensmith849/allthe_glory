import Link from "next/link";
import { videos } from "@/content/videos";

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
            <Link href={video.href} className="mt-4 inline-block text-sm text-[var(--colour-glow)]">
              Watch placeholder
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
