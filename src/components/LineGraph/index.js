import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { lineGraphData } from "./data";
import styled from "styled-components";

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

const LineGraphComponent = () => {
  const CustomToolTip = ({ payload }) => {
    return (
      <ToolTip>
        <p
          style={{
            fontWeight: `600`,
            padding: "5px",
          }}
        >{`${payload[0]?.payload?.State}`}</p>
        <p>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
        <p>{`Population (millions) : ${payload[0]?.payload["Population (millions)"]}`}</p>
        <p>{`Median Household Income (USD) : ${payload[0]?.payload["Median Household Income (USD)"]}`}</p>
        <p>{`Total CO2 Emissions (metric tons) : ${payload[0]?.payload["Total CO2 Emissions (metric tons)"]}`}</p>
        <p>{`Total Revenue from Electricity Sales (USD) : ${payload[0]?.payload["Total Revenue from Electricity Sales (USD)"]}`}</p>
      </ToolTip>
    );
  };

  const tickFormatterY = (value) => {
    return `${value}%`;
  };

  return (
    <>
      <p style={{ fontSize: 30 }}>
        Line Chart Distribution Renewable Energy % vs State
      </p>
      <ResponsiveContainer width="90%" aspect={4.0 / 3.0}>
        <LineChart data={lineGraphData.d.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Abr" />
          <YAxis tickFormatter={tickFormatterY} />
          <Tooltip content={<CustomToolTip />} />
          <Legend />
          <Line type="monotone" dataKey="Renewable Energy %" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineGraphComponent;
