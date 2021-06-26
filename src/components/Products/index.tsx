import { Box, Button } from "@material-ui/core";
import GameData from "../../products.json";

import Grid from "@material-ui/core/Grid";

export function Products(): JSX.Element {
  return (
    <>
      {GameData.map((item, index) => {
        return (
          <>
            <Grid key={index} item xs={7} md={4} lg={3}>
              <h2>{item.name}</h2>
              <img src={`/assets/${item.image}`} alt={item.name} />
              <h3>{item.id}</h3>
              <h3>{item.score}</h3>
              <Box
                style={{
                  display: "flex",
                  textAlign: "center",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <h3>{`R$ ${item.price.toLocaleString("PT")}`}</h3>
                <Button variant="contained" color="secondary">
                  <img
                    width="25rem"
                    height="25rem"
                    src="/assets/cart-icon.svg"
                    alt="carrinho"
                  />
                </Button>
              </Box>
            </Grid>
          </>
        );
      })}
    </>
  );
}
