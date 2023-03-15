import React from "react";
import { Container } from "react-bootstrap";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { useLoaderData } from "react-router-dom";
import Rechart from "./Rechart";

const Static = () => {
  const data1 = useLoaderData();
  const total = data1.data;
  let data = [];
  let da = [];
  total.map(
    (i) =>
      `${da} =[...${da},${i.total}]
    
        `
  );

  return (
    <div className="mt-5">
      <Container></Container>
    </div>
  );
};

export default Static;
