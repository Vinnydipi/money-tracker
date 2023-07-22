import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

interface dataPoint
{
    value: number;
    label: string;
}
interface props
{
    dataPoints: dataPoint [];
    
}

const Chart: React.FC<props> = ({dataPoints}) =>
{
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);

    return (
        <div className='chart'>
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}
                />
            ))}
        </div>
    )
}

export default Chart;