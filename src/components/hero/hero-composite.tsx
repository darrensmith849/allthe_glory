"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/content/assets";

export function HeroComposite() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden border-b border-[rgba(244,240,232,0.12)]">
      <div className="absolute inset-0">
        <Image
          src={assets.album}
          alt="From Darkness To Light album artwork"
          fill
          priority
          className="object-cover opacity-75"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(9,8,14,0.8)_20%,rgba(9,8,14,0.58)_55%,rgba(9,8,14,0.9)_100%)]" />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.55, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-y-0 right-[-8%] w-[58%]"
      >
        <Image
          src={assets.artist}
          alt="Daniel walking with guitar"
          fill
          className="object-cover mix-blend-screen [mask-image:radial-gradient(circle_at_40%_50%,black_45%,transparent_78%)]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(244,240,232,0.22)_0.5px,transparent_0.5px)] [background-size:3px_3px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(241,215,166,0.22),transparent_40%)]" />
    </section>
  );
}
