food_beverages/  # Carpeta raíz del proyecto
│── backend/     # Carpeta del backend (Django + PostgreSQL)
│   ├── config/  # Configuración global de Django
│   │   ├── settings.py  # Configuración del proyecto
│   │   ├── urls.py      # Rutas principales
│   │   ├── wsgi.py      # Para servidores web
│   │   ├── asgi.py      # Para WebSockets (si usas Django Channels)
│   │   ├── __init__.py
│   │
│   ├── apps/  # Carpeta donde estarán las aplicaciones de Django
│   │   ├── users/       # Gestión de usuarios
│   │   ├── products/    # Gestión de alimentos y bebidas
│   │   ├── orders/      # Gestión de pedidos
│   │   ├── payments/    # Gestión de pagos
│   │
│   ├── static/  # Archivos estáticos (si se usan en Django)
│   ├── media/   # Archivos subidos por usuarios
│   ├── db.sqlite3  # Base de datos (si usas SQLite para pruebas)
│   ├── .env    # Variables de entorno (configuración sensible)
│   ├── manage.py  # Comando para administrar Django
│   ├── requirements.txt  # Dependencias del backend
│
│── frontend/    # Carpeta del frontend (React)
│   ├── public/   # Archivos públicos (index.html, favicon, etc.)
│   ├── src/      # Código fuente de React
│   │   ├── components/  # Componentes reutilizables
│   │   ├── pages/       # Páginas principales
│   │   ├── services/    # Llamadas a la API
│   │   ├── App.js       # Componente principal
│   │   ├── index.js     # Punto de entrada
│   │
│   ├── package.json  # Dependencias de React
│   ├── .env  # Variables de entorno del frontend
│   ├── vite.config.js  # Configuración si usas Vite
│
│── docker-compose.yml  # Configuración para Docker
│── README.md  # Documentación del proyecto


. Ejecutar backend
python manage.py runserver

. Crear Application
python manage.py startapp clients apps/clients

. Ver app clients en backend
http://localhost:8000/api/clients/

. Hacer migraciones
  python manage.py makemigrations environments printers tables tabletypes waiters
  python manage.py migrate
