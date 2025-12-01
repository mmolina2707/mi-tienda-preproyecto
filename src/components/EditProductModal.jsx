import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function EditProductModal({ product, onClose }) {
  const { updateProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    name: product.name,
    price: product.price,
    description: product.description,
    image: product.image
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateProduct(product.id, form);
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      onClose(); // cerrar modal
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">

        <h2 className="text-xl font-bold mb-4 text-center">Editar Producto</h2>

        {success && (
          <p className="text-green-600 font-semibold text-center mb-3">
            ✔ Cambios guardados
          </p>
        )}

        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 h-24"
          />

          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg"
          >
            Cancelar
          </button>

          <button
            onClick={handleSubmit}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
