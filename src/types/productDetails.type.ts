import { TProduct } from "./product.types";

export type TProductDetails = {
  id: number;
  items: TProduct[];
  subtotal: number;
};