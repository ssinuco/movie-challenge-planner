# Desarrollar componente Angular `app-home` con integración `app-movie-list`

## Descripción

Crear un componente Angular llamado `app-home` para integrar el componente `app-movie-list` con el método `getMovies` del servicio `APIService`. Mostrar este componente en la ruta "/". Mostrar un cargador mientras se obtienen datos de la API y una notificación en caso de error.

## Criterios de aceptación:

- [ ] Creación del componente:

    - [ ] Crear un componente `app-home` dentro de la carpeta _src/layout_.

- [ ] Integración con `app-movie-list`:

    - [ ] Integre el componente `app-movie-list` dentro del componente `app-home`.

    - [ ] Utilizar el método `getMovies` del servicio `APIService` para obtener los datos de las películas a mostrar.

- [ ] Visualización del cargador:

    - [ ] Mostrar un cargador (por ejemplo, un spinner o un mensaje de carga) mientras se obtienen datos de la API.

    - [ ] Asegúrese de que el cargador se muestra al usuario durante el proceso de obtención de datos.

- [ ] Notificación de errores:

    - [ ] Implemente un mecanismo para mostrar una notificación en caso de error durante la obtención de datos de la API.

    - [ ] La notificación debe transmitir un mensaje de error claro al usuario.

- [ ] Enrutamiento:

    - [ ] Asegúrese de que el componente `app-home` se muestra cuando el usuario navega a la ruta "/".

## Definición de Hecho:

- [ ] El componente `app-home` se crea dentro de la carpeta _src/layout_.

- [ ] El componente `app-movie-list` se integra correctamente dentro del componente `app-home`.

- [ ] Se muestra un cargador al usuario mientras se obtienen datos de la API.

- [ ] Se muestra una notificación en caso de error al obtener datos de la API.

- [ ] El componente `app-home` se muestra cuando el usuario navega a la ruta "/".
