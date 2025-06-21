import { useState } from "react";
import {
  LayoutDashboard,
  Folder,
  User,
  Settings,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import clsx from "clsx";

const menuItems = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5 text-indigo-500" />,
    subItems: ["Overview", "Reports", "Analytics"],
  },
  {
    key: "projects",
    label: "Projects",
    icon: <Folder className="w-5 h-5 text-pink-500" />,
    subItems: ["Active", "Archived", "New"],
  },
  {
    key: "users",
    label: "Users",
    icon: <User className="w-5 h-5 text-emerald-500" />,
    subItems: ["All", "Roles", "Invites"],
  },
  {
    key: "settings",
    label: "Settings",
    icon: <Settings className="w-5 h-5 text-yellow-500" />,
    subItems: ["Profile", "Preferences", "Billing"],
  },
];

const Sidebar = ({ collapsed }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const toggleMenu = (key) =>
    setOpenMenu((prev) => (prev === key ? null : key));

  return (
    <aside
      className={clsx(
        "h-full border-r border-gray-200 bg-white shadow-sm transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6">
        <h1
          className={clsx(
            "text-indigo-600 font-extrabold text-xl tracking-tight transition-opacity duration-300",
            collapsed && "opacity-0"
          )}
        >
          Wogix
        </h1>
        {collapsed && (
          <div className="text-indigo-600 text-xl font-extrabold text-center">
            W
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-2 px-3 pb-6">
        {menuItems.map(({ key, label, icon, subItems }) => (
          <div key={key} className="text-sm">
            <button
              onClick={() => toggleMenu(key)}
              className={clsx(
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-100 transition",
                collapsed && "justify-center"
              )}
            >
              <span className="flex items-center gap-3">
                {icon}
                {!collapsed && <span>{label}</span>}
              </span>
              {!collapsed &&
                (openMenu === key ? (
                  <ChevronUp className="w-4 h-4 text-gray-400" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                ))}
            </button>

            {!collapsed && openMenu === key && (
              <ul className="ml-9 mt-1 space-y-1 text-gray-600 text-sm">
                {subItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="hover:text-indigo-600 cursor-pointer transition"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
