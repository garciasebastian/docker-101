# Asignación Módulo 1
__Docker 101__

## Objetivos

* Validar la instalación y uso básico de Git
* Validar la instalación de Docker

## Instrucciones

#### 1. Crear un usuario en [Docker Hub](http://www.dockerhub.com)
Si ya posee un usuario puede utilizar ese, el usuario va a ser necesario posteriormente al iniciar docker.

La cuenta puede crearse en el siguiente [enlace](http://www.dockerhub.com).

#### 2. Instalar Docker Community Edition

Se recomienda instalar la versión __stable__ y no la __edge__. Los instaladores se pueden encontrar en el sitio de [Docker](https://www.docker.com/get-started) y en [DockerHub](http://www.dockerhub.com).

Una vez instalado ejecute el comando `docker version` para validar que el procedimiento fue exitoso.

##### MacOS
Instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-desktop-mac). 

##### Windows
Instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-desktop-windows).

##### Linux
__Fedora:__ instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-server-fedora).
__CentOS:__ instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-server-centos).
__Ubuntu:__ instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-server-ubuntu).
__Debian:__ instrucciones en el siguiente [enlace](https://hub.docker.com/editions/community/docker-ce-server-debian).

#### 3. Abrir una cuenta en [GitHub](http://www.github.com)

Si ya posee un usuario de Github puede utilizarlo, esto será necesario para descargar el material del curso y entregar las asignaciones.

La cuenta puede crearse en el siguiente [enlace](http://www.github.com)

#### 4. Instalar Git

Las instrucciones para la instalación de Git se encuentran en el siguiente [enlace](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Una vez instalado ejecute el comando `git version` para validar que el procedimiento fue exitoso.

#### 5. Crear un nuevo repositorio en GitHub

Puede consultar las instrucciones para crear un nuevo repositorio de GitHub en el siguiente [enlace](https://github.com/new)

Tome en cuenta las siguientes consideraciones:

* El repositorio debe ser público
* Inicialice el repositorio con un archivo README

#### 6. Clonar el repositorio localmente

Las instrucciones de uso del comando `git clone` se encuentran en el siguiente [enlace](https://git-scm.com/docs/git-clone).

Se recomienda crear una carpeta local para contener a todos los repositorios.

#### 7. Crear una carpeta local llamada semana-01

Esta carpeta debe crearse dentro del repositorio configurado en el paso anterior.

#### 8. Iniciar el contenedor de evaluación

Sitúese en la carpeta `semana-01` y ejecute el siguiente comando:

`docker run -it  -v ${PWD}:/home sgarciac/d101-sem01`

El mismo debe crear tres archivos en la carpeta llamados:

* datos.txt
* datos.txt.sig
* pubring.gpg

Debera introducir su nombre completo y su email al ejecutar el comando.

#### 9. Sincronizar el repositorio local con el remoto

Las instrucciones de uso de los comandos `git add`, `git commit` y `git push`, se encuentran en el siguiente [enlace](https://git-scm.com/docs).

#### 10. Enviar por correo el url del repositorio y el SHA del commit

El correo debe ser dirigido a segarcia@gbm.net y debe contener la siguiente información:

* Nombre del estudiante
* Url del repositorio (ej. [https://github.com/garciasebastian/docker-101](https://github.com/garciasebastian/docker-101)
* SHA del commit con la versión del repositorio a entregar como asignación final (ej. f550fc13e3883518ed3477f367145a6c5ed18987)
