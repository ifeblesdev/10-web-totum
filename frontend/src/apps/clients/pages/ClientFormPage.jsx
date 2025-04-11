import { useForm } from "react-hook-form";
import { createClient, getClient, updatedClient, deleteClient } from "../api/";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function ClientFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    // Limpiar campos vacíos
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }
    if (params.id) {
      await updatedClient(params.id, data);
      toast.success("Cliente actualizado", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    } else {
      await createClient(data);
      toast.success("Cliente creado", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
    navigate("/clients");
  });

  useEffect(() => {
    async function loadClient() {
      if (params.id) {
        const { data } = await getClient(params.id);
        for (let key in data) {
          if (data[key] !== null) setValue(key, data[key]);
        }
      }
    }
    loadClient();
  }, []);


  return (
    <div className="max-w-xl mx-auto flex-container">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        <input
          type="text"
          placeholder="Nombre"
          title="Escriba el nombre del cliente"
          {...register("first_name", { required: true })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.first_name && (
          <span className="text-red-500">Nombre es requerido</span>
        )}

        <input
          type="text"
          placeholder="Apellido"
          title="Escriba el apellido del cliente"
          {...register("last_name", { required: true })}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.last_name && (
          <span className="text-red-500">Apellido es requerido</span>
        )}

        <input
          type="text"
          placeholder="DNI/NIE"
          title="Escriba el Dni/Nie del cliente"
          {...register("id_number", { required: true })}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.id_number && (
          <span className="text-red-500">DNI/NIE es requerido</span>
        )}

        <input
          type="email"
          placeholder="Correo electrónico"
          title="Escriba el email del cliente"
          {...register("email", { required: true })}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.email && (
          <span className="text-red-500">Correo es requerido</span>
        )}

        <input
          type="text"
          placeholder="Teléfono"
          title="Escriba el número de teléfono del cliente"
          {...register("phone")}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        <input
          type="text"
          placeholder="Dirección"
          title="Escriba la dirección del cliente"
          {...register("address")}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        <input
          type="text"
          placeholder="Ciudad"
          title="Escriba la ciudad del cliente"
          {...register("city")}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        <input
          type="text"
          placeholder="Provincia/Estado"
          title="Escriba la provincia/estado del cliente"
          {...register("state")}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        <input
          type="text"
          placeholder="País"
          title="Escriba el país del cliente"
          {...register("country")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
          defaultValue="España"
        />

        <input
          type="date"
          title="Escriba la fecha de nacimiento del cliente"
          {...register("birth_date")}
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        <select
          {...register("gender")}
          title="Seleccione el género del cliente"
          defaultValue="Hombre"
          className="form-input  bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="Hombre">Hombre</option>
          <option value="Mujer">Mujer</option>
          <option value="Otro">Otro</option>
          <option value="No especifica">No especifica</option>
        </select>

        <div className="flex items-center mb-3">
          <input
            id="gdpr_consent"
            type="checkbox"
            title="Escriba el consentimiento del cliente para el RGPD"
            {...register("gdpr_consent")}
            className="mr-2"
          />
          <label htmlFor="gdpr_consent">Consentimiento RGPD</label>
        </div>

        <div className="flex items-center mb-3">
          <input
            id="disable"
            type="checkbox"
            title="Escriba si el cliente está deshabilitado"
            {...register("disable")}
            className="mr-2"
          />
          <label htmlFor="disable">Deshabilitado</label>
        </div>

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
                await deleteClient(params.id);
                toast.success("Cliente eliminado", {
                  position: "top-right",
                  style: { background: "#101010", color: "#fff" },
                });
                navigate("/clients");
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
