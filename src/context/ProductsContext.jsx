/*import { createContext, useEffect, useState } from "react";
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
*/



/*
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export default function ProductsProvider({ children }) {
  const API_URL = "https://68ed98e4df2025af780096cf.mockapi.io/productos"; // <-- coloca tu URL real

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Cargar productos desde MockAPI
  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_URL);
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setError("Error al cargar productos");
      setLoading(false);
    }
  };

  // 🔹 Agregar producto
  const addProduct = async (product) => {
    const res = await axios.post(API_URL, product);
    setProducts([...products, res.data]);
    return true; // para confirmar en pantalla
  };

  // 🔹 Editar producto
  const editProduct = async (id, data) => {
    const res = await axios.put(`${API_URL}/${id}`, data);

    setProducts(products.map(p => (p.id === id ? res.data : p)));
  };

  // 🔹 Eliminar producto
  const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setProducts(products.filter(p => p.id !== id));
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
        editProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
*/
/*
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const API_URL = "https://68ed98e4df2025af780096cf.mockapi.io/productos";

export default function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cargar productos
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  // CRUD — ya lo estabas usando
  const addProduct = async (newProduct) => {
    const res = await axios.post(API_URL, newProduct);
    setProducts([...products, res.data]);
  };

  const updateProduct = async (id, updated) => {
    const res = await axios.put(`${API_URL}/${id}`, updated);
    setProducts(products.map((p) => (p.id === id ? res.data : p)));
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setProducts(products.filter((p) => p.id !== id));
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
}
  */

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductsContext = createContext();

const API_URL = "https://68ed98e4df2025af780096cf.mockapi.io/productos";

// FakeStore para migración
const FAKESTORE_URL = "https://fakestoreapi.com/products";

// Para no migrar más de una vez
const LOCAL_FLAG = "products_migrated";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ----------------------------------------------------------
  // 1. MIGRAR AUTOMÁTICAMENTE FAKESTORE → MOCKAPI (solo 1 vez)
  // ----------------------------------------------------------
  const migrateFakeStore = async () => {
    try {
      const alreadyMigrated = localStorage.getItem(LOCAL_FLAG);
      if (alreadyMigrated) return;

      console.log("📥 Migrando productos de FakeStore a MockAPI...");

      const { data } = await axios.get(FAKESTORE_URL);

      for (const p of data) {
        await axios.post(API_URL, {
          name: p.title,
          description: p.description,
          price: p.price,
          stock: Math.floor(Math.random() * 50) + 1,
          image: p.image, // Se reemplazará después por imágenes locales
        });
      }

      localStorage.setItem(LOCAL_FLAG, "true");
      console.log("✔ Migración completada");
    } catch (e) {
      console.log("❌ Error migrando FakeStore:", e);
    }
  };

  // ---------------------------------------
  // 2. Cargar productos desde MockAPI
  // ---------------------------------------
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL);
      setProducts(res.data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  // ------------------------------------------------------
  // 3. CRUD con actualización inmediata y manejo de errores
  // ------------------------------------------------------

  const addProduct = async (newProduct) => {
    try {
      const res = await axios.post(API_URL, newProduct);
      setProducts((prev) => [...prev, res.data]);
      return { success: true };
    } catch (e) {
      return { success: false, error: "No se pudo agregar el producto" };
    }
  };

  const updateProduct = async (id, updated) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updated);
      setProducts((prev) => prev.map((p) => (p.id === id ? res.data : p)));
      return { success: true };
    } catch (e) {
      return { success: false, error: "No se pudo actualizar el producto" };
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setProducts((prev) => prev.filter((p) => p.id !== id));
      return { success: true };
    } catch (e) {
      return { success: false, error: "No se pudo eliminar el producto" };
    }
  };

  // ---------------------------------------
  // 4. Rankings dinámicos (solo 4 productos)
  // ---------------------------------------

  const topProducts = () =>
    [...products]
      .sort((a, b) => b.price - a.price)
      .slice(0, 4);

  const mostBought = () =>
    [...products]
      .sort((a, b) => a.stock - b.stock)
      .slice(0, 4);

  // -------------------------------------
  // 5. Cargar datos al iniciar la app
  // -------------------------------------
  useEffect(() => {
    (async () => {
      await migrateFakeStore();
      await fetchProducts();
    })();
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

        topProducts,
        mostBought,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
