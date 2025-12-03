/*import ProductList from '../components/ProductList';

export default function Moda({ addToCart }) {
  // Example: filter by "men's clothing" or "women's clothing"
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Sección Productos mas Comprados</h1>
      <ProductList addToCart={addToCart} category={"men's clothing"} />
    </div>
  );
}*/

/*import ProductList from "../components/ProductList";
import { useCart } from "../context/CartContext";

export default function Moda() {
  const { addToCart } = useCart();

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Sección Productos más Comprados</h1>
      <ProductList addToCart={addToCart} category={"men's clothing"} />
    </div>
  );
}*/

/*
import ProductList from "../components/ProductList";

export default function Moda() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Sección Productos más Comprados
      </h1>

      <ProductList category="men's clothing" />
    </div>
  );
} */
/*
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function Moda() {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const masComprados = [...products].sort((a, b) => a.stock - b.stock);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Lo más comprado</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {masComprados.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
*/

import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function Moda() {
  const { loading, error, mostBought } = useContext(ProductsContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  // Solo los 4 más comprados (stock más bajo)
  const lista = mostBought();

  return (
    <div className="p-6">
      <h1 className="text-3xl text-center font-bold mb-4">
        Lo más comprado
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lista.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
