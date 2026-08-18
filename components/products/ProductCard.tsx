"use client";

import Image from "next/image";
import { Minus, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";

export interface Product {
  id: number;
  name: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
  description?: string;
}

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
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[28px] border border-[#123B7A]/10 bg-white shadow-[0_10px_35px_rgba(18,59,122,0.07)] transition hover:shadow-[0_20px_50px_rgba(18,59,122,0.14)]"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-[#FFF9EC]">
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[#123B7A] px-3 py-1.5 text-xs font-bold text-white shadow-lg">
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#B7892D]">
              {product.category}
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#123B7A]">
              {product.name}
            </h3>
          </div>

          <div className="flex items-center gap-1 rounded-full bg-[#FFF7DF] px-2 py-1 text-xs font-bold text-[#8A651B]">
            <Star size={13} className="fill-[#D4A72C] text-[#D4A72C]" />
            {product.rating}
          </div>
        </div>

        {product.description && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#687386]">
            {product.description}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#8B94A3]">{product.weight}</p>

            <p className="mt-1 text-xl font-bold text-[#123B7A]">
              ₹{product.price}
            </p>
          </div>

          {quantity === 0 ? (
            <button
              type="button"
              onClick={() => onAdd(product)}
              className="rounded-xl bg-[#123B7A] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0B2B5A]"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 rounded-xl bg-[#123B7A] p-1.5 text-white">
              <button
                type="button"
                onClick={() => onDecrease(product)}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/10"
              >
                <Minus size={16} />
              </button>

              <span className="min-w-5 text-center text-sm font-bold">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => onIncrease(product)}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-white/10"
              >
                <Plus size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}