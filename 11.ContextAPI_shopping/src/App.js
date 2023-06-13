import Nav from "./Components/Nav";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Nav />
        <div className="container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
