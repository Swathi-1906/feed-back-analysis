import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const FeedbackChart = ({ data }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Feedback Chart</h2>
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="index" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="feedback" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default FeedbackChart;