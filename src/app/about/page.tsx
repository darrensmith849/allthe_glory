import { StoryBlock } from "@/components/story/story-block";
import { PhotoStrip } from "@/components/media/photo-strip";

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-4xl px-6 py-14">
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">About Daniel</p>
        <h1 className="mt-3 font-display text-5xl">Singer, songwriter, worshipper.</h1>
        <p className="mt-6 max-w-3xl leading-8 text-[var(--colour-accent-2)]">
          Daniel creates music that tells the truth, unmasks hidden pain, and points hearts to Jesus. The mission is simple: all the glory belongs to God.
        </p>
      </section>
      <StoryBlock />
      <PhotoStrip />
    </>
  );
}
