"use client";

import Image from "next/image";
import { assets } from "@/content/assets";

export function HeroComposite() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-[rgba(244,240,232,0.12)]">
      <div className="absolute inset-0">
        <Image
          src={assets.album}
          alt="From Darkness To Light album artwork"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(9,8,14,0.8)_20%,rgba(9,8,14,0.58)_55%,rgba(9,8,14,0.9)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(241,215,166,0.22),transparent_40%)]" />
    </section>
  );
}
