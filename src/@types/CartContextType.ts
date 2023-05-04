import { Product } from "./Product";

export type CartContextProps = {
  cart: Product[];
  addItemCart: (product: Product, id: string) => void;
  removeItemCart: (id: string) => void;
  clearCart: () => void;
  increaseItem: (Product: Product) => void;
  decreaseItem: (Product: Product) => void;
};
