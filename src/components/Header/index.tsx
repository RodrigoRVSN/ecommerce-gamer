import { HeaderContainer, HeaderContent } from "./style";
import { Container } from "@material-ui/core";
import { CartCheckout } from "../CartCheckout";

export function Header(): JSX.Element {
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
