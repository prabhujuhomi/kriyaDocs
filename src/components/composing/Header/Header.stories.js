import React from "react";
import Header from "./Header";
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: "Composing-Components/Header",
  component: Header,
  argTypes: {},
};
const Template = (args) => <Header {...args}/>;
export const header = Template.bind({});
header.args = {};

header.play = async ({ canvasElement, args }) => {
  console.log({ canvasElement, args })
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByTestId('add-icon'))
}