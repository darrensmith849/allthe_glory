import { HeroComposite } from "@/components/hero/hero-composite";
import { StoryBlock } from "@/components/story/story-block";
import { CtaRow } from "@/components/ui/cta-row";
import { VideoPlaceholder } from "@/components/media/video-placeholder";
import { album } from "@/content/album";
import { videos } from "@/content/videos";
import { assets } from "@/content/assets";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <HeroComposite />
        <section className="absolute inset-x-0 top-0 flex min-h-[78vh] items-center px-6">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--colour-accent-1)]">All The Glory</p>
            <h1 className="mt-3 max-w-3xl font-display text-5xl leading-tight md:text-7xl">From Darkness To Light</h1>
            <p className="mt-3 text-base text-[var(--colour-accent-2)]">{album.subtitle}</p>
            <CtaRow />
          </div>
        </section>
      </div>

      <StoryBlock id="the-story" />

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-2xl border border-[rgba(244,240,232,0.16)]">
          <div className="relative h-[420px] md:h-[520px]">
            <Image src={assets.artist} alt="Artist portrait" fill className="object-cover" />
          </div>
        </div>
      </section>

      <VideoPlaceholder href={videos[0]?.href} youtubeId={videos[0]?.youtubeId} />

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="rounded-2xl border border-[rgba(244,240,232,0.16)] bg-[rgba(244,240,232,0.02)] p-8">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Newsletter</p>
          <h3 className="mt-3 font-display text-2xl">Newsletter Capture Placeholder</h3>
          <p className="mt-2 text-[var(--colour-accent-2)]">
            Add your email form integration here to share release news and testimony updates.
          </p>
        </div>
      </section>
    </>
  );
}
