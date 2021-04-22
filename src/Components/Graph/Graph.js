import React, { Component } from "react";
import ReactApexCharts from "react-apexcharts";
import "./Graph.css";

export class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [87, 40, 60, 51, 42, 109, 100],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "category",
          categories: ['Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat', 'Sun'],
          labels: {
            style: {
              fontFamily:' Montserrat',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
            }
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
          axisTicks: {
            show: true,
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        colors: ["#789764"],
      },
    };
  }

  render() {
    return (
      <div className="graph-containers">
        <div className="header-graph">
          <p className="left-text">Revenue</p>
          <p className="text-graph">
            Feb - Mar 2021{" "}
            <i class="far fa-calendar-minus" style={{ paddingLeft: "10px" }} />
          </p>
        </div>
        <div className="graph-sec">
          <ReactApexCharts
            options={this.state.options}
            series={this.state.series}
            type="area"
            height={200}
          />
        </div>
        <div className="footer-graph">
          <p className='top-text'>Total Revenue</p>
          <p className='middle-text'>$76685.41</p>
          <p className='bottom-text'><i class="fas fa-arrow-up" style={{paddingRight:'10px'}} />7.00%</p>
        </div>
      </div>
    );
  }
}

export default Graph;
