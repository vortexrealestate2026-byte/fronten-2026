import React, { useState } from "react"
import { useDeals, Deal } from "../../hooks/useDeals"
import DealCard from "./DealCard"
import DealFilters from "./DealFilters"

interface Props {
  limit?: number
}

export default function DealList({ limit }: Props) {
  const [filters, setFilters] = useState<Record<string, any>>({})
  const { deals, loading } = useDeals(filters)

  if (loading) return <p>Loading deals...</p>

  const visibleDeals = limit ? deals.slice(0, limit) : deals

  return (
    <div>
      {!limit && (
        <DealFilters
          onChange={(f) => {
            setFilters(f)
          }}
        />
      )}

      <div style={{ marginTop: "1rem" }}>
        {visibleDeals.length === 0 && <p>No deals found.</p>}

        {visibleDeals.map((deal: Deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
    </div>
  )
}
