import Sidebar from "./Sidebar"
import Topbar from "./Topbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", height: "100vh", width: "100%" }}>
      <Sidebar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />

        <main style={{ padding: "1.5rem", overflowY: "auto", flex: 1 }}>
          {children}
        </main>
      </div>
    </div>
  )
}
