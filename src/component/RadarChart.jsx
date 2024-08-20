import ReactECharts from 'echarts-for-react';

const RadarChart = () => {

    const option = {
        title: {
          text: 'Basic Radar Chart'
        },
        legend: {
        //   data: ['Allocated Budget', 'Actual Spending']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'IT', max: 100 },
            { name: 'Finance', max: 100 },
            { name: 'Marketing', max: 100 },
            { name: 'HR', max: 100 },
            { name: 'Something', max: 100 },
            { name: 'random', max: 100 },
            { name: 'test', max: 100 },
          ]
        },
        series: [
          {
            name: 'Identify & Access Management Score',
            type: 'radar',
            data: [
              {
                value: [90,85,80,95,70,40,80],
                // name: 'Allocated Budget'
              },
            //   {
            //     value: [90,85,80,95,70,40,80],
            //     // name: 'Allocated Budget'
            //   },
            ]
          }
        ]
      };
      
  return (
    <>
    <ReactECharts option={option} />
    </>
  )
}

export default RadarChart