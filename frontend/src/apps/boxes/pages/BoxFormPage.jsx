import { useForm } from "react-hook-form";
import { createBox, getBox, updatedBox, deleteBox } from "../api";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { boxFields } from "../../../config/formFields";
import { useNavigate, useParams } from "react-router-dom";

export function BoxFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  console.log("Params:", params);

  useEffect(() => {
    if (params.id) {
      async function loadBox() {
        try {
          const { data } = await getBox(params.id); // ← función correcta
          for (const key in data) {
            setValue(key, data[key]);
          }
        } catch (err) {
          console.error("Error al cargar la caja:", err);
          toast.error("Error al cargar la caja");
        }
      }

      loadBox();
    }
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    try {
      if (params.id) {
        await updatedBox(params.id, data);
        toast.success("Caja actualizada");
      } else {
        await createBox(data);
        toast.success("Caja creada");
      }
    } catch {
      toast.error("Error al guardar la caja");
    }
    navigate("/boxes");
  });

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campos normales */}
        {boxFields
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
          {boxFields
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
                  await deleteBox(params.id);
                  toast.success("Caja eliminada", {
                    position: "top-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
                  navigate("/boxes"); // Solo si se elimina correctamente
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
