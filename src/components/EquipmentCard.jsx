import { Info, Wifi, ArrowRight } from "lucide-react";
import clsx from "clsx";

const statusColorMap = {
  Running: "bg-green-100 text-green-700",
  Idle: "bg-gray-100 text-gray-600",
  Unavailable: "bg-red-100 text-red-700",
};

const healthColorMap = {
  Operational: "bg-emerald-100 text-emerald-700",
  Unavailable: "bg-red-100 text-red-700",
  Unknown: "bg-gray-100 text-gray-600",
};

const EquipmentCard = ({
  name,
  image,
  status,
  health,
  connectivity,
  score,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group relative cursor-pointer p-4 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:ring-1 hover:ring-purple-200 transition"
    >
      {/* Clickable indicator */}
      <ArrowRight className="absolute top-4 right-4 w-4 h-4 text-gray-300 group-hover:text-purple-600 transition" />

      <div className="flex items-center gap-4">
        {/* Thumbnail */}
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-md object-cover border"
        />

        {/* Main content */}
        <div className="flex-1">
          {/* Name + info */}
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-sm font-semibold text-gray-800">{name}</h3>
            <Info className="w-4 h-4 text-gray-400 hover:text-purple-500" />
          </div>

          {/* Status + Health */}
          <div className="flex items-center gap-2 text-xs font-medium mb-1">
            <span
              className={clsx(
                "px-2 py-0.5 rounded-full",
                statusColorMap[status] || "bg-gray-100 text-gray-600"
              )}
            >
              {status}
            </span>
            <span
              className={clsx(
                "px-2 py-0.5 rounded-full",
                healthColorMap[health] || "bg-gray-100 text-gray-600"
              )}
            >
              {health}
            </span>
          </div>

          {/* Connectivity + Score */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Wifi className="w-3 h-3" />
              <span>{connectivity}</span>
            </div>
            <span className="font-semibold text-gray-700">{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentCard;
