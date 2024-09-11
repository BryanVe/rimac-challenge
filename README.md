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

## Ejecución

En su terminal ejecute:

```sh
pnpm dev
```

Esto iniciará la aplicación en modo desarrollo y escuchará cambios en el proyecto de forma local.
