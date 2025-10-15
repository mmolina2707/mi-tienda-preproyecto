import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moda from "./pages/Moda";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if (found) {
        return prev.map(p => p.id === product.id ? { ...p, qty: p.qty + 1 } : p);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter((p) => p.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p));
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((s,p)=>s+(p.qty||0),0)} />
      <main className="min-h-screen py-8">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/moda" element={<Moda addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateQty={updateQty} />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
