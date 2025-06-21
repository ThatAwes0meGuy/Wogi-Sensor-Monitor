import {useState} from 'react'

import Header from './components/Header';
import Sidebar from './components/Sidebar';
function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full bg-gray-50 font-sans">
      {/* Sidebar */}
      <Sidebar collapsed={isSidebarCollapsed} />

      {/* Main Panel */}
      <div className="flex flex-col flex-1">
        <Header onToggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)} />

        <main className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800">Main Content</h1>
          <p className="text-gray-600 mt-4">
            This is your production-ready dashboard layout with a top header and collapsible sidebar.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
