import { useForm } from "react-hook-form";
import { createEnvironment, getEnvironment, updatedEnvironment, deleteEnvironment } from "../api/";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function EnvironmentFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatedEnvironment(params.id, data);
      toast.success("Ambiente actualizado", {
        position: "top-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createEnvironment(data);
      toast.success("Ambiente creado", {
        position: "top-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/environments");
  });

  useEffect(() => {
    async function loadEnvironment() {
      if (params.id) {
        const {
          data: {
            description,
            disable,
          },
        } = await getEnvironment(params.id);
        setValue("description", description);
        setValue("disable", disable);
      }
    }
    loadEnvironment();
  }, []);

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campo de descripción */}
        <input
          type="text"
          placeholder="Description"
          title="Escriba la descripción del grupo"
          {...register("description", { required: true })}
          className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.description && (
          <span className="text-red-500">Descripción es requerida</span>
        )}

        {/* Campo de deshabilitado (booleano) */}
        <div className="flex items-center mb-3">
          <input
            id="disable"
            type="checkbox"
            title="Escriba si el grupo está deshabilitado"
            {...register("disable")}
            className="mr-2 cursor-pointer"
          />
          <label htmlFor="disable" className="text-black cursor-pointer">
            Deshabilitado
          </label>
        </div>

        {/* Botón de guardar */}
        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-3 shadow-md hover:bg-indigo-600">
          Guardar
        </button>
      </form>

      {params.id && (
        <div className=" flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3 button-delete"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                await deleteEnvironment(params.id);
                toast.success("Ambiente eliminado", {
                  position: "top-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/environments");
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


