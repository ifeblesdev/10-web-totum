import { useForm } from "react-hook-form";
import { createTable, getTable, updatedTable, deleteTable } from "../api/";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function TableFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    if (params.id) {
      await updatedTable(params.id, data);
      toast.success("Mesa actualizada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    } else {
      await createTable(data);
      toast.success("Mesa creada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
    navigate("/tables");
  });

  useEffect(() => {
    async function loadTable() {
      if (params.id) {
        const { data } = await getTable(params.id);
        for (let key in data) {
          if (data[key] !== null) setValue(key, data[key]);
        }
      }
    }
    loadTable();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campo de descripción */}
        <input
          type="text"
          placeholder="Descripción de la mesa"
          {...register("description", { required: true })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.description && (
          <span className="text-red-500">La descripción es requerida</span>
        )}

        {/* Campo de copias */}
        <input
          type="number"
          placeholder="Número de copias"
          {...register("copies", { required: true, min: 0 })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        {/* Checkboxes */}
        {[
          "print",
          "commercial_value",
          "service",
          "waiter",
          "takeaway",
          "vat",
          "request_price",
          "commands",
          "surcharge",
          "discount",
          "vat_included",
          "budget",
          "cash_only",
          "disable",
        ].map((field) => (
          <div className="flex items-center mb-3" key={field}>
            <input
              id={field}
              type="checkbox"
              {...register(field)}
              className="mr-2"
            />
            <label htmlFor={field} className="capitalize">
              {field.replaceAll("_", " ")}
            </label>
          </div>
        ))}

        {/* Selects para FK: puedes poblar estas opciones dinámicamente si querés */}
        <select
          {...register("printer_commands1")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona una impresora (1)</option>
          <option value="1">Impresora 1</option>
          <option value="2">Impresora 2</option>
        </select>

        <select
          {...register("printer_commands2")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona una impresora (2)</option>
          <option value="1">Impresora 1</option>
          <option value="2">Impresora 2</option>
        </select>

        <select
          {...register("environment", { required: true })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona un entorno</option>
          <option value="1">Salón</option>
          <option value="2">Terraza</option>
        </select>
        {errors.environment && (
          <span className="text-red-500">El entorno es obligatorio</span>
        )}

        <select
          {...register("table_type")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona un tipo de mesa</option>
          <option value="1">Comedor</option>
          <option value="2">Barra</option>
        </select>

        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-3 shadow-md hover:bg-indigo-600">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteTable(params.id);
                toast.success("Mesa eliminada", {
                  position: "top-right",
                  style: { background: "#101010", color: "#fff" },
                });
                navigate("/tables");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
}
