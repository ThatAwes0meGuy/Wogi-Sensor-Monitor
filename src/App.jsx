import { useState } from 'react';

import Navbar from './components/Header';
import StatsGrid from './components/StatsGrid';
import EquipmentPanel from './components/EquipmentPanel';
import InsightsPanel from './components/InsightsPanel';
import ChartGrid from './components/charts/ChartGrid';

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full bg-gray-50 font-sans">
      {/* Header */}
      <Navbar onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />

      {/* Main content layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Equipments */}
        <div className="w-1/4 min-w-[260px] border-r overflow-y-auto">
          <EquipmentPanel />
        </div>

        {/* Center - Stats + Charts */}
        <div className="flex-1 overflow-y-auto border-r">
          <StatsGrid />
          <ChartGrid />
        </div>

        {/* Right Sidebar - Insights */}
        <div className="w-1/5 min-w-[220px] max-w-[280px] overflow-y-auto">
          <InsightsPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
