import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  createConfiguration,
  getConfiguration,
  updateConfiguration,
} from "../api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { configurationFields } from "../../../config/formFields";

export function ConfigurationFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();

  const navigate = useNavigate();
  const [configExists, setConfigExists] = useState(false);
  const [configId, setConfigId] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    try {
      if (configExists) {
        await updateConfiguration(configId, data);
        toast.success("Configuración actualizada", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      } else {
        await createConfiguration(data);
        toast.success("Configuración creada", {
          position: "top-right",
          style: { background: "#101010", color: "#fff" },
        });
      }
      navigate("/");
    } catch (error) {
      toast.error("Error al guardar la configuración", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  });

  useEffect(() => {
    async function loadConfiguration() {
      try {
        const { data } = await getConfiguration();
        if (data && data.length > 0) {
          setConfigExists(true); 
          const config = data[0];
          setConfigId(config.id);
          for (const key in config) {
            setValue(key, config[key]);
          }
        } else {
          setConfigExists(false);
        }
      } catch (error) {
        console.error("Error al cargar la configuración:", error);
      }
    }

    loadConfiguration();
  }, [setValue]);

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campos que no son checkbox */}
        {configurationFields
          .filter(({ type }) => type !== "checkbox")
          .map(
            ({
              name,
              label,
              type,
              maxLength,
              step,
              tooltip,
              validation,
              required,
            }) => {
              const value = watch(name); // Necesario para ver si el campo tiene datos

              return (
                <div key={name} className="mb-4 relative">
                  {/* Siempre mostrar el label */}
                  <label
                    htmlFor={name}
                    className={`absolute left-3 px-1 transition-all duration-150 bg-white text-gray-600 ${
                      value ? "-top-2 text-xs" : "top-3 text-base"
                    }`}
                  >
                    {label}
                  </label>
                  <input
                    id={name}
                    type={type}
                    maxLength={maxLength}
                    step={step}
                    {...register(name, {
                      required: required ? `${label} es requerido` : false,
                      ...validation,
                    })}
                    className="bg-white text-black p-3 pt-5 rounded-lg border border-gray-300 shadow-sm block w-full mb-1 cursor-pointer"
                    title={tooltip}
                  />
                  {errors[name] && (
                    <span className="text-red-500 text-sm">
                      {errors[name].message}
                    </span>
                  )}
                </div>
              );
            }
          )}

        {/* Checkboxes (al final del formulario) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          {configurationFields
            .filter(({ type }) => type === "checkbox")
            .map(({ name, label, tooltip }) => (
              <div key={name} className="flex items-center">
                <input
                  id={name}
                  type="checkbox"
                  {...register(name)}
                  className="mr-2 cursor-pointer"
                  title={tooltip}
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

        {/* Botón de Guardar */}
        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-6 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>
    </div>
  );
}
