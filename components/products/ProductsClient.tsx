"use client";

import { useMemo, useState } from "react";

import ProductsHero from "./ProductsHero";
import ProductCategoryTabs from "./ProductCategoryTabs";
import ProductsSummary from "./ProductsSummary";
import ProductGrid from "./ProductGrid";

import type { Product } from "./ProductCard";

const products: Product[] = [
  // ==========================================
  // LADDU MADE WITH DATES - 13 VARIETIES
  // ==========================================

  {
    id: 1,
    name: "Dry Fruit Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 250,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Almond Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 260,
    rating: 4.9,
    image: "/categories/laddu.png",
  },
  {
    id: 3,
    name: "Cashew Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 260,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 4,
    name: "Walnut Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 280,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Pista Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 280,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 6,
    name: "Sesame Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 220,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 7,
    name: "Peanut Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 200,
    rating: 4.7,
    image: "/categories/laddu.png",
  },
  {
    id: 8,
    name: "Coconut Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 220,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 9,
    name: "Flax Seeds Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 240,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 10,
    name: "Pumpkin Seeds Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 260,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 11,
    name: "Sunflower Seeds Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 240,
    rating: 4.7,
    image: "/categories/laddu.png",
  },
  {
    id: 12,
    name: "Mixed Seeds Dates Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 280,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Healthy",
  },
  {
    id: 13,
    name: "Premium Dry Fruit Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 320,
    rating: 5.0,
    image: "/categories/laddu.png",
    badge: "Premium",
  },

  // ==========================================
  // BISCUITS
  // ==========================================

  {
    id: 14,
    name: "Wheat Palm Jaggery Biscuits",
    category:
      "Biscuits Made With Wheat, Millets & Palm Jaggery",
    weight: "200g",
    price: 150,
    rating: 4.8,
    image: "/categories/biscuits.png",
    badge: "Popular",
  },
  {
    id: 15,
    name: "Millet Palm Jaggery Biscuits",
    category:
      "Biscuits Made With Wheat, Millets & Palm Jaggery",
    weight: "200g",
    price: 170,
    rating: 4.9,
    image: "/categories/biscuits.png",
  },
  {
    id: 16,
    name: "Ragi Biscuits",
    category:
      "Biscuits Made With Wheat, Millets & Palm Jaggery",
    weight: "200g",
    price: 160,
    rating: 4.8,
    image: "/categories/biscuits.png",
  },

  // ==========================================
  // SWEETS
  // ==========================================

  {
    id: 17,
    name: "Traditional Sweet",
    category: "Sweets",
    weight: "250g",
    price: 220,
    rating: 4.8,
    image: "/categories/sweets.png",
  },

  // ==========================================
  // PICKLES
  // ==========================================

  {
    id: 18,
    name: "Andhra Mango Pickle",
    category: "Pickles With Groundnut Oil",
    weight: "250g",
    price: 180,
    rating: 4.9,
    image: "/categories/pickles.png",
    badge: "Traditional",
  },
  {
    id: 19,
    name: "Gongura Pickle",
    category: "Pickles With Groundnut Oil",
    weight: "250g",
    price: 190,
    rating: 4.8,
    image: "/categories/pickles.png",
  },

  // ==========================================
  // BREAKFAST
  // ==========================================

  {
    id: 20,
    name: "Traditional Breakfast Mix",
    category: "Breakfast Items",
    weight: "250g",
    price: 180,
    rating: 4.8,
    image: "/categories/breakfast.png",
  },

  // ==========================================
  // PAPADS
  // ==========================================

  {
    id: 21,
    name: "Traditional Papad",
    category: "Papads",
    weight: "200g",
    price: 110,
    rating: 4.7,
    image: "/categories/papads.png",
  },

  // ==========================================
  // CHIKKI'S
  // ==========================================

  {
    id: 22,
    name: "Groundnut Chikki",
    category: "Chikki's",
    weight: "200g",
    price: 120,
    rating: 4.9,
    image: "/categories/chikki.png",
    badge: "Best Seller",
  },
  {
    id: 23,
    name: "Sesame Chikki",
    category: "Chikki's",
    weight: "200g",
    price: 130,
    rating: 4.8,
    image: "/categories/chikki.png",
  },

  // ==========================================
  // WADIYALU
  // ==========================================

  {
    id: 24,
    name: "Traditional Wadiyalu",
    category: "Wadiyalu",
    weight: "200g",
    price: 150,
    rating: 4.7,
    image: "/categories/wadiyalu.png",
  },

  // ==========================================
  // SNACKS
  // ==========================================

  {
    id: 25,
    name: "Homemade Traditional Snack",
    category: "Snacks",
    weight: "200g",
    price: 140,
    rating: 4.8,
    image: "/categories/snacks.png",
  },

  // ==========================================
  // KARAM POWDERS
  // ==========================================

  {
    id: 26,
    name: "Spicy Karam Powder",
    category: "Karam Powders",
    weight: "200g",
    price: 140,
    rating: 4.9,
    image: "/categories/powder.png",
    badge: "Spicy",
  },
  {
    id: 27,
    name: "Curry Leaf Karam Powder",
    category: "Karam Powders",
    weight: "200g",
    price: 150,
    rating: 4.8,
    image: "/categories/powder.png",
  },

  // ==========================================
  // SPECIAL
  // ==========================================

  {
    id: 28,
    name: "Natural Honey",
    category: "Special",
    weight: "500g",
    price: 250,
    rating: 4.9,
    image: "/categories/honey.png",
    badge: "Pure",
  },
];

export default function ProductsClient() {
  const [cart, setCart] =
    useState<Record<number, number>>({});

  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [sortBy, setSortBy] =
    useState("Popular");

  // ==========================================
  // FILTER PRODUCTS
  // ==========================================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All Products") {
      result = result.filter(
        (product) =>
          product.category === activeCategory
      );
    }

    if (searchQuery.trim()) {
      const query =
        searchQuery.toLowerCase().trim();

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

  // ==========================================
  // TOTAL ITEMS
  // ==========================================

  const totalItems = useMemo(() => {
    return Object.values(cart).reduce(
      (total, quantity) =>
        total + quantity,
      0
    );
  }, [cart]);

  // ==========================================
  // TOTAL AMOUNT
  // ==========================================

  const totalAmount = useMemo(() => {
    return products.reduce(
      (total, product) => {
        const quantity =
          cart[product.id] || 0;

        return (
          total +
          product.price * quantity
        );
      },
      0
    );
  }, [cart]);

  // ==========================================
  // ADD PRODUCT
  // ==========================================

  const addProduct = (
    product: Product
  ) => {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]:
        (currentCart[product.id] || 0) +
        1,
    }));
  };

  // ==========================================
  // INCREASE PRODUCT
  // ==========================================

  const increaseProduct = (
    product: Product
  ) => {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]:
        (currentCart[product.id] || 0) +
        1,
    }));
  };

  // ==========================================
  // DECREASE PRODUCT
  // ==========================================

  const decreaseProduct = (
    product: Product
  ) => {
    setCart((currentCart) => {
      const quantity =
        currentCart[product.id] || 0;

      if (quantity <= 1) {
        const updatedCart = {
          ...currentCart,
        };

        delete updatedCart[product.id];

        return updatedCart;
      }

      return {
        ...currentCart,
        [product.id]: quantity - 1,
      };
    });
  };

  return (
    <>
      {/* HERO */}
      <ProductsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* CATEGORY MENU */}
      <ProductCategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={
          setActiveCategory
        }
      />

      {/* PRODUCT GRID */}
      <ProductGrid
        products={filteredProducts}
        cart={cart}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAdd={addProduct}
        onIncrease={increaseProduct}
        onDecrease={decreaseProduct}
      />

      {/* FIXED BOTTOM CART */}
      <ProductsSummary
        totalProducts={
          filteredProducts.length
        }
        totalAmount={totalAmount}
        totalItems={totalItems}
      />
    </>
  );
}