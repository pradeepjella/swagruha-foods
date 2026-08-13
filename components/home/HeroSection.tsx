"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Leaf,
  ShieldCheck,
  Utensils,
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100%",
    subtitle: "Homemade",
  },
  {
    icon: Utensils,
    title: "Premium",
    subtitle: "Ingredients",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic",
    subtitle: "& Pure",
  },
  {
    icon: Heart,
    title: "Made",
    subtitle: "with Love",
  },
];

export default function HeroSection() {
  return (
    <section className="hero-royal-bg w-full">
      {/* =========================================================
          ROYAL DECORATIVE BACKGROUND
      ========================================================= */}

      <div className="hero-royal-border" />

      <div className="hero-product-glow" />

      <div className="hero-gold-ring hero-gold-ring-one" />

      <div className="hero-gold-ring hero-gold-ring-two" />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="mx-auto grid min-h-[620px] w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2">

        {/* =======================================================
            LEFT SIDE
        ======================================================= */}

        <div className="relative flex min-h-[620px] items-center justify-center px-6 py-14 sm:px-10 lg:px-14 xl:px-20">

          {/* Decorative left-side elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full border border-[#C99A2E]/15" />

            <div className="absolute -bottom-20 right-0 h-64 w-64 rounded-full border border-[#C99A2E]/15" />

            <div className="absolute left-8 top-1/2 h-2 w-2 rounded-full bg-[#C99A2E]/40" />

            <div className="absolute right-12 top-24 h-2 w-2 rounded-full bg-[#C99A2E]/40" />

            <div className="absolute bottom-24 left-20 h-1.5 w-1.5 rounded-full bg-[#123B7A]/30" />
          </div>

          {/* Left Content */}
          <div className="relative z-10 w-full max-w-[620px] text-center lg:text-left">

            {/* =================================================
                FESTIVAL LABEL
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-px w-8 bg-[#C99A2E]" />

              <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A67819] sm:text-xs">
                Happy
              </span>

              <span className="h-px w-8 bg-[#C99A2E]" />
            </motion.div>

            {/* =================================================
                MAIN HEADING
            ================================================= */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="font-heading text-[48px] leading-[0.95] tracking-[-0.03em] text-[#123B7A] sm:text-[62px] lg:text-[68px] xl:text-[76px]"
            >
              Ganesh

              <span className="block text-[#C99A2E]">
                Chaturthi
              </span>
            </motion.h1>

            {/* =================================================
                SUBHEADING
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="mt-5 flex items-center justify-center gap-3 lg:justify-start"
            >
              <span className="h-px w-8 bg-[#C99A2E]" />

              <span className="font-heading text-lg font-semibold text-[#A67819] sm:text-xl">
                With Homemade Happiness
              </span>

              <span className="h-px w-8 bg-[#C99A2E]" />
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================= */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="mx-auto mt-5 max-w-[540px] font-sans text-[14px] leading-7 text-[#26344A] sm:text-[15px] lg:mx-0 lg:text-[16px]"
            >
              Traditional recipes, premium ingredients and authentic
              taste — made with love for your festive celebrations.
            </motion.p>

            {/* =================================================
                CTA BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.4,
              }}
              className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              {/* Shop Now */}
              <button
                type="button"
                className="group flex min-h-[50px] w-full items-center justify-center gap-3 rounded-md border border-[#C99A2E] bg-[#123B7A] px-7 font-sans text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D2D5C] hover:shadow-md sm:w-auto"
              >
                Shop Now

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Explore Products */}
              <button
                type="button"
                className="group flex min-h-[50px] w-full items-center justify-center gap-3 rounded-md border border-[#C99A2E] bg-white/20 px-7 font-sans text-sm font-semibold text-[#123B7A] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/60 sm:w-auto"
              >
                Explore Products

                <ArrowRight
                  size={17}
                  strokeWidth={2}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </motion.div>

            {/* =================================================
                BENEFITS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
              }}
              className="mt-9 grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0"
            >
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={`${benefit.title}-${benefit.subtitle}`}
                    className={`flex flex-col items-center gap-2 px-3 lg:items-start ${
                      index !== 0
                        ? "sm:border-l sm:border-[#C99A2E]/30"
                        : ""
                    }`}
                  >
                    {/* Icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C99A2E]/60 bg-white/30 text-[#123B7A] backdrop-blur-sm">
                      <Icon
                        size={18}
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Benefit Text */}
                    <div className="text-center lg:text-left">
                      <p className="font-heading text-sm font-semibold text-[#123B7A]">
                        {benefit.title}
                      </p>

                      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.05em] text-[#596579]">
                        {benefit.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* =======================================================
            RIGHT SIDE — GANESH + REAL PRODUCTS
        ======================================================= */}

        <div className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-2 py-6 sm:px-4 lg:min-h-[620px] lg:px-0">

          {/* Subtle decorative elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border border-[#C99A2E]/10" />

            <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full border border-[#C99A2E]/10" />

          </div>

          {/* =================================================
              PRODUCT IMAGE
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative z-10 h-[500px] w-full max-w-[760px] sm:h-[560px] lg:h-[620px]"
          >
            <Image
              src="/banners/hero-banner.png"
              alt="Sai Durga Swagruha Food Ganesh Chaturthi collection featuring homemade food products"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-contain object-center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}