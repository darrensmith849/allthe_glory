import Link from "next/link";

type CtaRowProps = {
  primaryHref?: string;
  secondaryHref?: string;
};

export function CtaRow({ primaryHref = "#", secondaryHref = "#" }: CtaRowProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        href={primaryHref}
        className="rounded-full bg-[var(--colour-ink)] px-6 py-2 text-sm text-[var(--colour-bg)] transition hover:bg-[var(--colour-glow)]"
      >
        Listen
      </Link>
      <Link
        href={secondaryHref}
        className="rounded-full border border-[rgba(244,240,232,0.22)] px-6 py-2 text-sm transition hover:border-[var(--colour-glow)] hover:text-[var(--colour-glow)]"
      >
        Pre-save
      </Link>
    </div>
  );
}
