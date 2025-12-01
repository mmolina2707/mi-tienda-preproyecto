import { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import EditProductModal from "./EditProductModal";
import DeleteConfirmModal from "./DeleteConfirmModal";

export default function ProductsList() {
  const { products, loading, error, deleteProduct } =
    useContext(ProductsContext);

  const [productToEdit, setProductToEdit] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  if (loading)
    return <p className="text-center text-xl font-semibold">Cargando productos...</p>;

  if (error)
    return <p className="text-center text-red-500 font-semibold">{error}</p>;

  return (
    <div className="px-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Administración de Productos</h2>

      {/* GRID DE TARJETAS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-2xl shadow-lg p-4 flex flex-col"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-40 w-full object-contain mb-3"
            />

            <h3 className="text-lg font-bold mb-1">{p.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{p.description}</p>
            <p className="text-blue-600 font-bold mb-4">Precio: ${p.price}</p>

            {/* BOTONES */}
            <div className="flex justify-between mt-auto">
              <button
                onClick={() => setProductToEdit(p)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
              >
                Editar
              </button>

              <button
                onClick={() => setProductToDelete(p)}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODALES */}
      {productToEdit && (
        <EditProductModal
          product={productToEdit}
          onClose={() => setProductToEdit(null)}
        />
      )}

      {productToDelete && (
        <DeleteConfirmModal
          onConfirm={() => {
            deleteProduct(productToDelete.id);
            setProductToDelete(null);
          }}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  );
}
