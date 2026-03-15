import DealFilters from "../components/deals/DealFilters"
import DealList from "../components/deals/DealList"

export default function Deals() {
  return (
    <div className="container fade-in">
      <h1>Deals</h1>
      <p>AI‑scored wholesale deals pulled from live U.S. listings.</p>

      <div style={{ marginTop: "1.5rem" }}>
        <DealFilters />
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <DealList />
      </div>
    </div>
  )
}
