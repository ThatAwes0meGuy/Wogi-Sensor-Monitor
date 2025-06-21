import EquipmentCard from "./EquipmentCard";
import { Search, SlidersHorizontal } from "lucide-react";

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
  return (
    <section className="px-4 py-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-gray-700 tracking-tight">
          Equipments
        </h2>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-2 py-1.5 rounded-md bg-gray-50 border border-gray-300 text-xs text-gray-700 placeholder:text-gray-400 focus:ring-1 focus:ring-purple-300 focus:outline-none"
            />
            <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Filter */}
          <button className="p-2 rounded-md hover:bg-gray-100">
            <SlidersHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Equipment List */}
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

export default EquipmentPanel;
