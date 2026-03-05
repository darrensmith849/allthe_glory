type SectionHeadingProps = {
  kicker?: string;
  title: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignment}>
      {kicker ? <p className="text-xs uppercase tracking-[0.14em] text-[var(--colour-accent-1)]">{kicker}</p> : null}
      <h2 className="mt-2 font-display text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}
