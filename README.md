## React Weather Forecast (no Redux)

Aplicacion web para obtener la informacion actual y extendida por 5 dias de la ciudad seleccionada.

- Web Responsive adaptable a todas las resoluciones

**API de la informacion**
5-day weather forecast SPA built on React. Styled with Sass. Uses the [5 Day / 3 Hour Forecast](https://openweathermap.org/forecast5/) Search by City API from [OpenWeatherMap](https://openweathermap.org/forecast5/).

**Demo**

- https://flow-clima.vercel.app/

### ScreenShot

![ScreenShot](./docs/screenshot.png 'pantalla principal')
![ScreenShot](./docs/screenshot2.png 'pantalla de busqueda')

**Informacion del proyecto**
Este proyecto posee las librerias Prettier, Eslint, Axios, Babel, Testing, Jest, Sass

- Testeo

  - - Jest y Testing-react

- Optimizacion y validacion de codigo

  - - Prettier
  - - Babel
  - - Eslint

- Peticiones
  - - Axios

**Levantar Proyecto**

- npm install
- npm start
- http://localhost:8080

**Build**

- npm run build
- carpeta build/index.html

**Docker**

- Posee un archivo docker-compose para ser levantado con Docker
- - docker-compose up -d
- - dirigirse a http://localhost:3000

**Formatear y validar codigo**

- npm run format
- npm run lint

**Testeo de codigo**
npm run test

- Valida el componente WeatherSearch si se renderiza bien.
- Valida las api si traen los datos correctamente
- Valida el button Buscar del componenet Search

## NOTAS

- No tener en cuenta la carpeta de nginx si no se utiliza docker
- Se deberia generar mas test de pruebas sobre las opciones que el usuario puede seleccionar y los renderizados de los componentes.
- Posee un archivo de variables en la carpeta de sass donde se puede cambiar los colores y tamaño de fuente, etc.
