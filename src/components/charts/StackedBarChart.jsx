import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";
  
  // Refined muted palette
  const colors = {
    Operational: "#16a34a",
    Watch: "#eab308",
    Caution: "#f97316",
    Danger: "#dc2626",
  };
  
  const StackedBarChart = ({ title, data }) => {
    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition w-full">
        <h3 className="text-xs font-bold text-gray-800 mb-3">{title}</h3>
  
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} stackOffset="expand">
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "#64748b" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
                tick={{ fontSize: 10, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={30}
              />
              <Tooltip
                formatter={(val, name) => [`${(val * 100).toFixed(1)}%`, name]}
                contentStyle={{
                  fontSize: "0.75rem",
                  borderRadius: "6px",
                }}
              />
              {Object.keys(colors).map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  fill={colors[key]}
                  isAnimationActive
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        {/* Horizontal Legend */}
        <div className="flex items-center justify-center gap-4 mt-3 flex-wrap text-xs text-gray-600">
          {Object.entries(colors).map(([label, color]) => (
            <div key={label} className="flex items-center gap-1">
              <span
                className="inline-block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default StackedBarChart;
  