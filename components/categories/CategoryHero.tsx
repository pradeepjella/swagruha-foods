"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  ShieldCheck,
  Sparkles,
  Droplets,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Natural",
    subtitle: "Ingredients",
  },
  {
    icon: Droplets,
    title: "No Artificial",
    subtitle: "Additives",
  },
  {
    icon: Heart,
    title: "Made with",
    subtitle: "Love",
  },
  {
    icon: ShieldCheck,
    title: "Premium",
    subtitle: "Quality",
  },
];

export default function CategoryHero() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7]">
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#D4A72C]/10" />

        <div className="absolute right-[5%] top-10 h-56 w-56 rounded-full bg-[#D4A72C]/5 blur-3xl" />

        <div className="absolute left-[45%] top-24 h-2 w-2 rounded-full bg-[#D4A72C]/60" />

        <div className="absolute right-[20%] bottom-10 h-2 w-2 rounded-full bg-[#123B7A]/30" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 pb-10 pt-16 sm:px-8 sm:pt-20 lg:px-12 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Small label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A72C]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A67819]">
                Sai Durga Swagruha Food
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-5xl leading-[0.95] text-[#123B7A] sm:text-6xl lg:text-7xl">
              Explore Our
              <span className="mt-2 block text-[#D4A72C]">
                Categories
              </span>
            </h1>

            {/* Decorative divider */}
            <div className="mt-7 flex items-center gap-4">
              <span className="h-px w-24 bg-[#D4A72C]/60" />

              <Heart
                size={17}
                className="fill-[#D4A72C] text-[#D4A72C]"
              />

              <span className="h-px w-24 bg-[#D4A72C]/60" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-md text-base leading-8 text-[#687386] sm:text-lg">
              Wholesome goodness from our kitchen to your heart.
              Discover authentic homemade flavours crafted with
              care, tradition and love.
            </p>

            {/* Feature icons */}
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 sm:grid-cols-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + index * 0.1,
                    }}
                    className="text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4A72C]/20 bg-white text-[#A67819] shadow-[0_8px_20px_rgba(18,59,122,0.08)]">
                      <Icon size={21} strokeWidth={1.7} />
                    </div>

                    <p className="mt-3 text-[11px] font-semibold leading-4 text-[#123B7A]">
                      {feature.title}
                      <br />
                      {feature.subtitle}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE FEATURED CATEGORY */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Decorative curved line */}
            <div className="absolute left-4 top-1/2 hidden h-32 w-32 -translate-y-1/2 rounded-full border border-dashed border-[#D4A72C]/40 lg:block" />

            <div className="relative ml-auto max-w-[650px] overflow-hidden rounded-[36px] border border-[#D4A72C]/25 bg-white p-4 shadow-[0_25px_70px_rgba(18,59,122,0.10)] sm:p-6">
              <div className="grid items-center gap-5 sm:grid-cols-[1fr_1.15fr]">
                {/* Text */}
                <div className="relative z-10 p-2 sm:p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D4A72C] bg-[#FFFDF7] font-heading text-2xl text-[#A67819]">
                      01
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A67819]">
                      Featured
                    </span>
                  </div>

                  <h2 className="mt-7 font-heading text-3xl text-[#123B7A]">
                    Laddu & Sweets
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#687386]">
                    Traditional homemade sweets crafted with
                    premium ingredients and authentic flavours.
                  </p>

                  <button
                    type="button"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A67819]"
                  >
                    Explore

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>

                {/* Image */}
                <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[28px] bg-[#FFF8E8]">
                  <Image
                    src="/categories/laddu.png"
                    alt="Sai Durga Laddu and Sweets"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, 500px"
                    className="object-contain p-5"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#D4A72C]/10 via-transparent to-transparent" />

                  {/* Icon badge */}
                  <div className="absolute bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-[#123B7A] text-[#E8C866] shadow-lg">
                    <Sparkles size={21} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}