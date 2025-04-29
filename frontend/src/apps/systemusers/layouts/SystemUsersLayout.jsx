// GroupsLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";  // Navegación de grupos

export function SystemUsersLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation  hideOnRoutes={["/systemusers/create", "/systemusers/edit"]} />
      <div className="">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
