import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById } from '../api/products';

export default function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchById(id)
      .then(p => setProduct(p))
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">Producto no encontrado</p>;

  return (
    <div className="bg-white shadow rounded-2xl p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.title} className="max-w-xs object-contain mx-auto" />
        <div>
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-blue-600 mb-4">${product.price}</p>
          <p className="mb-4">Stock: {Math.floor(Math.random() * 20) + 1}</p>
          <button onClick={() => addToCart(product)} className="bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
