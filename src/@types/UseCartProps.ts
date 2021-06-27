import { Dispatch, SetStateAction } from "react";
import { CartItemType } from "./CartItemType";

export type UseCartProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  addItem: (...props: any) => void;
  removeItem: (...props: any) => void;
  itemSelected: CartItemType[];
  shipping: Number;
  price: Number;
  setPrice: Dispatch<SetStateAction<number>>;
  allItems: CartItemType[];
  setAllItems: Dispatch<SetStateAction<CartItemType[]>>;
  NameToA: () => void;
  NameToZ: () => void;
  PriceHigher: () => void;
  PriceLower: () => void;
  ScoreHigher: () => void;
  ScoreLower: () => void;
};
