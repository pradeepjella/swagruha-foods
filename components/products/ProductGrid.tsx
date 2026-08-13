"use client";

import {
  ArrowDownUp,
  Grid2X2,
  LayoutList,
} from "lucide-react";
import { useState } from "react";

import ProductCard, { Product } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  cart: Record<number, number>;
  sortBy: string;
  setSortBy: (value: string) => void;
  onAdd: (product: Product) => void;
  onIncrease: (product: Product) => void;
  onDecrease: (product: Product) => void;
}

export default function ProductGrid({
  products,
  cart,
  sortBy,
  setSortBy,
  onAdd,
  onIncrease,
  onDecrease,
}: ProductGridProps) {
  const [gridView, setGridView] = useState(true);

  return (
    <section className="bg-[#FFFDF7] pb-20">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67819]">
              Sai Durga Collection
            </p>

            <h2 className="mt-2 font-heading text-3xl text-[#123B7A] sm:text-4xl">
              Explore Our Products
            </h2>

            <p className="mt-2 text-sm text-[#687386]">
              {products.length} homemade favourites found
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Sort */}
            <div className="flex items-center gap-2 rounded-xl border border-[#D4A72C]/20 bg-white px-3 py-2">
              <ArrowDownUp
                size={16}
                className="text-[#A67819]"
              />

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-sm font-medium text-[#123B7A] outline-none"
              >
                <option value="Popular">Popular</option>

                <option value="Top Rated">
                  Top Rated
                </option>

                <option value="Price: Low to High">
                  Price: Low to High
                </option>

                <option value="Price: High to Low">
                  Price: High to Low
                </option>
              </select>
            </div>

            {/* Grid / List View */}
            <div className="hidden rounded-xl border border-[#D4A72C]/20 bg-white p-1 sm:flex">
              <button
                type="button"
                onClick={() => setGridView(true)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                  gridView
                    ? "bg-[#123B7A] text-white shadow-sm"
                    : "text-[#687386] hover:bg-[#FFF8E8]"
                }`}
                aria-label="Grid view"
              >
                <Grid2X2 size={17} />
              </button>

              <button
                type="button"
                onClick={() => setGridView(false)}
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all ${
                  !gridView
                    ? "bg-[#123B7A] text-white shadow-sm"
                    : "text-[#687386] hover:bg-[#FFF8E8]"
                }`}
                aria-label="List view"
              >
                <LayoutList size={17} />
              </button>
            </div>
          </div>
        </div>

        {/* Products */}
        {products.length > 0 ? (
          <div
            className={
              gridView
                ? "grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 xl:gap-6"
                : "grid grid-cols-1 gap-5"
            }
          >
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                quantity={cart[product.id] || 0}
                onAdd={onAdd}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-dashed border-[#D4A72C]/30 bg-white py-20 text-center">
            <p className="font-heading text-2xl text-[#123B7A]">
              No products found
            </p>

            <p className="mt-2 text-sm text-[#687386]">
              Try searching for another homemade favourite.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}