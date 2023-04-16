import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ViewsGraphProps {
  link: any
}

export const ViewsGraph:React.FC<ViewsGraphProps> = ({ link }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!link) {
      return
    }

    fetch(`/api/v1/links/${link.id}/views`)
      .then((res) => res.json())
      .then((data) => {
        console.log('DATA');
        console.log(data);
        setData(data['views'].reverse() || []);
        setIsLoading(false);
      });
  }, [link]);

  if (isLoading) {

  }
  if (data.length === 0) {
    return (<p>No data</p>);
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
