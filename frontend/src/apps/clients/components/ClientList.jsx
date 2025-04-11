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
    <div className="p-4">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <button
          onClick={() => navigate("/clients/create")}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Crear Cliente
        </button>
      </div> */}

      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="text-left py-3 px-4">Nombre</th>
              <th className="text-left py-3 px-4">Correo</th>
              <th className="text-left py-3 px-4">Teléfono</th>
              <th className="text-left py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {clients.map((client) => (
              <tr key={client.id} className="border-b">
                <td className="py-3 px-4">
                  {client.first_name} {client.last_name}
                </td>
                <td className="py-3 px-4">{client.email}</td>
                <td className="py-3 px-4">{client.phone}</td>
                <td className="py-3 px-4 space-x-2">
                  <button
                    onClick={() => navigate(`/clients/edit/${client.id}`)}                    
                    className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
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
