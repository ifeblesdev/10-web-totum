import React, { useEffect, useState } from "react";
import { getBoxes } from "../api";
import BoxCard from "./BoxCard";

export default function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para carga
  const [error, setError] = useState(null); // Nuevo estado para errores

  useEffect(() => {
    async function loadBoxes() {
      try {
        const res = await getBoxes();
        setBoxes(res.data);
      } catch (err) {
        console.error("Error al cargar las cajas:", err);
        setError("No se pudieron cargar las cajas.");
      } finally {
        setLoading(false);
      }
    }

    loadBoxes();
  }, []);

  if (loading) return <p>Cargando cajas...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {boxes.length > 0 ? (
        boxes.map((box) => <BoxCard key={box.id} box={box} />)
      ) : (
        <p>No hay cajas registradas.</p>
      )}
    </div>
  );
}
