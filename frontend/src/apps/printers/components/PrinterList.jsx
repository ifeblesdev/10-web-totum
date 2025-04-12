import React, { useEffect, useState } from "react";
import { getPrinters } from "../api";
import PrinterCard from "./PrinterCard"; 


export default function PrinterList() {
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    async function loadPrinters() {
      const res = await getPrinters();
      setPrinters(res.data);
    }
    loadPrinters();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {printers.map((printer) => (
        <PrinterCard key={printer.id} printer={printer} />
      ))}
    </div>
  );
}
