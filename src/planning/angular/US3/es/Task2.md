# Desarrollar el componente Angular de paginación

## Descripción:

Crear un componente de Angular llamado `app-pagination` para mostrar un control de paginación. El componente debe recibir el número de página actual y el número total de páginas como _Input_. El componente debe emitir un evento cuando un usuario selecciona una nueva página.

## Criterios de aceptación:

- [ ] Creación del componente:

    - [ ] Crear un componente Angular `app-pagination` dentro de la carpeta _src/layout_.

- [ ] Inputs:

     - [ ] Definir un _Input_ llamado `currentPage` de tipo _number_ para el número de página actual.

     - [ ] Definir un _Input_ llamado `totalPages` de tipo _number_ para el número total de páginas.

- [ ] Output:

     - [ ] Definir un _Output_ llamado `onSelectPage` de tipo _EventEmitter<number>_ para emitir un evento cuando el usuario haga clic en el botón de nueva página.

- [ ] UI de paginación:

     - [ ] Mostrar un conjunto de botones de paginación según el número total de páginas.

     - [ ] Resaltar el botón correspondiente a la página actual.

- [ ] Manejo del evento Click:

     - [ ] Implementar el manejo de eventos de clic para los botones de paginación.

     - [ ] Emitir el evento `onSelectPage` con el número de página en el que se hizo clic.

- [ ] Deshabilitar la navegación para páginas no válidas:

     - [ ] Deshabilitar el botón "Anterior" si la página actual es la primera página.

     - [ ] Deshabilitar el botón "Siguiente" si la página actual es la última página.

- [ ] Pruebas unitarias:

     - [ ] Escribir pruebas unitarias para el componente `app-pagination`, cubriendo escenarios como hacer clic en botones de paginación y validar cambios en la interfaz de usuario basados en diferentes Inputs.

## Definición de Hecho:

- [ ] El componente `app-pagination` se crea dentro de la carpeta _src/layout_.

- [ ] La interfaz de usuario de paginación se muestra con el botón resaltado correctamente según la página actual.

- [ ] Se implementa el manejo de eventos de clic para emitir el evento `onSelectPage` con el número de página en la que se hizo clic.

- [ ] Los botones de navegación están deshabilitados adecuadamente para la primera y la última página.

- [ ] Las pruebas unitarias para el componente `app-pagination` se superan con éxito y cubren varios escenarios.
