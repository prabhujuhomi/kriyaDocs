import React from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;
export const Filled = Template.bind({});
Filled.args = {
  radius: "20px",
  children: "Submit",
  dataTestId: "button-test"
};
Filled.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("button-test"));
  await expect(args.onClick).toHaveBeenCalled();
};

export const Outlined = Template.bind({});
Outlined.args = {
  radius: "20px",
  variantType: "outlined",
  children: "Cancel",
  dataTestId: "button-test"
};
Outlined.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("button-test"));
  await expect(args.onClick).toHaveBeenCalled();
};

export const IconButtonWithLabel = Template.bind({});
IconButtonWithLabel.args = {
  radius: "20px",
  backgroundColor: "primay",
  startIcon: <AddIcon />,
  children: "Add",
  size: "small",
  dataTestId: "button-test"
};
IconButtonWithLabel.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("button-test"));
  await expect(args.onClick).toHaveBeenCalled();
};
