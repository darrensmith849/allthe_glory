import Link from "next/link";
import { events } from "@/content/events";

export default function EventsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">Events</p>
      <h1 className="mt-3 font-display text-5xl">Gatherings</h1>
      <div className="mt-8 grid gap-4">
        {events.map((event) => (
          <article key={`${event.city}-${event.venue}`} className="rounded-xl border border-[rgba(244,240,232,0.14)] p-6">
            <p className="text-sm text-[var(--colour-accent-1)]">{event.date}</p>
            <h2 className="mt-2 font-display text-2xl">{event.city}</h2>
            <p className="mt-1 text-[var(--colour-accent-2)]">{event.venue}</p>
            <Link href={event.link} className="mt-4 inline-block text-sm text-[var(--colour-glow)]">
              Event details placeholder
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
