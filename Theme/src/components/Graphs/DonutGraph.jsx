import React from "react";
import Chart from "react-apexcharts";

const DonutGraph = () => {
  const state = {
    options: {},
    series: [10, 15, 1, 5, 6, 3, 8, 4, 9, 13, 14],
    labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
  };

  return (
    <div className="donut">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="380"
      />
    </div>
  );
};
export default DonutGraph;
