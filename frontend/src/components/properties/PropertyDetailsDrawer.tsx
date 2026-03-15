import React from "react"
import { Property } from "../../hooks/useProperties"

interface Props {
  property: Property | null
  onClose: () => void
}

export default function PropertyDetailsDrawer({ property, onClose }: Props) {
  if (!property) return null

  return (
    <div
      className="fade-in"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        width: "380px",
        height: "100%",
        background: "white",
        borderLeft: "1px solid #e2e8f0",
        boxShadow: "-2px 0 8px rgba(0,0,0,0.1)",
        padding: "1.5rem",
        zIndex: 999
      }}
    >
      <button
        onClick={onClose}
        style={{
          background: "var(--vortex-primary)",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "6px",
          marginBottom: "1rem"
        }}
      >
        Close
      </button>

      <h2>{property.address}</h2>
      <p>
        {property.city}, {property.state}
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
        {property.beds && <p><strong>Beds:</strong> {property.beds}</p>}
        {property.baths && <p><strong>Baths:</strong> {property.baths}</p>}
        {property.sqft && <p><strong>Sqft:</strong> {property.sqft.toLocaleString()}</p>}
      </div>
    </div>
  )
}
