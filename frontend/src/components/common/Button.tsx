interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  style?: React.CSSProperties
}

export default function Button({
  children,
  onClick,
  variant = "primary",
  style
}: Props) {
  const base = {
    padding: "0.6rem 1rem",
    borderRadius: "6px",
    cursor: "pointer",
    border: "none",
    fontWeight: 600,
    transition: "0.2s"
  } as React.CSSProperties

  const variants = {
    primary: {
      background: "var(--vortex-primary)",
      color: "white"
    },
    secondary: {
      background: "var(--vortex-secondary)",
      color: "white"
    }
  }

  return (
    <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  )
}
