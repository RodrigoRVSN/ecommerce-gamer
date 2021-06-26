import { HeaderContainer, HeaderContent } from "./style";
import { Container, Button, Drawer } from "@material-ui/core";
import { useCart } from "../../hooks/useCart";
import { CartCheckout } from "../CartCheckout";

export function Header(): JSX.Element {
  const { cartOpen, setCartOpen } = useCart();
  return (
    <>
      <HeaderContainer>
        <Container>
          <HeaderContent>
            E-GAMER
            
            <CartCheckout />
          </HeaderContent>
        </Container>
      </HeaderContainer>
    </>
  );
}
