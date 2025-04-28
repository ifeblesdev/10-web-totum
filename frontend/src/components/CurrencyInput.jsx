import { Controller } from "react-hook-form";
import { NumericFormat } from "react-number-format";

export function CurrencyInput({
  name,
  control,
  label,
  required = false,
  prefix = "€ ",
  decimalScale = 2,
  placeholder = "",
  allowNegative = false,
  thousandSeparator = ",",
  decimalSeparator = ".",
}) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...(required && {
          required: `"${label || name}" es requerido`,
        }),
        min: { value: 0, message: "Debe ser un número positivo" },
      }}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col w-full">
          {label && (
            <label htmlFor={name} className="mb-1 font-medium text-gray-700">
              {label}
            </label>
          )}
          <NumericFormat
            {...field}
            id={name}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
            prefix={prefix}
            allowNegative={allowNegative}
            decimalScale={decimalScale}
            fixedDecimalScale
            valueIsNumericString
            onValueChange={({ floatValue }) => {
              field.onChange(floatValue ?? null);
            }}
            className="p-3 rounded-lg border border-gray-300 text-right"
            placeholder={placeholder || label}
          />
          {error && (
            <span className="text-red-500 text-sm mt-1">{error.message}</span>
          )}
        </div>
      )}
    />
  );
}
