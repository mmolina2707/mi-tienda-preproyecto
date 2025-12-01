import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const API_URL = "https://68ed98e4df2025af780096cf.mockapi.io/productos"; // ← reemplaza con tu URL real

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtener productos
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      setError("Error al cargar productos.");
    } finally {
      setLoading(false);
    }
  };

  // Crear producto
  const addProduct = async (product) => {
    try {
      const res = await axios.post(API_URL, product);
      setProducts([...products, res.data]);
    } catch (err) {
      setError("Error al agregar producto.");
    }
  };

  // Actualizar producto
  const updateProduct = async (id, updatedProduct) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedProduct);
      setProducts(products.map((p) => (p.id === id ? res.data : p)));
    } catch (err) {
      setError("Error al actualizar producto.");
    }
  };

  // Eliminar producto
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      setError("Error al eliminar producto.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

