import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/products", label: "Productos" },
    { to: "/tables", label: "Mesas" },
    { to: "/groups", label: "Grupos" },
    { to: "/tabletypes", label: "Tipos de Mesa" },
    { to: "/environments", label: "Ambientes" },
    { to: "/clients", label: "Clientes" },
    { to: "/vatrates", label: "IVA" },
    { to: "/configuration", label: "Configuration" },    
  ];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold text-indigo-600">Mi App</div>

        {/* Botón hamburguesa (solo móvil) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Menú en escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                } hover:text-indigo-500 transition-colors`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Menú en móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                } hover:text-indigo-500 transition-colors`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
