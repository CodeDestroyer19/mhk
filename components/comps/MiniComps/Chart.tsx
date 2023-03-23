import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from "recharts";

interface ChartData {
  date: string;
  price: number;
}

interface Props {
  data: ChartData[];
}

export default function TokenChart({ data }: Props) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" />
    </LineChart>
  );
}
