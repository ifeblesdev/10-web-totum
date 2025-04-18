import { useEffect, useState } from "react";
import { getTables, deleteTable } from "../api"; // Asegúrate de tener estas funciones
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function TableList() {
  const [tables, setTables] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadTables() {
      const { data } = await getTables();
      setTables(data);
    }
    loadTables();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar esta mesa?");
    if (confirm) {
      await deleteTable(id);
      setTables(tables.filter((c) => c.id !== id));
      toast.success("Mesa eliminada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  };

  return (
    <div className="p-4">


      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="text-left py-3 px-2">Descripción</th>
              <th className="text-center py-3 px-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tables.map((table) => (
              <tr key={table.id} className="border-b">
                <td className="py-3 px-4">
                  {table.description}
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => navigate(`/tables/edit/${table.id}`)}                    
                    className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(table.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {tables.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No hay mesas registradas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
