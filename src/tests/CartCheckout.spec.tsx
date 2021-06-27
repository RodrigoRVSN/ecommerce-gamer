import React from "react";
import { render } from "@testing-library/react";
import { CartCheckout } from "../components/CartCheckout";

describe("<CartCheckout />", () => {
  it("should render the checkout drawer", () => {
    const { container } = render(<CartCheckout />);
    expect(container).toMatchSnapshot();
  });
});
