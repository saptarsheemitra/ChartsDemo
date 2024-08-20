import ReactECharts from 'echarts-for-react';

const BarChart = () => {

    const option = {
        xAxis: {
            type: 'category',
            data: ['HQ', 'Branch Office 1', 'Branch Office 2', 'Remote Workers']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [95, 92, 90, 88],
                type: 'bar'
            }
        ]
    };

    return (
        <>
            <ReactECharts option={option} />
        </>
    )
}

export default BarChart