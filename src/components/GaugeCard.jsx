import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const GaugeCard = ({ label, value, unit = "%", color = "#22c55e" }) => {
  return (
    <div className="w-20 h-20 flex flex-col items-center text-center">
      <div className="w-full h-full">
        <CircularProgressbarWithChildren
          value={value}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
          })}
        >
          <div className="text-xs font-bold text-gray-800">{value}{unit}</div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="text-[10px] text-gray-500 mt-1">{label}</div>
    </div>
  );
};

export default GaugeCard;
