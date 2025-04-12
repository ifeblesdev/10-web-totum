import React, { useEffect, useState } from "react";
import { getEnvironments } from "../api";
import EnvironmentCard from "./EnvironmentCard"; 


export default function EnvironmentList() {
  const [environments, setEnvironments] = useState([]);

  useEffect(() => {
    async function loadEnvironments() {
      const res = await getEnvironments();
      setEnvironments(res.data);
    }
    loadEnvironments();
  }, []);  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {environments.map((environment) => (
        <EnvironmentCard key={environment.id} environment={environment} />
      ))}
    </div>
  );
}
