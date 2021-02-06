# Prueba técnica de TATA Consulting

## Descripción

Utilice el recurso people de SWAPI del cual integre 2 endpoints, cada uno de ellos con su respectiva traduccion de atributos:
- Obtiene todos los recursos de personas
GET -  https://1pvzs7g3i4.execute-api.us-east-1.amazonaws.com/dev/api/v1/people
- Obtiene un recurso especifico de persona
GET - https://1pvzs7g3i4.execute-api.us-east-1.amazonaws.com/dev/api/v1/people/1

Adicionalmente creé otro recurso estudiantes, los cuales son almacenados usando Amazon DynamoDB:
El estudiante posee los siguientes atributos: id, fullname, email y submittedAt.

Cree dos endpoints para este recurso:
- Obtiene todos los recursos de estudiantes
GET - https://1pvzs7g3i4.execute-api.us-east-1.amazonaws.com/dev/api/v1/students
- Almacena un nuevo estudiante en base de datos, los datos a enviar deberá contener fullname e email el resto es generado en el back.
POST - https://1pvzs7g3i4.execute-api.us-east-1.amazonaws.com/dev/api/v1/students

## Estructura base del codigo

* **Models:** Este directorio contendrá los archivos que guardan los modelos de esquema/datos que se requieren para el proyecto actual.
* **Routes:** Este directorio contendrá los archivos de ruta, donde Enrutamiento(Routing) se refiere a cómo los endpoints de una aplicación (URI) responden a las solicitudes de los clientes. Básicamente define las rutas de tu aplicación.
* **Controllers:** Este directorio contendrá los archivos del controlador, donde los archivos del controlador se ocupan de la validación de los datos, lo que sea que se haya enviado desde el frontend. El manejo de solicitudes y respuestas se realiza en este directorio.

Adicionalmente se tiene el directorio **Utils** que contiene clases y métodos utilitarios para pre-procesamiento o tratamiento de datos antes de ser enviados al usuario.
