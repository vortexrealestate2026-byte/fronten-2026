import { useState } from "react"
import Button from "../common/Button"
import Modal from "../common/Modal"

export default function BuyerPreferencesForm() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [criteria, setCriteria] = useState("")

  function submit() {
    console.log("Saving buyer:", { name, email, criteria })
    setOpen(false)
  }

  return (
    <div className="card fade-in">
      <h2>Add Buyer</h2>

      <Button
        variant="primary"
        onClick={() => setOpen(true)}
        style={{ marginTop: "1rem" }}
      >
        Add Buyer
      </Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Add Buyer</h2>

        <div style={{ marginTop: "1rem" }}>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div style={{ marginTop: "1rem" }}>
          <label>Criteria (comma separated)</label>
          <input
            value={criteria}
            onChange={(e) => setCriteria(e.target.value)}
          />
        </div>

        <Button
          variant="primary"
          onClick={submit}
          style={{ marginTop: "1.5rem", width: "100%" }}
        >
          Save Buyer
        </Button>
      </Modal>
    </div>
  )
}
