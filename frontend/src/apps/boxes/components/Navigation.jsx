import { Link, useLocation } from "react-router-dom";

export function Navigation({ showCreate = true, hideOnRoutes = [] }) {
  const location = useLocation();

  const shouldHideButton = hideOnRoutes.some(
    (route) =>
      location.pathname === route || location.pathname.startsWith(route)
  );

  return (
    <div className="flex justify-between ">
      <Link to="/boxes">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          title="Lista de cajas"
        >
          Cajas
        </h2>
      </Link>

      {showCreate && !shouldHideButton && (
        <Link to="/boxes/create">
          <button
            className="bg-gray-200 text-black px-3 py-2 rounded-lg hover:bg-gray-300"
            title="Crear caja"
          >
            Crear caja
          </button>
        </Link>
      )}
    </div>
  );
}
