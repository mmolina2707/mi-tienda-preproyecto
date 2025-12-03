/*import ProductList from '../components/ProductList';

export default function Home({ addToCart }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Productos Destacados</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
*/
/*
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function Inicio() {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.map(p => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </div>
      ))}
    </div>
  );
}
  */

import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductList from "../components/ProductList";

export default function Home() {
  const { loading, error } = useContext(ProductsContext);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Todos los Productos</h1>
      <ProductList />
    </div>
  );
}

