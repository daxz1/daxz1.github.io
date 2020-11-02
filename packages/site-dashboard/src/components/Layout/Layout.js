import React from "react";

/**
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export const Layout = ({ children }) => (
  <div className="wrapper bg-colour bg-colour--woodsmoke">
    <div className="grid">{children}</div>
  </div>
);
