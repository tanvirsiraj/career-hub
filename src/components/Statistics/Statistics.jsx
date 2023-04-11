import React from 'react';
import './Statistics.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Statistics = () => {
    const data = [
        {
            assignment_id: 1,
            assignment_name: 'A1',
            number: 60
        },
        {
            assignment_id: 2,
            assignment_name: 'A2',
            number: 60
        },
        {
            assignment_id: 3,
            assignment_name: 'A3',
            number: 60
        },
        {
            assignment_id: 4,
            assignment_name: 'A4',
            number: 60
        },
        {
            assignment_id: 5,
            assignment_name: 'A5',
            number: 60
        },
        {
            assignment_id: 6,
            assignment_name: 'A6',
            number: 60
        },
        {
            assignment_id: 7,
            assignment_name: 'A7',
            number: 60
        },
        {
            assignment_id: 8,
            assignment_name: 'A8',
            number: 60
        }
    ]
    return (
        <div>
            <div className="banner-top">
                <img src="/public/heroImg/Vector-1.png" alt="" />
            </div>
            <div className="banner-bottom">
                <img src="/public/heroImg/Vector.png" alt="" />
            </div>
            <div className="container">
                <h1 className='page-title'>Statistics</h1>
                <div className="simpleAreaCart d-flex justify-content-center">
                    <AreaChart
                        width={400}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis

                            dataKey="assignment_name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>

                </div>
            </div>
        </div>
    );
};

export default Statistics;