import PropertyMap from "../components/properties/PropertyMap"
import PropertyTable from "../components/properties/PropertyTable"

export default function Properties() {
  return (
    <div className="container fade-in">
      <h1>Properties</h1>
      <p>All properties ingested from Zillow, Realtor, Redfin, Craigslist, and more.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
        <div className="card">
          <h2>Map View</h2>
          <PropertyMap height="400px" />
        </div>

        <div className="card">
          <h2>Property List</h2>
          <PropertyTable />
        </div>
      </div>
    </div>
  )
}
