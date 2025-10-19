import { NavLink } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  // Función que aplica estilos dinámicamente según si el enlace está activo o no
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-500 font-semibold border-b-2 border-blue-500 transition"
      : "text-gray-700 hover:text-yellow-400";

  return (
    <nav className="flex items-center space-x-6">
      <NavLink to="/" className={linkClass}>
        Inicio
      </NavLink>

      <NavLink to="/moda" className={linkClass}>
        Lo más comprado...
      </NavLink>

      <NavLink to="/cart" className={linkClass}>
        Carrito ({cartCount})
      </NavLink>
    </nav>
  );
}
