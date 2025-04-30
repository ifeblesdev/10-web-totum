// src/config/formFields.js
export const configurationFields = [
  {
    name: "vat_included",
    label: "IVA incluido",
    type: "checkbox",
    tooltip: "Marque si el IVA está incluido",
  },
  {
    name: "uses_commands",
    label: "Usa comandas",
    type: "checkbox",
    tooltip: "Marque si se utilizan comandas en el sistema",
  },
  {
    name: "uses_side_dishes",
    label: "Usa acompañamientos",
    type: "checkbox",
    tooltip: "Marque si el sistema debe manejar acompañamientos",
  },
  {
    name: "multiple_boxes",
    label: "Cajas múltiples",
    type: "checkbox",
    tooltip: "Marque si se usan múltiples cajas en el sistema",
  },
  {
    name: "uses_inventory",
    label: "Usa inventario",
    type: "checkbox",
    tooltip: "Marque si el sistema tiene control de inventarios",
  },
  {
    name: "menu_screens",
    label: "Pantallas de menú",
    type: "checkbox",
    tooltip: "Marque si se utilizan pantallas para el menú",
  },
  {
    name: "ordered_menu_code",
    label: "Código de menú ordenado",
    type: "checkbox",
    tooltip: "Marque si se debe ordenar el menú por código",
  },
  {
    name: "local_configuration",
    label: "Configuración local",
    type: "checkbox",
    tooltip: "Marque si la configuración es local",
  },
  {
    name: "product_code_button",
    label: "Botón código de producto",
    type: "checkbox",
    tooltip:
      "Marque si se utiliza un botón para ingresar el código de producto",
  },
  {
    name: "send_commands_escape_takeaway",
    label: "Enviar comandas al llevar",
    type: "checkbox",
    tooltip:
      "Marque si las comandas se deben enviar automáticamente cuando se lleva",
  },
  {
    name: "handles_tip",
    label: "Maneja propinas",
    type: "checkbox",
    tooltip: "Marque si el sistema maneja propinas",
  },
  {
    name: "waiter_code_button",
    label: "Botón código de mesero",
    type: "checkbox",
    tooltip:
      "Marque si el sistema tiene un botón para ingresar el código del mesero",
  },
  {
    name: "associate_row",
    label: "Asociar fila",
    type: "checkbox",
    tooltip: "Marque si se deben asociar filas en el sistema",
  },
  {
    name: "uses_monitor",
    label: "Usa monitor",
    type: "checkbox",
    tooltip: "Marque si el sistema usa un monitor",
  },
  {
    name: "uses_keyboard",
    label: "Usa teclado",
    type: "checkbox",
    tooltip: "Marque si el sistema utiliza un teclado",
  },
  {
    name: "price_button",
    label: "Botón de precio",
    type: "checkbox",
    tooltip: "Marque si se tiene un botón para el precio del producto",
  },
  {
    name: "waiter_name_button",
    label: "Botón nombre de mesero",
    type: "checkbox",
    tooltip: "Marque si se debe mostrar el nombre del mesero en un botón",
  },
  {
    name: "customer_name_button",
    label: "Botón nombre de cliente",
    type: "checkbox",
    tooltip: "Marque si se debe mostrar el nombre del cliente en un botón",
  },
  {
    name: "multiple_prices",
    label: "Precios múltiples",
    type: "checkbox",
    tooltip:
      "Marque si el sistema soporta múltiples precios para los productos",
  },
  {
    name: "uses_exchange_rate",
    label: "Usa tipo de cambio",
    type: "checkbox",
    tooltip: "Marque si el sistema maneja el tipo de cambio",
  },
  {
    name: "uses_reference_value",
    label: "Usa valor de referencia",
    type: "checkbox",
    tooltip: "Marque si el sistema usa un valor de referencia",
  },
  {
    name: "uses_currency",
    label: "Usa moneda",
    type: "checkbox",
    tooltip: "Marque si el sistema maneja diferentes monedas",
  },
  {
    name: "uses_total_rounding",
    label: "Redondeo de total",
    type: "checkbox",
    tooltip: "Marque si el sistema redondea el total",
  },
  {
    name: "disabled",
    label: "Deshabilitado",
    type: "checkbox",
    tooltip: "Marque si el sistema está deshabilitado",
  },
  {
    name: "table_time",
    label: "Tiempo en mesa (minutos)",
    type: "number",    
    required: false,
    tooltip:
      "Ingrese el tiempo máximo en mesa antes de que se desactive la sesión",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" },
      validate: (value) =>
        (!isNaN(value) && parseFloat(value) >= 0) ||
        "Debe ser un número válido",
    },
  },

  {
    name: "order_time",
    label: "Tiempo de orden (minutos)",
    type: "number",
    required: false,  
    tooltip: "Ingrese el tiempo máximo permitido para realizar una orden",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" }, 
      validate: (value) =>
        (!isNaN(value) && parseFloat(value) >= 0) ||
        "Debe ser un número válido",
    },
  },
  {
    name: "barcode_character_code",
    label: "Carácter código de barras",
    type: "text",
    maxLength: 1,
    tooltip: "Ingrese el carácter para el código de barras",
  },
  {
    name: "exchange_rate",
    label: "Tipo de cambio",
    type: "number",
    step: "0.01",
    required: false,
    tooltip: "Ingrese el tipo de cambio actual",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" }, 
      validate: (value) =>
        (!isNaN(value) && parseFloat(value) >= 0) ||
        "Debe ser un número válido",
    },
  },
  {
    name: "reference_value",
    label: "Valor de referencia",
    type: "number",
    step: "0.01",
    required: false,
    tooltip: "Ingrese el valor de referencia utilizado para cálculos",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" }, 
      validate: (value) =>
        (!isNaN(value) && parseFloat(value) >= 0) ||
        "Debe ser un número válido",
    },
  },
  {
    name: "reference_value_rounding",
    label: "Redondeo de valor de referencia",
    type: "number",
    step: "0.01",
    required: false,
    tooltip: "Ingrese el valor de redondeo del valor de referencia",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" }, 
      validate: (value) =>
        (!isNaN(value) && parseFloat(value) >= 0) ||
        "Debe ser un número válido",
    },

  },
  {
    name: "close_table_totals",
    label: "Imprimir totales de mesa",
    type: "checkbox",
    tooltip: "Marque si se deben imprimir los totales de mesa",
  },
  {
    name: "close_card_totals",
    label: "Imprimir totales de tarjeta",
    type: "checkbox",
    tooltip: "Marque si se deben imprimir los totales de tarjeta",
  },
  {
    name: "close_sorted_by_group",
    label: "Imprimir por grupo",
    type: "checkbox",
    tooltip: "Marque si se deben imprimir los totales por grupo",
  },
  {
    name: "close_sales_by_product",
    label: "Imprimir ventas por producto",
    type: "checkbox",
    tooltip: "Marque si se deben imprimir las ventas por producto",
  },
  {
    name: "close_sales_by_invoice",
    label: "Imprimir ventas por factura",
    type: "checkbox",
    tooltip: "Marque si se deben imprimir las ventas por factura",
  },
  {
    name: "close_expense_report",
    label: "Informe de gastos",
    type: "checkbox",
    tooltip: "Marque si se debe generar un informe de gastos al cerrar caja",
  },
];

export const userGroupFields = [
  {
    name: "description",
    label: "Descripción",
    type: "text",
    tooltip: "Nombre descriptivo del grupo de usuario",
    required: true,
  },
  {
    name: "default_box",
    label: "Caja por defecto",
    type: "select",
    source: "boxes",
    tooltip: "Caja que se asignará automáticamente a este grupo",
  },
  {
    name: "default_table",
    label: "Mesa por defecto",
    type: "select",
    source: "tables",
    tooltip: "Mesa asignada por defecto para el grupo",
  },

  {
    name: "orders_only",
    label: "Solo pedidos",
    type: "checkbox",
    tooltip: "Restringe el acceso solo a funciones de pedidos",
  },
  {
    name: "run_file_menu",
    label: "Ejecutar menú archivos",
    type: "checkbox",
    tooltip: "Permite acceder al menú de archivos",
  },
  {
    name: "run_config_menu",
    label: "Ejecutar menú configuración",
    type: "checkbox",
    tooltip: "Permite acceder al menú de configuración",
  },
  {
    name: "run_reports_menu",
    label: "Ejecutar menú informes",
    type: "checkbox",
    tooltip: "Permite ver y generar informes",
  },
  {
    name: "execute_close",
    label: "Ejecutar cierre",
    type: "checkbox",
    tooltip: "Autoriza a realizar el cierre de caja",
  },
  {
    name: "print_order",
    label: "Imprimir pedido",
    type: "checkbox",
    tooltip: "Permite imprimir un pedido",
  },
  {
    name: "reprint_order",
    label: "Reimprimir pedido",
    type: "checkbox",
    tooltip: "Permite volver a imprimir un pedido",
  },
  {
    name: "open_box",
    label: "Abrir caja",
    type: "checkbox",
    tooltip: "Permite abrir la caja",
  },
  {
    name: "move_table",
    label: "Mudar mesa",
    type: "checkbox",
    tooltip: "Permite mover pedidos entre mesas",
  },
  {
    name: "split_table",
    label: "Dividir mesa",
    type: "checkbox",
    tooltip: "Permite dividir una mesa en varias",
  },
  {
    name: "change_waiter",
    label: "Cambiar camarero",
    type: "checkbox",
    tooltip: "Permite asignar otro camarero a una mesa",
  },
  {
    name: "require_waiter_password",
    label: "Pedir clave camarero",
    type: "checkbox",
    tooltip: "Solicita clave al camarero para operar",
  },
  {
    name: "view_sale",
    label: "Ver venta",
    type: "checkbox",
    tooltip: "Permite ver detalles de la venta",
  },
  {
    name: "invoice_order",
    label: "Facturar pedido",
    type: "checkbox",
    tooltip: "Autoriza a facturar pedidos",
  },
  {
    name: "logout",
    label: "Salir",
    type: "checkbox",
    tooltip: "Permite cerrar sesión",
  },
  {
    name: "other_options",
    label: "Otras opciones",
    type: "checkbox",
    tooltip: "Muestra opciones adicionales",
  },
  {
    name: "group_row",
    label: "Agrupar renglón",
    type: "checkbox",
    tooltip: "Agrupa artículos iguales en un solo renglón",
  },
  {
    name: "decrease_row",
    label: "Reducir renglón",
    type: "checkbox",
    tooltip: "Permite disminuir la cantidad de un ítem",
  },
  {
    name: "repeat_row",
    label: "Repetir renglón",
    type: "checkbox",
    tooltip: "Permite repetir una línea de pedido",
  },
  {
    name: "repeat_last_row",
    label: "Repetir último renglón",
    type: "checkbox",
    tooltip: "Repite automáticamente el último ítem",
  },
  {
    name: "delete_row",
    label: "Eliminar renglón",
    type: "checkbox",
    tooltip: "Permite eliminar líneas del pedido",
  },
  {
    name: "disable",
    label: "Deshabilitar",
    type: "checkbox",
    tooltip: "Desactiva el grupo temporalmente",
  },
];

export const boxFields = [
  {
    name: "code",
    label: "Código",
    type: "number",
    required: true,
    tooltip: "Debe estar entre 1 y 10",
    validation: {
      min: { value: 1, message: "El código debe ser al menos 1" },
      max: { value: 10, message: "El código no puede ser mayor a 10" },
    },
  },
  {
    name: "description",
    label: "Descripción",
    type: "text",
    required: true,
    tooltip: "Breve nombre para identificar la caja",
  },
  {
    name: "invoice_sequence",
    label: "Secuencia de Factura",
    type: "number",
    required: true,
    tooltip: "Solo enteros positivos",
    validation: {
      min: { value: 1, message: "Debe ser positivo" },
      validate: (value) =>
        Number.isInteger(Number(value)) || "Debe ser un número entero",
    },
  },
  {
    name: "disabled",
    label: "Deshabilitada",
    type: "checkbox",
    tooltip: "Marca si no debe usarse actualmente",
    required: false,
  },
  {
    name: "percentage",
    label: "Porcentaje",
    type: "number",
    required: false,
    tooltip: "Porcentaje de algún valor relacionado",
    validation: {
      min: { value: 0, message: "Debe ser cero o un número positivo" },
      validate: (value) =>
        !isNaN(value) && parseFloat(value) >= 0 || "Debe ser un número válido",
    }
  },
  {
    name: "waiter",
    label: "Camarero",
    type: "select",
    required: false,
    tooltip: "Selecciona un camarero relacionado",
  },
  {
    name: "ask_quantity",
    label: "Pedir cantidad",
    type: "checkbox",
    required: false,
    tooltip: "Marca si se debe pedir cantidad al registrar",
  },
  {
    name: "inventory",
    label: "Inventario",
    type: "checkbox",
    required: false,
    tooltip: "Marca si la caja lleva inventario",
  },
  {
    name: "takeaway_only",
    label: "Solo para llevar",
    type: "checkbox",
    required: false,
    tooltip: "Marca si solo es para llevar",
  },
  {
    name: "handles_vat",
    label: "Maneja IVA",
    type: "checkbox",
    required: false,
    tooltip: "Marca si la caja maneja IVA",
  },
  {
    name: "change_by_percentage",
    label: "Cambio por porcentaje",
    type: "checkbox",
    required: false,
    tooltip: "Marca si el cambio se calcula por porcentaje",
  },
  {
    name: "opens_cash_drawer",
    label: "Abre cajón de dinero",
    type: "checkbox",
    required: false,
    tooltip: "Marca si abre el cajón de dinero",
  },
  {
    name: "prints_documents",
    label: "Imprime documentos",
    type: "checkbox",
    required: false,
    tooltip: "Marca si debe imprimir documentos",
  },
  {
    name: "printer",
    label: "Impresora",
    type: "select",
    required: false,
    tooltip: "Selecciona una impresora relacionada",
  },
  {
    name: "copies",
    label: "Copias",
    type: "number",
    required: false,
    tooltip: "Número de copias a imprimir",
    validation: {
      min: { value: 1, message: "Debe ser positivo" },
      validate: (value) =>
        Number.isInteger(Number(value)) || "Debe ser un número entero",
    },
  },
  {
    name: "audit",
    label: "Auditoría",
    type: "checkbox",
    required: false,
    tooltip: "Marca si se debe auditar esta caja",
  },
  {
    name: "close_with_open_tables",
    label: "Cerrar con mesas abiertas",
    type: "checkbox",
    required: false,
    tooltip: "Marca si la caja debe cerrarse con mesas abiertas",
  },
  {
    name: "group_products",
    label: "Agrupar productos",
    type: "checkbox",
    required: false,
    tooltip: "Marca si los productos deben agruparse",
  },
  {
    name: "side_items",
    label: "Artículos secundarios",
    type: "checkbox",
    required: false,
    tooltip: "Marca si hay artículos secundarios",
  },
  {
    name: "header",
    label: "Encabezado",
    type: "textarea",
    required: false,
    tooltip: "Texto para el encabezado",
  },
  {
    name: "lines",
    label: "Líneas renglones",
    type: "textarea",
    required: false,
    tooltip: "Texto para las líneas del documento",
  },
  {
    name: "footer",
    label: "Pie de página",
    type: "textarea",
    required: false,
    tooltip: "Texto para el pie de página",
  },
  {
    name: "print_command_tickets",
    label: "Imprimir tickets de comanda",
    type: "checkbox",
    required: false,
    tooltip: "Marca si debe imprimir los tickets de cocina",
  },
  {
    name: "command_header",
    label: "Encabezado comanda",
    type: "textarea",
    required: false,
    tooltip: "Texto para el encabezado de comanda",
  },
  {
    name: "command_lines",
    label: "Líneas renglones comanda",
    type: "textarea",
    required: false,
    tooltip: "Texto para las líneas de comanda",
  },
  {
    name: "command_footer",
    label: "Pie de página comanda",
    type: "textarea",
    required: false,
    tooltip: "Texto para el pie de página de comanda",
  },
  {
    name: "command_copies",
    label: "Copias comanda",
    type: "number",
    required: false,
    tooltip: "Número de copias para comanda",
    validation: {
      min: { value: 1, message: "Debe ser positivo" },
      validate: (value) =>
        Number.isInteger(Number(value)) || "Debe ser un número entero",
    },
  },
  {
    name: "group_command_tickets",
    label: "Agrupar tickets de comanda",
    type: "checkbox",
    required: false,
    tooltip: "Marca si los tickets de comanda deben agruparse",
  },
  {
    name: "closing_printer",
    label: "Impresora de cierre",
    type: "select",
    required: false,
    tooltip: "Selecciona una impresora de cierre",
  },
  {
    name: "print_payment",
    label: "Imprimir pago",
    type: "checkbox",
    required: false,
    tooltip: "Marca si debe imprimir el pago",
  },
];

export const systemUserFields = [
  {
    name: "login",
    label: "Usuario",
    type: "text",
    maxLength: 20,
    minLength: 4,
    required: true,
    tooltip:
      "Nombre de usuario único para iniciar sesión (mínimo 4 caracteres).",
    placeholder: "Ej: juan.garcia",
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    maxLength: 20,
    minLength: 6,
    required: true,
    tooltip: "Contraseña del usuario (mínimo 6 caracteres).",
    placeholder: "********",
  },
  {
    name: "name",
    label: "Nombre completo",
    type: "text",
    maxLength: 120,
    required: true,
    tooltip: "Nombre real del usuario.",
    placeholder: "Ej: Juan García",
  },
  {
    name: "user_group",
    label: "Grupo de usuario",
    type: "select",
    source: "usergroups",
    required: true,
    tooltip: "Rol del usuario en el sistema (Cajero, Camarero, Gerente...).",
  },
  {
    name: "box",
    label: "Caja asignada",
    type: "select",
    source: "boxes",
    required: false,
    tooltip: "Caja asociada a este usuario para operaciones.",
  },
  {
    name: "disabled",
    label: "Deshabilitado",
    type: "checkbox",
    tooltip: "Marca si el usuario está inactivo y no puede iniciar sesión.",
  },
];


export const waiterFields = [
  {
    name: "description",
    label: "Nombre del Camarero",
    type: "text",
    required: true,
    tooltip: "Nombre que identifica al camarero",
  },
  {
    name: "points",
    label: "Puntos",
    type: "number",
    required: false,
    tooltip: "Cantidad de puntos asociados",
    validation: {
      min: { value: 0, message: "Debe ser 0 o más" },
      validate: (value) =>
        Number.isInteger(Number(value)) || "Debe ser un número entero",
    },
  },
  {
    name: "password",
    label: "Contraseña",
    type: "password",
    required: false,
    tooltip: "Contraseña de acceso del camarero",
  },
  {
    name: "commands",
    label: "Permite Comandas",
    type: "checkbox",
    required: false,
    tooltip: "Si está marcado, el camarero puede enviar comandas",
  },
  {
    name: "disable",
    label: "Deshabilitado",
    type: "checkbox",
    required: false,
    tooltip: "Si está marcado, el camarero no podrá ser usado",
  },
];
