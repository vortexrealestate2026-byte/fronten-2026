import { Link, useLocation } from "react-router-dom"

export default function Sidebar() {
  const { pathname } = useLocation()

  const navItem = (path: string, label: string) => (
    <Link
      to={path}
      style={{
        padding: "0.75rem 1rem",
        borderRadius: "6px",
        marginBottom: "0.5rem",
        display: "block",
        background: pathname === path ? "var(--vortex-primary)" : "transparent",
        color: pathname === path ? "white" : "#0f172a",
        textDecoration: "none",
        fontWeight: 500,
        transition: "0.2s"
      }}
    >
      {label}
    </Link>
  )

  return (
    <aside
      style={{
        width: "240px",
        background: "white",
        borderRight: "1px solid var(--vortex-border)",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <h2 style={{ marginBottom: "2rem", color: "var(--vortex-primary)" }}>
        VORTEX
      </h2>

      {navItem("/", "Dashboard")}
      {navItem("/deals", "Deals")}
      {navItem("/properties", "Properties")}
      {navItem("/buyers", "Buyers")}
      {navItem("/settings", "Settings")}
    </aside>
  )
}
