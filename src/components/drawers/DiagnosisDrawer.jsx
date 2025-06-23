import { X } from "lucide-react";

const DiagnosisDrawer = ({ isOpen, onClose, diagnosis }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <aside className="absolute top-0 right-0 w-full sm:w-[420px] h-full bg-white shadow-lg border-l border-gray-200 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-sm font-semibold text-gray-800">Full Diagnosis</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 px-4 py-4 overflow-y-auto text-sm text-gray-700 space-y-4">
          {diagnosis ? (
            diagnosis.map((item, i) => (
              <div key={i}>
                <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                <p className="text-gray-600 text-xs leading-relaxed">{item.body}</p>
              </div>
            ))
          ) : (
            <p>No diagnosis data available.</p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default DiagnosisDrawer;
