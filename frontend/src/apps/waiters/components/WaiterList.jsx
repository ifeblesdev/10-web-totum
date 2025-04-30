import React, { useEffect, useState } from "react";
import { getWaiters } from "../api";
import WaiterCard from "./WaiterCard";

export default function WaiterList() {
  const [waiters, setWaiters] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para carga
  const [error, setError] = useState(null); // Nuevo estado para errores

  useEffect(() => {
    async function loadWaiters() {
      try {
        const res = await getWaiters();
        setWaiters(res.data);
      } catch (err) {
        console.error("Error al cargar los camareros:", err);
        setError("No se pudieron cargar los camareros.");
      } finally {
        setLoading(false);
      }
    }

    loadWaiters();
  }, []);

  if (loading) return <p>Cargando camareros...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {waiters.length > 0 ? (
        waiters.map((waiter) => <WaiterCard key={waiter.id} waiter={waiter} />)
      ) : (
        <p>No hay camareros registradas.</p>
      )}
    </div>
  );
}
