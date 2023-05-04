import { Product } from "./Product";

export type CartContextProps = {
  cart: Product[];
  addItemCart: (product: Product, id: number) => void;
  removeItemCart: (id: number) => void;
  clearCart: () => void;
  increaseItem: (Product: Product) => void;
  decreaseItem: (Product: Product) => void;
};
