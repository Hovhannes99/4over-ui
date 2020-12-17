import React, { PureComponent } from 'react';
import {
    ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
    Legend,
} from 'recharts';

const data = [
    {
         uv: 590, pv: 1200, amt: 1800, color : "red",
    },
    {
         uv: 868, pv: 400, amt: 606, color : "black"
    },
];

export default class Example extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/shjsn5su/';

    render() {
        return (
            <ComposedChart
                layout="vertical"
                width={300}
                height={200}
                data={data}
                margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Bar dataKey="pv" barSize={20} fill="red"  />
            </ComposedChart>
        );
    }
}
