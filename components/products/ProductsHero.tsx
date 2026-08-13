"use client";

import { motion } from "framer-motion";
import { Heart, Leaf, Search } from "lucide-react";

interface ProductsHeroProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<
    React.SetStateAction<string>
  >;
}

export default function ProductsHero({
  searchQuery,
  setSearchQuery,
}: ProductsHeroProps) {
  const suggestions = [
    "Laddu",
    "Pickles",
    "Chikki",
    "Millet Biscuits",
  ];

  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] pb-10 pt-14 sm:pb-14 sm:pt-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full border border-[#D4A72C]/10" />

        <div className="absolute right-10 top-10 h-40 w-40 rounded-full bg-[#D4A72C]/5 blur-3xl" />

        <div className="absolute right-[8%] top-[30%] rotate-12 opacity-30">
          <Leaf
            size={100}
            strokeWidth={1}
            className="text-[#A67819]"
          />
        </div>

        <div className="absolute left-[15%] bottom-5 h-2 w-2 rounded-full bg-[#D4A72C]/60" />

        <div className="absolute right-[25%] bottom-10 h-1.5 w-1.5 rounded-full bg-[#123B7A]/40" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D4A72C]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#A67819]">
                Sai Durga Collection
              </span>
            </div>

            <h1 className="font-heading text-5xl leading-[0.9] text-[#123B7A] sm:text-6xl lg:text-7xl">
              Our
              <span className="mt-2 block text-[#D4A72C]">
                Products
              </span>
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <span className="h-px w-16 bg-[#D4A72C]/60" />

              <Heart
                size={15}
                className="fill-[#D4A72C] text-[#D4A72C]"
              />

              <span className="h-px w-10 bg-[#D4A72C]/60" />
            </div>

            <p className="mt-5 max-w-md text-base leading-7 text-[#687386] sm:text-lg">
              Authentic homemade flavours, crafted with care and
              delivered with love from our kitchen to your home.
            </p>
          </motion.div>

          {/* Search Area */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full"
          >
            <div className="relative">
              <Search
                size={22}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-[#123B7A]/60"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search for your favourite homemade products..."
                className="h-16 w-full rounded-full border border-[#D4A72C]/20 bg-white pl-16 pr-6 text-sm text-[#123B7A] outline-none shadow-[0_12px_35px_rgba(18,59,122,0.08)] transition-all placeholder:text-[#8A93A3] focus:border-[#D4A72C]/60 focus:shadow-[0_15px_45px_rgba(18,59,122,0.12)] sm:text-base"
              />
            </div>

            {/* Search Suggestions */}
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="self-center text-xs font-medium text-[#8A93A3]">
                Popular:
              </span>

              {suggestions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSearchQuery(item)}
                  className="rounded-full border border-[#D4A72C]/20 bg-white px-4 py-2 text-xs font-medium text-[#123B7A] transition hover:border-[#D4A72C] hover:bg-[#FFF8E8]"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}