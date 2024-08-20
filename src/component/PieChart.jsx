import ReactECharts from 'echarts-for-react';

const PieChart = () => {

  const option = {
    // title: {
    //   text: 'Referer of a Website',
    //   subtext: 'Fake Data',
    //   left: 'center'
    // },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '100%',
        data: [
          { value: 85, name: 'IT' },
          { value: 80, name: 'Finance' },
          { value: 75, name: 'Marketing' },
          { value: 90, name: 'HR' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  return (
    <>
    <ReactECharts option={option}/>
    </>
  );
}

export default PieChart;