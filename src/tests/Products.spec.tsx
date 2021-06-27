import React from "react";
import { render } from "@testing-library/react";
import { Products } from "../components/Products";

describe("<Products />", () => {
  it("should render the map of products", () => {
    const { container } = render(<Products />);
    expect(container).toMatchSnapshot();
  });
});
