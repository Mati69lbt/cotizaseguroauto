# Aplicación de Cotización de Seguro de Automóvil

Esta es una aplicación de React que permite a los usuarios obtener una cotización para un seguro de automóvil. La aplicación utiliza las siguientes tecnologías:

- React
- Tailwind CSS
- Vite

Para ejecutar la aplicación, clona el repositorio e instala las dependencias utilizando el siguiente comando:

```
npm install
```

Una vez que se hayan instalado las dependencias, puedes ejecutar la aplicación con el siguiente comando:

```
npm run dev
```

La aplicación se servirá en el puerto 3000. Puedes acceder a la aplicación en tu navegador visitando http://localhost:5173.

La aplicación consta de los siguientes componentes:

- App.jsx: Este es el componente principal de la aplicación. Renderiza el encabezado, el formulario y el resultado.
- Formulario.jsx: Este componente renderiza el formulario para que el usuario ingrese su información.
- Resultado.jsx: Este componente renderiza el resultado de la cotización.
- Spinner.jsx: Este componente renderiza un indicador de carga (spinner) mientras se calcula la cotización.
- useCotizador.jsx: Este hook se utiliza para acceder al estado de la aplicación, como la entrada del usuario y el resultado de la cotización.
- CotizadorProvider.jsx: Este componente proporciona el contexto para el hook useCotizador.
- constans/index.js: Este archivo contiene las constantes que se utilizan en la aplicación, como la lista de marcas y planes.
- helpers/index.js: Este archivo contiene las funciones auxiliares que se utilizan en la aplicación, como la función para calcular el precio del seguro.
- index.css: Este archivo contiene los estilos globales para la aplicación.
- tailwind.config.js: Este archivo contiene la configuración para Tailwind CSS.

¡Gracias por usar nuestra aplicación de cotización de seguros de automóvil! Si tienes alguna sugerencia o comentario, no dudes en hacérnoslo saber. ¡Esperamos que encuentres la cotización perfecta para tu automóvil!
