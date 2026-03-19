import { useState, useEffect } from "react"
import apiClient from "../lib/apiClient"

export interface Property {
  id: number
  address: string
  price: number
  status: string
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiClient.get("/api/properties")
      .then((res) => setProperties(res.data))
      .catch(() => setProperties([]))
      .finally(() => setLoading(false))
  }, [])

  return { properties, loading }
}
