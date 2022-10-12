import React from "react";
import person from "./images/AvatarImage2.png";
import Avatar from "./Avatar";

export default {
  title: "components/Avatar",
  component: Avatar,
  argTypes: {},
};

const Template = (args) => <Avatar {...args} />;
export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  src: person,
};

export const characterAvatar = Template.bind({});
characterAvatar.args = {
  children: "MP",
};
