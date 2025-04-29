import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { createUserGroup, updatedUserGroup, getUserGroup } from "../api"; // ← Tu archivo de API
import { userGroupFields } from "../../../config/formFields"; // ← Lista dinámica de campos
import { getBoxes } from "../../boxes/api";
import { getTables } from "../../tables/api";

export function UserGroupFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const [boxes, setBoxes] = useState([]);
  const [tables, setTables] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const { data: boxesRes } = await getBoxes();
        const { data: tablesRes } = await getTables();

        setBoxes(boxesRes);
        setTables(tablesRes);

        if (params.id) {
          const { data } = await getUserGroup(params.id);

          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }
        }
      } catch (error) {
        toast.error(
          "Error al cargar los datos relacionados con el grupo de usuario."
        );
      }
    }

    loadData();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updatedUserGroup(params.id, data);
        toast.success("Grupo de usuario actualizado");
      } else {
        await createUserGroup(data);
        toast.success("Grupo de usuario creado");
      }
    } catch {
      toast.error("Error al guardar el grupo de usuario");
    }
    navigate("/usergroups");
  });

  return (
    <div className="max-w-full mx-auto flex-container">
      <form
        onSubmit={onSubmit}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campos que no son checkbox */}
        {userGroupFields
          .filter(({ type }) => type !== "checkbox")
          .map(({ name, label, type, source, required, tooltip }) => (
            <div key={name} className="mb-4 relative group">
              {type === "select" ? (
                <>
                  <label className="block text-black mb-1">{label}</label>
                  <select
                    {...register(name, { required })}
                    className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full cursor-pointer"
                  >
                    <option value="">Seleccionar {label.toLowerCase()}</option>
                    {(source === "boxes"
                      ? boxes
                      : source === "tables"
                      ? tables
                      : []
                    ).map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.description}
                      </option>
                    ))}
                  </select>
                </>
              ) : (
                <input
                  type={type}
                  placeholder={label}
                  title={tooltip} // Tooltip sobre el campo
                  {...register(name, { required })}
                  className="bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full cursor-pointer"
                />
              )}
              {errors[name] && (
                <span className="text-red-500 text-sm">
                  {label} es requerido
                </span>
              )}
            </div>
          ))}

        {/* Checkboxes */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {userGroupFields
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

        <button className="bg-indigo-500 text-white p-3 rounded-lg block w-full mt-6 shadow-md hover:bg-indigo-600 cursor-pointer">
          Guardar
        </button>
      </form>
    </div>
  );
}
