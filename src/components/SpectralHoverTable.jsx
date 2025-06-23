import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const spectralBands = [
  { band: "0.33 – 29.33 Hz", axis: "X", status: "Healthy" },
  { band: "29.33 – 53.67 Hz", axis: "Y", status: "Warning" },
  { band: "53.67 – 70.22 Hz", axis: "Z", status: "Danger" },
];

const statusColors = {
  Healthy: "text-green-600",
  Warning: "text-yellow-500",
  Danger: "text-red-600",
};

const SpectralHoverTable = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setVisible(!visible)}
        className="text-xs text-blue-600 font-medium flex items-center gap-1 hover:underline"
      >
        View Spectral Insights{" "}
        {visible ? (
          <ChevronUp className="w-3 h-3" />
        ) : (
          <ChevronDown className="w-3 h-3" />
        )}
      </button>

      {visible && (
        <div className="absolute z-50 mt-2 w-[260px] bg-white border border-gray-200 rounded-md shadow-xl p-3 text-xs text-gray-700 space-y-2">
          {spectralBands.map((item, i) => (
            <div key={i} className="flex justify-between">
              <div className="text-gray-500">
                {item.axis} • {item.band}
              </div>
              <div className={`font-medium ${statusColors[item.status]}`}>
                {item.status}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SpectralHoverTable;
