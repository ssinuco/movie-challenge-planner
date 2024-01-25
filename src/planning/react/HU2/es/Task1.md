# Crear una integración API Token para The Movie DB

## Descripción

Crear un token API para [_The Movie Database_](https://developer.themoviedb.org/docs), y almacenarlo como un valor para la clave TOKEN_API en un archivo src/.env.

Esta tarea garantiza una gestión segura y organizada del token API, evitando su exposición accidental en Github y haciendo que sea fácilmente accesible dentro de la aplicación para las peticiones API a The Movie DB.

## Criterios de aceptación:

- [ ] Cuenta en The Movie DB:

    - [ ] Crear una cuenta en la plataforma The Movie DB para obtener acceso a la API.

- [ ] API Token Retrieval:

    - [ ] Acceder al portal para desarrolladores de The Movie DB y generar una clave/token de API.

    - [ ] Compruebe que la clave/token de API proporciona acceso a los puntos finales necesarios, como /discover/movie.

- [ ] Variable de entorno:

    - [ ] Cree un archivo .env en la raíz del proyecto.

    - [ ] Añada un par clave-valor `TOKEN_API=<Su-API-Token>` en el archivo .env, sustituyendo `<Su-API-Token>` por el token de API real obtenido.

- [ ] Manipulación segura:

    - [ ] Asegúrese de que el archivo .env se añade al archivo .gitignore del proyecto para evitar la exposición accidental de información sensible.

## Definición de Hecho:

- [ ] Se crea una cuenta en la plataforma The Movie DB.

- [ ] Se genera y verifica una clave/token API para acceder a la API de The Movie DB.

- [ ] Se crea el archivo .env en la raíz del proyecto con la clave TOKEN_API y el token real de la API.

- [ ] El archivo .env se añade al archivo .gitignore del proyecto.