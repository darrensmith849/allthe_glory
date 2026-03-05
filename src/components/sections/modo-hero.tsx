"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { CtaRow } from "@/components/ui/cta-row";
import { assets } from "@/content/assets";

const FALLBACK_VISUAL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='1000'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2309080e'/%3E%3Cstop offset='100%25' stop-color='%23171324'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";

function useImageFallback(primary: string, secondary: string) {
  const candidates = useMemo(() => [primary, secondary, FALLBACK_VISUAL], [primary, secondary]);
  const [index, setIndex] = useState(0);

  return {
    src: candidates[index],
    onError: () => setIndex((current) => Math.min(current + 1, candidates.length - 1))
  };
}

export default function ModoHero() {
  const albumImage = useImageFallback(assets.album, "/media/album.jpg");
  const artistImage = useImageFallback(assets.artist, "/media/artist.jpg");

  return (
    <section className="modo-hero relative isolate min-h-[88vh] overflow-hidden border-b border-[rgba(244,240,232,0.14)]">
      <div className="absolute inset-0">
        <Image
          src={albumImage.src}
          alt="From Darkness To Light album artwork"
          fill
          priority
          onError={albumImage.onError}
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-y-0 right-0 hidden w-[42%] md:block">
        <Image
          src={artistImage.src}
          alt="All The Glory artist portrait"
          fill
          onError={artistImage.onError}
          className="object-cover opacity-70"
          sizes="42vw"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,8,14,0.24)_0%,rgba(9,8,14,0.68)_62%,rgba(9,8,14,0.92)_100%)]" />

      <div className="relative mx-auto flex min-h-[88vh] w-full max-w-7xl items-end px-6 pb-20 pt-24 md:pb-24">
        <div className="max-w-6xl">
          <p className="text-xs uppercase tracking-[0.24em] text-[var(--colour-accent-1)]">All The Glory</p>
          <h1 className="modo-hero-title mt-3 text-[var(--colour-ink)]">From Darkness To Light</h1>
          <p className="mt-4 text-base text-[var(--colour-accent-2)]">Ⅎɹoɯ ᗡɐɹʞuǝss †o 𝕃Ɨ𝕘𝓱𝐓</p>
          <div className="mt-6">
            <CtaRow />
          </div>
        </div>
      </div>

      <div className="hero-bottom-gradient pointer-events-none absolute inset-x-0 bottom-0 h-44" />
    </section>
  );
}
