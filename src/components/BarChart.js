import React from "react";
import { Bar } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";

import { setChartOption } from "../store/actions/action";
import Dropdown from "./UI/Dropdown";

const chartOptions = new Map();
chartOptions.set("population", { name: "Population" });
chartOptions.set("rotation_period", { name: "Rotation period" });
chartOptions.set("orbital_period", { name: "Orbital period" });
chartOptions.set("diameter", { name: "Diameter" });

const getOptionName = (id) => {
  return chartOptions.get(id).name;
};

const BarChart = () => {
  const dispatch = useDispatch();
  const chartOption = useSelector((state) => state.barchart.selChartOption);
  const planets = useSelector((state) => state.planets.planets);

  const getChartData = () => {
    return {
      labels: planets.map((p) => p.name),
      datasets: [
        {
          label: getOptionName(chartOption),
          backgroundColor: "rgba(75,192,192,1)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 1,
          data: planets.map((p) => p[chartOption]),
        },
      ],
    };
  };

  const getChartOptions = () => {
    return {
      title: {
        display: true,
        text: getOptionName(chartOption),
        fontSize: 20,
      },
      legend: {
        display: true,
        position: "top",
      },
      maintainAspectRatio: false,
      responsive: true,
    };
  };
  const handleChartOptionChange = (e) => {
    dispatch(setChartOption(e.target.value));
  };

  return (
    <section className="planets planets-barchart">
      <h2>Bar chart</h2>
      <Dropdown
        data={[...chartOptions.entries()]}
        onOptionChange={handleChartOptionChange}
        selOptionId={chartOption}
      />
      <div className="barchart-container">
        <Bar data={getChartData()} options={getChartOptions()} />
      </div>
    </section>
  );
};

export default BarChart;
