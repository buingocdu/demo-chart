import React from 'react';
import Chart from 'react-apexcharts';
const MixedChart = () => {
    const state = {
        height: 350,
        type: 'bar',
        options: {
          chart: {
            stacked: true
          },
          stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
          },
          plotOptions: {
            bar: {
              columnWidth: '50%'
            }
          },
          colors: [],
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'light',
              type: 'vertical',
              shadeIntensity: 0.25,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 0.7,
              stops: [50, 100]
            }
          },
          labels: [
            '01/01/2003',
            '02/01/2003',
            '03/01/2003',
            '04/01/2003',
            '05/01/2003',
            '06/01/2003',
            '07/01/2003',
            '08/01/2003',
            '09/01/2003',
            '10/01/2003',
            '11/01/2003'
          ],
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime'
          },
          yaxis: [
            {
              min:0,
              title: {
                text: 'Series A',
              },
              seriesName:['Facebook','Vine','NEW','NEW2']
            },
            {
                min:0,
                opposite: true,
                title: {
                  text: 'Series BB',
                },
                seriesName:'Dribbble'
              }   
          ],
          tooltip: {
            shared: true,
            intersect: false,
            y: {
              formatter: function (y) {
                if (typeof y !== 'undefined') {
                  return y.toFixed(0) + ' views';
                }
                return y;
              }
            }
          },
          legend: {
            labels: {
              useSeriesColors: true
            },
            markers: {
              customHTML: [
                function () {
                  return '';
                },
                function () {
                  return '';
                },
                function () {
                  return '';
                }
              ]
            }
          }
        },
        series: [
          {
            name: 'Facebook',
            type: 'bar',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
          },
          {
            name: 'Vine', 
            type: 'bar',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          },
          {
            name: 'NEW',
            type: 'bar',
            data: [44, 55, 42, 67, 22, 43, 21, 41, 56, 27, 43]
          },
          {
            name: 'NEW2',
            type: 'bar',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
          },
          {
            name: 'Dribbble',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
          }
        ]
      };
    return (
        <div>
            <div id="chart">
                <Chart {...state} />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}
export default MixedChart;
