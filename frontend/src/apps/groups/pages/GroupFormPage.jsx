import { useForm } from "react-hook-form";
import { createGroup, getGroup, updatedGroup, deleteGroup } from "../api/";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function GroupFormPage() {
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
      await updatedGroup(params.id, data);
      toast.success("Grupo actualizado", {
        position: "top-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createGroup(data);
      toast.success("Grupo creado", {
        position: "top-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/groups");
  });

  useEffect(() => {
    async function loadGroup() {
      if (params.id) {
        const {
          data: {
            description,
            accompaniment,
            same_screen,
            show_order,
            disable,
          },
        } = await getGroup(params.id);
        setValue("description", description);
        setValue("accompaniment", accompaniment);
        setValue("same_screen", same_screen);
        setValue("show_order", show_order ?? true);
        setValue("disable", disable);
      }
    }
    loadGroup();
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

        {/* Campo de acompañamiento (booleano) */}
        <div className="flex items-center mb-3">
          <input
            id="accompaniment"
            type="checkbox"
            title="Marque si es un acompañamiento y/o contorno"
            {...register("accompaniment")}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="accompaniment"
            className="text-black cursor-pointer"
            title="Marque si es un acompañamiento y/o contorno"
          >
            Acompañamiento
          </label>
        </div>

        {/* Campo de pantalla igual (booleano) */}
        <div className="flex items-center mb-3">
          <input
            id="same_screen"
            type="checkbox"
            title="Marque si permanece en la misma pantalla al ser seleccionado"
            {...register("same_screen")}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="same_screen"
            className="text-black cursor-pointer"
            title="Marque si permanece en la misma pantalla al ser seleccionado"
          >
            Misma pantalla
          </label>
        </div>

        {/* Campo de mostrar orden (booleano) */}
        <div className="flex items-center mb-3">
          <input
            id="show_order"
            type="checkbox"
            title="Marque si se muestra en la orden al ser seleccionado"
            {...register("show_order")}
            defaultChecked={true}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="show_order"
            className="text-black cursor-pointer"
            title="Marque si se muestra en la orden al ser seleccionado"
          >
            Mostrar orden
          </label>
        </div>

        {/* Campo de deshabilitado (booleano) */}
        <div className="flex items-center mb-3">
          <input
            id="disable"
            type="checkbox"
            title="Marque si el grupo está deshabilitado"
            {...register("disable")}
            className="mr-2 cursor-pointer"
          />
          <label
            htmlFor="disable"
            className="text-black cursor-pointer"
            title="Marque si el grupo está deshabilitado"
          >
            Deshabilitado
          </label>
        </div>

        {/* Botón de guardar */}
        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-3 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>

      {/* {params.id && (
        <div className=" flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3 button-delete"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                try {
                  await deleteGroup(params.id)
                  toast.success("Grupo eliminado", {
                    position: "top-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  } catch (error) {   
                    toast.error(error.message, {                    position: "top-right",
                      style: {
                        background: "#101010",
                        color: "#fff",
                      },
                  }
                }
                
                navigate("/groups");
              }
            }}
          >
            Eliminar
          </button>
        </div>
      )} */}
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-3 rounded-lg w-full sm:w-48 mt-3 button-delete cursor-pointer"
            onClick={async () => {
              const accepted = window.confirm("¿Estás seguro?");
              if (accepted) {
                try {
                  await deleteGroup(params.id);
                  toast.success("Grupo eliminado", {
                    position: "top-right",
                    style: {
                      background: "#101010",
                      color: "#fff",
                    },
                  });
                  navigate("/groups"); // Solo si se elimina correctamente
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
