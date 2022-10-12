import React, { useContext } from 'react';
import { dataContext } from '../../layouts/Main';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = useContext(dataContext);
    console.log(data)
    return (
        <div className='m-20'>
            <h2 className='m-16 text-2xl font-bold'>Chart</h2>
            <ResponsiveContainer width="100%" height={200} >
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: 'black' }} tickLine={{ stroke: 'black' }} />
                    <YAxis tick={{ fill: 'black' }} tickLine={{ stroke: 'black' }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="red" fill="blue" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
export default Statistics;