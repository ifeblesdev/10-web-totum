import React, { useEffect, useState } from "react";
import { getTableTypes } from "../api";
import TableTypeCard from "./TableTypeCard"; 


export default function TableTypeList() {
  const [tabletypes, setTableTypes] = useState([]);

  useEffect(() => {
    async function loadTableTypes() {
      const res = await getTableTypes();
      setTableTypes(res.data);
    }
    loadTableTypes();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tabletypes.map((tabletype) => (
        <TableTypeCard key={tabletype.id} tabletype={tabletype} />
      ))}
    </div>
  );
}
