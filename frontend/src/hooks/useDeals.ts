import { useEffect, useState } from "react"
import apiClient from "../lib/apiClient"

export interface Deal {
  id: string
  address: string
  price: number
  arv: number
  score: number
  status: string
}

export function useDeals(filters?: Record<string, any>) {
  const [deals, setDeals] = useState<Deal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDeals() {
      try {
        const res = await apiClient.get("/deals", { params: filters })
        setDeals(res.data)
      } catch (err) {
        console.error("Failed to load deals", err)
      } finally {
        setLoading(false)
      }
    }

    fetchDeals()
  }, [JSON.stringify(filters)])

  return { deals, loading }
}

export default useDeals
