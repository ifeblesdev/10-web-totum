// GroupsLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";  // Navegación de grupos

export function GroupsLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation  hideOnRoutes={["/groups/create", "/groups/edit"]} />
      <div className="">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
