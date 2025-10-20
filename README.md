# mi-tienda-preproyecto

Proyecto React + Vite + Tailwind configurado para la pre-entrega.

## Qué incluye
- Vite + React (JSX)
- React Router (rutas estáticas y dinámica)
- Tailwind CSS (sin estilos inline)
- Integración con FakeStore API: https://fakestoreapi.com/products
- Carrito persistente en `localStorage` (useState + useEffect)
- Componentes: Header, Navbar, Footer, ProductList, ProductCard, ProductDetail, Cart

## Cómo usar
1. Descargar y descomprimir el proyecto.
2. Desde la carpeta del proyecto:
```bash
npm install
npm run dev
```
3. Abrir `http://localhost:5173` (o la URL que indique Vite).

> Nota: Este repositorio es un scaffold. Tailwind y dependencias se instalan con `npm install`. Si querés puedo adjuntar también un `package-lock.json` generado localmente, pero lo recomendable es correr `npm install` en tu máquina.

Proyecto desarrollado en **React + Vite** con **Tailwind CSS**, cumpliendo los requerimientos del curso para crear un eCommerce interactivo, conectado a una API y con gestión de carrito de compras.

---

## 🚀 Tecnologías utilizadas

- **React** (Vite)
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Fake Store API**
- **LocalStorage**

---

## 📁 Estructura principal del proyecto

```
mi-tienda-preproyecto/
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Navbar.jsx
│   │   ├── Cart.jsx
│   │   ├── ProductsList.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🧩 Requerimiento #1: Componentes y funcionalidad del carrito

### ✅ 1. Componente para listar los productos disponibles
- **Archivo:** `ProductsList.jsx`
- **Cómo lo hace:**
  - Usa `useEffect` para obtener los productos desde la **Fake Store API**.
  - Muestra imagen, nombre, descripción, precio y stock de cada producto.
  - Renderiza una grilla responsive con Tailwind.

### ✅ 2. Usar el hook useState para manejar el estado del carrito
- **Archivo:** `App.jsx`
- **Cómo lo hace:**
  - Se declara el estado global del carrito:
  ```jsx
  const [cart, setCart] = useState([]);
  ```

### ✅ 3. Implementar un evento de clic para agregar productos al carrito
- **Archivo:** `ProductsList.jsx`
- **Cómo lo hace:**
  ```jsx
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };
  ```

### ✅ 4. Mostrar el carrito con los productos seleccionados
- **Archivo:** `Cart.jsx`
- **Cómo lo hace:**
  - Muestra los productos añadidos con nombre y precio.
  - Permite visualizar el total.

### ✅ 5. Crear un Layout del eCommerce
- **Archivo:** `App.jsx`
- **Cómo lo hace:**
  - Se estructura con `Navbar`, rutas principales y `Footer` opcional.

---

## 🌐 Requerimiento #2: Conectar la aplicación a una API

### ✅ Integración con una API
- **Archivo:** `ProductsList.jsx`
- **Cómo lo hace:**
  - Consume `https://fakestoreapi.com/products` para mostrar los datos.

### ✅ Estado de carga y errores
- **Archivo:** `ProductsList.jsx`
- **Cómo lo hace:**
  ```jsx
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  ```

### ✅ Gestión del estado con useState
- **Archivos:** `App.jsx`, `ProductsList.jsx`

### ✅ Actualizar el diseño del eCommerce
- **Tailwind CSS**

### ✅ Manejo de efectos secundarios con useEffect
- **Archivo:** `ProductsList.jsx`
- **Cómo lo hace:**
  - Llama a la API al montar el componente.

### ✅ Ampliación del carrito
- **Archivo:** `Cart.jsx`
- **Cómo lo hace:**
  - Se calcula el total de la compra.
  - Persistencia en **LocalStorage**.

---

## 🧭 Requerimiento #3: Integración de rutas

### ✅ Implementación de rutas
- **Archivo:** `App.jsx`

### ✅ Crear componente para cada sección
- **Componentes:** `Navbar`, `ProductsList`, `Cart`

### ✅ Navegar entre productos
- **Archivo:** `Navbar.jsx`

---

## 🔐 Requerimiento #4: Rutas dinámicas y protegidas

### ✅ Rutas Dinámicas
- **Archivo:** `ProductDetail.jsx` *(opcional)*  

### ✅ Interactividad en el Navbar
- **Archivo:** `Navbar.jsx`

### ✅ Rutas Protegidas (opcional)
- **Archivo:** `ProtectedRoute.jsx`

---

## 💾 Persistencia del carrito con LocalStorage

- **Archivo:** `App.jsx`

---

## 🎨 Estilos y diseño (Tailwind)
- Clases aplicadas para diseño limpio y moderno.

---

## ✅ Conclusión

Este proyecto cumple con todos los requerimientos del curso:
- Componentización y manejo de estado con hooks.
- Conexión a API y gestión de errores.
- Diseño responsive con Tailwind.
- Persistencia de datos en LocalStorage.
- Navegación entre rutas y Navbar interactivo.

---

📅 **Autor:** Manuel Molina  
💻 **Proyecto:** `mi-tienda-preproyecto`  
🧱 **Versión:** 1.0  
📦 **Framework:** React + Vite + Tailwind CSS


