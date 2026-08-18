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
    <section className="hero-royal-bg relative w-full overflow-hidden">
      {/* Background decorations */}
      <div className="hero-royal-border" />
      <div className="hero-product-glow" />
      <div className="hero-gold-ring hero-gold-ring-one" />
      <div className="hero-gold-ring hero-gold-ring-two" />

      {/* ================= MAIN HERO ================= */}

      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2">
        {/* ================= CONTENT ================= */}

        <div className="relative z-10 flex items-center px-4 py-6 sm:px-10 sm:py-12 lg:min-h-[620px] lg:px-14 lg:py-14 xl:px-20">
          <div className="w-full lg:max-w-[620px]">
            {/* ================= MOBILE LAYOUT ================= */}

            <div className="relative grid grid-cols-[1fr_0.9fr] items-center gap-0 lg:block">
              {/* ================= LEFT TEXT ================= */}

              <div className="relative z-20 text-left">
                {/* Festival label */}

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-3 flex items-center gap-2 sm:mb-5"
                >
                  <span className="h-px w-4 bg-[#C99A2E] sm:w-8" />

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#A67819] sm:text-xs sm:tracking-[0.28em]">
                    Happy
                  </span>

                  <span className="hidden h-px w-8 bg-[#C99A2E] sm:block" />
                </motion.div>

                {/* Main heading */}

                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="
                    font-heading
                    text-[36px]
                    leading-[0.92]
                    tracking-[-0.03em]
                    text-[#123B7A]
                    sm:text-[62px]
                    lg:text-[68px]
                    xl:text-[76px]
                  "
                >
                  Ganesh

                  <span className="block text-[#C99A2E]">
                    Chaturthi
                  </span>
                </motion.h1>

                {/* Description */}

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.25,
                  }}
                  className="
                    mt-3
                    max-w-[540px]
                    text-[10px]
                    leading-[1.5]
                    text-[#26344A]
                    sm:mt-5
                    sm:text-[15px]
                    sm:leading-7
                    lg:text-[16px]
                  "
                >
                  Traditional homemade flavors made with love for your
                  festive celebrations.
                </motion.p>

                {/* Buttons */}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.35,
                  }}
                  className="mt-5 flex flex-col gap-2 sm:mt-7 sm:flex-row sm:gap-3"
                >
                  <button
                    type="button"
                    className="
                      group
                      flex
                      min-h-[40px]
                      items-center
                      justify-center
                      gap-2
                      rounded-md
                      border
                      border-[#C99A2E]
                      bg-[#123B7A]
                      px-4
                      text-[10px]
                      font-semibold
                      text-white
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#0D2D5C]
                      sm:min-h-[50px]
                      sm:px-7
                      sm:text-sm
                    "
                  >
                    Shop Now

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    type="button"
                    className="
                      hidden
                      min-h-[50px]
                      items-center
                      justify-center
                      gap-3
                      rounded-md
                      border
                      border-[#C99A2E]
                      bg-white/20
                      px-7
                      text-sm
                      font-semibold
                      text-[#123B7A]
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-white/60
                      sm:flex
                    "
                  >
                    Explore Products

                    <ArrowRight size={17} />
                  </button>
                </motion.div>
              </div>

              {/* ================= MOBILE GANESH IMAGE ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.88,
                  x: 25,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.15,
                  ease: "easeOut",
                }}
                className="
                  relative
                  -mr-4
                  block
                  h-[300px]
                  w-full
                  sm:hidden
                "
              >
                {/* Soft gold glow */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[180px]
                    w-[180px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#D4A72C]/20
                    blur-3xl
                  "
                />

                <Image
                  src="/banners/hero-banner.png"
                  alt="Ganesh Chaturthi Homemade Food Collection"
                  fill
                  priority
                  sizes="48vw"
                  className="
                    relative
                    z-10
                    object-contain
                    object-center
                    drop-shadow-[0_20px_30px_rgba(18,59,122,0.18)]
                  "
                />
              </motion.div>
            </div>

            {/* ================= DESKTOP EXTRA CONTENT ================= */}

            <div className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-5 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#C99A2E]" />

                <span className="font-heading text-xl font-semibold text-[#A67819]">
                  With Homemade Happiness
                </span>

                <span className="h-px w-8 bg-[#C99A2E]" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                }}
                className="mt-5 max-w-[540px] text-[16px] leading-7 text-[#26344A]"
              >
                Traditional recipes, premium ingredients and authentic
                taste — made with love for your festive celebrations.
              </motion.p>
            </div>
          </div>
        </div>

        {/* ================= TABLET IMAGE ================= */}

        <div className="relative hidden min-h-[420px] items-center justify-center px-5 py-6 sm:flex lg:hidden">
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
            className="relative h-[420px] w-full max-w-[650px]"
          >
            <Image
              src="/banners/hero-banner.png"
              alt="Ganesh Chaturthi homemade food collection"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* ================= DESKTOP IMAGE ================= */}

        <div className="relative hidden min-h-[620px] items-center justify-center overflow-hidden lg:flex">
          {/* Decorative circles */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 top-0 h-72 w-72 rounded-full border border-[#C99A2E]/10" />

            <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full border border-[#C99A2E]/10" />
          </div>

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
            className="relative z-10 h-[620px] w-full max-w-[760px]"
          >
            <Image
              src="/banners/hero-banner.png"
              alt="Sai Durga Swagruha Food Ganesh Chaturthi collection"
              fill
              priority
              sizes="50vw"
              className="object-contain object-center drop-shadow-[0_30px_45px_rgba(18,59,122,0.15)]"
            />
          </motion.div>
        </div>
      </div>

      {/* ================= BENEFITS ================= */}

      <div className="relative z-20 mx-auto w-full max-w-[1600px] px-4 pb-6 sm:px-10 sm:pb-8 lg:-mt-20 lg:px-14 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="
            grid
            grid-cols-4
            gap-1
            rounded-xl
            border
            border-[#C99A2E]/20
            bg-white/40
            p-2
            backdrop-blur-sm
            sm:gap-4
            sm:p-4
            lg:max-w-[620px]
          "
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={`${benefit.title}-${benefit.subtitle}`}
                className={`
                  flex
                  flex-col
                  items-center
                  gap-1
                  px-1
                  py-2
                  text-center
                  sm:gap-2
                  sm:px-3
                  ${
                    index !== 0
                      ? "border-l border-[#C99A2E]/20"
                      : ""
                  }
                `}
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C99A2E]/50 bg-white/40 text-[#123B7A] sm:h-10 sm:w-10">
                  <Icon
                    size={14}
                    strokeWidth={1.7}
                    className="sm:h-[18px] sm:w-[18px]"
                  />
                </div>

                <div>
                  <p className="font-heading text-[10px] font-semibold text-[#123B7A] sm:text-sm">
                    {benefit.title}
                  </p>

                  <p className="text-[7px] font-medium uppercase tracking-[0.03em] text-[#596579] sm:text-[10px]">
                    {benefit.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}