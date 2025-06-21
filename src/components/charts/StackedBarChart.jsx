import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
  } from "recharts";
  
  const colors = {
    Operational: "#16a34a", // green-600
    Watch: "#eab308",       // yellow-500
    Caution: "#f97316",     // orange-500
    Danger: "#dc2626",      // red-600
  };
    
  const StackedBarChart = ({ title, data }) => {
    return (
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition w-full">
        <h3 className="text-sm font-bold text-gray-800 mb-4">{title}</h3>
  
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} stackOffset="expand">
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <YAxis tickFormatter={(val) => `${(val * 100).toFixed(0)}%`} />
              <Tooltip
                formatter={(val, name) => [`${(val * 100).toFixed(1)}%`, name]}
              />
              <Legend iconSize={12} />
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
      </div>
    );
  };
  
  export default StackedBarChart;
  