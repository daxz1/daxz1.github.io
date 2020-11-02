/*global describe, test */

import React from "react";
import { create } from "react-test-renderer";
import { Tile } from "./Tile";

describe("Tile Component", () => {
  test("Matches the snapshot", () => {
    const Application = create(
      <Tile
        header="Header"
        title="Title"
        content="Content"
        cssClasses={["tress__content--sushi"]}
      />
    );
    expect(Application.toJSON()).toMatchSnapshot();
  });
});
