import React, { useState } from "react";
import ReactECharts from "echarts-for-react";
import dayjs from "dayjs";

const TrendChart = () => {
  const [selectedRange, setSelectedRange] = useState("1d");
  const [parameter, setParameter] = useState("Velocity");
  const [axis, setAxis] = useState("Horizontal");
  const [showFFT, setShowFFT] = useState(false);

  const now = dayjs();
  const times = Array.from({ length: 50 }, (_, i) =>
    now.subtract((50 - i) * 1, "minute").format("HH:mm")
  );

  const mockValues = times.map((_, i) => {
    if (i < 10) return 3 + Math.random();        // Green
    if (i < 25) return 5 + Math.random() * 1.5;   // Yellow
    if (i < 40) return 8 + Math.random() * 1.2;   // Orange
    return 11 + Math.random() * 1.2;              // Red
  });

  const option = {
    grid: { left: 40, right: 20, bottom: 40, top: 20 },
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: times,
      boundaryGap: false,
      axisLabel: { fontSize: 10, color: "#6b7280" },
    },
    yAxis: {
      type: "value",
      name: "mm/s",
      min: 0,
      max: 14,
      axisLabel: { fontSize: 11 },
      splitLine: {
        show: true,
        lineStyle: { color: "#f3f4f6" },
      },
    },
    series: [
      {
        name: "Velocity (H)",
        type: "line",
        data: mockValues,
        smooth: true,
        symbol: "circle",
        symbolSize: 6,
        lineStyle: { color: "#3b82f6", width: 3 },
        itemStyle: { color: "#3b82f6" },
        areaStyle: {
          opacity: 0.08,
          color: "#3b82f6",
        },
        markArea: {
          silent: true,
          itemStyle: { opacity: 0.15 },
          data: [
            [{ yAxis: 0, itemStyle: { color: "#d1fae5" } }, { yAxis: 4.5 }],
            [{ yAxis: 4.5, itemStyle: { color: "#fef9c3" } }, { yAxis: 7.5 }],
            [{ yAxis: 7.5, itemStyle: { color: "#fdba74" } }, { yAxis: 10.5 }],
            [{ yAxis: 10.5, itemStyle: { color: "#fecaca" } }, { yAxis: 14 }],
          ],
        },
      },
    ],
  };

  return (
    <div className="w-full rounded-xl border bg-white p-4 shadow-sm mt-6">
      {/* Header & Controls */}
      <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
        <h2 className="font-semibold text-gray-800 text-lg">Trend</h2>

        <div className="flex flex-wrap items-center gap-2 text-sm">
          {["1y", "1m", "1w", "1d", "1h"].map((r) => (
            <button
              key={r}
              className={`px-2.5 py-1 rounded-md border ${
                selectedRange === r
                  ? "bg-purple-600 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
              onClick={() => setSelectedRange(r)}
            >
              {r}
            </button>
          ))}

          <input
            type="text"
            readOnly
            value={`${now.subtract(1, "day").format("DD/MM/YYYY HH:mm")} - ${now.format("DD/MM/YYYY HH:mm")}`}
            className="px-2 py-1 rounded-md border border-gray-300 text-xs w-60"
          />

          <select
            value={parameter}
            onChange={(e) => setParameter(e.target.value)}
            className="px-2 py-1 rounded-md border border-gray-300 text-sm"
          >
            <option>Velocity</option>
            <option>Acceleration</option>
            <option>Temperature</option>
          </select>

          <select
            value={axis}
            onChange={(e) => setAxis(e.target.value)}
            className="px-2 py-1 rounded-md border border-gray-300 text-sm"
          >
            <option>Horizontal</option>
            <option>Vertical</option>
            <option>Axial</option>
          </select>

          <button
            className={`px-2 py-1 rounded-md text-sm ${
              showFFT
                ? "bg-purple-100 text-purple-600 border border-purple-400"
                : "bg-white border border-gray-300"
            }`}
            onClick={() => setShowFFT((prev) => !prev)}
          >
            {showFFT ? "Hide FFT" : "Show FFT"}
          </button>

          <button className="px-2 py-1 border border-gray-300 rounded-md text-sm">
            Generate FFT
          </button>

          <button className="text-sm px-2">
            <span role="img" aria-label="xls">📥</span>
            <span className="text-[10px] ml-1 text-gray-500">XLS</span>
          </button>

          <button
            onClick={() => window.location.reload()}
            className="text-gray-500 hover:text-black text-lg"
            title="Refresh"
          >
            ⟳
          </button>
        </div>
      </div>

      {/* Chart */}
      <ReactECharts option={option} style={{ height: "300px", width: "100%" }} />
    </div>
  );
};

export default TrendChart;
