interface Props {
  color?: "green" | "blue" | "red" | "gray"
  children: React.ReactNode
}

export default function Badge({ color = "gray", children }: Props) {
  const colors: Record<string, string> = {
    green: "#10b981",
    blue: "#3b82f6",
    red: "#ef4444",
    gray: "#6b7280"
  }

  return (
    <span
      style={{
        background: colors[color],
        color: "white",
        padding: "0.25rem 0.6rem",
        borderRadius: "6px",
        fontSize: "0.75rem",
        fontWeight: 600
      }}
    >
      {children}
    </span>
  )
}
