import { HeroComposite } from "@/components/hero/hero-composite";
import { StoryBlock } from "@/components/story/story-block";
import { CtaRow } from "@/components/ui/cta-row";
import { VideoPlaceholder } from "@/components/media/video-placeholder";
import { videos } from "@/content/videos";
import { assets } from "@/content/assets";
import { storyTitle, storyKicker, storyParagraphs } from "@/content/story";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="relative">
        <HeroComposite />
        <section className="absolute inset-x-0 top-0 flex min-h-[78vh] items-center px-6">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--colour-accent-1)]">All The Glory</p>
            <h1 className="modo-title mt-3 max-w-[11ch] text-[var(--colour-ink)]">From Darkness To Light</h1>
            <p className="subtitle-glyph mt-4 text-base text-[var(--colour-accent-2)]">Ⅎɹoɯ ᗡɐɹʞuǝss †o 𝕃Ɨ𝕘𝓱𝐓</p>
            <div className="mt-6">
              <CtaRow />
            </div>
          </div>
        </section>
      </div>

      <StoryBlock id="the-story" />

      <section className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="overflow-hidden rounded-2xl border border-[rgba(244,240,232,0.16)]">
          <div className="relative h-[420px] md:h-[520px]">
            <Image src={assets.artist} alt="Artist portrait" fill className="object-cover" sizes="100vw" quality={95} />
          </div>
        </div>
      </section>

      <section className="bg-[var(--colour-bg)]">
        <div className="mx-auto w-full max-w-4xl px-6 py-14 md:py-20">
          <div className="text-xs uppercase tracking-[0.28em] text-[var(--colour-ink)]/60">{storyKicker}</div>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--colour-ink)] md:text-4xl">{storyTitle}</h2>
          <div className="mt-8 space-y-6 leading-relaxed text-[var(--colour-ink)]/75">
            {storyParagraphs.map((p, i) => (
              <p key={i} className="text-base md:text-lg">
                {p}
              </p>
            ))}
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
