import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Globe,
  Factory,
} from "lucide-react";
import clsx from "clsx";

const Sidebar = ({ collapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedSite, setSelectedSite] = useState("Hariawan");
  const [selectedLine, setSelectedLine] = useState("Distillery Power Plant");

  const toggleMenu = (key) => {
    setOpenMenu((prev) => (prev === key ? null : key));
  };

  const siteOptions = ["Hariawan", "Sitapur", "Barabanki"];
  const lineOptions = ["Distillery Power Plant", "Turbine", "Boiler"];

  return (
    <aside
      className={clsx(
        "h-full bg-white border-r border-gray-200 shadow-md transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-80"
      )}
    >
      {/* Logo */}
      <div className="p-6 py-6">
        {!collapsed ? (
          <h1 className="text-indigo-600 font-extrabold text-2xl tracking-tight">
            Wogix
          </h1>
        ) : (
          <div className="text-indigo-600 text-xl font-extrabold text-center">W</div>
        )}
      </div>

      {/* Dropdown Menus */}
      <nav className="flex flex-col gap-6 px-6 pb-6">
        {/* Site Dropdown */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase mb-1 tracking-wide">
            <Globe className="w-4 h-4 text-indigo-500" />
            {!collapsed && <span>Site</span>}
          </div>

          {!collapsed && (
            <div className="relative">
              <button
                onClick={() => toggleMenu("site")}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
              >
                <span>{selectedSite}</span>
                {openMenu === "site" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openMenu === "site" && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {siteOptions.map((site) => (
                    <li
                      key={site}
                      className={clsx(
                        "cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition",
                        site === selectedSite &&
                          "bg-indigo-100 text-indigo-700 font-semibold"
                      )}
                      onClick={() => {
                        setSelectedSite(site);
                        setOpenMenu(null);
                      }}
                    >
                      {site}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>

        {/* Line Dropdown */}
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 font-medium uppercase mb-1 tracking-wide">
            <Factory className="w-4 h-4 text-pink-500" />
            {!collapsed && <span>Line</span>}
          </div>

          {!collapsed && (
            <div className="relative">
              <button
                onClick={() => toggleMenu("line")}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 font-semibold hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
              >
                <span>{selectedLine}</span>
                {openMenu === "line" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openMenu === "line" && (
                <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {lineOptions.map((line) => (
                    <li
                      key={line}
                      className={clsx(
                        "cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 transition",
                        line === selectedLine &&
                          "bg-indigo-100 text-indigo-700 font-semibold"
                      )}
                      onClick={() => {
                        setSelectedLine(line);
                        setOpenMenu(null);
                      }}
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
