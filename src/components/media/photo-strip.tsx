import Image from "next/image";
import { assets } from "@/content/assets";

export function PhotoStrip() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-4 px-6 pb-10 md:grid-cols-2">
      <div className="relative h-64 overflow-hidden rounded-xl border border-[rgba(244,240,232,0.14)]">
        <Image src={assets.album} alt="Album artwork crop" fill className="object-cover" />
      </div>
      <div className="relative h-64 overflow-hidden rounded-xl border border-[rgba(244,240,232,0.14)]">
        <Image src={assets.artist} alt="Artist photo crop" fill className="object-cover" />
      </div>
    </section>
  );
}
