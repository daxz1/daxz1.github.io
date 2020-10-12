import React from "react";
import Numbro from "numbro";
import {Tile, TileLoader} from "../components";
import {useCases} from "../hooks/useCases";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const DailyPositive = () => {
  const { isLoading, data, isError } = useCases();

  if (isLoading) {
    return (<TileLoader />)
  }

  if (isError) {
    return (<div />)
  }

  return (
    <Tile
      header="Daily people tested positive"
      title="Cases in United Kingdom"
      content={Numbro(data.data[0].newCases).format({thousandSeparated: true})}
      cssClasses={['tress__content--sushi']}
    />
  )
}