import { useBuyers } from "../../hooks/useBuyers"
import Spinner from "../common/Spinner"

export default function BuyerList() {
  const { buyers, loading } = useBuyers()

  if (loading) return <Spinner />

  return (
    <div className="card fade-in">
      <h2>Buyer List</h2>

      <ul style={{ marginTop: "1rem" }}>
        {buyers.map((b) => (
          <li
            key={b.id}
            style={{
              padding: "0.6rem 0",
              borderBottom: "1px solid var(--vortex-border)"
            }}
          >
            <strong>{b.name}</strong>
            <br />
            {b.email}
            <br />
            <small>Criteria: {b.criteria.join(", ")}</small>
          </li>
        ))}
      </ul>
    </div>
  )
}
