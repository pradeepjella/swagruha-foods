"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Gift,
  Heart,
  Leaf,
  PackageCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "100% Homemade",
    description:
      "Prepared with traditional recipes and the warmth of homemade food.",
  },
  {
    icon: Leaf,
    title: "Premium Ingredients",
    description:
      "Quality ingredients carefully selected for authentic taste and goodness.",
  },
  {
    icon: Gift,
    title: "Perfect for Gifting",
    description:
      "Beautifully curated combinations for family, friends and celebrations.",
  },
  {
    icon: PackageCheck,
    title: "Packed with Care",
    description:
      "Every combo is carefully packed to deliver freshness and happiness.",
  },
];

export default function ComboBenefits() {
  return (
    <section className="relative overflow-hidden bg-[#FFFDF7] py-20 sm:py-24 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[480px] w-[480px] rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full border border-[#123B7A]/10" />

        <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-[#D4A72C]/50" />

        <div className="absolute right-[10%] top-[30%] h-2 w-2 rounded-full bg-[#D4A72C]/40" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* =========================
            HEADING
        ========================= */}

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
              The Sai Durga Promise
            </span>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-[#123B7A] sm:text-5xl lg:text-6xl">
            Why Choose Our
            <span className="block text-[#D4A72C]">
              Special Combos?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687386] sm:text-base">
            Every combo is thoughtfully curated to bring together authentic
            homemade flavours, premium quality and more happiness in every box.
          </p>
        </motion.div>

        {/* =========================
            BENEFITS GRID
        ========================= */}

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[26px] border border-[#D4A72C]/20 bg-white p-6 text-center shadow-[0_12px_35px_rgba(18,59,122,0.06)] transition-all duration-300 hover:border-[#D4A72C]/60 hover:shadow-[0_20px_45px_rgba(18,59,122,0.12)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4A72C]/30 bg-[#FFF8E8] text-[#123B7A] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={27} strokeWidth={1.6} />
                </div>

                <h3 className="mt-6 font-heading text-xl text-[#123B7A]">
                  {benefit.title}
                </h3>

                <div className="mx-auto mt-3 h-px w-10 bg-[#D4A72C] transition-all duration-300 group-hover:w-16" />

                <p className="mt-4 text-sm leading-6 text-[#687386]">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* =========================
            BULK ORDER SECTION
        ========================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mt-20 overflow-hidden rounded-[32px] bg-[#123B7A] px-6 py-12 shadow-[0_25px_70px_rgba(18,59,122,0.2)] sm:px-10 lg:px-16 lg:py-16"
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#D4A72C]/15" />

            <div className="absolute -bottom-32 -right-20 h-[420px] w-[420px] rounded-full border border-[#D4A72C]/10" />

            <div className="absolute left-[45%] top-10 h-2 w-2 rounded-full bg-[#D4A72C]/60" />

            <div className="absolute right-[20%] bottom-14 h-1.5 w-1.5 rounded-full bg-[#E8C866]/50" />
          </div>

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D4A72C]/30 bg-white/5 text-[#E8C866]">
                  <ShoppingBag size={20} />
                </div>

                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#E8C866]">
                  Bulk Orders Available
                </span>
              </div>

              <h2 className="mt-6 font-heading text-4xl leading-tight text-[#FFF8E8] sm:text-5xl">
                Planning Something
                <span className="block text-[#D4A72C]">
                  Special?
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                Make your celebrations, corporate gifting, festivals and family
                occasions even more special with our carefully curated homemade
                food combos.
              </p>

              <a
                href="/contact"
                className="group mt-8 inline-flex min-h-[54px] items-center gap-3 rounded-full bg-[#D4A72C] px-8 text-sm font-bold text-[#123B7A] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8C866]"
              >
                Enquire for Bulk Orders

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* Right delivery card */}
            <div className="relative">
              <div className="rounded-[28px] border border-[#D4A72C]/25 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A72C] text-[#123B7A]">
                  <Truck size={25} strokeWidth={1.8} />
                </div>

                <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8C866]">
                  Special Delivery Note
                </p>

                <h3 className="mt-3 font-heading text-2xl text-[#FFF8E8]">
                  Bulk Order Delivery
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  We currently deliver bulk and special orders across:
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#D4A72C]/30 bg-[#D4A72C]/10 px-4 py-2 text-sm font-semibold text-[#E8C866]">
                    Telangana
                  </span>

                  <span className="rounded-full border border-[#D4A72C]/30 bg-[#D4A72C]/10 px-4 py-2 text-sm font-semibold text-[#E8C866]">
                    Andhra Pradesh
                  </span>
                </div>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="text-xs leading-6 text-white/45">
                    Contact us for bulk order availability, custom combinations
                    and delivery details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}