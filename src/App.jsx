import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Shop from "./Pages/Shop";
import ScrollToTop from "./Components/ScrollToTop";
import Contact from "./Pages/Contact";
import ProductDetail from "./Pages/ProductDetail";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import { CartProvider } from "./Context/CartContext";
import ShippingAndCard from "./Pages/ShippingAndPayment";
import OrderConfirm from "./Pages/OrderConfirm";
import FAQ from "./Pages/FAQ";
import { WishlistProvider } from "./Context/WishlistContext";
import Policy from "./Pages/Policy";
import { Toaster } from 'react-hot-toast';
import MyAccount from "./Pages/Dashboard/MyAccount";
import UserInfo from "./Pages/Dashboard/UserInfo";
import AddressBook from "./Pages/Dashboard/AddressBook";
import OrderDetail from "./Pages/Dashboard/OrderDetail";
import { OrderProvider } from "./Context/OrderContext";

function App() {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
        <OrderProvider>
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
              <Route path="/shipping-and-payment" element={<ShippingAndCard />} />
              <Route path="/order-confirm" element={<OrderConfirm />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/policy" element={<Policy />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/user-info" element={<UserInfo />} />
              <Route path="/user-address" element={<AddressBook />} />
              <Route path="/order-detail" element={<OrderDetail />} />
            </Routes>
            <Footer />
            <Toaster position="top-center" reverseOrder={false} />
          </Router>
          </OrderProvider>
        </CartProvider>
      </WishlistProvider>
    </>
  );
}

export default App;