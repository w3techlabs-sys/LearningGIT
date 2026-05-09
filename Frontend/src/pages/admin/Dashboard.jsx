export default function Dashboard() {
  return (
    <div className="container py-5">
      <h2>Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-3">
          <div className="card p-3">Users: 120</div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">Services: 15</div>
        </div>
        <div className="col-md-3">
          <div className="card p-3">Quotes: 30</div>
        </div>
      </div>
    </div>
  )
}   