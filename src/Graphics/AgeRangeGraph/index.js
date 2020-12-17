import React, { PureComponent } from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
         uv: 1220, pv: 1400, amt: 1200,
    },
    {
         uv: 2000, pv: 1200, amt: 2210,
    },
    {
        uv: 1000, pv: 1100, amt: 2210,
    },
    {
        uv: 1000, pv: 1000, amt: 2210,
    },
    {
        uv: 1000, pv: 500, amt: 110,
    },
    {
        uv: 1000, pv: 100, amt: 100,
    },


];

export default class AgeRangeGraph extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/9hjfkp73/';

    render() {
        return (
            <BarChart
                width={450}
                height={200}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20,
                }}
                >
                <Bar dataKey="pv" stackId="a" fill="red" />
                <Bar dataKey="amt" stackId="a" fill="black" />
                <Bar dataKey="uv" fill="red" />
            </BarChart>
        );
    }
}
