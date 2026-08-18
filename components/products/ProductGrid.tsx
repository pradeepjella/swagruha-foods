"use client";

import { motion } from "framer-motion";
import ProductCard, {
  type Product,
} from "./ProductCard";

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
  return (
    <section
      id="products-list"
      className="bg-[#FFFDF7] pb-32 pt-6 sm:pb-36 sm:pt-10"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-12 xl:px-20">
        
        {/* TOP BAR */}
        <div className="mb-6 flex items-center justify-between gap-3 sm:mb-8">
          <div>
            <p className="text-xs text-[#687386] sm:text-sm">
              Showing{" "}
              <span className="font-bold text-[#123B7A]">
                {products.length}
              </span>{" "}
              products
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            className="rounded-xl border border-[#D4A72C]/20 bg-white px-3 py-2.5 text-xs font-semibold text-[#123B7A] outline-none transition focus:border-[#123B7A] sm:px-4 sm:py-3 sm:text-sm"
          >
            <option>Popular</option>
            <option>Top Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        {products.length > 0 ? (
          <motion.div
            layout
            className="
              grid
              grid-cols-2
              gap-3
              sm:grid-cols-2
              sm:gap-5
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-4
              2xl:grid-cols-5
            "
          >
            {products.map((product, index) => (
              <motion.div
                layout
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.03, 0.25),
                }}
              >
                <ProductCard
                  product={product}
                  quantity={cart[product.id] || 0}
                  onAdd={onAdd}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-dashed border-[#D4A72C]/30 bg-white py-16 text-center sm:py-20"
          >
            <h3 className="font-heading text-xl text-[#123B7A] sm:text-2xl">
              No products found
            </h3>

            <p className="mt-2 text-xs text-[#687386] sm:text-sm">
              Try searching for another product.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}