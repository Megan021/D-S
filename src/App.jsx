// import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Shop from "./Pages/Shop"
import ScrollToTop from "./Components/ScrollToTop"
import Contact from "./Pages/Contact"
import ProductDetail from "./Pages/ProductDetail"
import About from "./Pages/About"

function App() {

  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
