# Crear componente de reacción `MovieDetail`

## Descripción:

Cree un componente de React llamado `MovieDetail` para mostrar información detallada sobre una sola película. Muestre este componente en la ruta `/movie/:id` e implemente funciones para mostrar un cargador mientras obtiene datos de la API y muestra una notificación en caso de error. Extraiga la identificación de la película de la URL y úsela en el servicio `getMovieDetail`. Proporcione una forma para que el usuario regrese al componente "Inicio" desde el componente "MovieDetail".

Esta tarea garantiza la creación de un componente `MovieDetail` que proporciona una vista detallada de una sola película en función de su identificación, manejando los estados de carga y error con elegancia.

## Criterios de aceptación:

- [ ] Creación de componentes:

     - [] Cree un archivo llamado `MovieDetail.tsx` dentro de la carpeta `components`.

- [ ] Información en pantalla:

     - [] Muestra información relevante sobre la película, que incluye, entre otros: póster, título original, sinopsis, calificación y año de lanzamiento.

- [ ] Integración de servicios:

     - [] Utilice el servicio `getMovieDetail` para obtener información detallada sobre la película según su identificación.

     - [] Extraiga la identificación de la película de la URL (parámetro de ruta).

- [ ] Pantalla del cargador:

     - [] Mostrar un cargador (por ejemplo, un control giratorio) mientras se obtienen datos de la API.

- [ ] Manejo de errores:

     - [] Implementar manejo de errores para mostrar una notificación en caso de un error durante la obtención de datos.

- [ ] Navegación Atrás:

     - [] Proporciona una forma clara e intuitiva para que el usuario regrese al componente Inicio.

- [ ] Configuración de ruta:

     - [] Configure la ruta para el componente `MovieDetail` para que sea `/movie/:id`, donde `:id` es el id de la película.

- [ ] Examen de la unidad:

     - [] Escribir pruebas unitarias para el componente `MovieDetail` para garantizar la integración correcta con `MovieDetailCard`, la obtención de datos adecuada y el manejo de errores.

## Definición de Hecho:

- [ ] El archivo `MovieDetail.tsx` se crea dentro de la carpeta de componentes o páginas.

- [] El servicio `getMovieDetail` se utiliza para obtener información detallada sobre la película en función de su identificación.

- [] La identificación de la película se extrae de la URL (parámetro de ruta) y se utiliza en la llamada de servicio.

- [] Se muestra un cargador mientras se obtienen datos de la API.

- [] Se implementa el manejo de errores para mostrar una notificación en caso de un error durante la obtención de datos.

- [ ] La ruta para el componente `MovieDetail` está configurada como `/movie/:id`.

- [ ] Las pruebas unitarias para el componente `MovieDetail` pasan con éxito y cubren varios escenarios.