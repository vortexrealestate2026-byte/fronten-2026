import DealList from "../components/deals/DealList"
import PropertyMap from "../components/properties/PropertyMap"

export default function Dashboard() {
  return (
    <div className="container fade-in">
      <h1>Dashboard</h1>
      <p>Your AI‑powered real estate wholesaling control center.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
        <div className="card">
          <h2>Latest Deals</h2>
          <DealList limit={5} />
        </div>

        <div className="card">
          <h2>Map View</h2>
          <PropertyMap height="350px" />
        </div>
      </div>
    </div>
  )
}
