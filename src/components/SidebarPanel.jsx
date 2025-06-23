import { useState } from "react";
import { Info, ClipboardList, ActivitySquare, FileText, ChevronRight } from "lucide-react";
import DiagnosisHoverCard from "./DiagnosisHoverCard";
import InsightsSection from "./InsightsSection";

const SidebarPanel = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <aside className="w-[300px] min-w-[280px] max-w-[320px] border-l bg-white px-4 py-6 overflow-y-auto space-y-6 text-sm">
      
      {/* Equipment Metadata */}
      <SidebarSection title="Equipment Info" icon={<Info className="w-4 h-4 text-indigo-500" />}>
        <div className="text-gray-900 font-bold text-base leading-snug">Pump DE (AD3177)</div>
        <div className="text-xs text-gray-500 mb-2">Distillery Power Plant</div>
        <div className="text-xs text-gray-600">
          <span className="text-gray-500">Rated RPM:</span> <span className="font-medium">N/A</span>
        </div>
        <div className="text-xs text-gray-600">
          <span className="text-gray-500">Axis Mapping:</span> X • Y • Z
        </div>
      </SidebarSection>

      {/* Thresholds */}
      <SidebarSection title="Thresholds" icon={<ActivitySquare className="w-4 h-4 text-yellow-500" />}>
        <ThresholdItem label="Velocity" value="4.5 mm/s" />
        <ThresholdItem label="Acceleration" value="10.0–20.0 m/s²" />
        <ThresholdItem label="Temperature" value="65–75 °C" />
        <ThresholdItem label="Sound" value="250–350 dB" />
      </SidebarSection>

      {/* Diagnosis */}
      <SidebarSection title="Diagnosis" icon={<ClipboardList className="w-4 h-4 text-purple-600" />}>
        <p className="text-xs text-gray-600 leading-snug mb-2">
          Previous fault diagnosed on 21 Jun. Review corrective action taken.
        </p>
        <DiagnosisHoverCard
          data={{
            observation: "Vibration values are increased at Motor DE and Gearbox bearings.",
            analysis: "FFT spectrum is showing 1x RPM at Motor & Gearbox bearing.",
            recommendation:
              "Check the machine base frame and improve rigidity. Also check coupling alignment.",
            updated: "02 Mar 2025 05:27 PM",
          }}
        />
      </SidebarSection>

      {/* Spectral Insights / Insights */}
      <SidebarSection>
        <InsightsSection />
      </SidebarSection>

      {/* Documents */}
      <SidebarSection title="Documents" icon={<FileText className="w-4 h-4 text-emerald-500" />}>
        <button
          onClick={() => alert("Open documents modal")}
          className="text-xs text-emerald-600 font-medium flex items-center gap-1 hover:underline"
        >
          View All Documents <ChevronRight className="w-3 h-3" />
        </button>
      </SidebarSection>
    </aside>
  );
};

const ThresholdItem = ({ label, value }) => (
  <div className="flex justify-between text-xs text-gray-700">
    <span className="text-gray-500">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);

const SidebarSection = ({ title, icon, children }) => (
  <div className="space-y-2 border-b pb-4">
    {title && (
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {icon}
        {title}
      </div>
    )}
    <div className="space-y-1">{children}</div>
  </div>
);

export default SidebarPanel;
