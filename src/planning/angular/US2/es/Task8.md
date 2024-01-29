# Desarrollar pruebas de integración para el componente `app-home`

## Descripción 

Escribir pruebas de integración para asegurar que el componente `app-home` muestra los datos correctamente usando respuestas de API simuladas. Las pruebas deben cubrir escenarios como la visualización correcta de películas basadas en datos simulados y el manejo adecuado de errores de la API.

## Criterios de aceptación

- [ ] Respuestas de API simuladas:

    - [ ] Simular las respuestas de la API para el método `getMovies` del servicio `APIService`utilizado en el componente `app-home`.

- [ ] Visualización correcta de los datos:

    - [ ] Escribe una prueba para asegurar que el componente `app-home` muestra correctamente las películas basadas en datos simulados.

    - [ ] Utiliza datos simulados que representen varios escenarios, como diferentes películas con diversas propiedades.

- [ ] Visualización del cargador:

    - [ ] Compruebe que se muestra un cargador (por ejemplo, un spinner) cuando se obtienen los datos.

- [ ] Tratamiento de errores:

    - [ ] Escriba una prueba para simular un error de la API durante la obtención de datos.

    - [ ] Asegúrese de que el componente `app-home` gestiona adecuadamente el error mostrando un mensaje de error o una notificación.

- [ ] Limpieza y aislamiento:

    - [ ] Asegúrese de que cada caso de prueba tiene una limpieza y aislamiento adecuados para evitar interferencias entre las pruebas.

    - [ ] Utilice utilidades de prueba para restablecer el estado entre pruebas.

## Definición de Hecho

- [ ] Las pruebas de integración para el componente `app-home` son desarrolladas usando una librería de pruebas.

- [ ] Se utilizan respuestas de API simuladas para simular varios escenarios, incluyendo la visualización correcta de datos y errores de API.

- [ ] Las pruebas se superan con éxito, validando que el componente `app-home` muestra los datos correctamente y gestiona los errores de la API adecuadamente.

- [ ] Existen mecanismos de limpieza y aislamiento para mantener la fiabilidad de las pruebas.
