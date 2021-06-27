import { Button, Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import { Products } from "../../components/Products";
import { OrderMenu } from "../../components/OrderMenu";

export function Home(): JSX.Element {
  return (
    <>
      <Container>
        <OrderMenu />
        <Grid
          spacing={4}
          container
          style={{
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Products />
        </Grid>
      </Container>
    </>
  );
}
