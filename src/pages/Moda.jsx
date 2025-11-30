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
}

