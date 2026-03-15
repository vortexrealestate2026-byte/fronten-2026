import { useEffect, useState } from "react"
import apiClient from "../lib/apiClient"

export interface Buyer {
  id: string
  name: string
  email: string
  phone?: string
  criteria: string[]
}

export function useBuyers() {
  const [buyers, setBuyers] = useState<Buyer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchBuyers() {
      try {
        const res = await apiClient.get("/buyers")
        setBuyers(res.data)
      } catch (err) {
        console.error("Failed to load buyers", err)
      } finally {
        setLoading(false)
      }
    }

    fetchBuyers()
  }, [])

  return { buyers, loading }
}

export default useBuyers
