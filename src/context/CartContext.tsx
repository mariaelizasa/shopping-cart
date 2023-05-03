import * as React from "react";
import { ReactNode, createContext, useState } from "react";
import { Product } from "../@types/Product";

export type CartContextProps = {
  cart: Product[];
  addItemCart: (product: Product) => void;
  removeItemCart: (id: string) => void;
  itemAmount: number;
};

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

type CartContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const [itemAmount, setItemAmount] = useState(0);

  const addItemCart = (product: Product) => {
    console.log("add item cart");
  };

  const removeItemCart = (id: string) => {
    console.log("add item cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, itemAmount, addItemCart, removeItemCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
