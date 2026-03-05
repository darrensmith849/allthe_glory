import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(244,240,232,0.12)] bg-[rgba(9,8,14,0.7)] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl tracking-[0.08em]">
          {site.name}
        </Link>
        <nav className="hidden gap-5 text-sm text-[var(--colour-accent-2)] md:flex">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[var(--colour-ink)]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
