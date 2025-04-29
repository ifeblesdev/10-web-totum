// BoxsLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation"; 

export function BoxesLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation  hideOnRoutes={["/boxes/create", "/boxes/edit"]} />
      <div className="">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
