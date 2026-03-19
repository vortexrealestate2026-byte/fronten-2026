import { useState, useEffect } from "react"
import apiClient from "../lib/apiClient"

export interface Deal {
  id: number
  title: string
  price: number
  arv: number
  status: string
}

export function useDeals(filters: Record<string, any> = {}) {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient.get("/api/deals", { params: filters })
      .then((res) => setDeals(res.data))
      .catch(() => setDeals([]))
      .finally(() => setLoading(false))
  }, [JSON.stringify(filters)])

  return { deals, loading }
}
