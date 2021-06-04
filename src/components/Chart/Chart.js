import React from 'react';
import "../Chart/Chart.css"
import ChartBar from "./ChartBar";


function Chart(props) {

    const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValue)


    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint =>
                <ChartBar key={dataPoint.id}
                          value={dataPoint.value}
                          maxValue={totalMax}
                          label={dataPoint.label}
                />)}

        </div>
    )
}

export default Chart;