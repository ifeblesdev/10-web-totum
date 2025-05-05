import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { createGroup, getGroup, updateGroup, deleteGroup } from "../api"; // Asegúrate de tener estas funciones
import { groupFields } from "../../../config/formFields";
import ConfirmDelete from "../../../components/ConfirmDelete";

export function GroupFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (params.id) {
        try {
          const { data } = await getGroup(params.id);
          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }
        } catch (error) {
          toast.error("Error al cargar los datos del grupo.");
        }
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
        await updateGroup(params.id, data);
        toast.success("Grupo actualizado");
      } else {
        await createGroup(data);
        toast.success("Grupo creado");
      }
      navigate("/groups");
    } catch {
      toast.error("Error al guardar el grupo");
    }
  });

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campos ordenados dinámicamente */}
        {groupFields
          .filter(({ type }) => type !== "checkbox")
          .sort((a, b) => a.order - b.order)
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
                title={tooltip}
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
          {groupFields
            .filter(({ type }) => type === "checkbox")
            .sort((a, b) => a.order - b.order)
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

      <div className="flex justify-between gap-4 mt-4">
        <button
          type="button"
          className="bg-gray-300 text-black p-3 rounded-lg w-full sm:w-48 hover:bg-gray-400 cursor-pointer"
          onClick={() => reset()}
        >
          Limpiar
        </button>

        {params.id && (
          <button
            type="button"
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 button-delete cursor-pointer hover:bg-red-600"
            onClick={() => setShowConfirm(true)}
          >
            Eliminar
          </button>
        )}
      </div>

      <ConfirmDelete
        isOpen={showConfirm}
        title="¿Estás seguro de eliminar este grupo?"
        message="No podrás recuperar esta información."
        onConfirm={async () => {
          try {
            await deleteGroup(params.id);
            toast.success("Grupo eliminado");
            navigate("/groups");
          } catch (error) {
            toast.error(error.message);
          }
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}
