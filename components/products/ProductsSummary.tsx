"use client";

import {
  ShoppingBag,
  Heart,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const handleGoToCart = () => {
    router.push("/cart");
  };

  return (
    <section className="bg-[#FFFDF7] pb-8 sm:pb-10">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[24px] border border-[#D4A72C]/20 bg-white px-5 py-5 shadow-[0_12px_40px_rgba(18,59,122,0.07)] sm:px-7 sm:py-6"
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_auto]">
            {/* Products Info */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FFF8E8] text-[#123B7A]">
                <ShoppingBag size={27} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-heading text-xl text-[#123B7A] sm:text-2xl">
                    All Products
                  </h2>

                  <span className="rounded-full bg-[#123B7A]/8 px-2.5 py-1 text-xs font-semibold text-[#123B7A]">
                    {totalProducts}
                  </span>
                </div>

                <p className="mt-1 flex items-center gap-1.5 text-sm text-[#687386]">
                  Handpicked with love

                  <Heart
                    size={13}
                    className="fill-[#D4A72C] text-[#D4A72C]"
                  />
                </p>
              </div>
            </div>

            {/* Cart Total */}
            <div className="border-[#D4A72C]/20 lg:border-l lg:px-10">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#A67819]">
                Cart Total
              </p>

              <p className="mt-1 font-heading text-3xl text-[#123B7A]">
                ₹{totalAmount.toLocaleString("en-IN")}
              </p>
            </div>

            {/* Go To Cart Button */}
            <button
              type="button"
              onClick={handleGoToCart}
              className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-[#123B7A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0D2E61] lg:w-auto"
            >
              <ShoppingCart size={20} />

              <span>Go to Cart</span>

              <span className="flex h-7 min-w-7 items-center justify-center rounded-full bg-white/15 px-2 text-xs">
                {totalItems}
              </span>

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}