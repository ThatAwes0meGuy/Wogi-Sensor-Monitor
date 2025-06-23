import { Clock } from "lucide-react";
import GaugeCard from "./GaugeCard";

const metrics = [
  { label: "Utilisation", value: "78%", color: "text-green-600" },
  { label: "Faults", value: "12", color: "text-red-600" },
  { label: "Actions Taken", value: "4", color: "text-amber-600" },
  { label: "MTBF", value: "56 hrs", color: "text-gray-800" },
  { label: "Health Score", value: "92%", color: "text-green-700" },
];

const TopOverview = ({
  equipment = "Pump DE (AD3177)",
  location = "Distillery Power Plant",
  lastUpdated = "9:50 AM",
}) => {
  return (
    <section className="w-full px-6 pt-4 pb-3 space-y-3">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div className="text-sm font-semibold text-gray-800">
          {equipment}
          <span className="text-xs font-normal text-gray-500 ml-2">• {location}</span>
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last updated: {lastUpdated}</span>
        </div>
      </div>

    
    </section>
  );
};

export default TopOverview;
