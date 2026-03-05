import { storyKicker, storyParagraphs, storyTitle } from "@/content/story";
import { FadeIn } from "@/components/ui/fade-in";

type StoryBlockProps = {
  id?: string;
  compact?: boolean;
};

export function StoryBlock({ id, compact = false }: StoryBlockProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl px-6 py-16 md:py-24">
      <FadeIn>
        <p className="mb-3 text-sm uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">{storyKicker}</p>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2 className="font-display text-4xl leading-tight md:text-5xl">The Story: {storyTitle}</h2>
      </FadeIn>
      <div className="mt-8 space-y-5 text-[1.03rem] leading-8 text-[var(--colour-accent-2)]">
        {(compact ? storyParagraphs.slice(0, 2) : storyParagraphs).map((paragraph, idx) => (
          <FadeIn key={paragraph.slice(0, 24)} delay={0.1 + idx * 0.06}>
            <p>{paragraph}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
