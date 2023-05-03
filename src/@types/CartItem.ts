import { Product } from "./Product";

export default interface CartItemProps extends Product {
  id: string;
  amount: number;
}
