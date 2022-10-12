import React from "react";
import Button from "./Button";
import AddIcon from "@mui/icons-material/Add";

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
};

export const Outlined = Template.bind({});
Outlined.args = {
  radius: "20px",
  variantType: "outlined",
  children: "Cancel",
};

export const IconButtonWithLabel = Template.bind({});
IconButtonWithLabel.args = {
  radius: "20px",
  backgroundColor: "primay",
  startIcon: <AddIcon />,
  children: "Add",
  size: "small",
};
