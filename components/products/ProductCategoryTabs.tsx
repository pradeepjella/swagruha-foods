"use client";

import { motion } from "framer-motion";

const categories = [
  "All Products",
  "Laddu & Sweets",
  "Millet Biscuits",
  "Pickles",
  "Chikki",
  "Honey",
  "Papads",
  "Special Items",
];

interface ProductCategoryTabsProps {
  activeCategory: string;
  setActiveCategory: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function ProductCategoryTabs({
  activeCategory,
  setActiveCategory,
}: ProductCategoryTabsProps) {
  return (
    <section className="relative bg-[#FFFDF7] pb-8 sm:pb-10">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="overflow-x-auto pb-2 scrollbar-hide">
          <div className="relative flex min-w-max items-end gap-1 border-b-2 border-[#123B7A]/70 px-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`relative whitespace-nowrap px-6 py-4 text-sm font-semibold transition-all duration-300 sm:px-8 sm:text-base ${
                    isActive
                      ? "text-[#123B7A]"
                      : "text-[#687386] hover:text-[#123B7A]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeCategory"
                      className="absolute inset-0 -bottom-[2px] rounded-t-[24px] border-x-2 border-t-2 border-[#123B7A]/70 bg-[#FFFDF7]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {category}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#D4A72C]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A67819]">
              Explore by Category
            </p>
          </div>

          <p className="hidden text-xs text-[#8A93A3] sm:block">
            Choose a category to discover our homemade favourites
          </p>
        </div>
      </div>
    </section>
  );
}