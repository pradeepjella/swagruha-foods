"use client";

import Image from "next/image";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export type Product = {
  id: number;
  name: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
};

interface ProductCardProps {
  product: Product;
  quantity: number;
  onAdd: (product: Product) => void;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
}

export default function ProductCard({
  product,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}: ProductCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#D4A72C]/15 bg-white p-3 shadow-[0_10px_35px_rgba(18,59,122,0.06)] transition-all duration-300 hover:border-[#D4A72C]/50 hover:shadow-[0_22px_55px_rgba(18,59,122,0.12)]"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden rounded-[22px] bg-[#FFF8E8]">
        {product.badge && (
          <div className="absolute left-3 top-3 z-10 rounded-full bg-[#123B7A] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-[#E8C866]">
            {product.badge}
          </div>
        )}

        {/* Favourite */}
        <button
          type="button"
          onClick={() => setIsFavourite(!isFavourite)}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#123B7A] shadow-sm backdrop-blur transition hover:scale-110"
          aria-label="Add to favourites"
        >
          <Heart
            size={18}
            className={
              isFavourite
                ? "fill-[#D4A72C] text-[#D4A72C]"
                : ""
            }
          />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#D4A72C]/10 to-transparent" />
      </div>

      {/* Product Details */}
      <div className="px-2 pb-2 pt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#A67819]">
            {product.category}
          </p>

          <div className="flex items-center gap-1 text-xs font-semibold text-[#123B7A]">
            <Star
              size={13}
              className="fill-[#D4A72C] text-[#D4A72C]"
            />
            {product.rating}
          </div>
        </div>

        <h3 className="mt-2 min-h-[48px] font-heading text-xl leading-snug text-[#123B7A]">
          {product.name}
        </h3>

        <p className="mt-1 text-xs text-[#8A93A3]">
          {product.weight}
        </p>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[#8A93A3]">
              Price
            </p>

            <p className="mt-1 font-heading text-2xl text-[#123B7A]">
              ₹{product.price}
            </p>
          </div>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => onAdd(product)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123B7A] text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#0A2854]"
              aria-label={`Add ${product.name}`}
            >
              <ShoppingBag size={18} />
            </button>
          ) : (
            <div className="flex items-center gap-1 rounded-full border border-[#D4A72C]/30 bg-[#FFF8E8] p-1">
              <button
                type="button"
                onClick={() => onDecrease(product)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-[#123B7A] transition hover:bg-white"
              >
                <Minus size={14} />
              </button>

              <span className="min-w-7 text-center text-sm font-bold text-[#123B7A]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onIncrease(product)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#123B7A] text-white transition hover:bg-[#0A2854]"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>

        {quantity === 0 ? (
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#123B7A]/15 py-3 text-sm font-semibold text-[#123B7A] transition-all hover:border-[#123B7A] hover:bg-[#123B7A] hover:text-white"
          >
            <Plus size={16} />
            Add to Cart
          </button>
        ) : (
          <div className="mt-5 rounded-xl bg-[#FFF8E8] py-3 text-center text-xs font-semibold text-[#A67819]">
            {quantity} item{quantity > 1 ? "s" : ""} added to your cart
          </div>
        )}
      </div>
    </motion.article>
  );
}