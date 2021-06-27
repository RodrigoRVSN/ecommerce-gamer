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
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [itemSelected] = useState<CartItemType[]>([]);
  const [price, setPrice] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [allItems, setAllItems] = useState<CartItemType[]>([]);

  /* Funções para ordenar os elementos na página */

  /* Ordenação por nome */

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

  /* Ordena por preço */

  function PriceHigher() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.price > b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setAllItems(newItems);
  }

  function PriceLower() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
    });
    setAllItems(newItems);
  }

  /* Ordena por pontuação */

  function ScoreHigher() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.score > b.score) {
        return -1;
      } else {
        return 1;
      }
    });
    setAllItems(newItems);
  }

  function ScoreLower() {
    const newItems = [...GameData].sort(function (a, b) {
      if (a.score < b.score) {
        return -1;
      } else {
        return 1;
      }
    });
    setAllItems(newItems);
  }

  /* Função de adicionar items */

  function addItem(productClicked: any) {
    allItems.map((item, index) => {
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

  /* Função de Remover items */

  function removeItem(productClicked: any) {
    itemSelected.forEach(function (array: any, id: any) {
      if (productClicked === array) {
        setPrice(Number(price) - parseFloat(array?.price));
      }
    });

    setShipping(shipping - 10);

    let index = itemSelected.indexOf(productClicked);
    itemSelected.splice(index, 1);

    allItems.map((item) => {
      if (item === productClicked) {
        item.amount -= 1;
        return item;
      }
    });
  }

  /* Condicionais simples */

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

  useEffect(() => {
    setAllItems(GameData);
  }, [setAllItems]);

  /* Retorno do contexto */

  return (
    <CartContext.Provider
      value={{
        cartOpen,
        setCartOpen,
        addItem,
        removeItem,
        itemSelected,
        shipping,
        price,
        setPrice,
        allItems,
        setAllItems,
        NameToA,
        NameToZ,
        PriceHigher,
        PriceLower,
        ScoreHigher,
        ScoreLower,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

/* Hook do use cart */

export const useCart = () => {
  return useContext(CartContext);
};
