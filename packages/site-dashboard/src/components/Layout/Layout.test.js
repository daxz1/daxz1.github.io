/*global describe, test */

import React from "react";
import { create } from "react-test-renderer";
import { Layout } from "./Layout";

describe("Layout Component", () => {
  test("Matches the snapshot", () => {
    const Application = create(
      <Layout>
        <div>Layout</div>
      </Layout>
    );
    expect(Application.toJSON()).toMatchSnapshot();
  });
});
