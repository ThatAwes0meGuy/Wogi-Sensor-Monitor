import DonutChartCompact from "./DonutChart";
import StackedBarChart from "./StackedBarChart";
import HealthScoreLineChart from "./HealthScoreLineChart";

const healthData = [
  { name: "Operational", value: 79.4, color: "#16a34a" },
  { name: "Danger", value: 17.6, color: "#dc2626" },
  { name: "Watch", value: 2.9, color: "#eab308" },
];

const utilisationData = [
  { name: "Running", value: 77.1, color: "#16a34a" },
  { name: "Idle", value: 20.0, color: "#2563eb" },
  { name: "Unavailable", value: 2.9, color: "#6b7280" },
];

const healthScoreData = [
    { date: "5 Jun", score: 32 },
    { date: "6 Jun", score: 50 },
    { date: "7 Jun", score: 64 },
    { date: "8 Jun", score: 78 },
    { date: "9 Jun", score: 81.5 },
    { date: "10 Jun", score: 91.2 },
    { date: "11 Jun", score: 92 },
  ];

const trendData = [
  {
    date: "14 Jun",
    Operational: 0.7,
    Watch: 0.1,
    Caution: 0.1,
    Danger: 0.1,
  },
  {
    date: "15 Jun",
    Operational: 0.6,
    Watch: 0.15,
    Caution: 0.15,
    Danger: 0.1,
  },
  {
    date: "16 Jun",
    Operational: 0.8,
    Watch: 0.05,
    Caution: 0.1,
    Danger: 0.05,
  },
  {
    date: "14 Jun",
    Operational: 0.7,
    Watch: 0.1,
    Caution: 0.1,
    Danger: 0.1,
  },
  {
    date: "15 Jun",
    Operational: 0.6,
    Watch: 0.15,
    Caution: 0.15,
    Danger: 0.1,
  },
  {
    date: "16 Jun",
    Operational: 0.8,
    Watch: 0.05,
    Caution: 0.1,
    Danger: 0.05,
  },
  
];

const ChartGrid = () => {
  return (
    <section className="flex flex-wrap gap-4 px-4 pb-6">
        <div className="w-full sm:w-[48%]"><DonutChartCompact title="Equipment Health Status" centerLabel="43%" data={healthData} /></div>
        <div className="w-full sm:w-[48%]"><DonutChartCompact title="Equipment Utilisation" centerLabel="43%" data={utilisationData} /></div>
        <div className="w-full sm:w-[48%]"><HealthScoreLineChart title="Area Health Score Trend" data={healthScoreData} /></div>
        <div className="w-full sm:w-[48%]"><StackedBarChart title="Area Health Score Trend" data={trendData} /></div>
    </section>
  );
};

export default ChartGrid;
