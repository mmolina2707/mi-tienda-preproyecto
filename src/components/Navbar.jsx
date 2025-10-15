import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav className="flex items-center space-x-6">
      <Link to="/" className="hover:text-yellow-400">Inicio</Link>
      <Link to="/moda" className="hover:text-yellow-400">Lo mas buscado...</Link>
      <Link to="/cart" className="hover:text-yellow-400">
        Carrito ({cartCount})
      </Link>
    </nav>
  );
}
