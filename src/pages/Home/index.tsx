import { Button, Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

import { Products } from "../../components/Products";

export function Home(): JSX.Element {
  return (
    <>
      <Container>
        <Button variant="contained" color="primary">
          <img src="/assets/arrow-down-icon.svg" alt="filtro" />
        </Button>
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
