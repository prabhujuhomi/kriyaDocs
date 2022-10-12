import React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "../IconButton";
import AddIcon from "@mui/icons-material/Add";
import ImgIcon from "../icons/imageIcon.png";

describe("IconButton component tests", () => {
  it("should render AddIcon", () => {
    render(
      <IconButton>
        <AddIcon />
      </IconButton>
    );
    const rendered = screen.getByRole("button");
    expect(rendered).toBeTruthy();
    expect(rendered).toHaveClass("MuiButtonBase-root");
    expect(rendered).toContainHTML("svg");
    const child = screen.getByRole("button").firstElementChild;
    expect(child).toHaveAttribute("data-testid", "AddIcon");
  });
  it("should render PictureIcon", () => {
    render(<IconButton src={ImgIcon} alt="imageIcon not found" />);
    const rendered = screen.getByRole("button");
    expect(rendered).toBeTruthy();
    expect(rendered).toContainHTML("img");
    const child = screen.getByRole("button").firstElementChild;
    expect(child).toHaveAttribute("src", "imageIcon.png");
    expect(child).toHaveAttribute("alt", "imageIcon not found");
  });
});
