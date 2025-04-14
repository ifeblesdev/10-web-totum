import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getPrinters } from "../../printers/api";
import { getGroups } from "../../groups/api";
import {
  createProduct,
  getProduct,
  updatedProduct,
  deleteProduct,
} from "../api";

export function ProductFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const [groups, setGroups] = useState([]);
  const [printers, setPrinters] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: groupsRes } = await getGroups();
        const { data: printersRes } = await getPrinters();

        setPrinters(printersRes);
        setGroups(groupsRes);

        if (params.id) {
          const { data } = await getProduct(params.id);

          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }

          if (data.group) {
            setValue("group", data.group);
          }
          if (data.printer_commands1) {
            setValue("printer_commands1", data.printer_commands1);
          }
          if (data.printer_commands2) {
            setValue("printer_commands2", data.printer_commands2);
          }
          if (data.printer_commands3) {
            setValue("printer_commands3", data.printer_commands3);
          }
          if (data.printer_commands4) {
            setValue("printer_commands4", data.printer_commands4);
          }
          if (data.printer_commands5) {
            setValue("printer_commands5", data.printer_commands5);
          }
          if (data.printer_commands6) {
            setValue("printer_commands6", data.printer_commands6);
          }
        }
      } catch (error) {
        toast.error("Error al cargar los datos relacionados con la mesa.");
      }
    }

    loadData();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    try {
      if (params.id) {
        await updatedProduct(params.id, data);
        toast.success("Producto actualizado", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      } else {
        await createProduct(data);
        toast.success("Producto creado", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      }
      navigate("/products");
    } catch (error) {
      console.log("Error: ", error);
      toast.error("Error al guardar el producto");
    }
  });

  return (
    <div className="max-w-full mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-full">
            <input
              type="text"
              placeholder="Código"
              title="Escriba el código del producto"
              {...register("code", { required: true })}
              className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
            />
            {errors.code && (
              <span className="text-red-500">Código requerido</span>
            )}
            <input
              type="text"
              placeholder="Descripción"
              title="Escriba la descripción del producto"
              {...register("description", { required: true })}
              className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
            />
            {errors.description && (
              <span className="text-red-500">Descripción requerida</span>
            )}
            <input
              type="text"
              placeholder="Descripción de la comanda"
              title="Escriba la descripción de la comanda del producto"
              {...register("command_description")}
              className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
            />
          </div>

          {/* Grupo */}
          <select
            title="Selecciona un grupo"
            {...register("group", { required: true })}
            className="p-3 rounded-lg border border-gray-300"
          >
            <option value="">Selecciona un grupo</option>

            {groups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.description}
              </option>
            ))}
          </select>

          {errors.group && (
            <span className="text-red-500">Grupo requerido</span>
          )}

          <input
            type="text"
            placeholder="Tipo de IVA"
            title="Escriba el tipo de IVA del producto"
            {...register("vat_type")}
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* Precios */}
          <input
            type="number"
            step="0.01"
            title="Escriba el precio 1 del producto"
            placeholder="Precio 1"
            {...register("price1")}
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="number"
            step="0.01"
            title="Escriba el precio con IVA 1 del producto"
            placeholder="Precio con IVA 1"
            {...register("price_with_vat1")}
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* Código adicional y stock */}
          <input
            type="text"
            placeholder="Código adicional"
            title="Escriba el código adicional del producto"
            {...register("additional_code")}
            className="p-3 rounded-lg border border-gray-300"
          />
          <input
            type="number"
            placeholder="Stock"
            title="Escriba el stock del producto"
            {...register("stock")}
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* Impresoras */}
          {Array.from({ length: 6 }).map((_, i) => (
            <select
              title=""
              key={i}
              {...register(`printer_commands${i + 1}`)}
              className="p-3 rounded-lg border border-gray-300"
            >
              <option value="">Comando de impresora {i + 1}</option>
              {printers.map((printer) => (
                <option key={printer.id} value={printer.id}>
                  {printer.description}
                </option>
              ))}
            </select>
          ))}

          {/* Checkboxes */}
          <div className="col-span-full grid grid-cols-2 gap-3 mt-4">
            {[
              { name: "ask_quantity", label: "Preguntar cantidad" },
              { name: "ask_price", label: "Preguntar precio" },
              { name: "takeaway_only", label: "Solo para llevar" },
              { name: "manages_inventory", label: "Maneja inventario" },
              { name: "active", label: "Activo", defaultChecked: true },
              {
                name: "disabled",
                label: "Deshabilitado",
              },
            ].map(({ name, label }) => (
              <label key={name} className="flex items-center">
                <input type="checkbox" {...register(name)} className="mr-2" />
                {label}
              </label>
            ))}
          </div>
        </div>

        <button className="bg-indigo-500 text-white p-3 rounded-lg w-full mt-6 shadow-md hover:bg-indigo-600">
          Guardar
        </button>

        {params.id && (
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={async () => {
                const confirmed = window.confirm(
                  "¿Estás seguro de eliminar este producto?"
                );
                if (confirmed) {
                  await deleteProduct(params.id);
                  toast.success("Producto eliminado", {
                    position: "top-right",
                    style: { background: "#101010", color: "#fff" },
                  });
                  navigate("/products");
                }
              }}
              className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48"
            >
              Eliminar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
