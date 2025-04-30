import { useForm } from "react-hook-form";
import { createWaiter, getWaiter, updatedWaiter, deleteWaiter } from "../api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { waiterFields } from "../../../config/formFields";
import { useNavigate, useParams } from "react-router-dom";

export function WaiterFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        if (params.id) {
          const { data } = await getWaiter(params.id);

          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }
        }
      } catch (error) {
        toast.error("Error al cargar los datos relacionados con el camarero.");
      }
    }

    loadData();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    Object.keys(data).forEach((key) => {
      if (data[key] === "") data[key] = null;
    });

    try {
      if (params.id) {
        await updatedWaiter(params.id, data);
        toast.success("Camarero actualizado");
      } else {
        await createWaiter(data);
        toast.success("Camarero creado");
      }
    } catch {
      toast.error("Error al guardar el camarero");
    }
    navigate("/waiters");
  });

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campos normales */}
        {waiterFields
          .filter(({ type }) => type !== "checkbox")
          .map(({ name, label, type, required, validation, tooltip }) => (
            <div key={name} className="mb-4">
              <label
                htmlFor={name}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {label}
              </label>
              <input
                id={name}
                type={type}
                placeholder={label}
                title={tooltip} // Tooltip sobre el campo
                {...register(name, {
                  required: required ? `${label} es requerido` : false,
                  ...validation,
                })}
                className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full cursor-pointer"
              />
              {errors[name] && (
                <span className="text-red-500 text-sm">
                  {errors[name].message}
                </span>
              )}
            </div>
          ))}

        {/* Checkbox al final */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {waiterFields
            .filter(({ type }) => type === "checkbox")
            .map(({ name, label, tooltip }) => (
              <div key={name} className="flex items-center">
                <input
                  id={name}
                  type="checkbox"
                  title={tooltip}
                  {...register(name)}
                  className="mr-2 cursor-pointer"
                />
                <label
                  htmlFor={name}
                  className="text-black cursor-pointer"
                  title={tooltip}
                >
                  {label}
                </label>
              </div>
            ))}
        </div>

        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-6 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3 button-delete cursor-pointer"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                try {
                  await deleteWaiter(params.id);
                  toast.success("Camarero eliminado", {
                    position: "top-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
                  navigate("/waiters"); // Solo si se elimina correctamente
                } catch (error) {
                  toast.error(error.message, {
                    position: "top-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
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
