import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";
import { pieChartData } from "./data";

const data = [
  { name: "Category 1", value: 200 },
  { name: "Category 2", value: 300 },
  { name: "Category 3", value: 100 },
  { name: "Category 4", value: 150 },
  { name: "Category 5", value: 50 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0080"];

const ToolTip = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 8px;
  width: fit-content;
  height: fit-content;
  overflow: auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  p {
    margin: 0px;
    padding: 0px;
  }
`;

const PieChartComponent = () => {
  const CustomToolTip = ({ payload }) => {
    return (
      <ToolTip>
        <p
          style={{
            borderLeft: `5px solid ${payload[0]?.payload?.color}`,
            padding: "5px",
          }}
        >{`${payload[0]?.payload?.name}`}</p>
        <p>{`Consumption (kWh) : ${payload[0]?.payload["Consumption (kWh)"]}`}</p>
        <p>{`Population (millions) : ${payload[0]?.payload["Population (millions)"]}`}</p>
        <p>{`Renewable Energy % : ${payload[0]?.payload["Renewable Energy %"]}`}</p>
        <p>{`Total Energy Consumption (GWh) : ${payload[0]?.payload["Total Energy Consumption (GWh)"]}`}</p>
        <p>{`Avg. Household Consumption (kWh) : ${payload[0]?.payload["Avg. Household Consumption (kWh)"]}`}</p>
        <p>{`Avg. Commercial Consumption (kWh) : ${payload[0]?.payload["Avg. Commercial Consumption (kWh)"]}`}</p>
        <p>{`Avg. Industrial Consumption (kWh) : ${payload[0]?.payload["Avg. Industrial Consumption (kWh)"]}`}</p>
      </ToolTip>
    );
  };
  const customLabel = (value) => {
    return `${value["Consumption (kWh)"]} (kWh)`;
  };
  return (
    <>
      <p style={{ fontSize: 30 }}>Distribution based on Consumption</p>
      <ResponsiveContainer width="50%" aspect={1}>
        <PieChart>
          <Pie
            dataKey="Consumption (kWh)"
            isAnimationActive={true}
            data={pieChartData.d.data}
            cx="center"
            cy="center"
            innerRadius={"50%"}
            outerRadius={"80%"}
            fill="#8884d8"
            label={customLabel}
          >
            {pieChartData.d.data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomToolTip />} cursor={true} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

export default PieChartComponent;
