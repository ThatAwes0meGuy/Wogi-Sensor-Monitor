import React, { useState, useRef } from "react";
import { HeartPulse, ActivitySquare, X } from "lucide-react";

const spectralInsights = [
{ band: "0.33 – 29.33 Hz", axis: "X", status: "Healthy" },
{ band: "29.33 – 53.67 Hz", axis: "Y", status: "Warning" },
{ band: "53.67 – 70.22 Hz", axis: "Z", status: "Danger" },
];

const statusColors = {
Healthy: "text-green-600 bg-green-100",
Warning: "text-yellow-700 bg-yellow-100",
Danger: "text-red-600 bg-red-100",
};

const DataDrivenInsightsPanel = ({ healthScore = 92, deviation = 0.3, fpi = 0.27 }) => {
const [showModal, setShowModal] = useState(false);
const [hovering, setHovering] = useState(false);
const hoverTimeout = useRef(null);

return (
<>
<div className="bg-white rounded-xl shadow-sm p-4 border w-full relative">
<h2 className="text-gray-800 font-semibold text-lg mb-4">Data Driven Insights</h2>
    <div className="space-y-4 text-sm">
      {/* Health Score */}
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-5 h-5 text-pink-500" />
          <span className="text-gray-700 font-medium">Health Score</span>
        </div>
        <div className="text-right">
          <div className="text-green-600 font-semibold text-base">{healthScore}%</div>
          <div className="text-xs text-gray-400">+{deviation}% from last 24h</div>
        </div>
      </div>

      {/* Fault Progression Index */}
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md border">
        <div className="flex items-center gap-2">
          <ActivitySquare className="w-5 h-5 text-amber-500" />
          <span className="text-gray-700 font-medium">Fault Progression Index</span>
        </div>
        <div className="text-right">
          <div className="text-red-600 font-semibold text-base">{fpi}</div>
          <div className="w-36 mt-1 h-2 bg-gradient-to-r from-green-400 via-yellow-400 to-red-500 rounded-full" />
        </div>
      </div>

      {/* Spectral Insights Button + Hovercard */}
      <div className="relative inline-block">
        <button
          className="text-blue-600 text-sm hover:underline font-medium"
          onClick={() => setShowModal(true)}
          onMouseEnter={() => {
            clearTimeout(hoverTimeout.current);
            setHovering(true);
          }}
          onMouseLeave={() => {
            hoverTimeout.current = setTimeout(() => setHovering(false), 200);
          }}
        >
          View Spectral Insights
        </button>

        {/* Tooltip-like hovercard */}
        {hovering && (
              <div
              className="absolute bottom-full mb-2 left-0 z-50 w-72 
                        bg-white border border-gray-200 shadow-xl 
                        rounded-md p-3 transition-all duration-200 ease-in-out"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
          <h4 className="text-xs font-semibold text-gray-700 mb-2">Spectral Insights</h4>
            <table className="w-full text-xs text-left text-gray-700">
              <thead>
                <tr className="text-gray-500 border-b text-[11px]">
                  <th className="py-1 px-2 font-medium">Band</th>
                  <th className="py-1 px-2 font-medium">Axis</th>
                  <th className="py-1 px-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {spectralInsights.map((insight, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-2 py-1">{insight.band}</td>
                    <td className="px-2 py-1">{insight.axis}</td>
                    <td className="px-2 py-1">
                      <span
                        className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[insight.status]}`}
                      >
                        {insight.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  </div>

  {/* Modal on click */}
  {showModal && (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-4 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-black"
          onClick={() => setShowModal(false)}
        >
          <X className="w-5 h-5" />
        </button>
        <h3 className="text-base font-semibold text-gray-800 mb-3">Spectral Insights</h3>
        <div className="overflow-auto max-h-64">
          <table className="w-full text-xs text-left text-gray-700">
            <thead>
              <tr className="text-gray-500 border-b text-[11px]">
                <th className="py-1 px-2 font-medium">Frequency Band</th>
                <th className="py-1 px-2 font-medium">Axis</th>
                <th className="py-1 px-2 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {spectralInsights.map((insight, i) => (
                <tr key={i} className="border-t">
                  <td className="px-2 py-1">{insight.band}</td>
                  <td className="px-2 py-1">{insight.axis}</td>
                  <td className="px-2 py-1">
                    <span
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${statusColors[insight.status]}`}
                    >
                      {insight.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )}
</>
);
};

export default DataDrivenInsightsPanel;