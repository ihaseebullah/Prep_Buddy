import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function Chart({ results }) {
  const [chartData, setChartData] = useState([]);
  function calculateResults() {
    let chartDataCreated = [];
    if (results.length > 0) {
      results.map((result) => {
        chartDataCreated = [
          ...chartDataCreated,
          { data: [result.correctPoints] },
        ];
      });
    }
    setChartData(chartDataCreated);
  }
  useEffect(() => {
    calculateResults();
  }, [results]);
  return (
    <BarChart
      series={chartData}
      height={290}
      xAxis={[{ data: ["This Week So Far"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
