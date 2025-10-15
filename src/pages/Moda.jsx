import ProductList from '../components/ProductList';

export default function Moda({ addToCart }) {
  // Example: filter by "men's clothing" or "women's clothing"
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Sección Moda</h1>
      <ProductList addToCart={addToCart} category={"men's clothing"} />
    </div>
  );
}
