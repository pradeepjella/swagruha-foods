"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";

import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const router = useRouter();

  const {
    cart,
    cartProducts,
    increaseProduct,
    decreaseProduct,
    removeProduct,
    totalItems,
    totalAmount,
  } = useCart();

  const cartEntries = Object.entries(cart);

  const freeDeliveryTarget = 500;

  const deliveryCharge =
    totalAmount >= freeDeliveryTarget ? 0 : 50;

  const grandTotal = totalAmount + deliveryCharge;

  const progress = Math.min(
    (totalAmount / freeDeliveryTarget) * 100,
    100
  );

  return (
    <main className="min-h-screen bg-[#FFFDF7] pb-20">
      {/* ================= HEADER ================= */}

      <section className="border-b border-[#D4A72C]/15 bg-white">
        <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#123B7A] transition hover:text-[#A67819]"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A67819]">
                Sai Durga Swagruha Food
              </p>

              <h1 className="mt-2 font-heading text-4xl text-[#123B7A] sm:text-5xl">
                Your Food Basket
              </h1>

              <p className="mt-2 text-sm text-[#687386]">
                {totalItems === 0
                  ? "Your basket is waiting for something delicious."
                  : `${totalItems} ${
                      totalItems === 1 ? "item" : "items"
                    } selected with love.`}
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF8E8] text-[#123B7A]">
              <ShoppingBag size={25} />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1500px] px-5 py-8 sm:px-8 lg:px-12 xl:px-20">
        {cartEntries.length > 0 ? (
          <>
            {/* ================= FREE DELIVERY ================= */}

            <section className="mb-8 rounded-[24px] border border-[#D4A72C]/20 bg-white p-5 shadow-[0_10px_30px_rgba(18,59,122,0.05)] sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF8E8] text-[#A67819]">
                  <Truck size={22} />
                </div>

                <div className="w-full">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-semibold text-[#123B7A]">
                      {totalAmount >= freeDeliveryTarget
                        ? "You unlocked FREE delivery! 🎉"
                        : `Add ₹${(
                            freeDeliveryTarget - totalAmount
                          ).toLocaleString(
                            "en-IN"
                          )} more for FREE delivery`}
                    </p>

                    <span className="text-xs font-semibold text-[#A67819]">
                      ₹{totalAmount.toLocaleString("en-IN")} / ₹
                      {freeDeliveryTarget.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-[#F3EFE5]">
                    <div
                      className="h-full rounded-full bg-[#D4A72C] transition-all duration-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ================= CART CONTENT ================= */}

            <div className="grid gap-8 xl:grid-cols-[1fr_420px]">
              {/* ================= CART ITEMS ================= */}

              <section>
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="font-heading text-2xl text-[#123B7A]">
                    Your Items
                  </h2>

                  <span className="rounded-full bg-[#123B7A]/8 px-3 py-1 text-xs font-semibold text-[#123B7A]">
                    {totalItems} Items
                  </span>
                </div>

                <div className="space-y-4">
                  {cartEntries.map(([productId, quantity]) => {
                    const product =
                      cartProducts[Number(productId)];

                    if (!product) return null;

                    const itemTotal =
                      product.price * quantity;

                    return (
                      <article
                        key={productId}
                        className="group rounded-[24px] border border-[#D4A72C]/15 bg-white p-4 transition hover:shadow-[0_12px_35px_rgba(18,59,122,0.07)] sm:p-5"
                      >
                        <div className="flex gap-4 sm:gap-6">
                          <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[20px] bg-[#FFF8E8] sm:h-32 sm:w-32">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>

                          <div className="flex min-w-0 flex-1 flex-col justify-between">
                            <div className="flex justify-between gap-4">
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A67819]">
                                  {product.category}
                                </p>

                                <h3 className="mt-1 font-heading text-xl text-[#123B7A] sm:text-2xl">
                                  {product.name}
                                </h3>

                                <p className="mt-1 text-sm text-[#687386]">
                                  {product.weight}
                                </p>
                              </div>

                              <button
                                type="button"
                                onClick={() =>
                                  removeProduct(
                                    Number(productId)
                                  )
                                }
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[#9AA3B1] transition hover:bg-red-50 hover:text-red-500"
                                aria-label={`Remove ${product.name}`}
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>

                            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
                              <div className="flex items-center rounded-xl border border-[#D4A72C]/20 bg-[#FFFDF7] p-1">
                                <button
                                  type="button"
                                  onClick={() =>
                                    decreaseProduct(product)
                                  }
                                  className="flex h-9 w-9 items-center justify-center rounded-lg text-[#123B7A] transition hover:bg-[#FFF1CC]"
                                >
                                  <Minus size={16} />
                                </button>

                                <span className="flex h-9 min-w-10 items-center justify-center text-sm font-bold text-[#123B7A]">
                                  {quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    increaseProduct(product)
                                  }
                                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#123B7A] text-white transition hover:bg-[#0D2E61]"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>

                              <div className="text-right">
                                <p className="text-xs text-[#687386]">
                                  ₹
                                  {product.price.toLocaleString(
                                    "en-IN"
                                  )}{" "}
                                  each
                                </p>

                                <p className="mt-1 font-heading text-2xl text-[#123B7A]">
                                  ₹
                                  {itemTotal.toLocaleString(
                                    "en-IN"
                                  )}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              {/* ================= ORDER SUMMARY ================= */}

              <aside className="h-fit rounded-[28px] border border-[#D4A72C]/20 bg-white p-6 shadow-[0_15px_40px_rgba(18,59,122,0.07)] xl:sticky xl:top-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A67819]">
                  Order Details
                </p>

                <h2 className="mt-2 font-heading text-3xl text-[#123B7A]">
                  Order Summary
                </h2>

                <div className="mt-7 space-y-4 border-b border-[#D4A72C]/15 pb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#687386]">
                      Subtotal
                    </span>

                    <span className="font-semibold text-[#123B7A]">
                      ₹
                      {totalAmount.toLocaleString(
                        "en-IN"
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#687386]">
                      Delivery
                    </span>

                    <span className="font-semibold text-[#123B7A]">
                      {deliveryCharge === 0
                        ? "FREE"
                        : `₹${deliveryCharge}`}
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#A67819]">
                      Total Amount
                    </p>

                    <p className="mt-1 font-heading text-4xl text-[#123B7A]">
                      ₹
                      {grandTotal.toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </div>
                </div>

                {/* ================= PROCEED TO CHECKOUT ================= */}

                <button
                  type="button"
                  onClick={() => router.push("/checkout")}
                  className="group mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#123B7A] px-6 py-4 font-semibold text-white transition hover:bg-[#0D2E61]"
                >
                  Proceed to Checkout

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <Link
                  href="/products"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#D4A72C]/20 px-6 py-3 text-sm font-semibold text-[#123B7A] transition hover:bg-[#FFF8E8]"
                >
                  <ArrowLeft size={16} />
                  Continue Shopping
                </Link>

                <p className="mt-5 text-center text-xs leading-5 text-[#8A93A3]">
                  Freshly prepared with care and delivered with love.
                </p>
              </aside>
            </div>
          </>
        ) : (
          <section className="mx-auto flex max-w-xl flex-col items-center rounded-[32px] border border-dashed border-[#D4A72C]/30 bg-white px-6 py-20 text-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF8E8] text-[#A67819]">
              <ShoppingBag size={42} />
            </div>

            <h2 className="mt-7 font-heading text-3xl text-[#123B7A]">
              Your basket is empty
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[#687386]">
              Discover our homemade sweets, snacks and traditional
              favourites prepared with love.
            </p>

            <Link
              href="/products"
              className="mt-7 inline-flex items-center gap-3 rounded-2xl bg-[#123B7A] px-7 py-4 text-sm font-semibold text-white transition hover:bg-[#0D2E61]"
            >
              Explore Products
              <ArrowRight size={17} />
            </Link>
          </section>
        )}
      </div>
    </main>
  );
}