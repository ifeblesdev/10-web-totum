import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../../products/api"; // Asegúrate de tener estas funciones
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadProducts() {
      const { data } = await getProducts();
      setProducts(data);
    }
    loadProducts();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("¿Seguro que deseas eliminar esta mesa?");
    if (confirm) {
      await deleteProduct(id);
      setProducts(products.filter((c) => c.id !== id));
      toast.success("Mesa eliminada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  };

  return (
    <div className="p-4">


      <div className="overflow-auto rounded-lg shadow">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm">
            <tr>
              <th className="text-left py-3 px-2">Descripción</th>
              <th className="text-center py-3 px-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-3 px-4">
                  {product.description}
                </td>
                <td className="py-3 px-4 text-center space-x-2">
                  <button
                    onClick={() => navigate(`/products/edit/${product.id}`)}                    
                    className="bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No hay productos registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
