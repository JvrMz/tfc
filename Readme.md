### Proyecto

Aplicación para la gestión de las reservas e inscripciones de un gimnasio de boxeo.

### Backend

## Ejecución del servidor:

*Instalar*

1. Se instalan las dependencias ejecutando npm i
2. Las variables de entorno se encuentran en el archivo .env.example
3. Iniciar la Base de datos mediante 'npm run database'
4. Lanzar el servidor mediante 'npm run start'

*ENDPOINTS*

- Users

    - POST /users/ ,  Para el registro de nuevos usuarios.
    - POST /users/reset ,  Para establecer una contraseña de nuevo usuario y activar la cuenta.
    - POST /users/login ,  Para el login de los usuarios registrados.


- Clases

    - GET / ,     Muestra las clases existentes.
    - GET /:id_clase ,     Muestra la clase correspondiente al id indicado.
    - GET /mes/:mes/semana/:semana ,     Muestra las clases correspondientes al mes y semana indicados.
    - POST /clases ,   Endopoint para añadir una nueva clase. 
    - PUT /clase/:incidentById  ,     Permitirá modificar el aforo de la clase.
