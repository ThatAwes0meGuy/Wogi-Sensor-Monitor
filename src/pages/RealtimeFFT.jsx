import TopOverview from "../components/TopOverview";
import LiveValuesSection from "../components/LiveValuesSection";
import LiveGaugesRow from "../components/LiveGaugesRow";
// import TrendSection from "../components/TrendSection";
import SidebarPanel from "../components/SidebarPanel";

const RealtimeFFT = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 font-sans">
      {/* Main layout after navbar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Panel */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
          <TopOverview />
          <LiveValuesSection />
          <LiveGaugesRow />
          {/* <TrendSection /> */}
        </div>

        {/* Right Sidebar Panel */}
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
