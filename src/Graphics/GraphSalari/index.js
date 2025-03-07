import React, { PureComponent } from 'react';
import {
    ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
        name: 'Page A', uv: 590, pv: 800, amt: 1400,
    },
    {
        name: 'Page B', uv: 868, pv: 967, amt: 1506,
    },
    {
        name: 'Page C', uv: 1397, pv: 1098, amt: 989,
    },
    {
        name: 'Page D', uv: 1480, pv: 1200, amt: 1228,
    },
    {
        name: 'Page E', uv: 1520, pv: 1108, amt: 1100,
    },
    {
        name: 'Page F', uv: 1400, pv: 680, amt: 1700,
    },
];

export default class GraphSalari extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/94sebfL8/';

    render() {
        return (
            <ComposedChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <XAxis dataKey="name" />
                <Bar dataKey="uv" barSize={20} fill="red" />
            </ComposedChart>
        );
    }
}
