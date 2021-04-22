import React from "react";
import Chart from "react-apexcharts";
import "./PieChart.css";

function PieChart(props) {
  const { label, serie, text } = props;
  const options = {
    legend: {
      position: "bottom",
      show: true,
    },
    labels: label,
    colors: ["#725E9C", "#5C8F94", "#EBA45E", "#E4EAEB"],
  };
  const series = serie;

  return (
    <div className="pie-container">
      <div className="header-pie">
        <p className="text">{text}</p>
        <p className="dots">...</p>
      </div>
      <div className="pie">
        <Chart options={options} series={series} type="pie" width='100%'/>
      </div>
    </div>
  );
}

export default PieChart;
