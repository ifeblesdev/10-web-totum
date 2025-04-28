import { useEffect, useState } from "react";
import { getClients, deleteClient } from "../api"; // Asegúrate de tener estas funciones
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function ClientList() {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadClients() {
      const { data } = await getClients();
      setClients(data);
    }
    loadClients();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar este cliente?");
    if (confirm) {
      await deleteClient(id);
      setClients(clients.filter((c) => c.id !== id));
      toast.success("Cliente eliminado", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  };

  return (
    <div className="p-4 pt-0">
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full bg-white text-xs md:text-sm">
          <thead className="bg-gray-200 text-gray-600 uppercase">
            <tr>
              <th className="text-left py-2 px-2 md:py-3 md:px-4">Nombre</th>
              <th className="hidden md:table-cell text-left py-2 px-2 md:py-3 md:px-4">
                Correo
              </th>
              <th className="hidden md:table-cell text-left py-2 px-2 md:py-3 md:px-4">
                Teléfono
              </th>
              <th className="text-left py-2 px-2 md:py-3 md:px-4">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {clients.map((client) => (
              <tr key={client.id} className="border-b">
                <td className="py-2 px-2 md:py-3 md:px-4">
                  {client.first_name} {client.last_name}
                </td>
                <td className="hidden md:table-cell py-2 px-2 md:py-3 md:px-4">
                  {client.email}
                </td>
                <td className="hidden md:table-cell py-2 px-2 md:py-3 md:px-4">
                  {client.phone}
                </td>
                <td className="py-2 px-2 md:py-3 md:px-4 flex flex-col md:flex-row gap-2">
                  <button
                    onClick={() => navigate(`/clients/edit/${client.id}`)}
                    className="bg-indigo-500 text-white px-2 py-1 rounded hover:bg-indigo-600 text-xs md:text-sm"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs md:text-sm"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {clients.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No hay clientes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
