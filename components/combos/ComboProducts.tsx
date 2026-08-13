"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, ShoppingBag, Sparkles } from "lucide-react";

const combos = [
  
  {
    id: 2,
    name: "Sweet & Healthy Combo",
    subtitle: "Taste meets goodness",
    image: "/combos/sweet-healthy.png",
    items: [
      "Sesame Laddu",
      "Flax Seed Laddu",
      "Dry Fruit Laddu",
      "Natural Honey",
    ],
    originalPrice: 750,
    price: 599,
    badge: "Popular",
  },
  {
    id: 3,
    name: "Traditional Taste Combo",
    subtitle: "Authentic homemade flavours",
    image: "/combos/traditional-taste.png",
    items: [
      "Masala Gavvalu",
      "Putharekulu",
      "Homemade Pickle",
      "Special Spice Powder",
    ],
    originalPrice: 850,
    price: 699,
    badge: "Special",
  },
];

export default function ComboProducts() {
  return (
    <section
      id="special-combos"
      className="relative overflow-hidden bg-[#FFF8E8] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full border border-[#123B7A]/10" />

        <div className="absolute left-[8%] top-[25%] h-2 w-2 rounded-full bg-[#D4A72C]/50" />

        <div className="absolute right-[12%] top-[15%] h-1.5 w-1.5 rounded-full bg-[#D4A72C]/60" />
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
              Handpicked For You
            </span>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-[#123B7A] sm:text-5xl lg:text-6xl">
            Our Special
            <span className="ml-3 text-[#D4A72C]">
              Combos
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687386] sm:text-base">
            Carefully selected combinations of our homemade favourites,
            created to bring more taste, happiness and value to every box.
          </p>
        </motion.div>

        {/* Combo Cards */}
        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {combos.map((combo, index) => (
            <ComboCard
              key={combo.id}
              combo={combo}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComboCard({
  combo,
  index,
}: {
  combo: (typeof combos)[number];
  index: number;
}) {
  const savings = combo.originalPrice - combo.price;

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[30px] border border-[#D4A72C]/25 bg-white shadow-[0_15px_45px_rgba(18,59,122,0.08)] transition-all duration-300 hover:border-[#D4A72C]/60 hover:shadow-[0_25px_60px_rgba(18,59,122,0.14)]"
    >
      {/* Badge */}
      <div className="absolute right-5 top-5 z-20 rounded-full bg-[#123B7A] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#E8C866] shadow-lg">
        {combo.badge}
      </div>

      {/* Product Image */}
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#FFF8E8]">
        <div className="absolute inset-5 rounded-full border border-[#D4A72C]/15" />

        <Image
          src={combo.image}
          alt={combo.name}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="relative z-10 object-contain p-7 transition-transform duration-500 group-hover:scale-110"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FFF8E8] to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A67819]">
          {combo.subtitle}
        </p>

        <h3 className="mt-2 font-heading text-2xl text-[#123B7A] sm:text-[28px]">
          {combo.name}
        </h3>

        {/* Included Items */}
        <div className="mt-6 border-y border-[#E8E1D0] py-5">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#687386]">
            What&apos;s Inside
          </p>

          <div className="space-y-3">
            {combo.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-[#4B5563]"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D4A72C]/10 text-[#A67819]">
                  <Check size={13} strokeWidth={2.5} />
                </div>

                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mt-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] font-medium text-[#8A93A3]">
              Combo Price
            </p>

            <div className="mt-1 flex items-center gap-3">
              <span className="font-heading text-3xl font-semibold text-[#123B7A]">
                ₹{combo.price}
              </span>

              <span className="text-sm text-[#9CA3AF] line-through">
                ₹{combo.originalPrice}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-[#D4A72C]/25 bg-[#FFF8E8] px-3 py-2 text-right">
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#A67819]">
              You Save
            </p>

            <p className="mt-1 text-sm font-bold text-[#123B7A]">
              ₹{savings}
            </p>
          </div>
        </div>

        {/* Add To Cart */}
        <button
          type="button"
          className="group/button mt-7 flex w-full items-center justify-center gap-3 rounded-full bg-[#123B7A] px-6 py-4 text-sm font-semibold text-white shadow-[0_10px_25px_rgba(18,59,122,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0A2854] hover:shadow-lg"
        >
          <ShoppingBag size={18} />

          Add Combo to Cart

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover/button:translate-x-1"
          />
        </button>
      </div>
    </motion.article>
  );
}