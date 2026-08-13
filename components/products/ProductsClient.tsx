"use client";

import { useMemo, useState } from "react";

import { useCart } from "@/context/CartContext";

import ProductsHero from "./ProductsHero";
import ProductCategoryTabs from "./ProductCategoryTabs";
import ProductsSummary from "./ProductsSummary";
import ProductGrid from "./ProductGrid";
import type { Product } from "./ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Sesame Laddu",
    category: "Laddu & Sweets",
    weight: "250g",
    price: 150,
    rating: 4.8,
    image: "/categories/laddu.png",
    badge: "Popular",
  },
  {
    id: 2,
    name: "Dry Fruit Laddu",
    category: "Laddu & Sweets",
    weight: "250g",
    price: 190,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Premium",
  },
  {
    id: 3,
    name: "Millet Biscuits",
    category: "Millet Biscuits",
    weight: "200g",
    price: 150,
    rating: 4.7,
    image: "/categories/biscuits.png",
  },
  {
    id: 4,
    name: "Groundnut Chikki",
    category: "Chikki",
    weight: "200g",
    price: 120,
    rating: 4.8,
    image: "/categories/chikki.png",
    badge: "Best Seller",
  },
  {
    id: 5,
    name: "Natural Honey",
    category: "Honey",
    weight: "500g",
    price: 250,
    rating: 4.9,
    image: "/categories/honey.png",
  },
  {
    id: 6,
    name: "Andhra Pickle",
    category: "Pickles",
    weight: "250g",
    price: 180,
    rating: 4.8,
    image: "/categories/pickles.png",
  },
  {
    id: 7,
    name: "Traditional Papad",
    category: "Papads",
    weight: "200g",
    price: 110,
    rating: 4.6,
    image: "/categories/papads.png",
  },
  {
    id: 8,
    name: "Spicy Karam Powder",
    category: "Special Items",
    weight: "200g",
    price: 140,
    rating: 4.8,
    image: "/categories/powder.png",
  },
];

export default function ProductsClient() {
  // =========================
  // SHARED CART CONTEXT
  // =========================
  const {
    cart,
    addProduct,
    increaseProduct,
    decreaseProduct,
    totalItems,
    totalAmount,
  } = useCart();

  // =========================
  // FILTER STATES
  // =========================
  const [activeCategory, setActiveCategory] =
    useState<string>("All Products");

  const [searchQuery, setSearchQuery] =
    useState<string>("");

  const [sortBy, setSortBy] =
    useState<string>("Popular");

  // =========================
  // FILTER + SEARCH + SORT
  // =========================
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter
    if (activeCategory !== "All Products") {
      result = result.filter(
        (product) =>
          product.category === activeCategory
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery
        .toLowerCase()
        .trim();

      result = result.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(query) ||
          product.category
            .toLowerCase()
            .includes(query)
      );
    }

    // Sorting
    switch (sortBy) {
      case "Price: Low to High":
        result.sort(
          (a, b) => a.price - b.price
        );
        break;

      case "Price: High to Low":
        result.sort(
          (a, b) => b.price - a.price
        );
        break;

      case "Top Rated":
        result.sort(
          (a, b) => b.rating - a.rating
        );
        break;

      case "Popular":
      default:
        result.sort(
          (a, b) => b.rating - a.rating
        );
        break;
    }

    return result;
  }, [
    activeCategory,
    searchQuery,
    sortBy,
  ]);

  // =========================
  // PAGE
  // =========================
  return (
    <>
      {/* Products Hero + Search */}
      <ProductsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Category Tabs */}
      <ProductCategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Cart Summary */}
      <ProductsSummary
        totalProducts={filteredProducts.length}
        totalAmount={totalAmount}
        totalItems={totalItems}
      />

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        cart={cart}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAdd={addProduct}
        onIncrease={increaseProduct}
        onDecrease={decreaseProduct}
      />
    </>
  );
}