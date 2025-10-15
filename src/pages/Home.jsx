import ProductList from '../components/ProductList';

export default function Home({ addToCart }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Productos Destacados</h1>
      <ProductList addToCart={addToCart} />
    </div>
  );
}
