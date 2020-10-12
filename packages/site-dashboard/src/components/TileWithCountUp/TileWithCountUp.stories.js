import React from "react";
import { TileWithCountUp } from "./TileWithCountUp";

export default {
  title: 'components/TileWithCountUp',
  component: TileWithCountUp,
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
};

export const StandardView = () => <TileWithCountUp />;

StandardView.storyName = 'Default View';