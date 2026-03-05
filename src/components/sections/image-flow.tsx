"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import type { GalleryItem } from "@/content/gallery";
import { assets } from "@/content/assets";

type ImageFlowProps = {
  items: GalleryItem[];
};

const FALLBACK_VISUAL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='900'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23110f1a'/%3E%3Cstop offset='100%25' stop-color='%2309080e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E";

function resolveCandidates(src: string) {
  if (src.includes("album")) {
    return [assets.album, src, "/media/4f0992a6-4ba7-451c-b4dd-1642f6149b7d.jpg", FALLBACK_VISUAL];
  }

  if (src.includes("artist")) {
    return [assets.artist, src, "/media/untitled-5296.JPG", FALLBACK_VISUAL];
  }

  return [src, FALLBACK_VISUAL];
}

function FlowItem({ it, idx }: { it: GalleryItem; idx: number }) {
  const candidates = useMemo(() => resolveCandidates(it.src), [it.src]);
  const [sourceIndex, setSourceIndex] = useState(0);

  const span =
    idx % 5 === 0
      ? "md:col-span-8"
      : idx % 5 === 1
        ? "md:col-span-4"
        : idx % 5 === 2
          ? "md:col-span-6"
          : idx % 5 === 3
            ? "md:col-span-6"
            : "md:col-span-12";

  const height =
    idx % 5 === 0
      ? "h-[360px] md:h-[520px]"
      : idx % 5 === 1
        ? "h-[360px] md:h-[520px]"
        : idx % 5 === 2
          ? "h-[320px] md:h-[420px]"
          : idx % 5 === 3
            ? "h-[320px] md:h-[420px]"
            : "h-[340px] md:h-[460px]";

  return (
    <motion.figure
      className={`${span} relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 ${height}`}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={candidates[sourceIndex]}
        alt={it.alt}
        fill
        sizes="(max-width: 768px) 100vw, 60vw"
        onError={() => setSourceIndex((current) => Math.min(current + 1, candidates.length - 1))}
        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
      />

      <div className="image-flow-fade pointer-events-none absolute inset-0" />

      {it.caption ? (
        <figcaption className="absolute bottom-0 left-0 right-0 p-5">
          <div className="text-sm md:text-base font-medium text-white/85">{it.caption}</div>
        </figcaption>
      ) : null}
    </motion.figure>
  );
}

export default function ImageFlow({ items }: ImageFlowProps) {
  return (
    <section className="relative bg-[var(--colour-bg)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-transparent to-[var(--colour-bg)]" />

      <div className="mx-auto w-full max-w-6xl px-6 py-14 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--colour-ink)]">Gallery</h2>
          <p className="max-w-md text-right text-sm text-[var(--colour-ink)]/60">
            Replace /public/media/* with more artwork, live photos, and behind-the-scenes.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
          {items.map((it, idx) => (
            <FlowItem key={`${it.src}-${idx}`} it={it} idx={idx} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none h-28 bg-gradient-to-b from-[var(--colour-bg)] to-black/0" />
    </section>
  );
}
