"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Minus,
  Package,
  Plus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

const products = [
  {
    id: 1,
    name: "Sesame Laddu",
    price: 150,
    image: "/categories/laddu.png",
    category: "Sweet",
  },
  {
    id: 2,
    name: "Flax Seed Laddu",
    price: 150,
    image: "/categories/laddu.png",
    category: "Healthy",
  },
  {
    id: 3,
    name: "Dry Fruit Laddu",
    price: 190,
    image: "/categories/laddu.png",
    category: "Premium",
  },
  {
    id: 4,
    name: "Finger Millet Biscuits",
    price: 150,
    image: "/categories/biscuits.png",
    category: "Healthy",
  },
  {
    id: 5,
    name: "Jowar Biscuits",
    price: 150,
    image: "/categories/biscuits.png",
    category: "Traditional",
  },
  {
    id: 6,
    name: "Masala Gavvalu",
    price: 110,
    image: "/categories/spacial.png",
    category: "Snacks",
  },
];

export default function BuildYourCombo() {
  const [selectedProducts, setSelectedProducts] = useState<
    Record<number, number>
  >({});

  const totalItems = useMemo(
    () =>
      Object.values(selectedProducts).reduce(
        (total, quantity) => total + quantity,
        0
      ),
    [selectedProducts]
  );

  const totalPrice = useMemo(
    () =>
      products.reduce(
        (total, product) =>
          total +
          product.price * (selectedProducts[product.id] || 0),
        0
      ),
    [selectedProducts]
  );

  const addProduct = (id: number) => {
    setSelectedProducts((current) => ({
      ...current,
      [id]: (current[id] || 0) + 1,
    }));
  };

  const removeProduct = (id: number) => {
    setSelectedProducts((current) => {
      const quantity = current[id] || 0;

      if (quantity <= 1) {
        const updated = { ...current };
        delete updated[id];
        return updated;
      }

      return {
        ...current,
        [id]: quantity - 1,
      };
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[480px] w-[480px] rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-40 bottom-10 h-[520px] w-[520px] rounded-full border border-[#123B7A]/10" />

        <div className="absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-[#D4A72C]/50" />

        <div className="absolute right-[12%] top-[25%] h-1.5 w-1.5 rounded-full bg-[#D4A72C]/60" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A67819]">
              <Sparkles size={14} />
              Make It Your Way
            </span>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-[#123B7A] sm:text-5xl lg:text-6xl">
            Build Your Own
            <span className="block text-[#D4A72C]">Combo Box.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687386] sm:text-base">
            Pick your favourite Sai Durga homemade products and create a
            special combo made exactly for you.
          </p>
        </motion.div>

        {/* Main Builder */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]">
          {/* Products */}
          <div>
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                  Step 01
                </p>

                <h3 className="mt-2 font-heading text-2xl text-[#123B7A] sm:text-3xl">
                  Choose Your Favourites
                </h3>
              </div>

              <div className="hidden items-center gap-2 rounded-full border border-[#D4A72C]/25 bg-[#FFF8E8] px-4 py-2 text-xs font-semibold text-[#123B7A] sm:flex">
                <Package size={16} className="text-[#A67819]" />
                {totalItems} Items Selected
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => {
                const quantity = selectedProducts[product.id] || 0;

                return (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className={`group relative overflow-hidden rounded-[24px] border bg-white p-4 transition-all duration-300 ${
                      quantity > 0
                        ? "border-[#D4A72C] shadow-[0_15px_35px_rgba(212,167,44,0.14)]"
                        : "border-[#E8E1D0] hover:border-[#D4A72C]/50 hover:shadow-[0_12px_30px_rgba(18,59,122,0.08)]"
                    }`}
                  >
                    {/* Selected badge */}
                    {quantity > 0 && (
                      <div className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-[#123B7A] text-white shadow-md">
                        <Check size={15} strokeWidth={2.5} />
                      </div>
                    )}

                    <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[18px] bg-[#FFF8E8]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="pt-4">
                      <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A67819]">
                        {product.category}
                      </p>

                      <h4 className="mt-1 font-heading text-lg leading-snug text-[#123B7A]">
                        {product.name}
                      </h4>

                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-sm font-bold text-[#123B7A]">
                          ₹{product.price}
                        </span>

                        {quantity === 0 ? (
                          <button
                            type="button"
                            onClick={() => addProduct(product.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#123B7A] text-white transition-all hover:bg-[#0A2854] hover:scale-105"
                            aria-label={`Add ${product.name}`}
                          >
                            <Plus size={17} />
                          </button>
                        ) : (
                          <div className="flex items-center gap-2 rounded-full border border-[#D4A72C]/30 bg-[#FFF8E8] px-2 py-1">
                            <button
                              type="button"
                              onClick={() => removeProduct(product.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-full text-[#123B7A] transition hover:bg-[#D4A72C]/15"
                              aria-label={`Remove ${product.name}`}
                            >
                              <Minus size={14} />
                            </button>

                            <span className="min-w-5 text-center text-sm font-bold text-[#123B7A]">
                              {quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() => addProduct(product.id)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#123B7A] text-white transition hover:bg-[#0A2854]"
                              aria-label={`Add another ${product.name}`}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:pt-12">
            <div className="sticky top-24 overflow-hidden rounded-[30px] border border-[#D4A72C]/30 bg-[#123B7A] p-6 shadow-[0_25px_60px_rgba(18,59,122,0.2)] sm:p-8">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#D4A72C]/15" />

              <div className="relative">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E8C866]">
                  Your Custom Box
                </p>

                <h3 className="mt-3 font-heading text-3xl text-[#FFF8E8]">
                  Your Selection
                </h3>

                <div className="mt-7 border-y border-white/10 py-6">
                  {totalItems === 0 ? (
                    <div className="py-5 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#D4A72C]/30 bg-white/5">
                        <Package size={24} className="text-[#E8C866]" />
                      </div>

                      <p className="mt-4 text-sm leading-6 text-white/60">
                        Your combo box is empty.
                        <br />
                        Start adding your favourites.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {products
                        .filter(
                          (product) =>
                            (selectedProducts[product.id] || 0) > 0
                        )
                        .map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center justify-between gap-3"
                          >
                            <div>
                              <p className="text-sm font-medium text-[#FFF8E8]">
                                {product.name}
                              </p>

                              <p className="mt-1 text-xs text-white/50">
                                ₹{product.price} ×{" "}
                                {selectedProducts[product.id]}
                              </p>
                            </div>

                            <span className="text-sm font-bold text-[#E8C866]">
                              ₹
                              {product.price *
                                selectedProducts[product.id]}
                            </span>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Estimated Total
                    </p>

                    <p className="mt-2 font-heading text-4xl text-[#E8C866]">
                      ₹{totalPrice}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#D4A72C]/20 bg-white/5 px-3 py-2 text-right">
                    <p className="text-[9px] uppercase tracking-[0.12em] text-white/50">
                      Items
                    </p>

                    <p className="mt-1 text-sm font-bold text-[#FFF8E8]">
                      {totalItems}
                    </p>
                  </div>
                </div>

                {/* Button */}
                <button
                  type="button"
                  disabled={totalItems === 0}
                  className="mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#D4A72C] px-6 py-4 text-sm font-bold text-[#123B7A] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8C866] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
                >
                  <ShoppingBag size={18} />

                  Add Custom Box to Cart
                </button>

                <p className="mt-4 text-center text-[10px] leading-5 text-white/45">
                  Select your favourite products to create your personalised
                  Sai Durga combo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}