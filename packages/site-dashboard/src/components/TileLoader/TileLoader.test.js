/*global describe, test*/

import React from "react";
import { create } from "react-test-renderer";
import { TileLoader } from "./TileLoader";

describe("TileLoader Component", () => {
  test("Matches the snapshot", () => {
    const Application = create(<TileLoader />);
    expect(Application.toJSON()).toMatchSnapshot();
  });
});
