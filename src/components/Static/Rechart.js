import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
const Rechart = ({ total }) => {
  console.log(total);
  const data = [{ name: "Page A", uv: 400, pv: 2400, amt: 2400 }];
  return (
    <div>
      {" "}
      <LineChart
        width={800}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />

        <YAxis />
      </LineChart>
    </div>
  );
};

export default Rechart;
