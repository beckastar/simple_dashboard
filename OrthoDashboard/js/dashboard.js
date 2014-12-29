//chart1
$(function () {
    $('#chart1').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 1,//null,
            plotShadow: false,

        },
        title: {
            text: 'Minutes of Vibration per Day'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            data: [
                ['Paid moneys',   45.0],
                ['Came back lots',       26.8],
                ['Something',    8.5],
                ['Monkey',     6.2],
                ['Popsicles',   0.7]
            ]
        }]
    });
});
//chart2
 $(function () {
    $('#chart2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Shoppers over time'
        },
        xAxis: {
            categories: ['January', 'February', 'March']
        },
        yAxis: {
            title: {
                text: 'Number of people'
            }
        },
        series: [{
            name: 'Bought stuff',
            data: [1, 0, 4]
        }, {
            name: 'Did not buy stuff',
            data: [5, 7, 3]
        }]
    });
  });
//chart3
$(function () {
  $('#chart3').highcharts({
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Shoppers over time'
      },
      xAxis: {
          categories: ['January', 'February', 'March']
      },
      yAxis: {
          title: {
              text: 'Number of people'
          }
      },
      series: [{
          name: 'Bought stuff',
          data: [1, 0, 4]
      }, {
          name: 'Did not buy stuff',
          data: [5, 7, 3]
      }]
  });
});


//TODO: create array of milliseconds to convert
//chart4
  $(function () {
    $(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });
      $('#line_graph').highcharts({
          chart: {
              type: 'column',
          },
//           plotOptions: {
//          column: {
//         pointPadding: 0,
//         borderWidth: 0,
//         groupPadding: 0,
//         shadow: false
//     }
// },
          title: {
              text: 'Minutes per Day'
          },
          xAxis: {
              type: 'datetime',
              tickPixelInterval: 150
          },
          yAxis: {
              title: {
                  text: 'Value'
              },
              plotLines: [{
                  value: 0,
                  width: 1,
                  color: '#808080'
              }]
          },

          legend: {
              enabled: false
          },
          series: [{
              name: '1/1',
               data: [1]
            },
            {
              name:'1/2',
              data:[2]

          },
            {
              name:'1/3',
              data:[2]

          },
            {
              name:'1/4',
              data:[2]

          },
            {
              name:'1/5',
              data:[2]

          },
            {
              name:'1/6',
              data:[2]

          },
            {
              name:'1/7',
              data:[2]

          },
            {
              name:'1/8',
              data:[2]

          },
            {
              name:'1/9',
              data:[2]

          }
          ]
      });
    });
  });