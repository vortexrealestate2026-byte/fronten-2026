import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Deals from "./pages/Deals";
import Properties from "./pages/Properties";
import Buyers from "./pages/Buyers";
import Settings from "./pages/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/buyers" element={<Deals />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
