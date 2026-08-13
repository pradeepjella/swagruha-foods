"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export interface CartProduct {
  id: number;
  name: string;
  category: string;
  weight: string;
  price: number;
  rating: number;
  image: string;
  badge?: string;
}

interface CartContextType {
  cart: Record<number, number>;

  cartProducts: Record<number, CartProduct>;

  addProduct: (product: CartProduct) => void;

  increaseProduct: (product: CartProduct) => void;

  decreaseProduct: (product: CartProduct) => void;

  removeProduct: (productId: number) => void;

  clearCart: () => void;

  totalItems: number;

  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cart, setCart] = useState<Record<number, number>>({});

  const [cartProducts, setCartProducts] = useState<
    Record<number, CartProduct>
  >({});

  const addProduct = (product: CartProduct) => {
    setCartProducts((current) => ({
      ...current,
      [product.id]: product,
    }));

    setCart((current) => ({
      ...current,
      [product.id]: (current[product.id] || 0) + 1,
    }));
  };

  const increaseProduct = (product: CartProduct) => {
    setCartProducts((current) => ({
      ...current,
      [product.id]: product,
    }));

    setCart((current) => ({
      ...current,
      [product.id]: (current[product.id] || 0) + 1,
    }));
  };

  const decreaseProduct = (product: CartProduct) => {
    setCart((current) => {
      const quantity = current[product.id] || 0;

      if (quantity <= 1) {
        const updatedCart = { ...current };

        delete updatedCart[product.id];

        return updatedCart;
      }

      return {
        ...current,
        [product.id]: quantity - 1,
      };
    });

    if ((cart[product.id] || 0) <= 1) {
      setCartProducts((currentProducts) => {
        const updatedProducts = {
          ...currentProducts,
        };

        delete updatedProducts[product.id];

        return updatedProducts;
      });
    }
  };

  const removeProduct = (productId: number) => {
    setCart((current) => {
      const updatedCart = { ...current };

      delete updatedCart[productId];

      return updatedCart;
    });

    setCartProducts((current) => {
      const updatedProducts = { ...current };

      delete updatedProducts[productId];

      return updatedProducts;
    });
  };

  const clearCart = () => {
    setCart({});
    setCartProducts({});
  };

  const totalItems = useMemo(() => {
    return Object.values(cart).reduce(
      (total, quantity) => total + quantity,
      0
    );
  }, [cart]);

  const totalAmount = useMemo(() => {
    return Object.entries(cart).reduce(
      (total, [productId, quantity]) => {
        const product =
          cartProducts[Number(productId)];

        if (!product) return total;

        return total + product.price * quantity;
      },
      0
    );
  }, [cart, cartProducts]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartProducts,
        addProduct,
        increaseProduct,
        decreaseProduct,
        removeProduct,
        clearCart,
        totalItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}