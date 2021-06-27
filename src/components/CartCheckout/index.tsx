import { Button, Drawer } from "@material-ui/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../hooks/useCart";

import { CartContainer, ButtonContainer } from "./styles";
import { ProductsCheckout } from "../../components/ProductsCheckout";

export function CartCheckout(): JSX.Element {
  const { cartOpen, setCartOpen, price, shipping } = useCart();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(Number(price) + Number(shipping));
  }, [price, shipping, totalPrice]);

  return (
    <>
      <Button onClick={() => setCartOpen(true)}>
        <img src="/assets/cart-icon.svg" alt="carrinho" />
      </Button>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <CartContainer>
          <h2>
            {price > 0
              ? `Valor dos produtos: R$ ${price.toLocaleString("pt")}`
              : "Não há produtos no carrinho 😞"}
          </h2>
          <h2>
            {shipping > 0 ? `Frete: R$ ${shipping},00` : "Não há fretes 😎"}
          </h2>
          <h2>
            {totalPrice > 0 &&
              `Valor total: R$ ${totalPrice.toLocaleString("pt")}`}
          </h2>

          <ProductsCheckout />

          <ButtonContainer>
            <Button
              color="primary"
              variant="contained"
              onClick={() => setCartOpen(false)}
            >
              Fechar
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={() => {
                setCartOpen(false);
                toast.success("✔️ Compra finalizada!");
              }}
            >
              COMPRAR
            </Button>
          </ButtonContainer>
        </CartContainer>
      </Drawer>
    </>
  );
}
