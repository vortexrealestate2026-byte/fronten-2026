import React, { useState } from "react"
import { useProperties, Property } from "../../hooks/useProperties"
import PropertyDetailsDrawer from "./PropertyDetailsDrawer"

export default function PropertyTable() {
  const { properties, loading } = useProperties()
  const [selected, setSelected] = useState<Property | null>(null)

  if (loading) return <p>Loading properties...</p>

  return (
    <div className="card">
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "2px solid #e2e8f0" }}>
            <th>Address</th>
            <th>Price</th>
            <th>Beds</th>
            <th>Baths</th>
            <th>Sqft</th>
          </tr>
        </thead>

        <tbody>
          {properties.map((p) => (
            <tr
              key={p.id}
              onClick={() => setSelected(p)}
              style={{
                cursor: "pointer",
                borderBottom: "1px solid #e2e8f0",
                height: "48px"
              }}
            >
              <td>{p.address}</td>
              <td>${p.price.toLocaleString()}</td>
              <td>{p.beds || "-"}</td>
              <td>{p.baths || "-"}</td>
              <td>{p.sqft?.toLocaleString() || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PropertyDetailsDrawer
        property={selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}
