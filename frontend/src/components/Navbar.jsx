import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Asegúrate de tener lucide-react instalado

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
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50 ">
      <div className="flex items-center justify-between flex-wrap">
        {/* Logo / nombre de app */}
        <div className="text-xl font-bold text-indigo-600">Mi App</div>

        {/* Botón hamburguesa (visible en móvil) */}
        <button
           className={`md:hidden hamburger-btn text-gray-700 ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menú en desktop */}
        <div className="hidden md:flex flex-wrap items-center gap-4">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block text-sm font-medium ${
                  isActive ? "text-indigo-600" : "text-gray-700"
                } hover:text-indigo-500`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Menú en móvil con animación */}
      <div
        className={`md:hidden flex flex-col items-center gap-4 mt-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={closeMenu}
            className={({ isActive }) =>
              `block text-sm font-medium ${
                isActive ? "text-indigo-600" : "text-gray-700"
              } hover:text-indigo-500 transition-all duration-300`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
