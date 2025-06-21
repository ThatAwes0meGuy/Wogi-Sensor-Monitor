import { Bell, Menu } from "lucide-react";

const Header = ({ onToggleSidebar }) => {
  const hasNotifications = true;
  const user = {
    name: "Ashish",
    avatar: "https://i.pravatar.cc/150?img=32",
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
      {/* Left: Hamburger + Nav Links */}
      <div className="flex items-center gap-6">
        <button
          onClick={onToggleSidebar}
          className="text-gray-600 hover:text-indigo-600 transition"
        >
          <Menu className="w-6 h-6" />
        </button>

        <nav className="flex items-center gap-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-indigo-600 transition">Plant Status</a>
          <a href="#" className="hover:text-indigo-600 transition">Realtime View</a>
          <a href="#" className="hover:text-indigo-600 transition">Service Order</a>
          <a href="#" className="hover:text-indigo-600 transition">Analysis</a>
          <a href="#" className="hover:text-indigo-600 transition">Views</a>
          <a href="#" className="hover:text-indigo-600 transition">Settings</a>
        </nav>
      </div>

      {/* Right: Notification + User */}
      <div className="flex items-center gap-6">
        <div className="relative">
          <Bell className="w-6 h-6 text-gray-600 hover:text-indigo-600 cursor-pointer" />
          {hasNotifications && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" />
          )}
        </div>

        <div className="flex items-center gap-3">
          <img
            src={user.avatar}
            alt="User"
            className="w-9 h-9 rounded-full border border-gray-200 shadow-sm"
          />
          <span className="text-gray-700 font-medium">{user.name}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
