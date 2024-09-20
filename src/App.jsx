import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Shop from "./Pages/Shop"
import ScrollToTop from "./Components/ScrollToTop"
import Contact from "./Pages/Contact"
import ProductDetail from "./Pages/ProductDetail"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Wishlist from "./Pages/Wishlist"
import Cart from "./Pages/Cart"
import { CartProvider } from "./Context/CartContext"; 

function App() {

  return (
    <>
    <CartProvider> {/* Wrap the entire app in CartProvider */}
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
    </>
  )
}

export default App
