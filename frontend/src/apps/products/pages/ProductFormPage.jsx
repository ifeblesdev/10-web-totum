import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getPrinters } from "../../printers/api";
import { getGroups } from "../../groups/api";
import { getVatRates } from "../../vatrates/api";
import {
  createProduct,
  getProduct,
  updatedProduct,
  deleteProduct,
} from "../api";
import { CurrencyInput } from "../../../components/CurrencyInput";

export function ProductFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues: {
      price1: 0,
      price_with_vat1: 0,
    },
  });

  const navigate = useNavigate();
  const params = useParams();

  const [groups, setGroups] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [vatrates, setVatRates] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: groupsRes } = await getGroups();
        const { data: printersRes } = await getPrinters();
        const { data: vatratesRes } = await getVatRates();

        setPrinters(printersRes);
        setGroups(groupsRes);
        setVatRates(vatratesRes);

        if (params.id) {
          const { data } = await getProduct(params.id);

          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }
        }
      } catch (error) {
        toast.error("Error al cargar los datos relacionados con el producto.");
      }
    }

    loadData();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    console.log("Payload a enviar:", data);
    for (let key in data) {
      if (key === "price1" || key === "price_with_vat1") {
        if (typeof data[key] === "string") {
          data[key] = data[key].replace(/[^\d.-]/g, "");
        }
        let numericValue = parseFloat(data[key]);

        if (isNaN(numericValue) || numericValue === 0) {
          data[key] = 0;
        } else {
          data[key] = numericValue;
        }
      }

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
              className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3 cursor-pointer"
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
          <div className="flex flex-col">
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
              <span className="text-red-500 text-sm mt-1">Grupo requerido</span>
            )}
          </div>

          {/* Tipo iva */}
          <div className="flex flex-col">
            <select
              title="Selecciona un tipo de IVA"
              {...register("vat_type", { required: true })}
              className="p-3 rounded-lg border border-gray-300"
            >
              <option value="">Selecciona un tipo de iva</option>
              {vatrates.map((vatrate) => (
                <option key={vatrate.id} value={vatrate.id}>
                  {vatrate.description}
                </option>
              ))}
            </select>
            {errors.vat_type && (
              <span className="text-red-500 text-sm mt-1">
                Tipo iva requerido
              </span>
            )}
          </div>

          {/* Precios */}
          <CurrencyInput
            name="price1"
            control={control}
            label="Precio 1"
            required={true}
            placeholder="Precio 1"
            title="Escriba el precio 1 del producto"
          />

          <CurrencyInput
            name="price_with_vat1"
            control={control}
            label="Precio 1 más IVA"
            required={true}
            placeholder="Precio 1 más IVA"
            title="Escriba el precio 1  mas IVA del producto"
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
            min="0"
            title="Escriba el stock del producto"
            {...register("stock", {
              min: { value: 0 },
              valueAsNumber: true,
            })}
            className="p-3 rounded-lg border border-gray-300"
          />

          {/* Impresoras */}
          {Array.from({ length: 6 }).map((_, i) => (
            <select
              title="Selecciona una impresora para la comanda"
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
            ].map(({ name, label, defaultChecked }) => (
              <label
                key={name}
                className="flex items-center cursor-pointer"
                title={label}
                htmlFor={name}
              >
                <input
                  id={name}
                  type="checkbox"
                  {...register(name)}
                  defaultChecked={defaultChecked}
                  className="mr-2 cursor-pointer"
                  title={label}
                />
                {label}
              </label>
            ))}
          </div>
        </div>

        <button className="bg-indigo-500 text-white p-3 rounded-lg w-full mt-6 shadow-md hover:bg-indigo-600 cursor-pointer">
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
              className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 cursor-pointer"
            >
              Eliminar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
