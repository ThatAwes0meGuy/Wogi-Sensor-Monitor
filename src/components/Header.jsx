import clsx from "clsx";

const Navbar = ({ selectedTab = "Realtime View" }) => {
  const navItems = [
    "Plant Status",
    "Realtime View",
    "Service Order",
    "Analysis",
    "Views",
    "Settings",
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-purple-700 tracking-tight">
          Wogix
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              className={clsx(
                "relative text-sm font-medium text-gray-700 transition hover:text-purple-600",
                selectedTab === item && "text-purple-700"
              )}
            >
              {item}
              {selectedTab === item && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-700 rounded" />
              )}
            </button>
          ))}
        </nav>

        {/* User Avatar */}
        <div className="w-9 h-9 bg-purple-50 border border-purple-100 rounded-full flex items-center justify-center text-purple-700 font-semibold">
          U
        </div>
      </div>
    </header>
  );
};

export default Navbar;
