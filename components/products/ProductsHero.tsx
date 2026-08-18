"use client";

import { Search, Sparkles } from "lucide-react";

interface ProductsHeroProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

export default function ProductsHero({
  searchQuery,
  setSearchQuery,
}: ProductsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-12 sm:py-16 lg:py-20">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,167,44,0.16),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(18,59,122,0.10),transparent_38%)]" />

      {/* Decorative Blur */}
      <div className="absolute -left-20 top-10 h-52 w-52 rounded-full bg-[#D4A72C]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-[#123B7A]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4A72C]/25 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-[#A67819] shadow-sm backdrop-blur-md sm:text-sm">
            <Sparkles size={15} />
            Homemade With Love
          </div>

          {/* Main Heading */}
          <h1 className="mt-5 font-heading text-4xl leading-[1.1] text-[#123B7A] sm:text-5xl lg:text-6xl xl:text-7xl">
            Discover Our
            <span className="mt-1 block text-[#A67819]">
              Homemade Collection
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687386] sm:text-base lg:text-lg">
            Discover authentic homemade foods, traditional flavors,
            healthy choices, and special recipes made with care.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-8 max-w-2xl sm:mt-10">
            <div className="absolute -inset-1 rounded-[22px] bg-gradient-to-r from-[#D4A72C]/20 via-transparent to-[#123B7A]/15 blur-md" />

            <div className="relative">
              <Search
                size={21}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-[#A67819] sm:left-6"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search laddus, biscuits, pickles, snacks..."
                className="h-15 sm:h-[68px] w-full rounded-2xl border border-[#D4A72C]/20 bg-white/95 pl-14 pr-5 text-sm font-medium text-[#123B7A] outline-none shadow-[0_15px_40px_rgba(18,59,122,0.10)] backdrop-blur-xl transition-all duration-300 placeholder:text-[#9AA3B1] focus:border-[#A67819]/60 focus:shadow-[0_20px_45px_rgba(18,59,122,0.14)] sm:pl-16 sm:pr-6 sm:text-base"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}