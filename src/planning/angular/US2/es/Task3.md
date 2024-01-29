# Implementar función de transformación de datos de películas

## Descripción

Crear un archivo `transformers.ts` en la carpeta `src/utils`. Crear una función llamada `formatMovie` dentro de ese archivo. Esta función se encargará de la transformación de los datos de película de la API al modelo de negocio _Movie_.

La creación de un archivo dedicado para los transformadores garantiza un enfoque modular y organizado para la transformación de datos dentro del proyecto.

## Criterios de aceptación:

- [ ] Función `formatMovie`:

    - [ ] Crear un archivo llamado `transformers.ts` dentro de la carpeta _utils_.

    - [ ] Implementar una función llamada `formatMovie` dentro del archivo `transformers.ts`.

    - [ ] La función debe tomar un objeto de datos de película de la API como parámetro y devolver un objeto de modelo de negocio _Movie_.

    - [ ] Asignar los campos relevantes de los datos de la API a los campos correspondientes en el modelo de negocio _Movie_.

    - [ ] Manejar cualquier conversión o transformación de datos necesaria para garantizar la coherencia.

- Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para la función `formatMovie` en el archivo `transformers.spec.ts` en la carpeta `src/utils`.

    - [ ] Probar la función con varios tipos de datos de película de la API para garantizar una transformación correcta.

    - [ ] Incluir pruebas para casos extremos y errores potenciales.

## Definición de Hecho:

- [ ] El archivo `transformers.ts` es creado dentro de la carpeta _utils_.

- [ ] La función `formatMovie` está implementada y transforma con éxito los datos de la película API al modelo de negocio _Movie_.

- [ ] Las pruebas unitarias de la función `formatMovie` se han superado con éxito, cubriendo varios escenarios.
