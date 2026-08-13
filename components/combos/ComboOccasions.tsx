"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Gift, Heart, PartyPopper, Sparkles } from "lucide-react";

const occasions = [
  {
    title: "Festival Combos",
    subtitle: "Celebrate with tradition",
    description:
      "Handpicked homemade favourites for festivals and joyful celebrations.",
    image: "/combos/1.png",
    icon: PartyPopper,
    featured: true,
  },
  {
    title: "Healthy Starter",
    subtitle: "Share something special",
    description:
      "Thoughtful boxes filled with authentic flavours, perfect for gifting.",
    image: "/combos/3.png",
    icon: Gift,
    featured: false,
  },
  {
    title: "Family Combos",
    subtitle: "More to share",
    description:
      "A delicious collection of favourites made for the whole family.",
    image: "/combos/2.png",
    icon: Heart,
    featured: false,
  },
  {
    title: "Millet Power",
    subtitle: "Our signature picks",
    description:
      "A unique combination of Sai Durga special homemade products.",
    image: "/combos/4.png",
    icon: Sparkles,
    featured: false,
  },
];

export default function ComboOccasions() {
  return (
    <section
      id="combos"
      className="relative overflow-hidden bg-[#FFFDF7] py-20 sm:py-24 lg:py-28"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full border border-[#D4A72C]/10" />

        <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full border border-[#123B7A]/10" />

        <div className="absolute left-[10%] top-[18%] h-2 w-2 rounded-full bg-[#D4A72C]/50" />

        <div className="absolute right-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#D4A72C]/60" />

        <div className="absolute bottom-[15%] left-[25%] h-2 w-2 rounded-full bg-[#123B7A]/20" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12 xl:px-20">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4A72C]" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#A67819]">
              Find Your Perfect Box
            </span>

            <span className="h-px w-10 bg-[#D4A72C]" />
          </div>

          <h2 className="mt-6 font-heading text-4xl leading-tight text-[#123B7A] sm:text-5xl lg:text-6xl">
            Combos for Every
            <span className="block text-[#D4A72C]">
              Special Occasion.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#687386] sm:text-base">
            Whether you&apos;re celebrating, gifting, sharing with family or
            simply treating yourself, we have a delicious combination waiting
            for you.
          </p>
        </motion.div>

        {/* ================= OCCASION CARDS ================= */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {occasions.map((occasion, index) => (
            <OccasionCard
              key={occasion.title}
              occasion={occasion}
              index={index}
            />
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#special-combos"
            className="group inline-flex items-center gap-3 rounded-full border border-[#D4A72C] bg-[#123B7A] px-8 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(18,59,122,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0A2854] hover:shadow-lg"
          >
            Explore All Combos

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function OccasionCard({
  occasion,
  index,
}: {
  occasion: (typeof occasions)[number];
  index: number;
}) {
  const Icon = occasion.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-[28px] border border-[#D4A72C]/20 bg-white shadow-[0_12px_35px_rgba(18,59,122,0.06)] transition-all duration-300 hover:border-[#D4A72C]/60 hover:shadow-[0_22px_50px_rgba(18,59,122,0.12)]"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#FFF8E8]">
        <Image
          src={occasion.image}
          alt={occasion.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-5 transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#123B7A]/10 via-transparent to-transparent" />

        {/* Icon */}
        <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4A72C]/30 bg-white/90 text-[#123B7A] shadow-sm backdrop-blur">
          <Icon size={19} strokeWidth={1.7} />
        </div>

        {/* Featured badge */}
        {occasion.featured && (
          <div className="absolute right-4 top-4 rounded-full bg-[#D4A72C] px-3 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#123B7A]">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A67819]">
          {occasion.subtitle}
        </p>

        <h3 className="mt-2 font-heading text-2xl text-[#123B7A]">
          {occasion.title}
        </h3>

        <div className="mt-4 h-px w-10 bg-[#D4A72C] transition-all duration-300 group-hover:w-16" />

        <p className="mt-4 text-sm leading-6 text-[#687386]">
          {occasion.description}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#123B7A] transition-colors hover:text-[#A67819]"
        >
          View Combos

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.article>
  );
}