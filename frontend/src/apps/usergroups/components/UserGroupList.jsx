import React, { useEffect, useState } from "react";
import { getUserGroups } from "../api";
import UserGroupCard from "./UserGroupCard"; // Corregido: importación sin llaves

export default function UserGroupList() {
  const [usergroups, setUserGroups] = useState([]);

  useEffect(() => {
    async function loadUserGroups() {
      const res = await getUserGroups();
      setUserGroups(res.data);
    }
    loadUserGroups();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {usergroups.map((usergroup) => (
        <UserGroupCard key={usergroup.id} usergroup={usergroup} />
      ))}
    </div>
  );
}
