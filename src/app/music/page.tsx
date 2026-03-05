import Link from "next/link";
import { album } from "@/content/album";

export default function MusicPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Music</p>
      <h1 className="mt-3 font-display text-5xl">Discography</h1>
      <div className="mt-8 rounded-xl border border-[rgba(244,240,232,0.14)] p-6">
        <h2 className="font-display text-3xl">{album.title}</h2>
        <p className="mt-2 text-[var(--colour-accent-2)]">{album.subtitle}</p>
        <Link href="/album/from-darkness-to-light" className="mt-5 inline-block text-sm text-[var(--colour-glow)]">
          Open album page
        </Link>
      </div>
    </section>
  );
}
