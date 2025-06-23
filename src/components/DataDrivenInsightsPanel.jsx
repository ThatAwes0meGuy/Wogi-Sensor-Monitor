import SpectralHoverTable from "./SpectralHoverTable";

const DataDrivenInsightsPanel = () => {
    return (
      <section className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-800 mb-2">
          Data Driven Insights
        </h2>
  
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Health Score:</span>{" "}
            <span className="text-green-600 font-semibold">92%</span>
            <span className="ml-1 text-xs text-gray-400">
              (+0.3% from last 24h)
            </span>
          </div>
  
          <div className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">
              Fault Progression Index:
            </span>{" "}
            <span className="text-red-500 font-semibold">0.27</span>
          </div>
  
          <button className="text-sm text-indigo-600 font-medium hover:underline">
            View Spectral Insights
          </button>
        </div>
      </section>
    );
  };
  
  export default DataDrivenInsightsPanel;
  