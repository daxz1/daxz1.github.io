import React from "react";
import { TileLoader } from "./TileLoader";

export default {
  title: 'components/TileLoader',
  component: TileLoader
};

export const StandardView = () => <TileLoader />;

StandardView.storyName = 'Default View';