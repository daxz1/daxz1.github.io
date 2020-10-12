import React from "react";
import { Tile } from "./Tile";

export default {
  title: 'components/Tile',
  component: Tile,
  argTypes: {
    header: { control: 'text' },
    title: { control: 'text' },
    content: { control: 'text' },
    cssClasses: {
      control: {
        type: 'select',
        options: ['tress__content--sushi', 'tress__content--flame', 'tress__content--westside', 'tress__content--java']
      },
    },
  },
}

const Template = (args) => <Tile {...args} />;

export const TileWithContent = Template.bind({});

TileWithContent.args = {
  header: 'Header Text',
  title: 'Title Text',
  content: 'Content Text',
  cssClasses: 'tress__content--sushi'
}