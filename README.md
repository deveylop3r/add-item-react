### 1ª Prueba técnica React y Nodejs

Te damos la bienvenida a la primera prueba técnica del proceso de selección como Senior Software Typescript Developer con React y Nodejs. La prueba consiste en lo siguiente:

## Ejercicio 1. Añadir y eliminar elementos de una lista (React)

Requisitos: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

Duración máxima: 40 minutos

## Enunciado:

Crear una app en React que implemente un campo de texto y botón para añadir un elemento.

Cuando se hace click en el botón, el texto en el campo de entrada debe agregarse a continuación en una lista de elementos.

Además, cada vez que se hace click en cualquier elemento de la lista, debe eliminarse de la lista.
Dar importancia a la funcionalidad y usabilidad, más que al diseño visual.
El código debe ser enteramente desarrollado en Typescript.
Ejercicio 2. API REST (Nodejs)
Requisitos: Tener instalado Nodejs (v16.x.x o superior). Tener instalado npm.

Duración máxima: 40 minutos

Enunciado:

Crear una API REST en Node.js que gestione Libros y Autores. Se deben crear 2 endpoints para operar con la misma.

Se puede usar almacenamiento en memoria o el sistema gestor de bases de datos de su preferencia.
Entidad Libro (book):

id: number
title: string
chapters: number. Representa la cantidad de capítulos.
pages: number. Representa la cantidad de páginas.
Entidad Autor (author):

id: number

name: string

Debe existir una relación del tipo Many-to-Many entre los libros y los autores

Endpoints:

Nuevo Libro: Creará un nuevo libro, aportando todos sus datos incluidos los autores.
Obtener todos los libros: Deberá devolver un listado de libros con sus autores.
Crear un autor: Creará un nuevo autor
Obtener todos los autores: Deberá devolver un listado de todos los autores con los libros que tengan.
Obtener Promedio de Páginas por Capítulo: Obtener el dato de una instancia de Libro ya creada. Se debe devolver el id del libro consultado y un promedio de páginas por capítulo. Ambos en formato cadena, y con 2 decimales para el promedio.
Para la prueba es necesario realizar lo que dicta el enunciado, aunque se pueden agregar características no mencionadas (manejo de errores, repositorio de datos, validaciones, etc.).
Se pueden asumir los aspectos que no aclare el enunciado, y realizar aclaraciones personales en caso de ser necesario.
El código debe ser enteramente desarrollado en Typescript.
Recuerda que dispones de 90 minutos para realizar las dos pruebas conjuntamente.

Por favor, confirma que lo has recibido y vas a comenzar la prueba en el botón de abajo.

Envía todos los archivos fuente del proyecto vía email en archivo Zip (sin carpeta de dependencias) una vez finalizado el tiempo de la prueba.

¡Mucha suerte!

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
