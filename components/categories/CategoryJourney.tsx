"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";

const categories = [
  {
    id: "01",
    name: "Laddu & Sweets",
    description:
      "Traditional homemade laddus and delicious sweets made with authentic ingredients.",
    image: "/categories/laddu.png",
    accent: "bg-[#F7E8C8]",
  },
  {
    id: "02",
    name: "Millet Biscuits",
    description:
      "Wholesome and crunchy biscuits made with nutritious traditional millets.",
    image: "/categories/biscuits.png",
    accent: "bg-[#E8EBD8]",
  },
  {
    id: "03",
    name: "Traditional Sweets",
    description:
      "Authentic Indian sweets that bring the taste of tradition to every bite.",
    image: "/categories/laddu.png",
    accent: "bg-[#F5E2D5]",
  },
  {
    id: "04",
    name: "Mango Products",
    description:
      "Rich, delicious and naturally flavourful mango specialities.",
    image: "/categories/mango pulp.png",
    accent: "bg-[#F9E7B8]",
  },
  {
    id: "05",
    name: "Pickles",
    description:
      "Homemade pickles packed with bold spices and authentic flavours.",
    image: "/categories/pickles.png",
    accent: "bg-[#E7E2C8]",
  },
  {
    id: "06",
    name: "Breakfast Items",
    description:
      "Traditional homemade favourites to make every meal more special.",
    image: "/categories/spacial.png",
    accent: "bg-[#F3E2D5]",
  },
  {
    id: "07",
    name: "Papad",
    description:
      "Crispy, traditional and delicious homemade papads for every meal.",
    image: "/categories/papads.png",
    accent: "bg-[#E8EBD8]",
  },
  {
    id: "08",
    name: "Chikki",
    description:
      "Crunchy and delicious traditional chikkis made with wholesome ingredients.",
    image: "/categories/chikki.png",
    accent: "bg-[#F7E8C8]",
  },
  {
    id: "09",
    name: "Vadiyalu",
    description:
      "Traditional sun-dried homemade specialities prepared with care.",
    image: "/categories/spacial.png",
    accent: "bg-[#F5E2D5]",
  },
  {
    id: "10",
    name: "Snacks",
    description:
      "Crispy, spicy and delicious snacks perfect for every occasion.",
    image: "/categories/spacial.png",
    accent: "bg-[#F9E7B8]",
  },
  {
    id: "11",
    name: "Special Items",
    description:
      "Our carefully selected signature products and homemade favourites.",
    image: "/categories/spacial.png",
    accent: "bg-[#E7E2C8]",
  },
  {
    id: "12",
    name: "Natural Honey",
    description:
      "Pure, natural and delicious honey filled with nature's goodness.",
    image: "/categories/honey.png",
    accent: "bg-[#F7E8C8]",
  },
  {
    id: "13",
    name: "Spicy Specials",
    description:
      "Authentic homemade karam powders and flavour-packed specialities.",
    image: "/categories/powder.png",
    accent: "bg-[#F3E2D5]",
  },
];

export default function CategoryJourney() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-20 sm:py-24 lg:py-28">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-[#D4A72C]/10 lg:block" />

        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full border border-[#123B7A]/10" />

        <div className="absolute left-[12%] top-[10%] h-2 w-2 rounded-full bg-[#D4A72C]/40" />

        <div className="absolute right-[10%] top-[35%] h-2 w-2 rounded-full bg-[#D4A72C]/40" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A67819]">
              Something for Everyone
            </span>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          <h2 className="mt-5 font-heading text-4xl leading-tight text-[#123B7A] sm:text-5xl">
            A Journey Through Our
            <span className="block text-[#D4A72C]">
              Homemade Flavours
            </span>
          </h2>
        </motion.div>

        {/* Category Journey */}
        <div className="relative">
          {categories.map((category, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: 0.05,
                }}
                className="relative mb-10 last:mb-0 lg:mb-16"
              >
                {/* Desktop centre number */}
                <div className="absolute left-1/2 top-1/2 z-20 hidden h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#FFFDF7] bg-[#123B7A] font-heading text-xl text-[#E8C866] shadow-lg lg:flex">
                  {category.id}
                </div>

                {/* Connecting line */}
                {index !== categories.length - 1 && (
                  <div className="absolute left-1/2 top-[calc(50%+32px)] hidden h-[calc(100%+32px)] w-px -translate-x-1/2 border-l-2 border-dashed border-[#D4A72C]/30 lg:block" />
                )}

                <div
                  className={`flex ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <article className="group relative w-full overflow-hidden rounded-[30px] border border-[#D4A72C]/20 bg-white shadow-[0_15px_45px_rgba(18,59,122,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4A72C]/60 hover:shadow-[0_25px_60px_rgba(18,59,122,0.12)] lg:w-[calc(50%-55px)]">
                    <div
                      className={`grid items-center gap-5 p-4 sm:grid-cols-[0.95fr_1.05fr] sm:p-5 ${
                        !isLeft ? "sm:[direction:rtl]" : ""
                      }`}
                    >
                      {/* Image */}
                      <div
                        className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-[24px] ${category.accent}`}
                      >
                        <Image
                          src={category.image}
                          alt={category.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 550px"
                          className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent" />
                      </div>

                      {/* Content */}
                      <div
                        className={`relative p-2 sm:p-4 ${
                          !isLeft ? "sm:[direction:ltr]" : ""
                        }`}
                      >
                        {/* Mobile Number */}
                        <div className="mb-4 flex items-center gap-3 lg:hidden">
                          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#123B7A] font-heading text-sm text-[#E8C866]">
                            {category.id}
                          </span>

                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                            Category
                          </span>
                        </div>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67819]">
                          Explore
                        </p>

                        <h3 className="mt-2 font-heading text-2xl leading-tight text-[#123B7A] sm:text-3xl">
                          {category.name}
                        </h3>

                        <div className="mt-4 h-px w-12 bg-[#D4A72C] transition-all duration-300 group-hover:w-20" />

                        <p className="mt-4 text-sm leading-6 text-[#687386]">
                          {category.description}
                        </p>

                        <button
                          type="button"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#123B7A] transition-colors hover:text-[#A67819]"
                        >
                          Explore Category

                          <ArrowRight
                            size={16}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-20 max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-[#D4A72C]/50" />

            <Heart
              size={18}
              className="fill-[#D4A72C] text-[#D4A72C]"
            />

            <span className="h-px w-16 bg-[#D4A72C]/50" />
          </div>

          <h3 className="mt-6 font-heading text-3xl text-[#123B7A] sm:text-4xl">
            Made with Love.
            <span className="block text-[#D4A72C]">
              Packed with Care.
            </span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#687386]">
            Every product carries the warmth of our kitchen and the authentic
            taste of homemade food.
          </p>
        </motion.div>
      </div>
    </section>
  );
}