import { render, screen } from "@testing-library/react";
import { Filled, Outlined, IconButtonWithLabel } from "./Button.stories";

test("should render", () => {
  render(<Filled>Submit</Filled>);
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).not.toBeNull();
});

test("should render filled", () => {
  render(<Filled {...Filled.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Submit/i);
  expect(screen.getByRole("button")).toHaveStyle("borderRadius:20px");
});

test("should render outlined", () => {
  render(<Outlined {...Outlined.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Cancel/i);
  expect(screen.getByRole("button")).toHaveStyle("borderRadius:20px");
  expect(screen.getByRole("button")).toHaveClass("MuiButton-outlined");
});

test("should render IconButtonWithLabel", () => {
  render(<IconButtonWithLabel {...IconButtonWithLabel.args} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Add/i);
  expect(screen.getByRole("button")).toHaveStyle("borderRadius:20px");
  expect(screen.getByRole("button")).toHaveStyle("backgroundColor:primay");
  expect(screen.getByRole("button")).toHaveClass("MuiButton-sizeSmall");
  expect(screen.getByRole("button")).toContainHTML("svg");
});
