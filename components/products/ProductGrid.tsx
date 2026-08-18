"use client";

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
    <section className="bg-[#FFFDF7] pb-32 pt-10 sm:pb-36">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* TOP BAR */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-[#687386]">
              Showing{" "}
              <span className="font-bold text-[#123B7A]">
                {products.length}
              </span>{" "}
              delicious products
            </p>
          </div>

          <select
            value={sortBy}
            onChange={(event) =>
              setSortBy(event.target.value)
            }
            className="rounded-xl border border-[#D4A72C]/20 bg-white px-4 py-3 text-sm font-medium text-[#123B7A] outline-none"
          >
            <option>Popular</option>
            <option>Top Rated</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        {/* PRODUCTS */}
        {products.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
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
          <div className="rounded-3xl border border-dashed border-[#D4A72C]/30 bg-white py-20 text-center">
            <h3 className="font-heading text-2xl text-[#123B7A]">
              No products found
            </h3>

            <p className="mt-2 text-sm text-[#687386]">
              Try searching for another product.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}