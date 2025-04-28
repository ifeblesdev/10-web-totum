import { Link, useLocation } from "react-router-dom";

export function Navigation({ showCreate = true, hideOnRoutes = [] }) {
  const location = useLocation();

  const shouldHideButton = hideOnRoutes.some(
    (route) =>
      location.pathname === route || location.pathname.startsWith(route)
  );

  return (
    <div className="flex justify-between ">
      <Link to="/groups">
        <h2
          className="text-2xl font-bold mb-6 text-center"
          title="Lista de grupos"
        >
          Grupos
        </h2>
      </Link>

      {showCreate && !shouldHideButton && (
        <Link to="/groups/create">
          <button
            className="bg-gray-200 text-black px-3 py-2 rounded-lg hover:bg-gray-300"
            title="Crear grupo"
          >
            Crear Grupo
          </button>
        </Link>
      )}
    </div>
  );
}
