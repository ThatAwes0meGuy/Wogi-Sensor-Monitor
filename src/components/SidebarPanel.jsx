import { useState } from "react";
import SidebarSection from "./SidebarSection";
import { Info, ClipboardList, ActivitySquare, FileText, ChevronRight } from "lucide-react";
import DiagnosisHoverCard from "./DiagnosisHoverCard";


const SidebarPanel = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <aside className="w-[300px] min-w-[280px] max-w-[320px] border-l bg-white px-4 py-5 overflow-y-auto space-y-6 text-sm">
      {/* Equipment Metadata */}
      <SidebarSection title="Equipment Info" icon={<Info className="w-4 h-4 text-indigo-500" />}>
        <div className="text-gray-800 font-semibold">Pump DE (AD3177)</div>
        <div className="text-xs text-gray-500 mb-1">Distillery Power Plant</div>
        <div className="text-xs text-gray-700">Rated RPM: <span className="font-medium">N/A</span></div>
        <div className="text-xs text-gray-700">Axis Mapping: X • Y • Z</div>
      </SidebarSection>

      {/* Limits / Thresholds */}
      <SidebarSection title="Thresholds" icon={<ActivitySquare className="w-4 h-4 text-yellow-500" />}>
        <ThresholdItem label="Velocity" value="4.5 mm/s" />
        <ThresholdItem label="Acceleration" value="10.0–20.0 m/s²" />
        <ThresholdItem label="Temperature" value="65–75 °C" />
        <ThresholdItem label="Sound" value="250–350 dB" />
      </SidebarSection>

      {/* Diagnosis */}
      <SidebarSection title="Diagnosis" icon={<ClipboardList className="w-4 h-4 text-purple-600" />}>
        <p className="text-xs text-gray-600 leading-snug">
          Previous fault diagnosed on 21 Jun. Review corrective action taken.
        </p>
        <DiagnosisHoverCard
          data={{
            observation: "Vibration values are increased at Motor DE and Gearbox bearings.",
            analysis: "FFT spectrum is showing 1x RPM at Motor & Gearbox bearing.",
            recommendation: "Check the machine base frame and improve rigidity. Also check coupling alignment.",
            updated: "02 Mar 2025 05:27 PM",
          }}
        />

      </SidebarSection>

      {/* Spectral Insights */}
      <SidebarSection title="Spectral Insights" icon={<ActivitySquare className="w-4 h-4 text-sky-500" />}>
        <div className="text-xs text-gray-600">3 active bands monitored across X/Y/Z axes.</div>
        <button
          onClick={() => alert("Open spectral modal")}
          className="text-xs text-sky-600 font-medium mt-2 flex items-center gap-1 hover:underline"
        >
          View Full Bands <ChevronRight className="w-3 h-3" />
        </button>
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
    <span className="font-medium">{value}</span>
  </div>
);

export default SidebarPanel;
