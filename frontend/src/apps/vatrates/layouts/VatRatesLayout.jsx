// VatRatesLayout.jsx
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";  // Navegación de tipo ivas

export function VatRatesLayout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Navigation  hideOnRoutes={["/vatrates/create", "/vatrates/edit"]} />
      <div className="">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
