const accelData = [
    { axis: "H", value: 5.2, unit: "m/s²", color: "bg-green-500" },
    { axis: "V", value: 3.7, unit: "m/s²", color: "bg-yellow-500" },
    { axis: "A", value: 8.1, unit: "m/s²", color: "bg-red-500" },
  ];
  
  const AccelerationBlock = () => (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <h4 className="text-xs font-bold text-gray-700 mb-3">Acceleration (m/s²)</h4>
      <div className="space-y-2">
        {accelData.map((a) => (
          <MetricBar key={a.axis} {...a} />
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
          style={{ width: `${Math.min(value * 10, 100)}%` }}
        />
      </div>
      <span className="w-[60px] text-right text-gray-700 font-semibold">
        {value} {unit}
      </span>
    </div>
  );
  
  export default AccelerationBlock;
  