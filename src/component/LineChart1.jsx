import ReactECharts from 'echarts-for-react';

const LineChart1 = () => {

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
        data: [80, 82, 85, 88, 90],
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

export default LineChart1