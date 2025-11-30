import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductosPage from "./pages/ProductosPage";
import Moda from "./pages/Moda";
import TopProducts from "./pages/TopProducts";


import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>

          <Navbar />

          <main className="min-h-screen p-6">
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/productos" element={<ProductosPage />} />
              <Route path="/moda" element={<Moda />} />
              <Route path="/top" element={<TopProducts />} />

              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <CartPage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>

          <Footer />

        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

