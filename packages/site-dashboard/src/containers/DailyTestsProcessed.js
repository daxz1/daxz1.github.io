import React from 'react';
import Numbro from "numbro";
import { useDailyTestsProcessed} from "../hooks/useDailyTestsProcessed";
import { Tile, TileLoader } from "../components";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const DailyTestsProcessed = () => {

  const { isLoading, isError, data } = useDailyTestsProcessed();

  if (isLoading) {
    return (<TileLoader />);
  }

  if (isError) {
    return (<div />);
  }

  return <Tile
    header="Tests Processed"
    title="Daily (pillars 1 & 2)"
    content={Numbro(data.data[0].value).format({thousandSeparated: true})}
    cssClasses={['tress__content--java']}
  />;
}