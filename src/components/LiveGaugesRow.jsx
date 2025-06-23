import {
    CircularProgressbarWithChildren,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  const gauges = [
    { label: "Temperature", value: 68, unit: "°C", color: "#f59e0b" },
    { label: "Health Score", value: 92, unit: "%", color: "#22c55e" },
    { label: "Utilisation", value: 78, unit: "%", color: "#2563eb" },
  ];
  
  const LiveGaugesRow = () => {
    return (
      <div className="flex gap-6 justify-start">
        {gauges.map(({ label, value, unit, color }, i) => (
          <div key={i} className="w-20 h-20 flex flex-col items-center text-center">
            <div className="w-full h-full">
              <CircularProgressbarWithChildren
                value={value}
                styles={buildStyles({
                  pathColor: color,
                  trailColor: "#e5e7eb",
                })}
              >
                <div className="text-xs font-bold text-gray-800">{value}{unit}</div>
              </CircularProgressbarWithChildren>
            </div>
            <div className="text-[10px] text-gray-500 mt-1">{label}</div>
          </div>
        ))}
      </div>
    );
  };
  
  export default LiveGaugesRow;
  