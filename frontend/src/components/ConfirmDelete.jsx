// components/ConfirmModal.jsx
export default function ConfirmDelete({ 
    isOpen, 
    title = "¿Estás seguro?", 
    message = "Esta acción no se puede deshacer.", 
    onConfirm, 
    onCancel 
  }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
          <h2 className="text-lg font-semibold mb-4">{title}</h2>
          <p className="mb-6">{message}</p>
          <div className="flex justify-center gap-4">
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
              onClick={onCancel}
            >
              Cancelar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
              onClick={onConfirm}
            >
              Sí, eliminar
            </button>
          </div>
        </div>
      </div>
    );
  }
  