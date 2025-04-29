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
        }
        )
        
      }
      navigate("/"); 
    } catch (error) {
      toast.error("Error al guardar la configuración", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
  });

  // Cargar los datos del registro existente si es necesario
  useEffect(() => {
    async function loadConfiguration() {
      try {
        // Verificar si ya existe la configuración
        const { data } = await getConfiguration();
        if (data && data.length > 0) {
          setConfigExists(true); // Si existe un registro, lo marcamos como existente
          const config = data[0]; // Tomamos el primer registro
          setConfigId(config.id); // Guardamos el ID del registro
          // Establecer los valores de cada campo en el formulario
          for (const key in config) {
            setValue(key, config[key]);
          }
        } else {
          setConfigExists(false); // No existe la configuración
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
        {/* Generar los campos de manera dinámica */}
        {configurationFields.map(
          ({ name, label, type, maxLength, step, tooltip }) => (
            <div key={name} className="mb-4">
              {type === "checkbox" ? (
                <div className="flex items-center">
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
              ) : (
                <input
                  id={name}
                  type={type}
                  maxLength={maxLength}
                  step={step}
                  placeholder={label}
                  {...register(name)}
                  className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
                  title={tooltip}
                />
              )}
              {errors[name] && (
                <span className="text-red-500">{label} es requerido</span>
              )}
            </div>
          )
        )}

        {/* Botón de Guardar */}
        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-6 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>
    </div>
  );
}
