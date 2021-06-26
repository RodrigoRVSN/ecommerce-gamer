import { useEffect } from "react";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import GameData from "../products.json";

export type UseCartProps = {
  cartOpen: boolean;
  setCartOpen: Dispatch<SetStateAction<boolean>>;
  items: {};
  addItem: (...props: any) => void;
  removeItem: (...props: any) => void;
  itemSelected: string[];
  shipping: Number;
  price: Number;
  setPrice: Dispatch<SetStateAction<number>>;
};

export const CartContext = createContext({} as UseCartProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const items = GameData;
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState([""]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);

  function addItem(productClicked: any) {
    items.map((item, index) => {
      if (item === productClicked) {
        item.amount += 1;
        return item;
      }
    });

    itemSelected.push(productClicked);
    itemSelected.forEach(function (primeiro: any, id: any) {
      setPrice(price + parseFloat(primeiro?.price));
    });
    setShipping(shipping + 10);
  }

  function removeItem(productClicked: any) {
    let index = itemSelected.indexOf(productClicked);
    itemSelected.splice(index, 1);

    items.map((item, index) => {
      if (item === productClicked) {
        item.amount -= 1;
        return item;
      }
    });

    itemSelected.forEach(function (primeiro: any, id: any) {
      setPrice(price - parseFloat(primeiro?.price));
    });
    setShipping(shipping - 10);
  }

  useEffect(() => {
    if (price > 250) {
      setShipping(0);
    }
  }, [price]);

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        items,
        addItem,
        removeItem,
        itemSelected,
        shipping,
        price,
        setPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
