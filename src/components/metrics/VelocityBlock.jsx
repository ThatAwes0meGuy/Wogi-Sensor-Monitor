const velocityData = [
    { axis: "H", value: 2.71, unit: "mm/s", color: "bg-green-500" },
    { axis: "V", value: 1.49, unit: "mm/s", color: "bg-yellow-500" },
    { axis: "A", value: 2.89, unit: "mm/s", color: "bg-red-500" },
  ];
  
  const VelocityBlock = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h4 className="text-xs font-bold text-gray-700 mb-3">Velocity (mm/s)</h4>
      <div className="space-y-2">
        {velocityData.map((v) => (
          <MetricBar key={v.axis} {...v} />
        ))}
      </div>
    </div>
  );
  
  const MetricBar = ({ axis, value, unit, color }) => (
    <div className="flex items-center gap-3 text-xs">
      <span className="w-4 font-medium text-gray-500">{axis}</span>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={`${color} h-full`}
          style={{ width: `${Math.min(value * 20, 100)}%` }}
        />
      </div>
      <span className="w-[60px] text-right text-gray-700 font-semibold">
        {value} {unit}
      </span>
    </div>
  );
  
  export default VelocityBlock;
  