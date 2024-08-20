import ReactECharts from 'echarts-for-react';

const LineChart2 = () => {

  const option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      // left: 'center'
    },
    xAxis: {
      type: 'category',
      data: ['January', 'Feburary', 'March', 'April', 'May']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [5,6,7,8,9],
        type: 'line'
      }
    ]
  };

  return (
    <>
      <ReactECharts option={option} />
    </>
  );
}

export default LineChart2