import { album } from "@/content/album";

export function Tracklist() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-14">
      <h2 className="font-display text-3xl">Tracklist</h2>
      <ol className="mt-6 grid gap-3 text-[var(--colour-accent-2)] md:grid-cols-2">
        {album.tracklist.map((track) => (
          <li key={track} className="rounded-lg border border-[rgba(244,240,232,0.14)] bg-[rgba(244,240,232,0.02)] p-4">
            {track}
          </li>
        ))}
      </ol>
    </section>
  );
}
