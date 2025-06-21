import {
    Cpu,
    Wifi,
    AlertTriangle,
    CheckCircle,
    Clock,
    Activity,
    ChevronDown,
    ChevronUp,
  } from "lucide-react";
  import { useState } from "react";
  import clsx from "clsx"
  
  const allStats = [
    {
      title: "Monitored Equipment",
      value: 126,
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      bg: "bg-indigo-50",
    },
    {
      title: "Devices Deployed",
      value: 43,
      sub: "4 disconnected",
      icon: <Wifi className="w-5 h-5 text-sky-600" />,
      bg: "bg-sky-50",
    },
    {
      title: "Fault Notifications",
      value: 12,
      icon: <AlertTriangle className="w-5 h-5 text-red-600" />,
      bg: "bg-red-50",
    },
    {
      title: "Corrective Actions Taken",
      value: 48,
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      bg: "bg-emerald-50",
    },
    {
      title: "Operational Hours Saved",
      value: "186 hrs",
      icon: <Clock className="w-5 h-5 text-amber-600" />,
      bg: "bg-amber-50",
    },
    {
      title: "Area Health Score",
      value: "92%",
      icon: <Activity className="w-5 h-5 text-violet-600" />,
      bg: "bg-violet-50",
    },
  ];
  
  const StatsGrid = () => {
    const [expanded, setExpanded] = useState(false);
  
    const alwaysVisible = allStats.slice(0, 3);
    const collapsible = allStats.slice(3);
  
    return (
      <section className="px-6 pt-6 pb-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {alwaysVisible.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
  
        {/* Collapsible Section */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            expanded ? "max-h-[1000px] mt-4" : "max-h-0"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {collapsible.map((stat, i) => (
              <StatCard key={i} {...stat} />
            ))}
          </div>
        </div>
  
        {/* Toggle Button */}
        <div className="flex justify-center mt-3">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            {expanded ? "Hide" : "Show More"}
            {expanded ? (
              <ChevronUp className="ml-1 w-4 h-4" />
            ) : (
              <ChevronDown className="ml-1 w-4 h-4" />
            )}
          </button>
        </div>
      </section>
    );
  };
  
  const StatCard = ({ title, value, icon, bg, sub }) => (
    <div
      className={clsx(
        "flex items-center gap-3 p-3 rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition duration-200",
        bg
      )}
    >
      <div className="p-1.5 rounded-md bg-white border border-gray-100 shadow-sm">
        {icon}
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] font-medium text-gray-500">{title}</span>
        <span className="text-base font-semibold text-gray-800">{value}</span>
        {sub && <span className="text-[10px] text-red-500">{sub}</span>}
      </div>
    </div>
  );
  
    
  export default StatsGrid;
  