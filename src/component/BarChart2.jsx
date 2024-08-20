import ReactECharts from 'echarts-for-react';

const BarChart2 = () => {

    const option = {
        xAxis: {
            type: 'category',
            data: ['Request 1', 'Request 2', 'Request 3', 'Request 4', 'Request 5']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [5,4,3,2,1],
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

export default BarChart2