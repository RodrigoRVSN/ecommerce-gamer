import { useEffect } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { CartItemType } from "../@types/CartItemType";
import { UseCartProps } from "../@types/UseCartProps";
import GameData from "../products.json";

export const CartContext = createContext({} as UseCartProps);

interface CartProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartProviderProps) {
  const items = GameData;

  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [itemSelected, setItemSelected] = useState<CartItemType[]>([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [allItems, setAllItems] = useState<CartItemType[]>([]);

  function NameToA() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      } else {
        return -1;
      }
    });
    setAllItems(newItems);
  }

  function NameToZ() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
    setAllItems(newItems);
  }

  /*
  items.sort(function (a, b) {
    if (a.price < b.price) {
      return 1;
    } else {
      return -1;
    }
  });

  items.sort(function (a, b) {
    if (a.price < b.price) {
      return -1;
    } else {
      return 1;
    }
  });
  
  items.sort(function (a, b) {
    if (a.score < b.score) {
      return -1;
    } else {
      return 1;
    }
  });

  items.sort(function (a, b) {
    if (a.score < b.score) {
      return 1;
    } else {
      return -1;
    }
  });
  
  */

  function addItem(productClicked: any) {
    items.map((item, index) => {
      if (item === productClicked) {
        item.amount += 1;
        return item;
      }
    });

    itemSelected.push(productClicked);
    itemSelected.forEach(function (primeiro: any, id: any) {
      setPrice(Number(price) + Number(primeiro?.price));
    });
    setShipping(shipping + 10);
  }

  function removeItem(productClicked: any) {
    itemSelected.forEach(function (primeiro: any, id: any) {
      setPrice(Number(price) - parseFloat(primeiro?.price));
    });
    setShipping(shipping - 10);

    let index = itemSelected.indexOf(productClicked);
    itemSelected.splice(index, 1);

    items.map((item) => {
      if (item === productClicked) {
        item.amount -= 1;
        return item;
      }
    });
  }

  useEffect(() => {
    if (price > 250) {
      setShipping(0);
    }
    if (shipping < 0) {
      setShipping(0);
    }
    if (price < 0) {
      setPrice(0);
    }
  }, [shipping, price]);

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
        NameToA,
        NameToZ,
        allItems,
        setAllItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  return useContext(CartContext);
};
