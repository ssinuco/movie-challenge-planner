# Desarrollar el componente React de paginación

## Descripción:

Cree un componente de React llamado Paginación para mostrar un control de interfaz de usuario de paginación. El componente debe recibir los siguientes accesorios:

- [ ] `onSelectPage`:

     - [ ] Tipo: Función

     - [] Descripción: una función de devolución de llamada que se llamará con el número de página en la que se hizo clic cuando un usuario selecciona una nueva página.

- [ ] `Página actual`:

     - [ ] Teclea un número

     - [] Descripción: El número de página actual.

- [ ] `total de páginas`:

     - [ ] Teclea un número

     - [ ] Descripción: El número total de páginas.

Esta tarea garantiza la creación de un componente de paginación reutilizable que se puede integrar fácilmente en la aplicación para proporcionar una interfaz de usuario de paginación fácil de usar. El comportamiento del componente está diseñado para manejar eventos de clic y deshabilitar la navegación en páginas no válidas.

## Criterios de aceptación:

- [ ] Creación de componentes:

     - [] Cree un archivo llamado Pagination.tsx dentro de la carpeta de componentes.

     - [] Desarrollar el componente Paginación utilizando la sintaxis del componente funcional.

- [ ] Validación de accesorios:

     - [] Valide los accesorios entrantes para asegurarse de que tengan los tipos correctos (`onSelectPage` es una función, `currentPage` y `totalPages` son números).

- [] UI de paginación:

     - [] Muestra un conjunto de botones de paginación según el número total de páginas.

     - [ ] Resalte el botón correspondiente a la página actual.

- [ ] Haga clic en Manejo de eventos:

     - [] Implementar el manejo de eventos de clic para los botones de paginación.

     - [] Llame a la devolución de llamada `onSelectPage` con el número de página en el que se hizo clic.

- [] Deshabilitar la navegación para páginas no válidas:

     - [] Desactive el botón "Anterior" si la página actual es la primera página.

     - [] Deshabilite el botón "Siguiente" si la página actual es la última página.

- [ ] Examen de la unidad:

     - [] Escribir pruebas unitarias para el componente Paginación, cubriendo escenarios como hacer clic en botones de paginación y validar cambios en la interfaz de usuario basados en diferentes accesorios.

## Definición de Hecho:

- [] El archivo Pagination.tsx se crea dentro de la carpeta de componentes.

- [] El componente Paginación se desarrolla utilizando la sintaxis del componente funcional.

- [] Los accesorios entrantes se validan para garantizar los tipos correctos.

- [] La interfaz de usuario de paginación se muestra con el botón resaltado correctamente según la página actual.

- [] Se implementa el manejo de eventos de clic para llamar a la devolución de llamada `onSelectPage` con el número de página en la que se hizo clic.

- [] Los botones de navegación están deshabilitados adecuadamente para la primera y la última página.

- [ ] Las pruebas unitarias para el componente Paginación se superan con éxito y cubren varios escenarios.