import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

export default function AddProductForm() {
  const { addProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!form.name.trim()) return setError("El nombre es obligatorio");
    if (Number(form.price) <= 0) return setError("El precio debe ser mayor a 0");
    if (form.description.trim().length < 10)
      return setError("La descripción debe tener al menos 10 caracteres");

    // Enviar a la API
    addProduct(form);

    // Mostrar confirmación
    setSuccess(true);
    setError("");

    // Limpiar
    setForm({ name: "", price: "", description: "", image: "" });

    // Ocultar mensaje después de 2.5s
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-6 mt-6">

      <h2 className="text-2xl font-bold mb-4 text-center">Agregar Producto</h2>

      {error && (
        <p className="text-red-500 font-semibold mb-3 text-center">{error}</p>
      )}

      {success && (
        <p className="text-green-600 font-semibold mb-3 text-center">
          ✅ Producto agregado correctamente
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          placeholder="Nombre del producto"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 h-24 focus:ring focus:ring-blue-300"
        />

        <input
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:ring focus:ring-blue-300"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
}



