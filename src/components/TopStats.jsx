import {
    Wifi,
    AlertTriangle,
    ClipboardCheck,
    Clock,
    Cpu,
    HeartPulse,
    Activity,
  } from "lucide-react";
  
  const TopStats = () => {
    const stats = [
      {
        label: "Utilisation",
        value: "57.13%",
        delta: "+0%",
        icon: <Activity className="w-4 h-4 text-purple-500" />,
      },
      {
        label: "Devices",
        value: "43 (3)",
        icon: <Wifi className="w-4 h-4 text-blue-500" />,
      },
      {
        label: "Faults",
        value: "0",
        icon: <AlertTriangle className="w-4 h-4 text-red-500" />,
      },
      {
        label: "Actions",
        value: "0",
        icon: <ClipboardCheck className="w-4 h-4 text-green-500" />,
      },
      {
        label: "Saved Hours",
        value: "0",
        icon: <Clock className="w-4 h-4 text-yellow-500" />,
      },
      {
        label: "MTBF",
        value: "3984",
        delta: "+17%",
        icon: <Cpu className="w-4 h-4 text-teal-500" />,
      },
      {
        label: "Health",
        value: "92%",
        icon: <HeartPulse className="w-4 h-4 text-pink-500" />,
      },
    ];
  
    return (
      <section className="flex items-center justify-between flex-wrap gap-3 px-4 py-2">
        {/* Plant Title */}
        <div className="text-sm font-semibold text-gray-800 whitespace-nowrap">
          Pump DE (AD3177)
          <span className="text-gray-400 font-normal ml-1">
            • Distillery Power Plant
          </span>
        </div>
  
        {/* Stat Blocks */}
        <div className="flex gap-2 flex-wrap justify-end flex-1">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-md border border-gray-200 shadow-sm"
            >
              {stat.icon}
              <div className="leading-tight">
                <div className="text-xs text-gray-500">{stat.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {stat.value}
                </div>
                {stat.delta && (
                  <div className="text-[10px] text-green-600">{stat.delta}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TopStats;
  
//   The layout seems perfect
//   First image is reference. Second is what we have now. Let's work on it one by one.
//   Make my website way better than the competitor
//   Have a very good UX, colorful design, professional, aesthetic, clean, easy to read. Follow all standard design principles
//   Lets begin one by one.
//   Let's start with TopStats, We will add the remaining stats, maybe use images, make it beautiful and let's save some space and not waste horizontal space. I WOULD NEVER SCROLL in this webpage
  
//   ChatGPT said:
    