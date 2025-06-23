import ReactSpeedometer from "react-d3-speedometer";

const Gauge = ({
  value,
  max = 100,
  unit = "",
  segments = 3,
  height = 120,
  width = 160,
  label = "",
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <ReactSpeedometer
        maxValue={max}
        value={value}
        segments={segments}
        height={height}
        width={width}
        needleColor="#374151"
        ringWidth={6}
        segmentColors={["#22c55e", "#facc15", "#ef4444"]}
        valueTextFontSize="10px"
        needleTransitionDuration={500}
        needleTransition="easeLinear"
        customSegmentStops={[0, max * 0.6, max * 0.85, max]}
        textColor="#374151"
        currentValueText={`${value}${unit}`}
      />
      {label && (
        <div className="text-[10px] text-gray-600 mt-1 font-medium">{label}</div>
      )}
    </div>
  );
};

export default Gauge;
