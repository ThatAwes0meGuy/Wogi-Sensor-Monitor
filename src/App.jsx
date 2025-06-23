import { Routes, Route } from "react-router-dom";
import RealtimeDashboard from "./pages/RealtimeDashboard";
import Navbar from "./components/Header";
import RealtimeFFT from "./pages/RealtimeFFT";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/realtime-dashboard" element={<RealtimeDashboard />} />
        <Route path="/realtime-dashboard/fft" element={<RealtimeFFT />} />
      </Routes>
    </>
  );
}

const LandingPage = () => (
  <div className="flex items-center justify-center h-screen">
    <a
      href="/realtime-dashboard"
      className="text-lg font-semibold text-indigo-600 hover:underline"
    >
      Go to Realtime Dashboard →
    </a>
  </div>
);

export default App;
 