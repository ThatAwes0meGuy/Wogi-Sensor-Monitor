import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Dot,
  } from "recharts";
  
  const HealthScoreLineChart = ({ title = "Plant Health Score Trend", data }) => {
    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition w-full">
        <h3 className="text-sm font-bold text-gray-800 mb-3">{title}</h3>
  
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10, fill: "#64748b" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                domain={[0, 100]}
                tickFormatter={(val) => `${val}%`}
                tick={{ fontSize: 10, fill: "#94a3b8" }}
                axisLine={false}
                tickLine={false}
                width={30}
              />
              <Tooltip
                formatter={(val) => `${val}%`}
                contentStyle={{
                  fontSize: "0.75rem",
                  borderRadius: "6px",
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ r: 3, strokeWidth: 2, fill: "#16a34a" }}
                activeDot={{ r: 5 }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default HealthScoreLineChart;
  