import BuyerList from "../components/buyers/BuyerList"
import BuyerPreferencesForm from "../components/buyers/BuyerPreferencesForm"

export default function Buyers() {
  return (
    <div className="container fade-in">
      <h1>Buyers</h1>
      <p>Manage your investor buyers and their preferences.</p>

      <div style={{ marginTop: "2rem", display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr" }}>
        <BuyerList />
        <BuyerPreferencesForm />
      </div>
    </div>
  )
}
