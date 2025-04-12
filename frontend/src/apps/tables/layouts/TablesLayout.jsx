// TablesLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation"; // Navegación de tablees

export function TablesLayout() {
  return (
    <div className="">
      <Navigation hideOnRoutes={["/tables/create", "/tables/edit"]} />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
