# Aplicación del Clima

Esta es una aplicación web que muestra el clima actual de diferentes ciudades del mundo. Se hizo uso de la API de [OpenWeatherMap] para obtener los datos meteorológicos y se utilizó [Tailwind] para los estilos. La aplicación fue desplegada en [Vercel] y se puede acceder desde el siguiente enlace: [https://current-weather-liard.vercel.app/clima].

## Cómo ejecutar el proyecto

Para ejecutar el proyecto en tu máquina local, necesitas tener instalado [Node.js] y [npm]. Luego, sigue estos pasos:

1. Clona el repositorio o descarga el código fuente.
2. Abre una terminal en la carpeta del proyecto y ejecuta el comando `npm install` para instalar las dependencias.
3. Ejecuta el comando `npm run dev` para iniciar el servidor de desarrollo.
4. Abre tu navegador y visita [http://localhost:3000/clima] para ver la aplicación.

## Características principales

- La aplicación muestra el clima actual de la ciudad que el usuario elija desde un menú desplegable.
- Utiliza el método de [Server Side Rendering] para generar el HTML de la página en el servidor y enviarlo al cliente, lo que mejora el rendimiento y la optimización para motores de búsqueda.
- Tiene un diseño responsivo y adapta su apariencia según el tamaño de la pantalla.

[OpenWeatherMap]: https://openweathermap.org/
[Tailwind]: https://tailwindcss.com/
[Vercel]: https://vercel.com/
[Node.js]: https://nodejs.org/
[npm]: https://www.npmjs.com/
[Server Side Rendering]: https://nextjs.org/docs/advanced-features/server-side-rendering
