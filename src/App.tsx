import "./App.css";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalePage from "./pages/SalePage";
import Footer from "./components/Footer";


function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
