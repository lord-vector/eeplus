import React from "react";
import styled from "styled-components";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { barGraphData } from "./data";

const data = [
  { name: "Category 1", value: 200 },
  { name: "Category 2", value: 300 },
  { name: "Category 3", value: 100 },
  { name: "Category 4", value: 150 },
  { name: "Category 5", value: 50 },
];

const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

const BarGraphComponent = () => {
  const CustomToolTip = ({ payload }) => {
    return (
      <ToolTip>
        <p
          style={{
            borderLeft: `5px solid ${payload[0]?.payload?.color}`,
            padding: "5px",
          }}
        >{`${payload[0]?.payload?.Month}`}</p>
        <p>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
        <p>{`Average Temperature ( F) : ${payload[0]?.payload["Average Temperature ( F)"]}`}</p>
        <p>{`Avg. Household Consumption (kWh) : ${payload[0]?.payload["Avg. Household Consumption (kWh)"]}`}</p>
        <p>{`Avg. Commercial Consumption (kWh) : ${payload[0]?.payload["Avg. Commercial Consumption (kWh)"]}`}</p>
        <p>{`Avg. Industrial Consumption (kWh) : ${payload[0]?.payload["Avg. Industrial Consumption (kWh)"]}`}</p>
        <p>{`Total Electricity Generation (GWh) : ${payload[0]?.payload["Total Electricity Generation (GWh)"]}`}</p>
        <p>{`Total Revenue from Electricity Sales (USD) : ${(
          payload[0]?.payload["Total Revenue from Electricity Sales (USD)"] /
          1000000
        ).toFixed(2)}M`}</p>
      </ToolTip>
    );
  };
  const tickFormatterX = (value) => {
    return `$${(value / 1000000).toFixed(2)}M`;
  };
  return (
    <>
      <p style={{ fontSize: 30 }}>
        Bar Distribution based on Revenue for Year 2022(Month wise)
      </p>
      <ResponsiveContainer width="90%" aspect={4.0 / 2.5}>
        <BarChart data={barGraphData.d.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Month" />
          <YAxis tickFormatter={tickFormatterX} />
          <Tooltip content={<CustomToolTip />} cursor={true} />
          <Legend />
          <Bar
            dataKey="Total Revenue from Electricity Sales (USD)"
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={data[index % data.length]?.color}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarGraphComponent;
