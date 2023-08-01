import React from "react";
import { Treemap, ResponsiveContainer, Cell } from "recharts";
import { treeGraphData } from "./data";

const TreemapComponent = () => {
  const CustomContent = ({
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    payload,
  }) => {
    // Add your custom content here
    // You can access the data for the block using payload (entry in this example)
    console.log(payload);
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          //   style={{ fill: COLORS[index % COLORS.length], fillOpacity: 0.8 }}
        />
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {payload.Region}
        </text>
      </g>
    );
  };
  return (
    <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
      <Treemap
        data={treeGraphData.d.data}
        dataKey="Total Outage Time (hours)"
        ratio={4 / 3}
        stroke="#fff"
        fill="#8884d8"
      >
        {treeGraphData.d.data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={entry.color}
            content={<CustomContent />}
          />
        ))}
      </Treemap>
    </ResponsiveContainer>
  );
};

export default TreemapComponent;
