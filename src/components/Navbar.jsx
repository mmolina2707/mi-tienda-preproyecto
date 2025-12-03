import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cart } = useCart();

  // Total de productos (sumando cantidades)
  const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center space-x-2">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="h-10 w-10 object-contain"
        />
        <span className="text-xl font-bold hover:text-yellow-400">
          🛍️ Mi Tienda
        </span>
      </Link>

      {/* LINKS */} 
      <div className="space-x-6 flex items-center">
        <Link to="/" className="hover:text-yellow-400">Inicio</Link>

        <Link to="/moda" className="hover:text-yellow-400">
          Lo más comprado
        </Link>

        <Link to="/top" className="hover:text-yellow-400">
          Productos Top
        </Link>

        <Link to="/admin/products" className="hover:text-yellow-400">
          Admin  
        </Link>
        
        
        <Link to="/cart" className="hover:text-yellow-400 relative">

        



          Carrito...

          {/* Contador rojo */}
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* LOGIN / LOGOUT */}
      <div>
        {!user ? (
          <Link to="/login" className="hover:text-yellow-400">
            Login
          </Link>
        ) : (
          <button
            onClick={logout}
            className="hover:text-red-400"
          >
            Cerrar Sesión ({user.username})
          </button>
        )}
      </div>
    </nav>
  );
}
