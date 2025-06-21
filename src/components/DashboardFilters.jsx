import { ChevronDown } from "lucide-react";

const DashboardFilters = ({
  site = "Hariawan",
  line = "Distillery Power Plant",
}) => {
  return (
    <div className="px-6 pt-4 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center gap-4">
        <Dropdown label="Site" value={site} />
        <Dropdown label="Line" value={line} />
      </div>
    </div>
  );
};

const Dropdown = ({ label, value }) => {
  return (
    <div className="flex flex-col text-xs text-gray-500">
      <span className="uppercase tracking-wide font-semibold mb-0.5">{label}</span>
      <button className="flex items-center gap-1 text-sm font-semibold text-gray-800 border border-gray-300 px-3 py-1.5 rounded-md bg-white hover:border-gray-400 shadow-sm">
        {value}
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  );
};

export default DashboardFilters;
