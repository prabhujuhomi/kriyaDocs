import React from "react";
import Header from "./Header";
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

export default {
  title: "Composing-Components/Header",
  component: Header,
  argTypes: {},
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=1906%3A3469',
    }
  }
};
const Template = (args) => <Header {...args}/>;
export const header = Template.bind({});
header.args = {};

header.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByTestId('add-icon'))
}