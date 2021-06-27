import { Dispatch, SetStateAction } from "react";
import { CartItemType } from "./CartItemType";

export type UseCartProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  items: {};
  addItem: (...props: any) => void;
  removeItem: (...props: any) => void;
  itemSelected: CartItemType[];
  shipping: Number;
  price: Number;
  setPrice: Dispatch<SetStateAction<number>>;
  NameToA: () => void;
  NameToZ: () => void;
  allItems: CartItemType[];
  setAllItems: Dispatch<SetStateAction<CartItemType[]>>;
};
