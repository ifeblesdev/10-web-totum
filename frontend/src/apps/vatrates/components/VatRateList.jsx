import React, { useEffect, useState } from "react";
import { getVatRates } from "../api";
import VatRateCard from "./VatRateCard"; // Corregido: importación sin llaves

export default function VatRateList() {
  const [vatrates, setVatRates] = useState([]);

  useEffect(() => {
    async function loadVatRates() {
      const res = await getVatRates();
      setVatRates(res.data);
    }
    loadVatRates();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vatrates.map((vatrate) => (
        <VatRateCard key={vatrate.id} vatrate={vatrate} />
      ))}
    </div>
  );
}
