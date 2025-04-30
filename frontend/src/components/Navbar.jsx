import { useState, useEffect, useRef } from "react"; // Asegúrate de importar estos hooks
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const menuRef = useRef(null); // Creando la referencia al menú

  // Funciones para abrir/cerrar el menú
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setHoveredMenu(null);
    setOpenMenuIndex(null);
  };

  // Efecto para cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // Cerrar el menú si el clic es fuera del menú
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuStructure = [
    { label: "Inicio", to: "/" },
    {
      label: "Archivos",
      children: [
        { label: "Ambientes", to: "/environments" },
        { label: "Camareros", to: "/waiters" },
        { label: "Clientes", to: "/clients" },
        { label: "Grupos", to: "/groups" },
        { label: "Mesas", to: "/tables" },
        { label: "Productos", to: "/products" },
        { label: "Tipos de Mesa", to: "/tabletypes" },
      ],
    },
    {
      label: "Configuración",
      children: [
        { label: "Cajas", to: "/boxes" },
        { label: "Configuración general", to: "/configuration" },
        { label: "Grupos de usuarios", to: "/usergroups" },
        { label: "Impresoras", to: "/printers" },
        { label: "IVA", to: "/vatrates" },
        { label: "Usuarios del sistema", to: "/systemusers" },
      ],
    },
    {
      label: "Informes",
      children: [
        { label: "Ventas", to: "/reports/sales" },
        { label: "Pedidos", to: "/reports/orders" },
      ],
    },
  ];

  const renderLink = (to, label) => (
    <NavLink
      to={to}
      onClick={() => {
        closeMenu();
        setOpenMenuIndex(null); // ← cerrar submenús también
      }}
      className={({ isActive }) =>
        `block text-sm font-medium px-4 py-2 ${
          isActive ? "text-indigo-600" : "text-gray-700"
        } hover:text-indigo-500 transition-colors`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between" ref={menuRef}>
        {" "}
        {/* Añadir ref al contenedor del menú */}
        <div className="text-xl font-bold text-indigo-600">Mi App</div>
        {/* Botón hamburguesa */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
        {/* Menú en escritorio */}
        <div className="hidden md:flex items-center gap-6">
          {menuStructure.map((item, idx) => {
            const isOpen = openMenuIndex === idx;
            const toggleSubmenu = () => setOpenMenuIndex(isOpen ? null : idx);

            return item.children ? (
              <div key={idx} className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-500"
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 flex flex-col bg-white shadow-lg rounded-lg z-50 min-w-[150px]">
                    {item.children.map((child) => (
                      <div key={child.to}>
                        {renderLink(child.to, child.label)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.to}>{renderLink(item.to, item.label)}</div>
            );
          })}
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2">
          {menuStructure.map((item, idx) => {
            const isOpen = openMenuIndex === idx;
            const toggleSubmenu = () => setOpenMenuIndex(isOpen ? null : idx);

            return item.children ? (
              <div key={idx} className="relative">
                <button
                  onClick={toggleSubmenu}
                  className="flex items-center text-sm font-medium text-gray-700 hover:text-indigo-500"
                >
                  {item.label}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 flex flex-col bg-white shadow-lg rounded-lg z-50 min-w-[150px]">
                    {item.children.map((child) => (
                      <div key={child.to}>
                        {renderLink(child.to, child.label)}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div key={item.to}>{renderLink(item.to, item.label)}</div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
