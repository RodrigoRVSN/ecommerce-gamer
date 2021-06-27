import { Button, Card } from "@material-ui/core";

import {
  HeaderItem,
  CheckoutContainer,
  ItemsContainer,
  InfoProduct,
} from "./styles";

import { useCart } from "../../hooks/useCart";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export function ProductsCheckout() {
  const { addItem, removeItem, itemSelected } = useCart();

  const uniqueItens = itemSelected?.filter(
    (el, i, arr) => arr.indexOf(el) === i
  );

  return (
    <>
      <ItemsContainer>
        {uniqueItens?.map((item, index) => {
          return (
            <Card>
              <CheckoutContainer>
                <InfoProduct>
                  <img src={`/assets/${item.image}`} alt={item.name} />
                  <h4>{item.name}</h4>
                </InfoProduct>
                <HeaderItem>
                  <h3>{`R$ ${item.price.toLocaleString("PT")}`}</h3>
                  <Badge badgeContent={item.amount} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                  <Button
                    disabled={item.amount < 1}
                    variant="contained"
                    onClick={() => removeItem(item)}
                    color="primary"
                    size="small"
                  >
                    <DeleteSweepIcon />
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => addItem(item)}
                    color="secondary"
                  >
                    <img
                      width="25rem"
                      height="25rem"
                      src="/assets/cart-icon.svg"
                      alt="carrinho"
                    />
                  </Button>
                </HeaderItem>
              </CheckoutContainer>
            </Card>
          );
        })}
      </ItemsContainer>
    </>
  );
}
