# Mejora de la función `getMovies` para soporte de filtrado y clasificación

## Descripción:

Mejore la función de servicio `getMovies` para admitir el filtrado y la clasificación al recibir un objeto como parámetro. La nueva estructura de parámetros debería ser `{ filtros: { página: número, género: número | nulo, liberaciónOrdenar: 'asc' | 'desc' | nulo } }`.

Esta mejora permite obtener datos más precisos de la API al permitir a los usuarios especificar números de página, filtros de género y órdenes de clasificación.

## Criterios de aceptación:

- [ ] Firma de función:

     - [] Mejorar la función `getMovies` existente para aceptar un parámetro de objeto.

- [ ] Estructura de parámetros:

     - [] El parámetro debe tener una propiedad llamada filtros que es un objeto con las siguientes propiedades:

         - [ ] `página`: Una propiedad de tipo número que representa el número de página.

         - [] `género`: una propiedad de tipo número o `null` que representa el filtro de género. Si es "nulo", no se aplica ningún filtrado de género.

         - [] `releaseSort`: una propiedad de tipo cadena `asc`, `desc` o `null` que representa el orden de clasificación. Si es "nulo", no se aplica ninguna clasificación.

- [] Modificación de solicitud de API:

     - [] Ajuste la solicitud de API dentro de la función `getMovies` para incluir filtrado y clasificación según los parámetros proporcionados.

- [ ] Valores predeterminados:

     - [] Implementar valores predeterminados para `género` y `releaseSort` en caso de que no se proporcionen. Por ejemplo, establezca valores predeterminados de "nulo" para ambos.

- [ ] Examen de la unidad:

     - [] Escriba pruebas unitarias para la función `getMovies` modificada para garantizar que maneja correctamente los escenarios de filtrado y clasificación.

     - [] Incluya casos de prueba para proporcionar diferentes números de página, filtros de género y órdenes de clasificación.

## Definición de Hecho:

- [] La función `getMovies` está mejorada para aceptar un parámetro de objeto con la estructura `{ filtros: { página: número, género: número | nulo, liberaciónOrdenar: 'asc' | 'desc' | nulo } }`.

- [] La solicitud de API dentro de la función se ajusta para incluir filtrado y clasificación según los parámetros proporcionados.

- [] Se implementan los valores predeterminados para `género` y `releaseSort`.

- [] Las pruebas unitarias para la función `getMovies` modificada se pasan con éxito y cubren varios escenarios de filtrado y clasificación.
