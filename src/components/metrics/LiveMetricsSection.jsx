import VelocityBlock from "./VelocityBlock";
import AccelerationBlock from "./AccelerationBlock";
import LiveGaugesRow from "../LiveGaugesRow";

const LiveMetricsSection = () => {
  return (
    <section className="px-6 py-4 space-y-4">
      {/* Velocity + Acceleration Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <VelocityBlock />
        <AccelerationBlock />
      </div>

      {/* Gauge Row */}
      <LiveGaugesRow />
    </section>
  );
};

export default LiveMetricsSection;
