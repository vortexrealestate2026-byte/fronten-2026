export default function Topbar() {
  return (
    <header
      style={{
        height: "60px",
        borderBottom: "1px solid var(--vortex-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.5rem",
        background: "white"
      }}
    >
      <h3 style={{ color: "#0f172a" }}>AI Real Estate Platform</h3>

      <div
        style={{
          background: "var(--vortex-primary)",
          color: "white",
          padding: "0.4rem 0.8rem",
          borderRadius: "6px",
          fontSize: "0.9rem"
        }}
      >
        User
      </div>
    </header>
  )
}
