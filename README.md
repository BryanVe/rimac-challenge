# Reto técnico de RIMAC Seguros

Este proyecto es una aplicación web construida con React y Vite como parte de un reto técnico para RIMAC Seguros.

## Requisitos

Debe tener instalado [`Node`](https://nodejs.org/en/download/package-manager) a partir de la versión 20 en adelante.

El proyecto utiliza [`pnpm`](https://pnpm.io/es/) como manejador de paquetes por su gestión eficiente y rápida. Puede instalarlo con [`npm`](https://pnpm.io/es/installation#usando-pnpm) a través del siguiente comando.

```sh
npm install -g pnpm
```

## Instalación

En su terminal ejecute:

```sh
pnpm install
```

Esto instalará todas las dependencias necesarias para poder correr la aplicación web localmente.

También debe crear un archivo `.env` en la raíz del proyecto que contenga las variables de entorno necesarias para su ejecución. Las variables necesarias son las siguientes:

```sh
# Archivo .env
VITE_APP_API_URL=
```

## Estructura del proyecto

```txt
├── .husky/                   # Scripts de husky
├── src/                      # Código fuente
│   ├── assets/               # Archivos estáticos como imágenes, íconos y fuentes
│   │   ├── fonts/            # Fuentes accesibles en todo el proyecto
│   │   ├── icons/            # Íconos accesibles en todo el proyecto
│   │   └── images/           # Imágenes accesibles en todo el proyecto
│   ├── components/           # Componentes generales (reutilizables)
│   ├── layouts/              # Estructuras que se repiten en varias vistas
│   ├── theme/                # Tema del proyecto (colores, fuentes, etc)
│   │   ├── fonts.scss        # Estilos de fuentes
│   │   ├── globals.scss      # Estilos o variables globales
│   │   └── utils.scss        # Utilidades con SCSS
│   ├── views/                # Vistas de la aplicación
│   │   └── LoginView/
│   │       └── components/   # Componentes que solo se usan en la vista Login
│   ├── App.tsx               # Componente raíz de la aplicación
│   ├── index.scss            # Archivo de estilos raíz de la aplicación
│   └── main.tsx              # Punto de entrada de la aplicación
├── .gitignore                # Archivo para ignorar carpetas o ficheros con git
├── .prettierignore           # Archivo para ignorar carpetas o ficheros con prettier
├── .prettierrc.json          # Configuración de prettier
├── eslint.config.js          # Configuración de eslint
├── index.html                # Archivo HTML principal
├── package.json              # Información del proyecto y scripts
├── vite.config.js            # Configuración de Vite
└── README.md                 # Documentación del proyecto
```

## Ejecución

En su terminal ejecute:

```sh
pnpm dev
```

Esto iniciará la aplicación en modo desarrollo y escuchará cambios en el proyecto de forma local.
