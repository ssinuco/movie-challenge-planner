# Desarrollar `app-movie-card` Angular Component

## Descripción: 

Crear un componente Angular llamado `app-movie-card` para mostrar información sobre una película. El componente debe recibir un modelo de negocio _Movie_ como _Input_, y mostrar información relevante como el cartel de la película, el título original, y el año de lanzamiento.

## Criterios de Aceptación:

- [ ] Creación del componente:

    - [ ] Crear un componente Angular `app-movie-card` dentro de la carpeta _src/layout_.

- [ ] Inputs:

    - [ ] Definir un _Input_ llamado `movie` de tipo `Movie` que represente el modelo de negocio de una película.

- [ ] Mostrar información:

    - [ ] Utilizar la información del _Input_ `movie` para mostrar el cartel de la película, el título original y el año de estreno.

    - [ ] Implementar HTML y/o CSS apropiado para dar estilo a la tarjeta de la película.

- [ ] Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para el componente `app-movie-card` para asegurar que se muestra correctamente con varios datos de la película.

    - [ ] Incluir pruebas para diferentes escenarios, como la falta de datos o diferentes tipos de información de la película.

## Definición de Hecho:

- [ ] El componente `app-movie-card` se crea dentro de la carpeta _src/layout_.

- [ ] El componente recibe un _Input_ llamado `movie` de tipo `Movie`.

- [ ] El componente muestra el póster de la película, el título original y el año de estreno utilizando la información de la prop de la película.

- [ ] Las pruebas unitarias del componente `app-movie-card` se superan con éxito, cubriendo varios escenarios.