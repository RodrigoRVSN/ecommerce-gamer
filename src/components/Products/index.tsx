import { Button, Card } from "@material-ui/core";

import { ProductContainer, Title, CartProduct, HeaderItem } from "./styles";

import Grid from "@material-ui/core/Grid";
import { useCart } from "../../hooks/useCart";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

export function Products() {
  const { addItem, removeItem, allItems } = useCart();

  return (
    <>
      {allItems?.map((item, index) => {
        return (
          <Grid key={index} item xs={11} md={4} lg={3}>
            <Card>
              <HeaderItem>
                <h3># {item.id}</h3>
                <Badge badgeContent={item.amount} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </HeaderItem>
              <ProductContainer>
                <img src={`/assets/${item.image}`} alt={item.name} />
                <Title>{item.name}</Title>
                <h3>Pontuação: {item.score}</h3>
                <CartProduct>
                  <h3>{`R$ ${item.price.toLocaleString("PT")}`}</h3>
                  <Button
                    disabled={item.amount < 1}
                    variant="contained"
                    onClick={() => removeItem(item)}
                    color="primary"
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
                </CartProduct>
              </ProductContainer>
            </Card>
          </Grid>
        );
      })}
    </>
  );
}
