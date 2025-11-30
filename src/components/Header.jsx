/*import Navbar from './Navbar';

export default function Header({ cartCount }) {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">🛍️ Mi Tienda</h1>
        <Navbar cartCount={cartCount} />
      </div>
    </header>
  );
}*/

// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  const totalItems = cart.reduce((s, p) => s + (p.qty || 1), 0);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-2xl font-bold">
        🛒 Mi eCommerce
      </Link>

      <div className="flex items-center space-x-6">

        <Link to="/" className="hover:text-gray-200">Home</Link>

        <Link to="/cart" className="relative hover:text-gray-200">
          Carrito
          <span className="absolute -top-3 -right-4 bg-red-500 text-white rounded-full text-xs px-2 py-0.5">
            {totalItems}
          </span>
        </Link>

        {!user ? (
          <Link className="hover:text-gray-200" to="/login">Login</Link>
        ) : (
          <button
            onClick={logout}
            className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            Logout ({user})
          </button>
        )}
      </div>
    </nav>
  );
}

