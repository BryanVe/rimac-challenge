# Reto técnico de RIMAC Seguros

Este proyecto es una aplicación web construida con **React** y **Vite** como parte de un reto técnico para **RIMAC Seguros**.

## Requisitos

Debe tener instalado [`Node`](https://nodejs.org/en/download/package-manager) a partir de la versión 20 en adelante.

El proyecto utiliza [`pnpm`](https://pnpm.io/es/) como manejador de paquetes por su gestión eficiente y rápida. Puede instalarlo con [`npm`](https://pnpm.io/es/installation#usando-pnpm) a través del siguiente comando.

```sh
npm install -g pnpm
```

## Instalación

Primero, debe clonar el repositorio y luego instalar las dependencias:

```sh
# con https
git clone https://github.com/BryanVe/rimac-challenge.git
# o con ssh
git clone git@github.com:BryanVe/rimac-challenge.git

cd rimac-challenge
pnpm install
```

También debe crear un archivo `.env` en la raíz del proyecto que contenga las siguientes variables de entorno:

```sh
# archivo .env
VITE_APP_API_URL='https://rimac-front-end-challenge.netlify.app/api'
```

**Nota**: Se deja el valor de las variables aquí por motivos prácticos, sin embargo es incorrecto.

## Ejecución

Para iniciar el servidor de desarrollo, ejecute:

```sh
pnpm dev

VITE v5.4.3  ready in 240 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Esto iniciará la aplicación en [http://localhost:3000](http://localhost:3000) y escuchará cambios en el proyecto de forma local.

## Despliegue

Para generar el bundle de producción:

```sh
pnpm build
```

Los archivos generados estarán disponibles en la carpeta `dist/`, listos para ser desplegados en cualquier servidor de hosting estático (como Netlify, Vercel o Render).

## Scripts disponibles

- **pnpm dev**: Inicia el servidor de desarrollo.
- **pnpm build**: Crea un bundle del código para producción.
- **pnpm lint**: Ejecuta ESLint para verificar la calidad del código.
- **pnpm preview**: Inicia una vista previa del bundle para producción en local.
- **pnpm format**: Ejecuta Prettier para formatear el código acorde al 'code style'.
- **pnpm typecheck**: Ejecuta tsc para verificar errores con TypeScript.
- **pnpm prepare**: Ejecuta husky para generar los scripts default.

## Estructura del proyecto

```txt
├── .husky/                     # Scripts de husky revisar y formatear el código antes de hacer commit
├── src/                        # Código fuente
│   ├── @types/                 # Tipos globales accesibles en toda la aplicación
│   ├── assets/                 # Contiene recursos estáticos como imágenes y fuentes
│   │   ├── fonts/              # Fuentes accesibles en todo el proyecto
│   │   └── images/             # Imágenes accesibles en todo el proyecto
│   ├── components/             # Componentes reutilizables en toda la aplicación
│   ├── config/                 # Configuraciones estáticas (Bind a variables de entorno, constantes, etc)
│   ├── contexts/               # Contextos globales
│   │   └── auth.context.tsx    # Contexto para interactuar con los datos del usuario
│   ├── hooks/                  # Hooks globales
│   │   └── useAuth.ts          # Hook para interactuar con el contexto auth
│   ├── layouts/                # Layouts que se aplican a múltiples vistas
│   │   ├── RootLayout/         # Layout base (aplicable a todas las vistas)
│   │   └── StepperLayout/      # Layout con el componente Stepper (solo para las vistas Plans y Summary)
│   ├── network/                # Interacciones con APIs (consultas, esquemas, etc)
│   │   ├── plans/              # Consultas relacionadas a planes
│   │   └── user/               # Consultas relacionadas a usuarios
│   ├── theme/                  # Archivos de estilos globales y variables SCSS (colores, fuentes, etc)
│   │   ├── fonts.scss          # Estilos de fuentes
│   │   ├── globals.scss        # Variables globales
│   │   └── utils.scss          # Utilidades globales con SCSS (mixins, funciones, etc)
│   ├── utils/                  # Funciones agrupadas por contexto (herramientas)
│   ├── views/                  # Vistas de la aplicación
│   │   ├── LoginView/
│   │   │   ├── components/     # Componentes que solo se usan en la vista Login
│   │   │   └── hooks/          # Hooks que solo se usan en la vista Login
│   │   ├── PlansView/
│   │   │   ├── components/     # Componentes que solo se usan en la vista Plans
│   │   │   └── hooks/          # Hooks que solo se usan en la vista Plans
│   │   └── SummaryView/
│   │       ├── components/     # Componentes que solo se usan en la vista Summary
│   │       └── hooks/          # Hooks que solo se usan en la vista Summary
│   ├── App.tsx                 # Componente raíz de la aplicación
│   ├── index.scss              # Archivo de estilos raíz de la aplicación
│   └── main.tsx                # Punto de entrada de la aplicación
├── .env                        # Variables de entorno
├── .env.example                # Ejemplo de estructura de variables de entorno
├── .gitignore                  # Archivo para ignorar carpetas o ficheros con git
├── .prettierignore             # Archivo para ignorar carpetas o ficheros con prettier
├── .prettierrc.json            # Configuración de prettier
├── eslint.config.js            # Configuración de eslint
├── index.html                  # Archivo HTML principal
├── package.json                # Información del proyecto y scripts
├── vite.config.js              # Configuración de Vite
└── README.md                   # Documentación del proyecto
```

## Tecnologías utilizadas

- [**@tanstack/react-query**](https://tanstack.com/query/v3/docs/framework/react/installation): Para la gestión eficiente de datos, estados de carga y errores en las consultas
- [**axios**](https://github.com/axios/axios?tab=readme-ov-file#installing): Para realizar peticiones HTTP a la API
- [**react-router-dom**](https://reactrouter.com/en/main/start/overview): Para el manejo del enrutamiento en la aplicación

## Dependencias de desarrollo utilizadas

El proyecto utiliza varias herramientas para mantener una alta calidad de código y mejorar el flujo de desarrollo:

- [**eslint**](https://www.npmjs.com/package/eslint): Para asegurar consistencia en el estilo del código y detectar posibles errores.
- [**prettier**](https://www.npmjs.com/package/prettier): Formateador de código automático para mantener un estilo consistente.
- [**husky**](https://typicode.github.io/husky/): Para ejecutar scripts antes de los commits, asegurando que el código esté limpio.
- [**lint-staged**](https://www.npmjs.com/package/lint-staged): Ejecuta linters en los archivos que han sido 'stageados' para commit.
- [**sass**](https://www.npmjs.com/package/sass): Extensión de CSS que permite usar variables, mixins y anidación.
- [**typescript**](https://www.npmjs.com/package/typescript): Superconjunto de JavaScript que añade tipado estático.
- [**vite**](https://www.npmjs.com/package/vite): Bundler ultrarrápido para aplicaciones web modernas.
- [**clsx**](https://www.npmjs.com/package/clsx): Utilidad para manejar clases condicionales en React de manera eficiente.
- [**@tanstack/eslint-plugin-query**](https://www.npmjs.com/package/@tanstack/eslint-plugin-query): Para seguir las mejores prácticas de React Query.
- [**@trivago/prettier-plugin-sort-imports**](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports): Para ordenar automáticamente las importaciones.
- [**vite-tsconfig-paths**](https://www.npmjs.com/package/vite-tsconfig-paths): Plugin de Vite para resolver paths definidos en `tsconfig.json`.

## Razonamiento de selección de librerías

- **Vite**: Seleccionado por su velocidad en la construcción y la facilidad de configuración.
- **@tanstack/react-query**: Usado para manejar el estado de las consultas de datos de forma eficiente y simplificar el manejo de estados de carga y errores.
- **axios**: Preferido para las peticiones HTTP por su simplicidad y soporte para interceptores.
- **react-router-dom**: Para el enrutamiento debido a su popularidad y fácil integración con React.
- **eslint y prettier**: Para mantener la calidad del código y consistencia en el estilo de código.
- **typescript**: Para mejorar la calidad del código mediante el tipado estático.
- **sass**: Para escribir CSS de manera más eficiente con soporte para variables y anidación.

## División de tareas

1. **Configuración inicial**: Configuración con Vite, instalación de dependencias y configuración de las herramientas de desarrollo (`eslint`, `prettier` y `husky`).
2. **Análisis del diseño**: Análisis del prototipo en Figma con el objetivo de identificar colores, breakpoints, fuentes y componentes reutilizables.
3. **Desarrollo de componentes reutilizables**: Creación de componentes reutilizables en código.
4. **Desarrollo de las vistas a nivel de prototipo**: Implementación de las vistas con data mockeada.
5. **Implementación de la lógica en la vista Login**: Validación del formulario de login, obtención del perfil del usuario y almacenamiento de los datos tanto en el contexto global como en el session storage.
6. **Implementación de la lógica en la vista Plans**: Obtención de los planes acorde a las reglas en Figma y reemplazo de la data mockeada por la real.
7. **Implementación de la lógica en la vista Summary**: Recuperación de los datos del usuario y el plan del session storage y uso de los mismos.
