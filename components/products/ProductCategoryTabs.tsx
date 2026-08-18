"use client";

import { motion } from "framer-motion";

interface ProductCategoryTabsProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const categories = [
  "All Products",
  "Laddu Made With Dates",
  "Biscuits Made With Wheat, Millets & Palm Jaggery",
  "Sweets",
  "Pickles With Groundnut Oil",
  "Breakfast Items",
  "Papads",
  "Chikki's",
  "Wadiyalu",
  "Snacks",
  "Karam Powders",
  "Special",
];

export default function ProductCategoryTabs({
  activeCategory,
  setActiveCategory,
}: ProductCategoryTabsProps) {
  return (
    <section className="relative bg-[#FFFDF7]">
      {/* ================= MOBILE CATEGORY GRID ================= */}
      <div className="border-t border-[#123B7A]/10 bg-[#FFFDF7] px-3 py-3 md:hidden">
        <div className="grid grid-cols-4 gap-2">
          {categories.map((category, index) => {
            const isActive = activeCategory === category;

            return (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.25,
                  delay: Math.min(index * 0.025, 0.2),
                }}
                whileTap={{ scale: 0.96 }}
                className={`relative flex min-h-[62px] items-center justify-center overflow-hidden rounded-xl border px-1.5 py-2 text-center text-[10px] font-bold leading-[1.25] transition-all duration-300 ${
                  isActive
                    ? "border-[#123B7A] bg-[#123B7A] text-white shadow-[0_8px_20px_rgba(18,59,122,0.18)]"
                    : "border-[#D4A72C]/15 bg-white text-[#435149] shadow-[0_3px_12px_rgba(18,59,122,0.04)] active:bg-[#FFF5E2]"
                }`}
              >
                {/* Active gold line */}
                {isActive && (
                  <motion.span
                    layoutId="mobile-active-line"
                    className="absolute left-3 right-3 top-0 h-[2px] rounded-full bg-[#D4A72C]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {category}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ================= DESKTOP CATEGORY NAVIGATION ================= */}
      <div className="hidden md:block">
        <div className="relative overflow-x-auto overflow-y-hidden scrollbar-hide">
          {/* Premium background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F3EB] via-[#FFFDF7] to-[#FFFDF7]" />

          {/* Fixed navigation line */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[2px] w-full bg-[#2E716F]/80" />

          <div className="relative z-10 flex min-w-max items-end gap-1 px-8 pt-5 lg:px-12 xl:px-20">
            {categories.map((category, index) => {
              const isActive = activeCategory === category;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: Math.min(index * 0.03, 0.25),
                  }}
                  whileHover={{
                    y: isActive ? 0 : -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className={`relative shrink-0 px-5 py-3 text-sm font-semibold tracking-[0.04em] transition-colors duration-300 lg:px-7 lg:py-4 lg:text-base ${
                    isActive
                      ? "z-20 text-[#123B7A]"
                      : "z-10 text-[#3E4C45] hover:text-[#123B7A]"
                  }`}
                >
                  {/* Animated active tab */}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-active-category"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-t-[26px] border-x border-t border-[#2E716F]/80 bg-[#FFFDF7] shadow-[0_-8px_30px_rgba(46,113,111,0.10)]"
                    />
                  )}

                  {/* Gold accent */}
                  {isActive && (
                    <motion.span
                      layoutId="desktop-category-accent"
                      transition={{
                        duration: 0.25,
                      }}
                      className="absolute left-[20%] top-0 h-[2px] w-[60%] rounded-full bg-gradient-to-r from-transparent via-[#C99B45] to-transparent"
                    />
                  )}

                  <span className="relative z-10 whitespace-nowrap">
                    {category}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= ACTIVE CATEGORY TITLE ================= */}
      <motion.div
        key={activeCategory}
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.25,
        }}
        className="border-t border-[#D4A72C]/10 bg-[#FFFDF7] px-5 py-4 sm:px-8 lg:px-12 xl:px-20"
      >
        <div className="mx-auto flex max-w-[1600px] items-center gap-4">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#B7892D] sm:text-[10px]">
              Explore Our Collection
            </p>

            <h2 className="mt-1 font-heading text-lg text-[#123B7A] sm:text-2xl lg:text-3xl">
              {activeCategory}
            </h2>
          </div>

          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D4A72C]/50 to-transparent sm:block" />
        </div>
      </motion.div>
    </section>
  );
}