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
      <div className="mx-auto max-w-[1600px]">
        {/* CATEGORY NAVIGATION */}
        <div className="relative overflow-x-auto overflow-y-hidden scrollbar-hide">
          {/* Soft premium background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F7F3EB] via-[#FFFDF7] to-[#FFFDF7]" />

          {/* Fixed bottom navigation line */}
          <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[2px] w-full bg-[#2E716F]/80" />

          <div className="relative z-10 flex min-w-max items-end gap-1 px-4 pt-4 sm:px-8 sm:pt-5 lg:px-12 xl:px-20">
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
                  className={`relative shrink-0 px-5 py-3 text-sm font-semibold tracking-[0.04em] transition-colors duration-300 sm:px-7 sm:py-4 sm:text-base lg:text-lg ${
                    isActive
                      ? "z-20 text-[#123B7A]"
                      : "z-10 text-[#3E4C45] hover:text-[#123B7A]"
                  }`}
                >
                  {/* ONLY THIS BACKGROUND MOVES */}
                  {isActive && (
                    <motion.span
                      layoutId="active-product-category"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-t-[26px] border-x border-t border-[#2E716F]/80 bg-[#FFFDF7] shadow-[0_-8px_30px_rgba(46,113,111,0.10)]"
                    />
                  )}

                  {/* Premium gold accent */}
                  {isActive && (
                    <motion.span
                      layoutId="active-category-accent"
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

        {/* CATEGORY CONTENT HEADER */}
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
          className="bg-[#FFFDF7] px-5 py-5 sm:px-8 sm:py-6 lg:px-12 xl:px-20"
        >
          <div className="flex items-center gap-5">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#B7892D]">
                Explore Our Collection
              </p>

              <h2 className="mt-1 font-heading text-xl text-[#123B7A] sm:text-2xl lg:text-3xl">
                {activeCategory}
              </h2>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-[#D4A72C]/50 to-transparent sm:block" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}