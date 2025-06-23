import { useState } from "react";
import { Info } from "lucide-react";

const DiagnosisHoverCard = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button className="text-xs text-purple-600 font-medium hover:underline flex items-center gap-1">
        View Diagnosis <Info className="w-3.5 h-3.5" />
      </button>

      {hovered && (
        <div className="absolute top-6 left-0 z-50 w-72 bg-white border border-gray-200 rounded-md shadow-xl p-4 text-xs text-gray-700 space-y-2">
          <div>
            <span className="font-semibold">Observation:</span>
            <p>{data.observation}</p>
          </div>
          <div>
            <span className="font-semibold">Analysis:</span>
            <p>{data.analysis}</p>
          </div>
          <div>
            <span className="font-semibold">Recommendation:</span>
            <p>{data.recommendation}</p>
          </div>
          <div className="text-[10px] text-gray-400 mt-2">
            Last updated: {data.updated}
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisHoverCard;
