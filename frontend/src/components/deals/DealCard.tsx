import React from "react"
import { Deal } from "../../hooks/useDeals"

interface Props {
  deal: Deal
}

export default function DealCard({ deal }: Props) {
  return (
    <div
      className="card fade-in"
      style={{
        marginBottom: "1rem",
        cursor: "pointer",
        borderLeft: `6px solid ${
          deal.score > 80
            ? "var(--vortex-primary)"
            : deal.score > 60
            ? "var(--vortex-secondary)"
            : "#94a3b8"
        }`
      }}
    >
      <h3>{deal.address}</h3>

      <p style={{ marginTop: "0.5rem" }}>
        <strong>Price:</strong> ${deal.price.toLocaleString()}
      </p>

      <p>
        <strong>ARV:</strong> ${deal.arv.toLocaleString()}
      </p>

      <p>
        <strong>Score:</strong> {deal.score} / 100
      </p>

      <p>
        <strong>Status:</strong> {deal.status}
      </p>
    </div>
  )
}
