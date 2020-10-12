import React from 'react';
import {DailyPositive, TotalPositive, DailyTestsProcessed, TotalTestsProcessed} from "./containers";
import {Layout, TileWithCountUp } from "./components";

export const App = () => {

  return (
    <Layout>
      <div className="row_one">
        <DailyPositive/>
        <TotalPositive/>
        <DailyTestsProcessed/>
        <TotalTestsProcessed/>

        <TileWithCountUp
          header="Sales"
          title="Week on Week"
          content={{
            value: 20,
            suffix: '%'
          }}
          cssClasses={['tress__content--java']}
        />

      </div>
    </Layout>
  );
}

