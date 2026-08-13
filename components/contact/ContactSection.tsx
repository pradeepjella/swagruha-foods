"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Send,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";

const enquiryOptions = [
  {
    icon: ShoppingBag,
    title: "Order & Products",
    description: "Questions about our homemade products and orders.",
  },
  {
    icon: Package,
    title: "Bulk Orders",
    description: "For events, festivals and special requirements.",
  },
  {
    icon: MessageCircle,
    title: "General Enquiry",
    description: "Have something else in mind? Let's talk.",
  },
];

export default function ContactSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FDF9F1] py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-[#C99A45]/10" />
        <div className="absolute -right-32 top-[30%] h-96 w-96 rounded-full border border-[#C99A45]/10" />

        <div className="absolute left-[8%] top-[12%] text-[#C99A45]/20">
          ✦
        </div>

        <div className="absolute right-[12%] top-[18%] text-3xl text-[#C99A45]/20">
          ✦
        </div>

        <div className="absolute bottom-[15%] left-[10%] text-2xl text-[#C99A45]/20">
          ✦
        </div>

        <div className="absolute bottom-[8%] right-[8%] text-[#C99A45]/20">
          ✦
        </div>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ================= HERO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#C99A45]" />
            <Sparkles size={15} className="text-[#C99A45]" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A87424]">
              Contact Us
            </span>
            <Sparkles size={15} className="text-[#C99A45]" />
            <span className="h-px w-10 bg-[#C99A45]" />
          </div>

          <h1 className="mt-7 font-heading text-5xl leading-[1.05] text-[#46352C] sm:text-6xl lg:text-7xl">
            Let&apos;s Create Something
            <span className="block italic text-[#B17B29]">
              Delicious Together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-[#6C625A] sm:text-base">
            Have a question, want to place an order, or planning something
            special? We would love to hear from you.
          </p>
        </motion.div>

        {/* ================= ENQUIRY OPTIONS ================= */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3">
          {enquiryOptions.map((option, index) => {
            const Icon = option.icon;

            return (
              <motion.button
                key={option.title}
                type="button"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-[28px] border border-[#C99A45]/25 bg-white/60 p-7 text-center shadow-[0_10px_35px_rgba(100,70,30,0.05)] transition-all hover:border-[#C99A45]/60 hover:shadow-[0_18px_45px_rgba(100,70,30,0.10)]"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#C99A45]/30 bg-[#FDF5E7]">
                  <Icon
                    size={27}
                    strokeWidth={1.5}
                    className="text-[#9B681F]"
                  />
                </div>

                <h2 className="mt-5 font-heading text-xl text-[#46352C]">
                  {option.title}
                </h2>

                <div className="mx-auto mt-3 h-px w-8 bg-[#C99A45] transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 text-sm leading-6 text-[#766B63]">
                  {option.description}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* ================= CONTACT FORM ================= */}
        <div className="mx-auto mt-20 grid max-w-6xl overflow-hidden rounded-[36px] border border-[#C99A45]/25 bg-white/50 shadow-[0_20px_60px_rgba(95,65,25,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-[#4A2A12] px-8 py-12 text-[#FDF5E7] sm:px-12"
          >
            <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#D9B35B]/20" />
            <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full border border-[#D9B35B]/15" />

            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E2C276]">
                We&apos;re here to help
              </p>

              <h2 className="mt-5 font-heading text-4xl leading-tight sm:text-5xl">
                From our kitchen
                <br />
                to your home.
                <span className="block italic text-[#E2C276]">
                  Let&apos;s connect.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[#F3E6CE]/75 sm:text-base">
                Whether you want to know more about our products, place a bulk
                order or share a special requirement, our team is happy to help.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2C276]/30">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#E2C276]/70">
                      Call Us
                    </p>
                    <p className="mt-1 text-base font-medium">
                      +91 9398389387
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2C276]/30">
                    <MessageCircle size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#E2C276]/70">
                      WhatsApp Us
                    </p>
                    <p className="mt-1 text-base font-medium">
                      Quick response for orders
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#E2C276]/30">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#E2C276]/70">
                      Bulk Orders
                    </p>
                    <p className="mt-1 text-base font-medium">
                      Telangana & Andhra Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFDF8] p-8 sm:p-12"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#A87424]">
              Send us a message
            </p>

            <h2 className="mt-3 font-heading text-3xl text-[#46352C] sm:text-4xl">
              How can we help you?
            </h2>

            <form className="mt-9 space-y-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#594B42]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="h-13 w-full rounded-xl border border-[#D8CDBB] bg-[#FFFCF6] px-5 text-sm text-[#46352C] outline-none transition focus:border-[#B17B29] focus:ring-2 focus:ring-[#C99A45]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#594B42]">
                  Phone Number or Email
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone or email"
                  className="h-13 w-full rounded-xl border border-[#D8CDBB] bg-[#FFFCF6] px-5 text-sm text-[#46352C] outline-none transition focus:border-[#B17B29] focus:ring-2 focus:ring-[#C99A45]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#594B42]">
                  What is this about?
                </label>

                <div className="relative">
                  <select className="h-13 w-full appearance-none rounded-xl border border-[#D8CDBB] bg-[#FFFCF6] px-5 text-sm text-[#46352C] outline-none transition focus:border-[#B17B29] focus:ring-2 focus:ring-[#C99A45]/10">
                    <option>Select an option</option>
                    <option>Order & Products</option>
                    <option>Bulk / Wholesale Order</option>
                    <option>Special Requirement</option>
                    <option>General Enquiry</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[#9B8878]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#594B42]">
                  Your Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-[#D8CDBB] bg-[#FFFCF6] px-5 py-4 text-sm text-[#46352C] outline-none transition focus:border-[#B17B29] focus:ring-2 focus:ring-[#C99A45]/10"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#4A2A12] px-6 py-4 text-sm font-semibold tracking-[0.08em] text-[#FDF5E7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#653A19] hover:shadow-lg"
              >
                SEND MESSAGE

                <Send
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* ================= QUICK CONTACT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A87424]">
            Quick Contact
          </p>

          <h2 className="mt-3 font-heading text-4xl text-[#46352C] sm:text-5xl">
            Prefer to talk directly?
          </h2>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-3">
            <QuickCard
              icon={Phone}
              title="Call Us"
              text="+91 9398389387"
            />

            <QuickCard
              icon={MessageCircle}
              title="WhatsApp Us"
              text="Quick & easy ordering"
            />

            <QuickCard
              icon={Mail}
              title="Email Us"
              text="For special requirements"
            />
          </div>
        </motion.div>

        {/* ================= BULK ORDER CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 overflow-hidden rounded-[36px] border border-[#C99A45]/30 bg-[#F4E6CD] px-8 py-14 text-center sm:px-14"
        >
          <div className="pointer-events-none absolute -left-16 top-0 h-48 w-48 rounded-full border border-[#C99A45]/20" />
          <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full border border-[#C99A45]/20" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A87424]">
              Special & Bulk Orders
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-heading text-4xl leading-tight text-[#46352C] sm:text-5xl">
              Planning Something
              <span className="block italic text-[#B17B29]">
                Special?
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6C625A] sm:text-base">
              Festivals, family functions, corporate gifting or special
              celebrations — let us help make your occasion more delicious.
            </p>

            <p className="mt-5 text-sm font-semibold tracking-[0.08em] text-[#8D5C20]">
              TELANGANA & ANDHRA PRADESH • BULK ORDERS AVAILABLE
            </p>

            <a
              href="https://wa.me/919398389387"
              className="group mx-auto mt-9 inline-flex items-center gap-3 rounded-full bg-[#4A2A12] px-8 py-4 text-sm font-semibold text-[#FDF5E7] shadow-[0_12px_30px_rgba(74,42,18,0.18)] transition-all hover:-translate-y-1 hover:bg-[#653A19]"
            >
              CONTACT US FOR BULK ORDERS

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function QuickCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#C99A45]/25 bg-white/50 p-7">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#C99A45]/30 bg-[#FDF5E7]">
        <Icon
          size={23}
          strokeWidth={1.5}
          className="text-[#9B681F]"
        />
      </div>

      <h3 className="mt-5 font-heading text-xl text-[#46352C]">
        {title}
      </h3>

      <p className="mt-2 text-sm text-[#766B63]">
        {text}
      </p>
    </div>
  );
}