import ReactECharts from 'echarts-for-react';

const HistogramChart = () => {

  const colorList = [
    '#4f81bd',
    '#c0504d',
    '#9bbb59',
    '#604a7b',
    '#948a54',
    '#e46c0b'
  ];
  const data = [
    [0, 1, 30, 'A'],
    [1, 2, 25, 'B'],
    [2, 4, 20, 'C'],
    [4, 8, 15, 'D'],
    [8, 10, 10, 'E'],
  ].map(function (item, index) {
    return {
      value: item,
      itemStyle: {
        color: colorList[index]
      }
    };
  });
  const option = {
    title: {
      text: 'Histogram',
      left: 'center'
    },
    tooltip: {},
    xAxis: {
      scale: true
    },
    yAxis: {},
    series: [
      {
        type: 'custom',
        renderItem: function (params, api) {
          var yValue = api.value(2);
          var start = api.coord([api.value(0), yValue]);
          var size = api.size([api.value(1) - api.value(0), yValue]);
          var style = api.style();
          return {
            type: 'rect',
            shape: {
              x: start[0],
              y: start[1],
              width: size[0],
              height: size[1]
            },
            style: style
          };
        },
        label: {
          show: true,
          position: 'top'
        },
        dimensions: ['from', 'to', 'profit'],
        encode: {
          x: [0, 1],
          y: 2,
          tooltip: [0, 1, 2],
          itemName: 3
        },
        data: data
      }
    ]
  };

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}

export default HistogramChart;