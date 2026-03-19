import { Routes, Route } from "react-router-dom";
import Dashboard from "./src/pages/Dashboard";
import Deals from "./src/pages/Deals";
import Properties from "./src/pages/Properties";
import Buyers from "./src/pages/Buyers";
import Settings from "./src/pages/Settings";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
