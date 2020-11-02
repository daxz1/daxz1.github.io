/*global describe, test */

import React from "react";
import { create } from "react-test-renderer";
import { TileWithCountUp } from "./TileWithCountUp";

describe("TileWithCountUp Component", () => {
  test("Matches the snapshot", () => {
    const Application = create(
      <TileWithCountUp
        header="Sales"
        title="Week on Week"
        content={{
          value: 20,
          suffix: "%",
        }}
        cssClasses={["tress__content--java"]}
      />
    );
    expect(Application.toJSON()).toMatchSnapshot();
  });
});
