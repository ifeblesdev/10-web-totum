import { useForm } from "react-hook-form";
import { createTable, getTable, updatedTable, deleteTable } from "../api/";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getPrinters } from "../../printers/api";
import { getEnvironments } from "../../environments/api";
import { getTableTypes } from "../../tabletypes/api";

export function TableFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();
  const [printersRes, setPrinters] = useState([]);
  const [environmentsRes, setEnvironments] = useState([]);
  const [tabletypesRes, setTableTypes] = useState([]);

  const translations = {
    print: "Imprimir",
    commercial_value: "Valor comercial",
    service: "Servicio",
    waiter: "Camarero",
    takeaway: "Para llevar",
    vat: "IVA",
    request_price: "Solicitar precio",
    commands: "Imprime comandas",
    surcharge: "Recargo",
    discount: "Descuento",
    vat_included: "IVA incluido",
    budget: "Presupuesto",
    cash_only: "Solo efectivo",
    disable: "Deshabilitar",
  };

  const onSubmit = handleSubmit(async (data) => {
    for (let key in data) {
      if (data[key] === "") {
        data[key] = null;
      }
    }

    if (params.id) {
      await updatedTable(params.id, data);
      toast.success("Mesa actualizada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    } else {
      await createTable(data);
      toast.success("Mesa creada", {
        position: "top-right",
        style: { background: "#101010", color: "#fff" },
      });
    }
    navigate("/tables");
  });

  useEffect(() => {
    async function loadData() {
      try {
        // Llamadas a API (ajustá los endpoints según tu backend)
        const { data: printersRes } = await getPrinters();
        const { data: environmentsRes } = await getEnvironments();
        const { data: tabletypesRes } = await getTableTypes();
        setPrinters(printersRes);
        setEnvironments(environmentsRes);
        setTableTypes(tabletypesRes);
        // console.log("Printers:", printersRes);
        // console.log("Environments:", environmentsRes);
        // console.log("Table Types:", tabletypesRes);
      } catch (error) {
        toast.error("Error al cargar datos relacionados");
      }
    }
    loadData();
  }, []);


  useEffect(() => {
    async function loadData() {
      try {
        const { environmentsRes } = await getEnvironments();
        const { printersRes } = await getPrinters();
        const { tabletypesRes } = await getTableTypes();
        setEnvironments(environmentsRes);
        setPrinters(printersRes);
        setTableTypes(tabletypesRes);
        console.log(environmentsRes)

        if (params.id) {
          const { data } = await getTable(params.id);
          console.log(data)

          for (let key in data) {
            if (data[key] !== null) {
              setValue(key, data[key]);
            }
          }

          if (data.environment) {
            setValue("environment", data.environment); 
          }
          if (data.printer_commands1) {
            setValue("printer_commands1", data.printer_commands1.id);
          }
          if (data.printer_commands2) {
            setValue("printer_commands2", data.printer_commands2.id);
          }
          if (data.table_type) {
            setValue("table_type", data.table_type.id);
          }
        }
      } catch (error) {
        toast.error("Error al cargar los datos relacionados con la mesa.");
      }
    }

    loadData();
  }, [params.id, setValue]);

  return (
    <div className="max-w-xl mx-auto">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-4xl"
      >
        {/* Campo de descripción */}
        <input
          type="text"
          placeholder="Descripción de la mesa"
          {...register("description", { required: true })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />
        {errors.description && (
          <span className="text-red-500">La descripción es requerida</span>
        )}

        {/* Campo de copias */}
        <input
          type="number"
          placeholder="Número de copias"
          {...register("copies", { required: true, min: 0 })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        />

        {/* Checkboxes */}
        {[
          "print",
          "commercial_value",
          "service",
          "waiter",
          "takeaway",
          "vat",
          "request_price",
          "commands",
          "surcharge",
          "discount",
          "vat_included",
          "budget",
          "cash_only",
          "disable",
        ].map((field) => (
          <div className="flex items-center mb-3" key={field}>
            <input
              id={field}
              type="checkbox"
              {...register(field)}
              className="mr-2"
            />
            <label htmlFor={field} className="capitalize">
              {translations[field] || field.replaceAll("_", " ")}
            </label>
          </div>
        ))}

        <select
          {...register("printer_commands1")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona una impresora (1)</option>
          {printersRes && printersRes.length > 0 ? (
            printersRes.map((printer) => (
              <option key={printer.id} value={printer.id}>
                {printer.description}
              </option>
            ))
          ) : (
            <option>No hay impresoras disponibles</option>
          )}
        </select>

        <select
          {...register("printer_commands2")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona una impresora (2)</option>
          {printersRes && printersRes.length > 0 ? (
            printersRes.map((printer) => (
              <option key={printer.id} value={printer.id}>
                {printer.description}
              </option>
            ))
          ) : (
            <option>No hay impresoras disponibles</option>
          )}
        </select>

        <select
          {...register("environment", { required: true })}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona un entorno</option>
          {environmentsRes && environmentsRes.length > 0 ? (
            environmentsRes.map((env) => (
              <option key={env.id} value={env.id}>
                {env.description}
              </option>
            ))
          ) : (
            <option>No hay entornos disponibles</option>
          )}
        </select>
        {errors.environment && (
          <span className="text-red-500">El entorno es obligatorio</span>
        )}

        <select
          {...register("table_type")}
          className="form-input bg-white text-black p-3 rounded-lg border border-gray-300 shadow-sm block w-full mb-3"
        >
          <option value="">Selecciona un tipo de mesa</option>
          {tabletypesRes && tabletypesRes.length > 0 ? (
            tabletypesRes.map((tabletype) => (
              <option key={tabletype.id} value={tabletype.id}>
                {tabletype.description}
              </option>
            ))
          ) : (
            <option>No hay tipos de mesas disponibles</option>
          )}
        </select>
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
                await deleteTable(params.id);
                toast.success("Mesa eliminada", {
                  position: "top-right",
                  style: { background: "#101010", color: "#fff" },
                });
                navigate("/tables");
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
