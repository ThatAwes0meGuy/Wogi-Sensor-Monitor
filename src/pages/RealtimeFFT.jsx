import TopOverview from "../components/TopOverview";
// import TrendSection from "../components/TrendSection";
import SidebarPanel from "../components/SidebarPanel";
import LiveValuesSection from "../components/LiveValuesSection";
import DataDrivenInsightsPanel from "../components/DataDrivenInsightsPanel";
import TrendChartSection from "../components/TrendChartSection";
import TopStats from "../components/TopStats";

const RealtimeFFT = () => {
  return (
    <div className="flex h-screen">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-gray-50 px-6 py-4 space-y-6">
        {/* 1. Top Status Cards */}
        <TopStats />

        {/* 2. Trend Chart */}
        <TrendChartSection />


        {/* 3. Metrics Row: Live Values + Data Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <LiveValuesSection />
          <DataDrivenInsightsPanel />
        </div>

    </div>

      {/* Sidebar on Right */}
      <div className="w-[320px] border-l bg-white overflow-y-auto shadow-sm">
        <SidebarPanel />
      </div>
    </div>
  );
};

export default RealtimeFFT;

// ┌───────────────────────────────────────── Main Panel (75%) ─────────────────────────────────────────┬──────────── Sidebar (25%) ────────────┐
// │                                                                                                     │                                   │
// │  [ Equipment Name ] • [ Location ]          ⏱ Last updated: ...                                    │                                   │
// │                                                                                                     │  Equipment Metadata               │
// │  ┌────────────────────────────┐   ┌────────────────────────────┐   ┌────────────────────────────┐  │  Axis Mapping, RPM, Limits        │
// │  │ Velocity (H/V/A grouped)   │   │ Acceleration / Temp / Audio│   │ Health/Utilisation Gauges  │  │                                   │
// │  └────────────────────────────┘   └────────────────────────────┘   └────────────────────────────┘  ├───────────────────────────────────┤
// │                                                                                                     │ Diagnosis Summary + View All ▶     │
// │  ┌──────────────────────────────────────────────────────────────────────────────────────────────┐  ├───────────────────────────────────┤
// │  │ ⚡ Trend Chart (area, color bands, peak line)                                                 │  Spectral Insights (View ▶ Modal)   │
// │  └──────────────────────────────────────────────────────────────────────────────────────────────┘  ├───────────────────────────────────┤
// │                                                                                                     │ Maintenance History (View ▶)       │
// └─────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────────────────────────────────┘
