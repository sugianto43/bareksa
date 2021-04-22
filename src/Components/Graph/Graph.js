import React, { Component } from "react";
import ReactApexCharts from "react-apexcharts";
import "./Graph.css";

export class Graph extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
          axisBorder: {
            show: false
          }
        },
        yaxis: {
          axisBorder: {
            show: true
          }
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
        colors: ['#789764']
      },
    
    
    };
  }

  render() {
    return (
      <div className="graph-containers">
        <div className="header-graph">
          <p className='left-text'>Revenue</p>
          <p className="text-graph">Feb - Mar 2021  <i class="far fa-calendar-minus" style={{paddingLeft: '10px'}}/></p>
          
        </div>
        <div className="graph-sec">
        <ReactApexCharts options={this.state.options} series={this.state.series} type="area" height={230} />
        </div>
      </div>
    );
  }
}

export default Graph;
