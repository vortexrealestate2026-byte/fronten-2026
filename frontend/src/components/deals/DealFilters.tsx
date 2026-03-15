import React, { useState } from "react"

interface Props {
  onChange?: (filters: Record<string, any>) => void
}

export default function DealFilters({ onChange }: Props) {
  const [minScore, setMinScore] = useState(0)
  const [maxPrice, setMaxPrice] = useState("")

  function applyFilters() {
    onChange?.({
      min_score: minScore,
      max_price: maxPrice || undefined
    })
  }

  return (
    <div className="card fade-in" style={{ display: "flex", gap: "1rem" }}>
      <div style={{ flex: 1 }}>
        <label>Min Score</label>
        <input
          type="number"
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
        />
      </div>

      <div style={{ flex: 1 }}>
        <label>Max Price</label>
        <input
          type="number"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <button
        onClick={applyFilters}
        style={{
          background: "var(--vortex-primary)",
          color: "white",
          padding: "0.6rem 1rem",
          borderRadius: "6px",
          height: "42px",
          alignSelf: "flex-end"
        }}
      >
        Apply
      </button>
    </div>
  )
}
