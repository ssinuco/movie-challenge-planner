# Mejora la función `getMovies` para la paginación

## Descripción:

Mejorar la función de servicio `getMovies` para soportar la paginación mediante la recepción de un objeto como parámetro con la estructura `{ filters: { page: number } }`.  Esto permite obtener datos de la API con parámetros de paginación.

Ahora, la función debe devolver una Promise que resuelva un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`. Esto es necesario para incluir en la salida no sólo el array de películas sino también el número total de páginas.

Esta tarea garantiza la mejora de la función `getMovies` para que admita la paginación, lo que permite una obtención de datos más flexible de la API con la posibilidad de especificar números de página. También se implementa el comportamiento de paginación por defecto para facilitar su uso.

## Criterios de aceptación:

- [ ] Estructura de parámetros:

    - [ ] Modificar la función `Home` para que acepte un parámetro objeto.

    - [ ] El parámetro debe tener una propiedad llamada filters que es un objeto con una propiedad llamada page de tipo number.

- [ ] Modificación de la petición API:

    - [ ] Ajustar la petición API dentro de la función `getMovies` para incluir el parámetro page basado en los filtros proporcionados.

- [ ] Paginación por defecto:
    
    - [ ] Implemente un valor predeterminado para el parámetro de página en caso de que no se proporcione. Por ejemplo, establezca un valor por defecto de 1.

- [ ] Modificación de la estructura de retorno:

    - [ ] Modificar el retorno de la función `getMovies` a una Promise que resuelva un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Pruebas unitarias:
    
    - [ ] Escribir pruebas unitarias para la función modificada `getMovies` para asegurar que maneja la paginación correctamente.
    
    - [ ] Incluir casos de prueba para proporcionar diferentes números de página y probar el comportamiento de paginación por defecto.

## Definición de Hecho:

- [ ] Se modifica la función `getMovies` para que acepte un parámetro objeto con la estructura `{ filters: { page: number } }`.

- [ ] La petición API dentro de la función se ajusta para incluir el parámetro de paginación basado en los filtros proporcionados.

- [ ] Se implementa un valor por defecto para el parámetro page.

- [ ] El retorno de la función `getMovies` se modifica a una Promise que resuelve un objeto con la estructura `{metaData: { pagination:{currentPage:number, totalPages:number}}, movies: Movie[]}`.

- [ ] Las pruebas unitarias de la función `getMovies` modificada se superan con éxito, cubriendo varios escenarios de paginación.
