/*import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchAll } from '../api/products';

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchAll()
      .then((data) => {
        if (!mounted) return;

        if (category) data = data.filter((p) => p.category === category);

        setProducts(data);
        setError(null);
      })
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));

    return () => { mounted = false; };
  }, [category]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}*/

/*
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchAll } from '../api/products';
import { useCart } from '../context/CartContext';

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    let mounted = true;

    setLoading(true);

    fetchAll()
      .then((data) => {
        if (!mounted) return;

        if (category) data = data.filter((p) => p.category === category);

        setProducts(data);
        setError(null);
      })
      .catch(() => setError("Error al cargar productos"))
      .finally(() => setLoading(false));

    return () => { mounted = false; };
  }, [category]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}*/


import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { fetchAll } from '../api/products';

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);

    fetchAll()
      .then((data) => {
        if (!mounted) return;

        if (category) data = data.filter((p) => p.category === category);

        setProducts(data);
        setError(null);
      })
      .catch(() => setError('Error al cargar productos'))
      .finally(() => setLoading(false));

    return () => { mounted = false; };
  }, [category]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}


