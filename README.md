## Remitee Frontend

Frontend de la aplicación **Remitee** desarrollado en **React** con **TypeScript** y **Vite**. Permite la gestión de libros, incluyendo visualización, filtrado, paginación y creación de nuevos libros.

## Tecnologías utilizadas

- **React 19** + **TypeScript**
- **Vite** como bundler
- **TailwindCSS** para estilos
- **Material UI** e **Iconos**: @mui/material, @mui/icons-material, @heroicons/react
- **Axios** para llamadas a API
- **React Router DOM** para routing
- **React Hook Form** y **Zod** para validaciones
- Context API para manejo global de errores y mensajes de éxito

## Estructura del proyecto

src/
├─ api/ # Cliente Axios y servicios
├─ components/ # Componentes UI reutilizables
├─ context/ # Contextos globales (Errores, Éxitos)
├─ hooks/ # Custom hooks (useBooks)
├─ layout/ # Layout principal
├─ pages/ # Páginas de la aplicación
└─ App.tsx # Rutas y punto de entrada

bash
Copiar código

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/arielmalerba84/Remitee.Challenge.Frontend.git
cd Remitee.Challenge.Frontend
Instalar dependencias:

bash
Copiar código
npm install
Ejecutar el proyecto en modo desarrollo:

bash
Copiar código
npm run dev
Por defecto, Vite levantará la aplicación en http://localhost:5173.

Uso
Listado de libros: página principal /

Filtrado por título, descripción y año de publicación

Paginación de resultados

Agregar libro: página /add-book

Formulario con validaciones en frontend

Manejo de errores y mensajes de éxito globales

Validaciones principales
Título: obligatorio, máximo 100 caracteres

Descripción: obligatoria, máximo 150 caracteres

Año de publicación: obligatorio, número menor o igual al año actual

Contextos globales
ErrorContext: muestra errores de backend o conexión en un banner global

SuccessContext: muestra mensajes de éxito en un banner global

Scripts disponibles
bash
Copiar código
npm run dev      # Levanta el servidor de desarrollo
npm run build    # Compila la aplicación para producción
npm run preview  # Previsualiza el build
npm run lint     # Corre ESLint sobre el código
