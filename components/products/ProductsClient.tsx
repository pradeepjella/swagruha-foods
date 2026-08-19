"use client";

import { useMemo, useState } from "react";

import ProductsHero from "./ProductsHero";
import ProductCategoryTabs from "./ProductCategoryTabs";
import ProductsSummary from "./ProductsSummary";
import ProductGrid from "./ProductGrid";

import type { Product } from "./ProductCard";

export interface ExtendedProduct extends Product {
  subcategory?: string;
}

const products: ExtendedProduct[] = [
  // =========================================================
  // LADDU MADE WITH DATES - 12 VARIETIES
  // =========================================================

  {
    id: 1,
    name: "Sesame Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 150,
    rating: 5,
    image: "/categories/laddu.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Groundnut Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 150,
    rating: 4.9,
    image: "/categories/laddu.png",
  },
  {
    id: 3,
    name: "Flax Seeds Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 160,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 4,
    name: "Dry Fruit Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 190,
    rating: 5,
    image: "/categories/laddu.png",
    badge: "Premium",
  },
  {
    id: 5,
    name: "Ragi Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 160,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 6,
    name: "Oats Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 170,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 7,
    name: "Mixed Seeds Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 180,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Healthy Choice",
  },
  {
    id: 8,
    name: "Coconut Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 170,
    rating: 4.8,
    image: "/categories/laddu.png",
  },
  {
    id: 9,
    name: "Cashew Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 220,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Premium",
  },
  {
    id: 10,
    name: "Almond Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 230,
    rating: 4.9,
    image: "/categories/laddu.png",
  },
  {
    id: 11,
    name: "Dates & Nuts Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 200,
    rating: 5,
    image: "/categories/laddu.png",
    badge: "Popular",
  },
  {
    id: 12,
    name: "Millet Energy Laddu",
    category: "Laddu Made With Dates",
    weight: "250g",
    price: 180,
    rating: 4.9,
    image: "/categories/laddu.png",
    badge: "Healthy",
  },

  // =========================================================
// BISCUITS MADE WITH WHEAT, MILLETS & PALM JAGGERY
// 13 VARIETIES
// =========================================================

{
  id: 13,
  name: "Wheat Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 120,
  rating: 4.8,
  image: "/categories/biscuits.png",
  badge: "Popular",
},
{
  id: 14,
  name: "Palm Jaggery Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 130,
  rating: 4.9,
  image: "/categories/biscuits.png",
  badge: "Healthy Choice",
},
{
  id: 15,
  name: "Ragi Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 130,
  rating: 4.8,
  image: "/categories/biscuits.png",
},
{
  id: 16,
  name: "Jowar Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 135,
  rating: 4.8,
  image: "/categories/biscuits.png",
},
{
  id: 17,
  name: "Bajra Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 135,
  rating: 4.7,
  image: "/categories/biscuits.png",
},
{
  id: 18,
  name: "Multigrain Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 140,
  rating: 4.9,
  image: "/categories/biscuits.png",
  badge: "Best Seller",
},
{
  id: 19,
  name: "Millet Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 140,
  rating: 4.8,
  image: "/categories/biscuits.png",
},
{
  id: 20,
  name: "Oats Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 145,
  rating: 4.8,
  image: "/categories/biscuits.png",
},
{
  id: 21,
  name: "Coconut Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 140,
  rating: 4.9,
  image: "/categories/biscuits.png",
},
{
  id: 22,
  name: "Jeera Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 130,
  rating: 4.7,
  image: "/categories/biscuits.png",
},
{
  id: 23,
  name: "Dry Fruit Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 170,
  rating: 4.9,
  image: "/categories/biscuits.png",
  badge: "Premium",
},
{
  id: 24,
  name: "Dates Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 150,
  rating: 4.8,
  image: "/categories/biscuits.png",
},
{
  id: 25,
  name: "Mixed Millet Biscuit",
  category:
    "Biscuits Made With Wheat, Millets & Palm Jaggery",
  weight: "200g",
  price: 150,
  rating: 4.9,
  image: "/categories/biscuits.png",
  badge: "Healthy",
},

  
  // =========================================================
// SWEETS - 6 VARIETIES
// =========================================================

// -------------------------
// THENAILI DOUBLE HORSE
// 2 VARIETIES
// -------------------------

{
  id: 26,
  name: "Thenaili Double Horse - Classic",
  category: "Sweets",
  subcategory: "Thenaili Double Horse",
  weight: "250g",
  price: 180,
  rating: 4.9,
  image: "/categories/sweets.png",
  badge: "Traditional",
},
{
  id: 27,
  name: "Thenaili Double Horse - Premium",
  category: "Sweets",
  subcategory: "Thenaili Double Horse",
  weight: "250g",
  price: 200,
  rating: 4.9,
  image: "/categories/sweets.png",
  badge: "Popular",
},

// -------------------------
// MANGO PULP
// 4 VARIETIES
// -------------------------

{
  id: 28,
  name: "Mango Pulp - Classic",
  category: "Sweets",
  subcategory: "Mango Pulp",
  weight: "500g",
  price: 220,
  rating: 4.9,
  image: "/categories/mango-pulp.png",
  badge: "Popular",
},
{
  id: 29,
  name: "Mango Pulp - Premium",
  category: "Sweets",
  subcategory: "Mango Pulp",
  weight: "500g",
  price: 250,
  rating: 4.9,
  image: "/categories/mango-pulp.png",
},
{
  id: 30,
  name: "Mango Pulp - Special",
  category: "Sweets",
  subcategory: "Mango Pulp",
  weight: "500g",
  price: 270,
  rating: 4.8,
  image: "/categories/mango-pulp.png",
},
{
  id: 31,
  name: "Mango Pulp - Family Pack",
  category: "Sweets",
  subcategory: "Mango Pulp",
  weight: "1kg",
  price: 480,
  rating: 5,
  image: "/categories/mango-pulp.png",
  badge: "Best Seller",
},

  // =========================================================
  // PICKLES - KEEPING CURRENT DATA FOR NOW
  // =========================================================

  {
    id: 33,
    name: "Traditional Mango Pickle",
    category: "Pickles With Groundnut Oil",
    weight: "250g",
    price: 180,
    rating: 4.9,
    image: "/categories/pickles.png",
    badge: "Popular",
  },

  // =========================================================
  // BREAKFAST ITEMS
  // =========================================================

  {
    id: 65,
    name: "Traditional Breakfast Mix",
    category: "Breakfast Items",
    weight: "250g",
    price: 150,
    rating: 4.8,
    image: "/categories/breakfast.png",
  },

  // =========================================================
  // PAPADS
  // =========================================================

  {
    id: 81,
    name: "Traditional Papad",
    category: "Papads",
    weight: "200g",
    price: 130,
    rating: 4.8,
    image: "/categories/papads.png",
  },

  // =========================================================
  // CHIKKI'S
  // =========================================================

  {
    id: 96,
    name: "Groundnut Chikki",
    category: "Chikki's",
    weight: "200g",
    price: 130,
    rating: 4.8,
    image: "/categories/chikki.png",
  },

  // =========================================================
  // WADIYALU
  // =========================================================

  {
    id: 108,
    name: "Traditional Wadiyalu",
    category: "Wadiyalu",
    weight: "200g",
    price: 150,
    rating: 4.7,
    image: "/categories/wadiyalu.png",
  },

  // =========================================================
  // SNACKS
  // =========================================================

  {
    id: 126,
    name: "Homemade Traditional Snack",
    category: "Snacks",
    weight: "200g",
    price: 140,
    rating: 4.8,
    image: "/categories/snacks.png",
  },

  // =========================================================
  // KARAM POWDERS
  // =========================================================

  {
    id: 149,
    name: "Spicy Karam Powder",
    category: "Karam Powders",
    weight: "200g",
    price: 140,
    rating: 4.9,
    image: "/categories/powder.png",
    badge: "Spicy",
  },

  // =========================================================
  // SPECIAL ITEMS
  // =========================================================

  {
    id: 166,
    name: "Special Homemade Item",
    category: "Special Items",
    subcategory: "Special",
    weight: "250g",
    price: 180,
    rating: 4.8,
    image: "/categories/special.png",
  },
  {
    id: 168,
    name: "Natural Ginger Candy",
    category: "Special Items",
    subcategory: "Ginger Candy",
    weight: "200g",
    price: 150,
    rating: 4.9,
    image: "/categories/special.png",
  },
  {
    id: 169,
    name: "Natural Palm Jaggery",
    category: "Special Items",
    subcategory: "Palm Jaggery",
    weight: "500g",
    price: 180,
    rating: 4.9,
    image: "/categories/special.png",
  },
  {
    id: 173,
    name: "Natural Honey",
    category: "Special Items",
    subcategory: "Honey",
    weight: "500g",
    price: 250,
    rating: 4.9,
    image: "/categories/honey.png",
    badge: "Pure",
  },
  {
    id: 175,
    name: "Pink Rock Salt",
    category: "Special Items",
    subcategory: "Pink Rock Salt",
    weight: "500g",
    price: 120,
    rating: 4.8,
    image: "/categories/special.png",
  },
];

const sweetSubcategories = [
  "All Sweets",
  "Thenaili Double Horse",
  "Mango Pulp",
];

const specialSubcategories = [
  "All Special Items",
  "Special",
  "Ginger Candy",
  "Palm Jaggery",
  "Honey",
  "Pink Rock Salt",
];

export default function ProductsClient() {
  const [cart, setCart] = useState<Record<number, number>>({});
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const [activeSubcategory, setActiveSubcategory] =
    useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("Popular");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setActiveSubcategory("");
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== "All Products") {
      result = result.filter(
        (product) => product.category === activeCategory
      );
    }

    if (
      activeCategory === "Sweets" &&
      activeSubcategory &&
      activeSubcategory !== "All Sweets"
    ) {
      result = result.filter(
        (product) =>
          product.subcategory === activeSubcategory
      );
    }

    if (
      activeCategory === "Special Items" &&
      activeSubcategory &&
      activeSubcategory !== "All Special Items"
    ) {
      result = result.filter(
        (product) =>
          product.subcategory === activeSubcategory
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.subcategory
            ?.toLowerCase()
            .includes(query)
      );
    }

    switch (sortBy) {
      case "Price: Low to High":
        result.sort((a, b) => a.price - b.price);
        break;

      case "Price: High to Low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "Top Rated":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [
    activeCategory,
    activeSubcategory,
    searchQuery,
    sortBy,
  ]);

  const totalItems = useMemo(() => {
    return Object.values(cart).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }, [cart]);

  const totalAmount = useMemo(() => {
    return products.reduce((total, product) => {
      const quantity = cart[product.id] || 0;

      return total + product.price * quantity;
    }, 0);
  }, [cart]);

  const addProduct = (product: Product) => {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]:
        (currentCart[product.id] || 0) + 1,
    }));
  };

  const increaseProduct = (product: Product) => {
    setCart((currentCart) => ({
      ...currentCart,
      [product.id]:
        (currentCart[product.id] || 0) + 1,
    }));
  };

  const decreaseProduct = (product: Product) => {
    setCart((currentCart) => {
      const quantity = currentCart[product.id] || 0;

      if (quantity <= 1) {
        const updatedCart = { ...currentCart };

        delete updatedCart[product.id];

        return updatedCart;
      }

      return {
        ...currentCart,
        [product.id]: quantity - 1,
      };
    });
  };

  const subcategories =
    activeCategory === "Sweets"
      ? sweetSubcategories
      : activeCategory === "Special Items"
      ? specialSubcategories
      : [];

  return (
    <>
      <ProductsHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <ProductCategoryTabs
        activeCategory={activeCategory}
        setActiveCategory={handleCategoryChange}
      />

      {subcategories.length > 0 && (
        <section className="bg-[#FFFDF7] px-5 pb-3 sm:px-8 lg:px-12 xl:px-20">
          <div className="mx-auto flex max-w-[1600px] gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {subcategories.map((subcategory) => {
              const isActive =
                activeSubcategory === subcategory ||
                (!activeSubcategory &&
                  subcategory.startsWith("All"));

              return (
                <button
                  key={subcategory}
                  type="button"
                  onClick={() =>
                    setActiveSubcategory(subcategory)
                  }
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "border-[#123B7A] bg-[#123B7A] text-white shadow-md"
                      : "border-[#D4A72C]/30 bg-white text-[#123B7A] hover:border-[#123B7A]"
                  }`}
                >
                  {subcategory}
                </button>
              );
            })}
          </div>
        </section>
      )}

      <ProductGrid
        products={filteredProducts}
        cart={cart}
        sortBy={sortBy}
        setSortBy={setSortBy}
        onAdd={addProduct}
        onIncrease={increaseProduct}
        onDecrease={decreaseProduct}
      />

      <ProductsSummary
        totalProducts={filteredProducts.length}
        totalAmount={totalAmount}
        totalItems={totalItems}
      />
    </>
  );
}