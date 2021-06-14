import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.datapoints.map(datapoint => datapoint.value);
    const maxValue = Math.max(...dataPointValue);

    return <div className="chart">
        {props.datapoints.map(datapoint => {
            return <ChartBar key={datapoint.label}
                value={datapoint.value}
                maxValue={maxValue}
                label={datapoint.label} />
        })}
    </div>
}

export default Chart;