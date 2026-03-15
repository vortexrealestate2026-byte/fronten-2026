iimport { Routes, Route } from "react-router-dom"

function Dashboard() {
  return <h2>Dashboard Page</h2>
}

function Deals() {
  return <h2>Deals Page</h2>
}

function Properties() {
  return <h2>Properties Page</h2>
}

function Buyers() {
  return <h2>Buyers Page</h2>
}

function Settings() {
  return <h2>Settings Page</h2>
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/deals" element={<Deals />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/buyers" element={<Buyers />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}
