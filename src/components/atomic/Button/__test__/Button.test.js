import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button Component", () => {
  it("renders correctly", () => {
    render(<Button label="Submit" data-testid="label" />);
    const button = screen.getByTestId("label");
    expect(button).toBeInTheDocument();
  });
  it("renders with disabled button", () => {
    render(<Button label="Submit" data-testid="label" disabled={true} />);
    const view = screen.getByTestId("label");
    expect(view).toHaveAttribute("disabled");
  });
  it("calls onClick prop when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="label" data-testid="label" onClick={handleClick} />);
    const view = screen.getByTestId("label");
    fireEvent.click(view);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
