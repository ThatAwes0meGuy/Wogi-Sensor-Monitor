import InsightCard from "./InsightCard";

const dummyInsights = [
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "ID FAN • Fan DE (AD3435)",
    metric: "Velocity (H) 5.91 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 06:48 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "CT FAN-1 • Motor DE (AD3027M)",
    metric: "Velocity (V) 4.95 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 04:28 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "SERVICE AIR COMPRESSOR-2",
    metric: "Temperature 70°C",
    threshold: "70°C",
    alert: "Temperature Limit Reached",
    timestamp: "21 Jun 2025 02:55 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "ID FAN • Fan DE (AD3435)",
    metric: "Velocity (H) 5.91 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 06:48 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "CT FAN-1 • Motor DE (AD3027M)",
    metric: "Velocity (V) 4.95 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 04:28 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "SERVICE AIR COMPRESSOR-2",
    metric: "Temperature 70°C",
    threshold: "70°C",
    alert: "Temperature Limit Reached",
    timestamp: "21 Jun 2025 02:55 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "ID FAN • Fan DE (AD3435)",
    metric: "Velocity (H) 5.91 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 06:48 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "CT FAN-1 • Motor DE (AD3027M)",
    metric: "Velocity (V) 4.95 mm/s",
    threshold: "4.50 mm/s",
    alert: "Suspected Overload",
    timestamp: "21 Jun 2025 04:28 PM",
  },
  {
    image: "https://www.shutterstock.com/image-photo/row-white-robotic-arms-modern-260nw-2476186489.jpg",
    title: "SERVICE AIR COMPRESSOR-2",
    metric: "Temperature 70°C",
    threshold: "70°C",
    alert: "Temperature Limit Reached",
    timestamp: "21 Jun 2025 02:55 PM",
  },
];

const InsightsPanel = () => {
  return (
    <div className="px-4 py-6 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-sm font-bold text-gray-800">Insights</h2>
        <button className="p-1.5 rounded-md hover:bg-gray-100 transition">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h3m4 0h9a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          </svg>
        </button>
      </div>

      {dummyInsights.map((insight, i) => (
        <InsightCard key={i} {...insight} />
      ))}
    </div>
  );
};

export default InsightsPanel;
