import * as React from "react";
import { ReactNode, useState, useEffect } from "react";
import { Product } from "../@types/Product";
import CartItemProps from "../@types/CartItem";
import { CartContextProps } from "../@types/CartContextType";

export const CartContext = React.createContext<CartContextProps>(
  {} as CartContextProps
);

type CartContextProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = React.useState<CartItemProps[]>([]);
  const [total, setTotal] = React.useState(0);

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

  const increaseItem = (product: Product) => {
    const { id } = product;
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      addItemCart(cartItem);
    }
  };
  const decreaseItem = (product: Product) => {
    const { id } = product;
    const existCartItem = cart.find((item) => {
      return item.id === id;
    });
    if (existCartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      // create a new cart
      setCart(newCart);
    }
    if (existCartItem.amount < 2) {
      removeItemCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemCart,
        removeItemCart,
        clearCart,
        increaseItem,
        decreaseItem,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
