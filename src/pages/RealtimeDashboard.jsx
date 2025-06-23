import StatsGrid from "../components/StatsGrid";
import EquipmentPanel from "../components/EquipmentPanel";
import InsightsPanel from "../components/InsightsPanel";
import ChartGrid from "../components/charts/ChartGrid";

const RealtimeDashboard = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 font-sans">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[20%] min-w-[260px] border-r overflow-y-auto">
          <EquipmentPanel />
        </div>
        <div className="flex-1 overflow-y-auto border-r">
          <StatsGrid />
          <ChartGrid />
        </div>
        <div className="w-[20%] max-w-[280px] overflow-y-auto">
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
};

export default RealtimeDashboard;
