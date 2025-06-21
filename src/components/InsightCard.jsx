import { AlertTriangle, MoreVertical, Wifi } from "lucide-react";

const InsightCard = ({ image, title, metric, threshold, alert, timestamp }) => {
  return (
    <div className="flex gap-3 p-3 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded-md object-cover border"
      />

      {/* Main content */}
      <div className="flex-1">
        {/* Title + Metric */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-800 leading-tight">
              {title}
            </h3>
            <div className="text-xs text-gray-700 mt-0.5">
              {metric} <span className="text-gray-400">vs</span>{" "}
              <span className="text-red-600 font-medium">{threshold}</span>
            </div>
          </div>

          <MoreVertical className="w-4 h-4 text-gray-400 hover:text-gray-600" />
        </div>

        {/* Alert */}
        <div className="mt-2 flex items-center gap-1 text-xs text-red-600 font-medium">
          <AlertTriangle className="w-4 h-4" />
          {alert}
        </div>

        {/* Timestamp */}
        <div className="text-[11px] text-gray-400 mt-1">{timestamp}</div>
      </div>
    </div>
  );
};

export default InsightCard;
