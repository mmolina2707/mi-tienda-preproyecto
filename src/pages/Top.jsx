import ProductList from "../components/ProductList";

export default function TopProducts() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">
        Productos Top
      </h1>

      {/* Ejemplo: filtrar por women's clothing */}
      <ProductList category={"women's clothing"} />
    </div>
  );
}
