"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

interface ProductsSummaryProps {
  totalProducts: number;
  totalAmount: number;
  totalItems: number;
}

export default function ProductsSummary({
  totalProducts,
  totalAmount,
  totalItems,
}: ProductsSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#D4A72C]/20 bg-white/95 shadow-[0_-10px_40px_rgba(18,59,122,0.12)] backdrop-blur-xl"
    >
      <div className="mx-auto max-w-[1600px] px-4 py-3 sm:px-8 lg:px-12 xl:px-20">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF4D8] text-[#123B7A]">
              <ShoppingBag size={22} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[#123B7A]">
                  Your Food Box
                </p>

                <span className="rounded-full bg-[#123B7A]/10 px-2 py-0.5 text-xs font-bold text-[#123B7A]">
                  {totalItems} items
                </span>
              </div>

              <p className="text-xs text-[#687386]">
                {totalProducts} products available
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <div className="text-right">
              <p className="text-xs text-[#687386]">
                Cart Total
              </p>

              <p className="font-heading text-xl text-[#123B7A] sm:text-2xl">
                ₹{totalAmount.toLocaleString("en-IN")}
              </p>
            </div>

            <Link
              href="/cart"
              className={`group flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition sm:px-7
                ${
                  totalItems > 0
                    ? "bg-[#123B7A] hover:bg-[#0D2E61]"
                    : "pointer-events-none bg-[#687386]/40"
                }`}
            >
              <ShoppingCart size={18} />

              <span>
                {totalItems > 0
                  ? "View Cart"
                  : "Add Items"}
              </span>

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}