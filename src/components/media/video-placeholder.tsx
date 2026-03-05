import Link from "next/link";

type VideoPlaceholderProps = {
  href?: string;
};

export function VideoPlaceholder({ href = "#" }: VideoPlaceholderProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-12">
      <div className="rounded-2xl border border-[rgba(244,240,232,0.16)] bg-[linear-gradient(160deg,rgba(244,240,232,0.03),rgba(216,178,90,0.06))] p-8">
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Featured Video</p>
        <h3 className="mt-3 font-display text-2xl">Video Embed Placeholder</h3>
        <p className="mt-2 text-[var(--colour-accent-2)]">Drop your featured YouTube embed or link here.</p>
        <Link href={href} className="mt-5 inline-block rounded-full border border-[rgba(244,240,232,0.2)] px-5 py-2 text-sm">
          Watch Soon
        </Link>
      </div>
    </section>
  );
}
