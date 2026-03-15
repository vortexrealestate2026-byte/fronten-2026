interface Props {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ open, onClose, children }: Props) {
  if (!open) return null

  return (
    <div
      className="fade-in"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999
      }}
    >
      <div
        style={{
          background: "white",
          padding: "2rem",
          borderRadius: "10px",
          width: "420px",
          maxWidth: "90%"
        }}
      >
        {children}

        <button
          onClick={onClose}
          style={{
            marginTop: "1rem",
            background: "var(--vortex-primary)",
            color: "white",
            padding: "0.5rem 1rem",
            borderRadius: "6px"
          }}
        >
          Close
        </button>
      </div>
    </div>
  )
}
