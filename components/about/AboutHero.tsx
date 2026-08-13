"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Heart,
  Wheat,
  Package,
  Home,
  MapPin,
  ArrowRight,
  Sparkles,
  CookingPot,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Traditional Recipes",
    description: "Recipes inspired by the authentic flavors we grew up with.",
    icon: Wheat,
  },
  {
    title: "Made with Care",
    description: "Every product is prepared with attention, quality and love.",
    icon: Heart,
  },
  {
    title: "Delivered with Happiness",
    description: "From our kitchen, carefully packed and sent to your home.",
    icon: Package,
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#FDF9F1] py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C99A45]/5 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-[#B57A22]/5 blur-3xl" />

        <div className="absolute left-0 top-[70%] h-72 w-72 rounded-full border border-[#C99A45]/10" />
        <div className="absolute right-[-100px] top-32 h-72 w-72 rounded-full border border-[#C99A45]/10" />
      </div>

      <div className="relative mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-12">
        {/* ================= HERO ================= */}

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="mb-7">
              <p className="font-serif text-2xl italic text-[#A87424]">
                About us
              </p>

              <div className="mt-2 flex items-center gap-2">
                <div className="h-px w-16 bg-[#C99A45]" />
                <Sparkles size={14} className="text-[#C99A45]" />
                <div className="h-px w-8 bg-[#C99A45]/50" />
              </div>
            </div>

            <h2 className="font-serif text-[42px] leading-[1.18] text-[#3F3028] sm:text-[54px] lg:text-[64px]">
              Not a factory.
              <br />
              Not just a business.
              <br />
              A taste of{" "}
              <span className="italic text-[#B17B29]">home.</span>{" "}
              <Heart
                className="inline-block stroke-[#B17B29]"
                size={36}
                strokeWidth={1.5}
              />
            </h2>

            <p className="mt-8 max-w-md text-[16px] leading-8 text-[#625850] sm:text-[17px]">
              Sai Durga Swagruha Food began in a small home kitchen with a big
              heart and a simple belief — good food brings people and hearts
              together.
            </p>

            <div className="mt-8 flex items-center gap-2">
              <div className="h-px w-16 bg-[#C99A45]" />
              <Sparkles size={15} className="text-[#C99A45]" />
              <div className="h-px w-8 bg-[#C99A45]/50" />
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[1.2/0.85] overflow-hidden">
              <Image
                src="/about/about-laddu.png"
                alt="Sai Durga traditional homemade laddu"
                fill
                priority
                className="object-cover"
              />

              {/* Brush edge feeling */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FDF9F1] via-transparent to-transparent opacity-80" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FDF9F1]/30 via-transparent to-transparent" />
            </div>

            {/* Decorative nuts */}
            <div className="absolute -bottom-3 right-5 h-10 w-10 rounded-full bg-[#B97725]/10 blur-xl" />
          </motion.div>
        </div>

        {/* ================= FEATURE CARDS ================= */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-[32px] border border-[#C99A45]/30 bg-white/30 px-8 py-10 text-center shadow-[0_15px_50px_rgba(120,80,30,0.05)] transition-all"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#C99A45]/30 bg-[#FDF8EE] shadow-inner">
                  <Icon
                    size={40}
                    strokeWidth={1.4}
                    className="text-[#8E5B1D]"
                  />
                </div>

                <h3 className="mt-8 font-serif text-[27px] text-[#45352C]">
                  {feature.title}
                </h3>

                <div className="mx-auto mt-4 h-px w-10 bg-[#C99A45]" />

                <p className="mx-auto mt-5 max-w-[250px] text-[15px] leading-7 text-[#6C625A]">
                  {feature.description}
                </p>

                {index === 1 && (
                  <Heart
                    className="mx-auto mt-5 text-[#B67B3C]"
                    size={23}
                    strokeWidth={1.3}
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* ================= JOURNEY ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-[#A87424]">
            A SMALL BEGINNING. A GROWING FAMILY.
          </p>

          <div className="mx-auto mt-10 flex max-w-4xl flex-col items-center justify-between gap-8 md:flex-row">
            <JourneyItem
              icon={Home}
              title="OUR HOME"
            />

            <div className="hidden flex-1 border-t-2 border-dotted border-[#C99A45]/70 md:block" />

            <JourneyItem
              icon={Package}
              title="CAREFULLY PACKED"
            />

            <div className="hidden flex-1 border-t-2 border-dotted border-[#C99A45]/70 md:block" />

            <JourneyItem
              icon={Heart}
              title="YOUR HOME"
            />
          </div>
        </motion.div>

        {/* ================= DELIVERY STATES ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#C99A45]/50" />

            <p className="font-serif text-lg italic text-[#75675D]">
              Now delivering across
            </p>

            <div className="h-px w-20 bg-[#C99A45]/50" />
          </div>

          <h3 className="mt-3 font-serif text-[32px] font-medium tracking-[0.08em] text-[#3E3028] sm:text-[42px]">
            TELANGANA & ANDHRA PRADESH
            <br />
            <span className="text-[#A87424]">
              FOR BULK ORDERS
            </span>
          </h3>

          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <StateCard name="TELANGANA" />
            <StateCard name="ANDHRA PRADESH" />
          </div>
        </motion.div>

        {/* ================= WE PACK MEMORIES ================= */}

        <div className="mt-28 border-t border-[#C99A45]/20 pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="font-serif text-[32px] leading-tight text-[#46352C]">
                We don’t just
                <br />
                pack food.
              </p>

              <h3 className="mt-2 font-serif text-[56px] leading-[0.95] text-[#A87424] sm:text-[76px]">
                We pack
                <br />
                memories.
                <Heart
                  className="ml-2 inline-block"
                  size={38}
                  strokeWidth={1.2}
                />
              </h3>
            </motion.div>

            {/* Points + products */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div className="space-y-7">
                <MemoryItem
                  icon={Sparkles}
                  text="The taste of festivals."
                />

                <MemoryItem
                  icon={CookingPot}
                  text="The recipes of our mothers."
                />

                <MemoryItem
                  icon={Users}
                  text="The happiness of sharing food with family."
                />
              </div>

              <div className="relative min-h-[300px]">
                <Image
                  src="/about/products.png"
                  alt="Sai Durga Swagruha Food products"
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 flex justify-center"
          >
            <button className="group flex items-center gap-6 rounded-full bg-[#4A2A12] px-9 py-5 text-sm font-semibold tracking-[0.16em] text-[#F7E7C6] shadow-[0_15px_30px_rgba(74,42,18,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#653A19]">
              EXPLORE OUR PRODUCTS

              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function JourneyItem({
  icon: Icon,
  title,
}: {
  icon: React.ElementType;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#C99A45]/40 bg-[#FDF9F1] shadow-[0_10px_30px_rgba(120,80,30,0.06)]">
        <Icon
          size={43}
          strokeWidth={1.3}
          className="text-[#81511C]"
        />
      </div>

      <p className="mt-4 text-sm font-semibold tracking-[0.15em] text-[#4D4038]">
        {title}
      </p>
    </div>
  );
}

function StateCard({ name }: { name: string }) {
  return (
    <div className="flex h-[82px] items-center gap-4 rounded-full border border-[#C99A45]/35 bg-white/40 px-8 shadow-sm">
      <MapPin
        size={27}
        strokeWidth={1.5}
        className="text-[#B37A2D]"
      />

      <span className="text-sm font-semibold tracking-[0.14em] text-[#4A3A31] sm:text-base">
        {name}
      </span>
    </div>
  );
}

function MemoryItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C99A45]/30">
        <Icon
          size={23}
          strokeWidth={1.4}
          className="text-[#A87424]"
        />
      </div>

      <p className="text-[16px] leading-7 text-[#5E534C]">
        {text}
      </p>
    </div>
  );
}