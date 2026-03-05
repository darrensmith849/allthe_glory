import ModoHero from "@/components/sections/modo-hero";
import ImageFlow from "@/components/sections/image-flow";
import { homeGallery } from "@/content/gallery";
import { storyTitle, storyKicker, storyParagraphs } from "@/content/story";

export default function Page() {
  return (
    <main>
      <ModoHero />

      <ImageFlow items={homeGallery} />

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
    </main>
  );
}
