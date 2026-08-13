"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Heart,
  Menu,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "Combo Offers", href: "/combos" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/5 lg:hidden"
          >
            <Menu size={23} strokeWidth={1.8} />
          </button>

          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Sai Durga Swagruha Food Home"
          >
            <Image
              src="/logos/logo.png"
              alt="Sai Durga Swagruha Food"
              width={92}
              height={92}
              priority
              className="h-[68px] w-[68px] object-contain sm:h-[74px] sm:w-[74px] lg:h-[82px] lg:w-[82px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-2 text-[14px] font-medium text-foreground transition-colors duration-200 hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              aria-label="Search products"
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Wishlist"
              className="flex h-11 w-11 items-center justify-center rounded-full text-foreground transition-all duration-200 hover:bg-primary/5 hover:text-primary"
            >
              <Heart size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Shopping cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-all duration-200 hover:bg-primary-dark"
            >
              <ShoppingBag size={19} strokeWidth={1.8} />

              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-primary-dark">
                0
              </span>
            </button>
          </div>

          {/* Mobile Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-primary/5"
          >
            <ShoppingBag size={21} strokeWidth={1.8} />

            <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-primary-dark">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-[2px]"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="fixed left-0 top-0 z-[70] flex h-full w-[85%] max-w-[360px] flex-col bg-background shadow-xl"
            >
              {/* Drawer Header */}
              <div className="flex h-[76px] items-center justify-between border-b border-border px-5">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center"
                >
                  <Image
                    src="/logos/logo.png"
                    alt="Sai Durga Swagruha Food"
                    width={76}
                    height={76}
                    className="h-[62px] w-[62px] object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-primary/5"
                >
                  <X size={22} strokeWidth={1.8} />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-1 flex-col px-5 py-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: 0.25,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex min-h-[52px] items-center border-b border-border text-[15px] font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919398389387"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex min-h-[48px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                >
                  Order on WhatsApp
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}