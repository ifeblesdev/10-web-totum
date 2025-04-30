// WaitersLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation"; 

export function WaitersLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation  hideOnRoutes={["/waiters/create", "/waiters/edit"]} />
      <div className="">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
