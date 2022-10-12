import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RedoIcon from "@mui/icons-material/Redo";
import UndoIcon from "@mui/icons-material/Undo";
import ImgIcon from "./icons/imageIcon.png";
import EquationIcon from "./icons/omega.png";
import SymbolIcon from "./icons/sigma.png";
import GroupIcon from "./icons/people.png";
import NotificationIcon from "./icons/bell.png";
import ActionIcon from "./icons/dots.png";
import ReferenceIcon from "./icons/bookmark.png";
import ChatIcon from "./icons/chat.png";
import IconButton from "./IconButton";
// import { storiesOf } from "@storybook/react";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "components/IconButton",
  component: IconButton,
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    color: {
      control: "color",
    },
  },
};
const Template = (args) => {
  return (
    <>
      <IconButton size="large">
        <AddIcon />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={ImgIcon} alt="imageIcon not found" />
      </IconButton>
      {/* <IconButton backgroundColor="white">
        <img src={ReferenceIcon} alt="imageIcon not found" />
      </IconButton> */}
      <IconButton
        backgroundColor="white"
        src={ReferenceIcon}
        alt="imageIcon not found"
      />
      <IconButton backgroundColor="white">
        <img src={EquationIcon} alt="EquationIcon not found" />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={SymbolIcon} alt="SymbolIcon not found" />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={ChatIcon} alt="ChatIcon not found" />
      </IconButton>
      <IconButton backgroundColor="white" color="#898585">
        <UndoIcon />
      </IconButton>
      <IconButton backgroundColor="white" color="#898585">
        <RedoIcon />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={GroupIcon} alt="GroupIcon not found" />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={ActionIcon} alt="ActionIcon not found" />
      </IconButton>
      <IconButton backgroundColor="white">
        <img src={NotificationIcon} alt="NotificationIcon not found" />
      </IconButton>
    </>
  );
};
export const IconButtons = Template.bind({});
IconButtons.args = {};

const TemplateTest = (args) => <IconButton {...args} />;
export const iconButton = TemplateTest.bind({});
iconButton.args = {};

iconButton.play = async ({ canvasElement, args }) => {
  console.log({ canvasElement, args });
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("add-icon"));
};
