import React from "react";
import Numbro from "numbro";
import { useTotalTestsProcessed } from "../hooks/useTotalTestsProcessed";
import { Tile, TileLoader } from "../components";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TotalTestsProcessed = () => {
  const { isLoading, isError, data } = useTotalTestsProcessed();

  if (isLoading) {
    return <TileLoader />;
  }

  if (isError) {
    return <div />;
  }

  return (
    <Tile
      header="Tests Processed"
      title="Total (pillars 1 & 2)"
      content={Numbro(data.data[0].value).format({ thousandSeparated: true })}
      cssClasses={["tress__content--java"]}
    />
  );
};
