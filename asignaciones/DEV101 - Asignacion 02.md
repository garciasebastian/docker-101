# Asignación Semana 2
__Docker 101__

## Objetivos

* Validar la creación, construcción y publicación de una imagen de Docker
* Validar la creación y uso de un repositorio de DockerHub

## Instrucciones

#### 1. Descargar la carpeta asignaciones/semana-02 del repositorio git del curso
Esta carpeta contiene una carpeta con los archivos de un website de ejemplo, un archivo de configuración de nginx y un Dockerfile vacio.

#### 2. Completar el archivo Dockerfile
El objetivo de este archivo es crear una imagen que contenga el web server nginx configurado para mostrar el website provisto.

El archivo debe realizar las siguientes tareas:

1. Partir de la imagen de ubuntu:18.04.
2. Instalar el paquete nginx (utiliando `apt-get`).
3. Copiar los archivos de carpeta de website dentro del contenedor en la ruta `/var/www/website`.
4. Copiar el archivo website.conf en la carpeta `/etc/nginx/sites-enabled` del contenedor.
5. Configurar el contenedor para que ejecute nginx al levantar.

#### 3. Compilar la imagen y probar el contenedor localmente
Luego de compilar el contenedor debe ejecutarlo localmente direccionando el puerto 8080 del host e invocar [http://localhost:8080](http://localhost:8080), debe poder visualizar el sitio web de ejemplo.

#### 4. Crear un repositorio en dockerhub
Esto debe realizarlo con el usuario creado durante la asignación 1.

#### 5. Publicar la imágen en el repositorio creado
La imágen debe quedar publicada con el tag `latest` y el nombre que usted escoja.

#### 6. Enviar por correo el link del repositorio creado al instructor y el archivo Dockerfile
El correo del instructor es [segarcia@gbm.net](mailto:segarcia@gbm.net)

