import React from "react";
import { render } from "@testing-library/react";
import { OrderMenu } from "../components/OrderMenu";

describe("<OrderMenu />", () => {
  it("should render the menu of sort items", () => {
    const { container } = render(<OrderMenu />);
    expect(container).toMatchSnapshot();
  });
});
