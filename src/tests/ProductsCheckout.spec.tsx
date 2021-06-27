import React from "react";
import { render } from "@testing-library/react";
import { ProductsCheckout } from "../components/ProductsCheckout";

describe("<ProductsCheckout />", () => {
  it("should render the products in checkout cart", () => {
    const { container } = render(<ProductsCheckout />);
    expect(container).toMatchSnapshot();
  });
});
