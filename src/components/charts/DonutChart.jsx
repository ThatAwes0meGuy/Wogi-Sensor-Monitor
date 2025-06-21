import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";

const DonutChartCompact = ({ title, data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => setActiveIndex(index);

  const renderLabel = ({ cx, cy, midAngle, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 16;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const item = data[index];
  
    return (
      <text
        x={x}
        y={y}
        fill="#334155"
        fontSize={11}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {x > cx ? "←" : "→"} {item.name}
        <tspan x={x} dy={14} fontWeight="500">
          ({item.value.toFixed(1)}%)
        </tspan>
      </text>
    );
  };
  
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm transition w-full">
      <h3 className="text-sm font-bold text-gray-800 mb-3 text-center">{title}</h3>

      <div className="h-52">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius="50%"
              outerRadius="90%"
              paddingAngle={2}
              onMouseEnter={onPieEnter}
              label={renderLabel}
              labelLine={false}
              isAnimationActive
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
              contentStyle={{
                fontSize: "0.75rem",
                borderRadius: "6px",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DonutChartCompact;
