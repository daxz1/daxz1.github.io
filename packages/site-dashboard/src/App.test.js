import React from "react";
import { create } from "react-test-renderer";
import { App } from "./App";

// Dummy test
describe("Application component", () => {
  test("Matches the snapshot", () => {
    const Application = create(<App />);
    expect(Application.toJSON()).toMatchSnapshot();
  });
});
