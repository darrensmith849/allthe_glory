import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[rgba(244,240,232,0.12)] px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <p className="max-w-3xl text-sm text-[var(--colour-accent-2)]">
          “What does it profit a man to gain the whole world, and forfeit his soul?” — Mark 8:36
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={site.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(244,240,232,0.24)] px-4 py-2 text-sm transition hover:border-[var(--colour-glow)] hover:text-[var(--colour-glow)]"
          >
            <FaInstagram aria-hidden /> Instagram
          </Link>
          <Link
            href={site.socials.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(244,240,232,0.24)] px-4 py-2 text-sm transition hover:border-[var(--colour-glow)] hover:text-[var(--colour-glow)]"
          >
            <FaYoutube aria-hidden /> YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
