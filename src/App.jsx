import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Moda from "./pages/Moda";
import Top from "./pages/Top";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { ProductsProvider } from "./context/ProductsContext";
import "./styles.css";


// CRUD Admin
import AddProductForm from "./components/AddProductForm";
import ProductsList from "./components/ProductsList";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>
          <BrowserRouter>
            
            <Navbar />

            <div className="min-h-screen p-4">
              <Routes>

                {/* Tus rutas normales */}
                <Route path="/" element={<Home />} />
                <Route path="/moda" element={<Moda />} />
                <Route path="/top" element={<Top />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<Login />} />

                {/* === CRUD ADMIN === */}
                <Route
                  path="/admin/products"
                  element={
                    <div className="max-w-4xl mx-auto">
                      <h1 className="text-3xl font-bold mb-4">
                        Administración de Productos
                      </h1>

                      <AddProductForm />
                      <div className="my-6"></div>
                      <ProductsList />
                    </div>
                  }
                />
              </Routes>
            </div>

            <Footer />

          </BrowserRouter>
        </ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
}
