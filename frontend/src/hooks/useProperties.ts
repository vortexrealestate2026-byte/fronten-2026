import { useEffect, useState } from "react"
import apiClient from "../lib/apiClient"

export interface Property {
  id: string
  address: string
  city: string
  state: string
  price: number
  beds?: number
  baths?: number
  sqft?: number
  lat?: number
  lng?: number
}

export function useProperties() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProperties() {
      try {
        const res = await apiClient.get("/properties")
        setProperties(res.data)
      } catch (err) {
        console.error("Failed to load properties", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProperties()
  }, [])

  return { properties, loading }
}

export default useProperties
