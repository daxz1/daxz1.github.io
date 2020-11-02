import React from "react";
import { TileWithCountUp } from "./TileWithCountUp";

export default {
  title: "components/TileWithCountUp",
  component: TileWithCountUp,
  argTypes: {
    header: { control: "text" },
    title: { control: "text" },
    content: { control: "object" },
    cssClasses: {
      control: {
        type: "select",
        options: [
          "tress__content--sushi",
          "tress__content--flame",
          "tress__content--westside",
          "tress__content--java",
        ],
      },
    },
  },
};

const Template = (args) => <TileWithCountUp {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  header: "Header Text",
  title: "Title Text",
  content: {
    value: 20,
    suffix: "%",
  },
  cssClasses: "tress__content--sushi",
};
