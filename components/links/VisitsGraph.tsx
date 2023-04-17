import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface VisitsGraphProps {
  data: any[]
}

export const VisitsGraph:React.FC<VisitsGraphProps> = ({ data }) => {
  if (data.length === 0) {
    return (<></>);
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="visits" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  );
}
