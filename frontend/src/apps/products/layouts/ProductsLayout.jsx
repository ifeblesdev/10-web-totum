import { Outlet } from "react-router-dom";
import { Navigation } from "../../products/components/Navigation"; 

export function ProductsLayout() {
  return (
    <div className="">
      <Navigation hideOnRoutes={["/products/create", "/products/edit"]} />
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl">
        {/* Aquí se cargarán las rutas anidadas */}
        <Outlet />
      </div>
    </div>
  );
}
