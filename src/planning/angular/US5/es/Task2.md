# 5.2 Crear componente de Angular `app-movie-detail`

## Descripción:

Crear un componente de Angular llamado `app-movie-detail` para mostrar información detallada sobre una sola película. Muestre este componente en la ruta `/movie/:id` e implemente funciones para mostrar un cargador mientras obtiene datos de la API y muestra una notificación en caso de error. Extraiga la identificación de la película de la URL y úsela en el servicio `getMovieDetail`. Proporcione una forma para que el usuario regrese a la página anterior desde el componente `app-movie-detail`.

## Criterios de aceptación:

- [ ] Creación de componentes:

    - [ ] Crear un componente Angular `app-movie-detail` dentro de la carpeta _src/layout_.

- [ ] Información en pantalla:

     - [ ] Mostrar información relevante sobre la película, que incluye, entre otros: póster, título original, sinopsis, calificación y año de lanzamiento.

- [ ] Integración de servicios:

     - [ ] Utilizar el servicio `getMovieDetail` para obtener información detallada sobre la película según su identificación.

     - [ ] Extraer la identificación de la película de la URL (parámetro de ruta).

- [ ] Pantalla del cargador:

     - [ ] Mostrar un cargador (por ejemplo, un control giratorio) mientras se obtienen datos de la API.

- [ ] Manejo de errores:

     - [ ] Implementar manejo de errores para mostrar una notificación en caso de un error durante la obtención de datos.

- [ ] Navegación Atrás:

     - [ ] Proporcionar una forma clara e intuitiva para que el usuario regrese a la página anterior 

- [ ] Configuración de ruta:

     - [ ] Configurar la ruta para el componente `app-movie-detail` para que sea `/movie/:id`, donde `:id` es el id de la película.

- [ ] Pruebas unitarias:

     - [ ] Escribir pruebas unitarias para el componente `app-movie-detail` para garantizar la integración correcta con `MovieDetailCard`, la obtención de datos adecuada y el manejo de errores.

## Definición de Hecho:

- [ ] El componente `app-pagination` se crea dentro de la carpeta _src/layout_.

- [ ] El servicio `getMovieDetail` se utiliza para obtener información detallada sobre la película en función de su identificación.

- [ ] La identificación de la película se extrae de la URL (parámetro de ruta) y se utiliza en la llamada de servicio.

- [ ] Se muestra un cargador mientras se obtienen datos de la API.

- [ ] Se implementa el manejo de errores para mostrar una notificación en caso de un error durante la obtención de datos.

- [ ] La ruta para el componente `app-movie-detail` está configurada como `/movie/:id`.

- [ ] Las pruebas unitarias para el componente `app-movie-detail` pasan con éxito y cubren varios escenarios.
