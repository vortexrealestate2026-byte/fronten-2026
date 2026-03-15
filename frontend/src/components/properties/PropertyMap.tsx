import React from "react"
import { useProperties } from "../../hooks/useProperties"

interface Props {
  height?: string
}

export default function PropertyMap({ height = "300px" }: Props) {
  const { properties } = useProperties()

  return (
    <div
      className="card"
      style={{
        width: "100%",
        height,
        background: "#e2e8f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "10px"
      }}
    >
      <p style={{ color: "#475569" }}>
        Map placeholder — {properties.length} properties loaded
      </p>
    </div>
  )
}
