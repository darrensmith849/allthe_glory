import Link from "next/link";
import Image from "next/image";
import { album } from "@/content/album";
import { assets } from "@/content/assets";
import { Tracklist } from "@/components/album/tracklist";

export default function AlbumPage() {
  return (
    <>
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-14 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">{album.releaseType}</p>
          <h1 className="mt-3 font-display text-5xl">{album.title}</h1>
          <p className="mt-3 text-[var(--colour-accent-2)]">{album.subtitle}</p>
          <p className="mt-8 max-w-xl leading-8 text-[var(--colour-accent-2)]">
            Songs shaped by real struggle, real grace, and the freedom Jesus gives. This project is a testimony in melody.
          </p>
          <p className="mt-5 text-sm text-[var(--colour-accent-2)]">
            Read the full testimony on <Link href="/about" className="text-[var(--colour-glow)]">About</Link>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {album.streaming.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full border border-[rgba(244,240,232,0.2)] px-5 py-2 text-sm transition hover:border-[var(--colour-glow)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-xl border border-[rgba(244,240,232,0.16)]">
          <Image src={assets.album} alt="Album cover" fill className="object-cover" />
        </div>
      </section>
      <Tracklist />
    </>
  );
}
