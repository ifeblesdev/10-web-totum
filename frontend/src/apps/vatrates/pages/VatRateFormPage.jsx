import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import {
  createVatRate,
  getVatRate,
  updatedVatRate,
  deleteVatRate,
} from "../api"; // Asegúrate de que estos métodos estén implementados

export function VatRateFormPage() {
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

    try {
      if (params.id) {
        await updatedVatRate(params.id, data);
        toast.success("Tasa de IVA actualizada", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      } else {
        await createVatRate(data);
        toast.success("Tasa de IVA creada", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      }
      navigate("/vatrates");
    } catch (error) {
      toast.error("Error al guardar", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  });

  useEffect(() => {
    async function loadVatRate() {
      if (params.id) {
        const { data } = await getVatRate(params.id);
        setValue("type", data.type);
        setValue("percentage", data.percentage);
        setValue("start_date", data.start_date);
        setValue("end_date", data.end_date);
        setValue("description", data.description);
      }
    }
    loadVatRate();
  }, []);

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Tipo */}
        <select
          title="Seleccione tipo de IVA"
          {...register("type", { required: true })}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona un tipo</option>
          <option value="general">General</option>
          <option value="reducido">Reducido</option>
          <option value="superreducido">Superreducido</option>
          <option value="exento">Exento</option>
        </select>
        {errors.type && (
          <span className="text-red-500">El tipo es requerido</span>
        )}

        {/* Porcentaje */}
        <input
          type="number"
          step="0.01"
          min="0"
          title="Escriba el porcentaje del IVA"
          placeholder="Porcentaje (%)"
          {...register("percentage", {
            min: { value: 0 },
            valueAsNumber: true,
            required: true,
          })}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.percentage && (
          <span className="text-red-500">Porcentaje es requerido</span>
        )}

        {/* Fecha de inicio */}
        <input
          type="date"
          title="Escriba la fecha de inicio"
          placeholder="Fecha de inicio"
          {...register("start_date", { required: true })}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.start_date && (
          <span className="text-red-500">Fecha de inicio es requerida</span>
        )}

        {/* Fecha de fin */}
        <input
          type="date"
          title="Escriba la fecha de fin"
          placeholder="Fecha de fin"
          {...register("end_date")}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        {/* Descripción */}
        <textarea
          title="Escriba la descripción"
          rows="3"
          placeholder="Descripción"
          {...register("description", { required: true })}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.description && (
          <span className="text-red-500">Descripción requerida</span>
        )}

        {/* Botón Guardar */}
        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-3 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>

      {/* Botón Eliminar */}
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3 cursor-pointer"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                try {
                  await deleteVatRate(params.id);
                  toast.success("Tasa de IVA eliminada", {
                    position: "top-right",
                    style: { background: "#101010", color: "#fff" },
                  });
                  navigate("/vatrates");
                } catch (error) {
                  toast.error(error.message, {
                    position: "top-right",
                    style: { background: "#101010", color: "#fff" },
                  });
                }
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
