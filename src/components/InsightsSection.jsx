import { useState } from "react";
import { AlertTriangle, Clock, ChevronDown, ChevronUp } from "lucide-react";

const insights = [
  {
    asset: "MBC-1",
    location: "Gear Box I/P DE (AD3411)",
    value: "4.58",
    threshold: "4.50",
    axis: "H",
    type: "Velocity",
    condition: "Suspected Overload",
    time: "20 Jun 2025 08:31 AM",
  },
  {
    asset: "MBC-1",
    location: "Motor DE (AD3428M)",
    value: "7.18",
    threshold: "4.50",
    axis: "H",
    type: "Velocity",
    condition: "Suspected Overload",
    time: "24 Apr 2025 01:46 AM",
  },
];

const InsightsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visibleInsights = expanded ? insights : insights.slice(0, 1);

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between text-xs font-semibold text-gray-500 uppercase">
        <span>Insights</span>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline"
        >
          {expanded
            ? "Hide"
            : `View All (${insights.length} Insight${insights.length > 1 ? "s" : ""})`}
          {expanded ? (
            <ChevronUp className="w-3 h-3" />
          ) : (
            <ChevronDown className="w-3 h-3" />
          )}
        </button>
      </div>

      {/* Card container */}
      <div className="space-y-3 transition-all duration-300">
        {visibleInsights.map((item, i) => (
          <div
            key={i}
            className={`rounded-lg border border-gray-200 p-3 bg-white shadow-sm space-y-1 transition-all duration-300 ease-in-out transform ${
              expanded ? "opacity-100 scale-100" : i > 0 ? "opacity-0 scale-95 hidden" : ""
            }`}
          >
            <div className="text-xs text-gray-800 font-semibold leading-tight">
              {item.asset}{" "}
              <span className="font-normal text-gray-600">{item.location}</span>
            </div>
            <div className="text-xs text-gray-700">
              <span className="text-gray-500">
                {item.type} ({item.axis}){" "}
              </span>
              <span className="text-red-600 font-medium">{item.value} mm/s</span>{" "}
              <span className="text-gray-500">&gt;</span>{" "}
              <span className="text-orange-600 font-medium">
                {item.threshold} mm/s
              </span>{" "}
              <span className="text-gray-500">(Threshold)</span>
            </div>
            <div className="flex items-center justify-between text-xs text-red-600 font-medium">
              <div className="flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" />
                {item.condition}
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-400">
                <Clock className="w-3 h-3" />
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;
