import { useState } from "react"
import api from "../../services/api"

export default function Contact() {
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    await api.post("/contact", form)
    alert("Message sent")
  }

  return (
    <div className="container py-5">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Name"
          onChange={e => setForm({...form, name: e.target.value})}
        />
        <input className="form-control mb-2" placeholder="Email"
          onChange={e => setForm({...form, email: e.target.value})}
        />
        <textarea className="form-control mb-2"
          onChange={e => setForm({...form, message: e.target.value})}
        />
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  )
}