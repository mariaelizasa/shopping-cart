import * as React from "react";
import { ReactNode, useState } from "react";
import { Product } from "../@types/Product";

export type CartContextProps = {
  cart: Product[];
  addItemCart: (product: Product, id: string) => void;
  removeItemCart: (id: string) => void;
  clearCart: () => void;
};

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

type CartContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = React.useState<Product[]>([]);

  const addItemCart = (product: Product) => {
    const { id } = product;
    const newItem = { ...product, amount: 1 };

    //check if alredy exist
    const existCartItem = cart.find((item) => {
      return item.id === id;
    });

    // if alredy exist, run the cart array and check if is the same id =>
    // if yes, return the same item and add +1 to amount
    // if not, return the item
    if (existCartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount + 1 };
        } else {
          return item;
        }
      });
      // create a new cart
      setCart(newCart);
    } else {
      // add the new item to list
      setCart([...cart, newItem]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemCart = (id: string) => {
    const filteredCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(filteredCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemCart, removeItemCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
