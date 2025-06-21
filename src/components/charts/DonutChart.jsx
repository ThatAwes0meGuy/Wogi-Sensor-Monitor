import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const DonutChart = ({ title, data, centerLabel = null }) => {
  const renderCenterLabel = () =>
    centerLabel ? (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-gray-800 text-lg font-bold"
      >
        {centerLabel}
      </text>
    ) : null;

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
      <h3 className="text-sm font-bold text-gray-800 mb-4">{title}</h3>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={100}
              paddingAngle={3}
              isAnimationActive={true}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value.toFixed(1)}%`, name]}
              contentStyle={{
                fontSize: '0.75rem',
                borderRadius: '6px',
              }}
            />
            {renderCenterLabel()}
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-6 space-y-2 text-sm">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span
                className="inline-block w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="text-gray-800 font-semibold">
              {item.value.toFixed(1)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
