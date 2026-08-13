"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Sparkles } from "lucide-react";

export default function ComboHero() {
  return (
    <section className="relative min-h-[680px] overflow-hidden bg-[#0A2854]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large gold circles */}
        <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full border border-[#D4A72C]/15" />
        <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full border border-[#D4A72C]/10" />
        <div className="absolute -bottom-40 left-[35%] h-[400px] w-[400px] rounded-full border border-[#D4A72C]/10" />

        {/* Gold glow */}
        <div className="absolute left-[5%] top-[15%] h-72 w-72 rounded-full bg-[#D4A72C]/5 blur-3xl" />
        <div className="absolute bottom-[5%] right-[10%] h-80 w-80 rounded-full bg-[#D4A72C]/5 blur-3xl" />

        {/* Small decorative dots */}
        <div className="absolute left-[8%] top-[20%] h-2 w-2 rounded-full bg-[#D4A72C]/70" />
        <div className="absolute left-[18%] bottom-[18%] h-1.5 w-1.5 rounded-full bg-[#E8C866]/60" />
        <div className="absolute right-[10%] top-[30%] h-2 w-2 rounded-full bg-[#D4A72C]/70" />
        <div className="absolute right-[35%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-[#E8C866]/60" />
      </div>

      <div className="relative mx-auto grid min-h-[680px] max-w-[1500px] grid-cols-1 items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-12 xl:px-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-[680px] text-center lg:text-left"
        >
          {/* Label */}
          <div className="mb-7 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <div className="flex items-center gap-2 text-[#E8C866]">
              <Sparkles size={15} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em]">
                Sai Durga Special Combos
              </span>
            </div>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          {/* Heading */}
          <h1 className="font-heading text-[54px] leading-[0.95] tracking-[-0.03em] text-[#FFF8E8] sm:text-[70px] lg:text-[78px] xl:text-[90px]">
            More in
            <span className="block text-[#D4A72C]">
              Every Box.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-[570px] text-[15px] leading-8 text-[#E8E1D0]/80 sm:text-base lg:mx-0">
            Thoughtfully curated combinations of authentic homemade
            favourites. More flavours, more happiness and more reasons to
            share every celebration with Sai Durga Swagruha Food.
          </p>

          {/* CTA */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#combos"
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#D4A72C] px-8 text-sm font-semibold text-[#0A2854] shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8C866]"
            >
              Explore Combos

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <div className="flex items-center gap-3 text-sm text-[#FFF8E8]/75">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4A72C]/30">
                <Gift size={18} className="text-[#E8C866]" />
              </div>

              <span>
                Perfect for gifting
                <br />
                & celebrations
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PRODUCT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]"
        >
          {/* Gold frame */}
          <div className="absolute h-[80%] w-[80%] rounded-full border border-[#D4A72C]/25" />

          <div className="absolute h-[65%] w-[65%] rounded-full bg-[#D4A72C]/5 blur-2xl" />

          {/* Replace this image with your real combo PNG */}
          <div className="relative z-10 h-[420px] w-full max-w-[680px] sm:h-[520px] lg:h-[620px]">
            <Image
              src="/combos/combo-hero.png"
              alt="Sai Durga Swagruha Food Special Combo"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-[8%] left-[5%] z-20 hidden rounded-2xl border border-[#D4A72C]/30 bg-[#0D3268]/90 px-5 py-4 shadow-xl backdrop-blur-md sm:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E8C866]">
              Homemade
            </p>

            <p className="mt-1 font-heading text-lg text-[#FFF8E8]">
              Made with Love
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom subtle line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#D4A72C]/40 to-transparent" />
    </section>
  );
}