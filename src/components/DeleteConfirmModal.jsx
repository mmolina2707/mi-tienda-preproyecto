export default function DeleteConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">

        <h2 className="text-xl font-bold mb-4 text-center text-red-600">
          ¿Eliminar producto?
        </h2>

        <p className="text-center text-gray-600 mb-6">
          Esta acción no se puede deshacer.
        </p>

        <div className="flex justify-between gap-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-2 rounded-lg"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold"
          >
            Eliminar
          </button>
        </div>

      </div>
    </div>
  );
}
