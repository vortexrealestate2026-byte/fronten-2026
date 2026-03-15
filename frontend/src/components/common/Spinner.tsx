export default function Spinner() {
  return (
    <div
      style={{
        width: "32px",
        height: "32px",
        border: "4px solid #e2e8f0",
        borderTop: "4px solid var(--vortex-primary)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
        margin: "auto"
      }}
    />
  )
}
