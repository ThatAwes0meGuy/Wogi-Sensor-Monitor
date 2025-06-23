import SpectralHoverTable from "./SpectralHoverTable";

const DataDrivenInsightsPanel = () => {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm space-y-4">
      <div className="flex items-center justify-between mb-1">
        <h4 className="text-sm font-semibold text-gray-800">
          Data Driven Insights
        </h4>
      </div>

      {/* Health Score */}
      <div className="text-sm flex items-center justify-between">
        <span className="text-gray-500">Health Score</span>
        <span className="font-bold text-green-600">92%</span>
      </div>

      {/* Deviation */}
      <div className="text-xs text-right text-gray-400 -mt-2 mb-2">
        +0.3% deviation from last 24h
      </div>

      {/* Fault Progression Index */}
      <div className="text-sm flex items-center justify-between">
        <span className="text-gray-500">Fault Progression Index</span>
        <span className="font-bold text-red-600">0.27</span>
      </div>

      {/* Spectral Insights */}
      <div className="text-sm">
        <SpectralHoverTable />
      </div>
    </section>
  );
};

export default DataDrivenInsightsPanel;
