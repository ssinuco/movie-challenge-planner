# Implementar cargador de configuración para archivo .env

## Descripción:

Desarrollar un cargador de configuración que lea el archivo .env y haga que el token de API esté disponible dentro de la aplicación.

Esta tarea garantiza que la aplicación esté equipada con un cargador de configuración robusto, que permita un acceso fluido al token de API especificado en el archivo .env en toda la base de código. Los mecanismos de gestión de errores también contribuyen a la fiabilidad del proceso de carga de la configuración.

## Criterios de aceptación:

- [ ] Cargador de configuración:

    - [ ] Implementar una función/módulo cargador de configuración que lea el fichero .env y cargue sus pares clave-valor en la aplicación.

    - [ ] Usar una librería como dotenv para manejar la carga de variables de entorno.

- [ ] Disponibilidad de token de API:

    - [ ] Asegúrese de que el token de API especificado por la clave TOKEN_API en el archivo .env se carga correctamente y está disponible para su uso dentro de la aplicación.

- [ ] Integración con la aplicación:

    - [ ] Integrar el cargador de configuración en el proceso de inicialización de la aplicación.

    - [ ] Confirmar que el token de API es accesible en las partes de la aplicación donde es necesario, como los servicios encargados de realizar peticiones a la API.

- [ ] Tratamiento de errores:

    - [ ] Implemente una gestión de errores adecuada para los casos en los que falte el archivo .env o esté mal formado.

    - [ ] Asegúrese de que la aplicación falla con gracia y proporciona mensajes de error significativos en tales escenarios.

## Definición de Hecho:

- [ ] Se implementa una función/módulo cargador de configuración.

- El cargador lee con éxito el archivo .env y carga sus pares clave-valor.

- [ ] El token API especificado por la clave TOKEN_API está disponible para su uso dentro de la aplicación.

- El cargador de configuración está perfectamente integrado en el proceso de inicialización de la aplicación.

- [ ] La aplicación maneja los errores relacionados con la ausencia o malformación del archivo .env con gracia, proporcionando mensajes de error significativos.
