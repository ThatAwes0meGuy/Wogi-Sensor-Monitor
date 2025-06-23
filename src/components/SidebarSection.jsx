const SidebarSection = ({ title, icon, children }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase">
        {icon}
        {title}
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
  
  export default SidebarSection;
  