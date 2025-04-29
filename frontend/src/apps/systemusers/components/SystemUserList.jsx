import React, { useEffect, useState } from "react";
import { getSystemUsers } from "../api";
import SystemUserCard from "./SystemUserCard"; // Corregido: importación sin llaves

export default function SystemUserList() {
  const [systemusers, setSystemUsers] = useState([]);

  useEffect(() => {
    async function loadSystemUsers() {
      const res = await getSystemUsers();
      setSystemUsers(res.data);
    }
    loadSystemUsers();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {systemusers.map((systemuser) => (
        <SystemUserCard key={systemuser.id} systemuser={systemuser} />
      ))}
    </div>
  );
}
