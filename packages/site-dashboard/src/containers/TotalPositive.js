import React from "react";
import Numbro from "numbro";
import { Tile, TileLoader } from "../components";
import { useTotalPositive } from "../hooks/useTotalPositive";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const TotalPositive = () => {
  const { isLoading, isError, data } = useTotalPositive();

  if (isLoading) {
    return <TileLoader />;
  }

  if (isError) {
    return <div />;
  }

  return (
    <Tile
      header="Total people tested positive"
      title="Cases in United Kingdom"
      content={Numbro(data.data[0].value).format({ thousandSeparated: true })}
      cssClasses={["tress__content--flame"]}
    />
  );
};
