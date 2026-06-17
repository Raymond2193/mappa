import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components";
import SearchPage from "./pages/SearchPage";
import CalendarPage from "./pages/CalendarPage";
import AvailabilityPage from "./pages/AvailabilityPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-bg-base flex flex-col">
        <NavBar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/search" replace />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/availability" element={<AvailabilityPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
