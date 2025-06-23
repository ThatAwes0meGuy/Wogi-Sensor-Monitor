import ReactSpeedometer from "react-d3-speedometer";

const metrics = [
  { label: "Velocity (H)", value: 2.71, unit: "mm/s", max: 12 },
  { label: "Velocity (V)", value: 1.49, unit: "mm/s", max: 12 },
  { label: "Velocity (A)", value: 2.89, unit: "mm/s", max: 12 },
  { label: "Temperature", value: 36.56, unit: "°C", max: 80 },
  { label: "Acceleration", value: 0.08, unit: "g", max: 2 },
  { label: "Audio", value: 80.74, unit: "dB", max: 250 },
];

const LiveValuesSection = () => (
  <section className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
    {/* Header */}
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-sm font-semibold text-gray-800">Live Values</h4>
      <p className="text-[11px] text-gray-400">• 23 Jun 2025 11:55 PM</p>
    </div>

    {/* Gauges Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {metrics.map((metric, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <ReactSpeedometer
            value={metric.value}
            maxValue={metric.max}
            segments={3}
            height={100}
            width={140}
            ringWidth={8}
            needleColor="#374151"
            textColor="#374151"
            labelFontSize="10px"
            segmentColors={["#22c55e", "#facc15", "#ef4444"]}
            currentValueText={`${metric.value} ${metric.unit}`}
            valueTextFontSize="11px"
            customSegmentStops={[0, metric.max * 0.6, metric.max * 0.85, metric.max]}
          />
          <div className="text-[11px] text-gray-600 mt-1 font-medium">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LiveValuesSection;
