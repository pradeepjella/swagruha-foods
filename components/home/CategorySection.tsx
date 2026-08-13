"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    name: "Laddu & Sweets",
    subtitle: "Traditional Homemade",
    image: "/categories/laddu.png",
  },
  {
    name: "Chikki",
    subtitle: "Healthy & Crunchy",
    image: "/categories/chikki.png",
  },
  {
    name: "Honey",
    subtitle: "Natural Goodness",
    image: "/categories/honey1.png",
  },
  {
    name: "Mango",
    subtitle: "Made with Care",
    image: "/categories/mango pulp1.png",
  },
  {
    name: "Millet Biscuits",
    subtitle: "Authentic Taste",
    image: "/categories/biscuits1.png",
  },
  {
    name: "Papad",
    subtitle: "Crispy & Homemade",
    image: "/categories/papads.png",
  },
  {
    name: "Pickles",
    subtitle: "Homestyle Flavours",
    image: "/categories/pickles.png",
  },
  {
    name: "Putharekulu",
    subtitle: "Andhra Special",
    image: "/categories/pootharakulu1.png",
  },
  {
    name: "Spicy Specials",
    subtitle: "Full of Flavour",
    image: "/categories/powder.png",
  },
  {
    name: "Special Items",
    subtitle: "Our Signature Picks",
    image: "/categories/spacial.png",
  },
];

export default function CategorySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FFF9ED] py-16 sm:py-20 lg:py-24">
      {/* =========================================================
          PREMIUM BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large royal circles */}
        <div className="absolute -left-44 top-0 h-[420px] w-[420px] rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-48 bottom-[-100px] h-[520px] w-[520px] rounded-full border border-[#123B7A]/[0.06]" />

        {/* Soft central glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A72C]/[0.025] blur-3xl" />

        {/* Decorative gold dots */}
        <span className="absolute left-[8%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#D4A72C]/50" />

        <span className="absolute right-[10%] top-[28%] h-2 w-2 rounded-full bg-[#D4A72C]/40" />

        <span className="absolute left-[18%] bottom-[20%] h-1.5 w-1.5 rounded-full bg-[#123B7A]/30" />

        <span className="absolute right-[22%] bottom-[14%] h-1.5 w-1.5 rounded-full bg-[#D4A72C]/50" />

        {/* Thin decorative line */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4A72C]/20 to-transparent" />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* =======================================================
            SECTION HEADER
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          {/* Small luxury label */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#D4A72C] sm:w-12" />

            <span className="font-sans text-[9px] font-semibold uppercase tracking-[0.3em] text-[#A67819] sm:text-[11px]">
              Sai Durga Collection
            </span>

            <span className="h-px w-8 bg-[#D4A72C] sm:w-12" />
          </div>

          {/* Heading */}
          <h2 className="font-heading text-[32px] font-semibold leading-tight tracking-[-0.025em] text-[#123B7A] sm:text-[42px] lg:text-[50px]">
            Explore Our{" "}
            <span className="text-[#C99A2E]">Specialities</span>
          </h2>

          {/* Ornament */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-[#D4A72C]/40" />

            <span className="text-xs text-[#D4A72C]">✦</span>

            <span className="h-px w-10 bg-[#D4A72C]/40" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl font-sans text-[13px] leading-6 text-[#687386] sm:text-[15px] sm:leading-7">
            Discover our range of traditional homemade foods, premium
            ingredients and authentic flavours made with love.
          </p>
        </motion.div>

        {/* =======================================================
            DESKTOP / TABLET GRID
        ======================================================= */}

        <div className="hidden grid-cols-2 gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* =======================================================
            MOBILE HORIZONTAL SCROLL
        ======================================================= */}

        <div className="flex gap-4 overflow-x-auto pb-5 sm:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="w-[190px] min-w-[190px]"
            >
              <CategoryCard
                category={category}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* =======================================================
            VIEW ALL BUTTON
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex justify-center sm:mt-12"
        >
          <button
            type="button"
            className="
              group
              flex
              min-h-[48px]
              items-center
              justify-center
              gap-3
              rounded-full
              border
              border-[#D4A72C]
              bg-[#123B7A]
              px-7
              font-sans
              text-sm
              font-semibold
              text-white
              shadow-[0_8px_25px_rgba(18,59,122,0.10)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#0A2854]
              hover:shadow-[0_15px_35px_rgba(18,59,122,0.18)]
            "
          >
            View All Categories

            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================================
   CATEGORY CARD
============================================================= */

function CategoryCard({
  category,
  index,
}: {
  category: {
    name: string;
    subtitle: string;
    image: string;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.04, 0.3),
      }}
      whileHover={{ y: -7 }}
      className="group cursor-pointer"
    >
      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-[24px]
          border
          border-[#D4A72C]/25
          bg-[#FFFDF8]
          p-2
          shadow-[0_8px_28px_rgba(18,59,122,0.045)]
          transition-all
          duration-500
          group-hover:border-[#D4A72C]/65
          group-hover:bg-white
          group-hover:shadow-[0_18px_45px_rgba(18,59,122,0.11)]
          sm:rounded-[26px]
          sm:p-2.5
        "
      >
        {/* =====================================================
            TOP GOLD ACCENT
        ===================================================== */}

        <div
          className="
            absolute
            left-1/2
            top-0
            z-30
            h-[2px]
            w-8
            -translate-x-1/2
            rounded-full
            bg-[#D4A72C]
            transition-all
            duration-500
            group-hover:w-16
          "
        />

        {/* =====================================================
            IMAGE CONTAINER
        ===================================================== */}

        <div
          className="
            relative
            aspect-square
            overflow-hidden
            rounded-[19px]
            bg-gradient-to-br
            from-[#FFF9EA]
            via-[#FFFDF8]
            to-[#F7EED8]
            sm:rounded-[21px]
          "
        >
          {/* Soft luxury glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-0
              h-32
              w-32
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D4A72C]/10
              blur-3xl
            "
          />

          {/* Product Image */}

          <Image
            src={category.image}
            alt={`${category.name} - Sai Durga Swagruha Food`}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="
              (max-width: 640px) 190px,
              (max-width: 768px) 45vw,
              (max-width: 1024px) 30vw,
              (max-width: 1280px) 22vw,
              18vw
            "
            className="
              relative
              z-10
              object-contain
              p-5
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.08]
              sm:p-6
            "
          />

          {/* Image bottom fade */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              z-20
              h-14
              bg-gradient-to-t
              from-[#FFFDF8]/45
              to-transparent
            "
          />

          {/* Hover shine */}
          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              -left-[120%]
              z-30
              w-[70%]
              skew-x-[-20deg]
              bg-gradient-to-r
              from-transparent
              via-white/25
              to-transparent
              transition-all
              duration-700
              group-hover:left-[130%]
            "
          />
        </div>

        {/* =====================================================
            CARD INFORMATION
        ===================================================== */}

        <div className="relative px-2 pb-3 pt-4 text-center sm:px-3 sm:pb-4 sm:pt-5">
          {/* Category name */}

          <h3
            className="
              font-heading
              text-[16px]
              font-semibold
              leading-tight
              text-[#123B7A]
              transition-colors
              duration-300
              group-hover:text-[#A67819]
              sm:text-[18px]
            "
          >
            {category.name}
          </h3>

          {/* Subtitle */}

          <p
            className="
              mt-1.5
              font-sans
              text-[8px]
              font-medium
              uppercase
              tracking-[0.11em]
              text-[#8A93A3]
              sm:text-[9px]
            "
          >
            {category.subtitle}
          </p>

          {/* Gold ornament */}

          <div className="mx-auto mt-3 flex items-center justify-center gap-1.5">
            <span
              className="
                h-px
                w-4
                bg-[#D4A72C]/50
                transition-all
                duration-300
                group-hover:w-6
              "
            />

            <span className="h-1 w-1 rounded-full bg-[#D4A72C]" />

            <span
              className="
                h-px
                w-4
                bg-[#D4A72C]/50
                transition-all
                duration-300
                group-hover:w-6
              "
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}