# Desarrollar `MovieList` React Component

## Descripción: 

Crear un componente React llamado `MovieList` para mostrar el catálogo de películas en formato de tabla. El componente debe recibir un array de modelos de negocio de películas como prop y mostrar cada película usando el componente `MovieCard`. Asegúrese de que la etiqueta _"Warning: Each child in a list should have a unique "key" prop"_ error sea evitado.

Esta tarea garantiza la creación de un componente reutilizable `MovieList` que muestra el catálogo de películas en formato de tabla, utilizando el componente `MovieCard` para cada película. La implementación también aborda el requisito de clave única para evitar las advertencias de React.

## Criterios de aceptación:

- [ ] Creación del componente:

    - [ ] Crear un archivo llamado `MovieList.tsx` dentro de la carpeta components.

- [ ] Props:

    - [ ] Definir una prop llamada movies de tipo `Movie[]` que represente un array de modelos de negocio de películas.

- [ ] Renderización de Tarjetas de Película:

    - [ ] Utilizar el componente `MovieCard` para renderizar cada película de la prop movies.

    - [ ] Pasar los datos relevantes de la película como props a cada instancia de `MovieCard`.

- [ ] Clave única:

    - [ ] Implemente una clave única para cada componente `MovieCard` para evitar el error _"Warning: Cada hijo de una lista debe tener una "clave" única"_ error.

    - [ ] Asegúrese de que la clave se deriva de propiedades únicas de cada película.

- [ ] Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para el componente `MovieList` para asegurar que se renderiza correctamente con varias listas de películas.

    - [ ] Incluir pruebas para diferentes escenarios, como listas de películas vacías o diferentes tipos de información de películas.

## Definición de Hecho:

- [ ] El archivo `MovieList.tsx` se crea dentro de la carpeta components.

- [ ] El componente recibe un prop llamado movies de tipo `Movie[]`.

- El componente renderiza cada película utilizando el componente `MovieCard`.

- [ ] Cada instancia de `MovieCard` tiene una clave única para evitar la advertencia _"Warning: Each child in a list should have a unique "key" prop"_ error.

- [ ] Las pruebas unitarias del componente `MovieList` se han superado con éxito, cubriendo varios escenarios.