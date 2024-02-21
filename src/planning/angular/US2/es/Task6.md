# 2.6 Desarrollar `app-movie-list` Angular Component

## Descripción: 

Crear un componente Angular llamado `app-movie-list` para mostrar el catálogo de películas en formato de filas y columnas. El componente debe recibir un array de modelos de negocio _Movie_ como _Input_ y mostrar cada película usando el componente `app-movie-card`.

## Criterios de aceptación:

- [ ] Creación del componente:

    - [ ] Crear un componente llamado `app-movie-list` dentro de la carpeta _src/layout_.

- [ ] _Inputs_:

    - [ ] Definir un _Input_ llamado `movies` de tipo `Movie[]` que represente un array de modelos de negocio _Movie_.

- [ ] Renderización de Tarjetas de Película:

    - [ ] Utilizar el componente `app-movie-card` para renderizar cada película del _Input_ `movies`.

- [ ] Pruebas unitarias:

    - [ ] Escribir pruebas unitarias para el componente `app-movie-list` para asegurar que se renderiza correctamente con varias listas de películas.

    - [ ] Incluir pruebas para diferentes escenarios, como listas de películas vacías o diferentes tipos de información de películas.

## Definición de Hecho:

- [ ] El componente `app-movie-list` se crea dentro de la carpeta _src/layout_.

- [ ] El componente recibe un _Input_ llamado `movies` de tipo `Movie[]`.

- [ ] El componente renderiza cada película utilizando el componente `app-movie-card`.

- [ ] Las pruebas unitarias del componente `app-movie-list` se han superado con éxito, cubriendo varios escenarios.
