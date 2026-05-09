import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/public/Home"
// import Services from "../pages/public/Services"
// import ServiceDetail from "../pages/public/ServiceDetail"
import Contact from "../pages/public/Contact"
import AdminDashboard from "../pages/admin/Dashboard"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/services" element={<Services />} /> */}
        {/* <Route path="/services/:id" element={<ServiceDetail />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}