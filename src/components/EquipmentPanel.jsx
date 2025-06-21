import { useState } from "react";
import EquipmentCard from "./EquipmentCard";
import { Search, SlidersHorizontal, ChevronDown } from "lucide-react";

const siteOptions = ["Hariawan", "Sitapur", "Barabanki"];
const lineOptions = ["Distillery Power Plant", "Turbine", "Boiler"];

const dummyEquipments = [
  {
    name: "ACW PUMP E",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Running",
    health: "Operational",
    connectivity: "1/1",
    score: "92%",
  },
  {
    name: "Main Condenser",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Idle",
    health: "Unavailable",
    connectivity: "0/1",
    score: "N/A",
  },
  {
    name: "Feed Pump 1",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Unavailable",
    health: "Unknown",
    connectivity: "0/2",
    score: "55%",
  },
  {
    name: "ACW PUMP E",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Running",
    health: "Operational",
    connectivity: "1/1",
    score: "92%",
  },
  {
    name: "Main Condenser",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Idle",
    health: "Unavailable",
    connectivity: "0/1",
    score: "N/A",
  },
  {
    name: "Feed Pump 1",
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    status: "Unavailable",
    health: "Unknown",
    connectivity: "0/2",
    score: "55%",
  },
];

const EquipmentPanel = () => {
  const [selectedSite, setSelectedSite] = useState("Hariawan");
  const [selectedLine, setSelectedLine] = useState("Distillery Power Plant");

  return (
    <section className="px-4 py-5 space-y-4">
      {/* Filter dropdowns */}
      <div className="space-y-2 w-full">
        <StyledDropdown
          label="Site"
          value={selectedSite}
          options={siteOptions}
          onSelect={setSelectedSite}
        />
        <StyledDropdown
          label="Line"
          value={selectedLine}
          options={lineOptions}
          onSelect={setSelectedLine}
        />
      </div>

      {/* Search + Filter icon */}
      <div className="flex items-center">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search Equipments..."
            className="pl-8 pr-2 py-1.5 w-full rounded-md bg-gray-50 border border-gray-300 text-xs text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-purple-300 focus:outline-none"
          />
          <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
        </div>

        <button className="p-2 ml-2 rounded-md hover:bg-gray-100">
          <SlidersHorizontal className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      {/* Equipment Cards */}
      <div className="space-y-3">
        {dummyEquipments.map((equip, i) => (
          <EquipmentCard
            key={i}
            {...equip}
            onClick={() => alert(`Navigate to ${equip.name}`)}
          />
        ))}
      </div>
    </section>
  );
};

// Fully functional dropdown component
const StyledDropdown = ({ label, value, options, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <button
        className="w-full rounded-lg border border-gray-300 px-4 py-2 bg-white text-left shadow-sm hover:border-gray-400 flex items-center justify-between"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>
          <div className="text-xs text-gray-500 font-medium">{label}:</div>
          <div className="text-sm font-semibold text-gray-800">{value}</div>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-md text-sm">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                onSelect(option);
                setOpen(false);
              }}
              className={`px-4 py-2 hover:bg-gray-50 cursor-pointer ${
                option === value ? "font-semibold text-purple-600" : "text-gray-700"
              }`}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentPanel;
