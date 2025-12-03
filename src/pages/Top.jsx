/*
import ProductList from "../components/ProductList";

export default function TopProducts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Productos Top
      </h1>
*/
      {/* Ejemplo: filtrar por women's clothing */}
/*      <ProductList category={"women's clothing"} />
    </div>
  );
}

*/
/*
import { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function Top() {
  const { products, loading, error } = useContext(ProductsContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const top = [...products].sort((a, b) => b.price - a.price);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productos Top</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {top.map((p) => (
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

export default function Top() {
  const { loading, error, topProducts } = useContext(ProductsContext);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  const top = topProducts(); // ahora solo devuelve 4 productos

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Productos Top</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {top.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
