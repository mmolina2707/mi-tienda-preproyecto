import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = (cart ?? []).reduce(
    (sum, item) => sum + item.price * (item.qty || 1),
    0
  ).toFixed(2);

  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Carrito</h1>
        <p className="text-gray-500">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-6">Carrito</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cart.map(item => (
          <div key={item.id} className="bg-white p-4 shadow rounded-2xl">
            <img
              src={item.image}
              alt={item.title}
              className="h-40 object-contain mx-auto mb-4"
            />
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-blue-600 font-bold mb-2">${item.price}</p>

            <div className="flex items-center space-x-2">
              <label className="text-sm">Qty:</label>
              <input
                type="number"
                min="1"
                value={item.qty || 1}
                onChange={(e) => updateQty(item.id, Number(e.target.value))}
                className="border rounded px-2 py-1 w-20"
              />

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-auto bg-red-500 text-white py-2 px-3 rounded-lg hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total}</p>
      </div>
    </div>
  );
}
