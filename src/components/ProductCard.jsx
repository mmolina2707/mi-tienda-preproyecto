import { Link } from 'react-router-dom';
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useCart(); // ← TOMAR DESDE CONTEXT

  return (
    <article className="bg-white shadow rounded-2xl p-4 flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        <img 
          src={`${product.image}`}
          alt={product.name}
          className="h-48 object-contain mx-auto mb-4"
        />
      </Link>

      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description?.slice(0, 80)}...</p>
      <p className="text-xl font-bold text-blue-600 mb-2">${product.price}</p>
      <p className="text-sm text-gray-500 mb-3">Stock: {Math.floor(Math.random() * 20) + 1}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
      >
        Agregar al carrito
      </button>
    </article>
  );
}
