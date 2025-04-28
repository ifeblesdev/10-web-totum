import React, { useEffect, useState } from "react";
import { getGroups } from "../api";
import GroupCard from "./GroupCard"; // Corregido: importación sin llaves

export default function GroupList() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function loadGroups() {
      const res = await getGroups();
      setGroups(res.data);
    }
    loadGroups();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} />
      ))}
    </div>
  );
}
