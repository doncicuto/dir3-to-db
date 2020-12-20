# DIR3-to-db

## Versión en español

Este repositorio contiene código [Typescript](https://www.typescriptlang.org/) para volcar la información en formato JSON generados por el código del repositorio [dir3-to-json](https://github.com/doncicuto/dir3-to-json) a una base de datos SQL.

Para trabajar con la base de datos usamos:

- [Prisma](https://www.prisma.io) para trabajar con la base de datos.
- [PostgreSQL](https://www.postgresql.org/) como gestor de base de datos.
- [Docker](https://www.docker.com/) para alojar la base de datos PostgreSQL en un contenedor para desarrollo.

Aunque la base de datos elegida es PostgreSQL, debería poder utilizarse cualquier otra base de datos soportada por Prisma pues no se han utilizado tipos de datos o características específicas de PostgreSQL.

Una vez clonado el repositorio, ejecute `yarn` o `npm install` para instalar las dependencias. Si dispone de Docker en su equipo, use `docker-compose up -d` para lanzar el contenedor con la base de datos PostgreSQL. Podrá acceder a la línea de comandos de PostgreSQL ejecutando este comando `docker exec -it "nombre_de_su_contenedor" psql -U test -W -d dir3` y no olvide usar `\q' para salir de la base de datos.

Para desarrollar, Prisma carga sus variables de entorno desde un fichero .env situado en el raíz. El repositorio [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv) ofrece información sobre esta opción y por qué dicho fichero no forma parte de este repositorio ni es utilizado en producción. El fichero .env en desarrollo contiene la siguiente variable:

- `DATABASE_URL="postgresql://test:test@localhost:5432/dir3?schema=public"`

> NOTA: DATABASE_URL especifica la variable que permitirá a Prisma conectarse con su base de datos. El usuario de acceso a la base de datos es test y la contraseña es test, de acuerdo con la definición del contenedor Docker que se encuentra en docker-compose.yaml. Si quiere cambiar el usuario y contraseña de acceso recuerde cambiarlo tanto en el fichero docker-compose.yaml como en la definición de esta variable.

El siguiente artículo de Nikolas Burk publicado en el [blog de Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql-es) puede resultar de utilidad para entender este repositorio, aunque deberá visitar la página de Prisma para consultar información actualizada sobre Prisma.

### Importación de ficheros JSON en la base de datos PostgreSQL

La base de datos se llama dir3 y cuenta con una tabla para cada fichero JSON a importar:

- unitsAGE.json
- unitsCCAA.json
- unitsEELL.json
- unitsInstitutions.json
- unitsJustice.json
- unitsUniversities.json

> NOTA: para más información sobre estos ficheros y cómo se han generado visite el repositorio [dir3-to-json](https://github.com/doncicuto/dir3-to-json).

En el subdirectorio src/utils se deberán ubicar los ficheros JSON a importar.

> NOTA: Si se va a utilizar el contenedor Docker, debe crearse primero con `docker-compose up -d`. Si no dispone de docker-compose visite [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

> IMPORTANTE: Antes de poder realizar la importación, será necesario ejecutar una vez el siguiente comando para que Prisma cree la base de datos, las tablas basándose en los modelos y genere el cliente Prisma: `yarn prisma db push --preview-feature` o `npx prisma db push --preview-feature`

> IMPORTANTE: Asegúrese de crear la variable de entorno DATABASE_URL con el URI de conexión a la base de datos o crear un fichero .env con la definición de dicha variable como se definía más arriba.

Para lanzar la importación ejecute `yarn start` o `npm start`.

La importación llevará varios minutos así que tenga paciencia.

### Esquema Prisma

El esquema de Prisma se mantiene en un repositorio externo [https://github.com/doncicuto/dir3-prisma-scheme](https://github.com/doncicuto/dir3-prisma-scheme) usando un submódulo. Se puede actualizar este submódulo con `git submodule update`.

## Versión en inglés

This repository contains [Typescript] code [https://www.typescriptlang.org/](https://www.typescriptlang.org/) to dump the information in JSON format generated by the [dir3-to-json](https://github.com/doncicuto/dir3-to-json) repository code to an SQL database.

To work with the database we use:

- [Prisma](https://www.prisma.io) to work with the database.
- [PostgreSQL](https://www.postgresql.org/) as a database manager.
- [Docker](https://www.docker.com/) to host the PostgreSQL database in a container for development.

Although the chosen database is PostgreSQL, any other database supported by Prisma should be able to be used as no PostgreSQL-specific data types or features have been used.

Once the repository is cloned, run `yarn` or `npm install` to install the dependencies. If you have Docker on your machine, use `docker-compose up -d` to launch the container with the PostgreSQL database. You can access the PostgreSQL command line by running this command `docker exec -it" name_of_your_container "psql -U test -W -d dir3` and don't forget to use` \ q 'to exit the database.

For development, Prisma loads its environment variables from a root .env file. The repository [https://github.com/motdotla/dotenv-lex.europa.eu](https://github.com/motdotla/dotenv) offers information about this option and why this file is not part of this repository nor is it used in production. The .env file under development contains the following variable:

- `DATABASE_URL="postgresql://test:test@localhost:5432/dir3?schema=public"`

> NOTE: DATABASE_URL specifies the variable that will allow Prisma to connect to your database. The database access user is test and the password is test, according to the definition of the Docker container found in docker-compose.yaml. If you want to change the username and password, remember to change it both in the docker-compose.yaml file and in the definition of this variable.

The following article by Nikolas Burk posted on the [Digital Ocean blog](https://www.digitalocean.com/community/tutorials/how-to-build-a-rest-api-with-prisma-and-postgresql) can be useful to understand this repository, although you should visit the Prisma page for updated information on Prisma.

### Importing JSON files into the PostgreSQL database

The database is called dir3 and has a table for each JSON file to import:

- unitsAGE.json
- unitsCCAA.json
- unitsEELL.json
- unitsInstitutions.json
- unitsJustice.json
- unitsUniversities.json

> NOTE: for more information about these files and how they have been generated visit the [dir3-to-json](https://github.com/doncicuto/dir3-to-json) repository.

The JSON files to import should be located in the src / utils subdirectory.

> NOTE: If the Docker container is to be used, it must first be created with `docker-compose up -d`. If you do not have docker-compose visit [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

> IMPORTANT: Before being able to import, it will be necessary to execute the following command once for Prisma to create the database, the tables based on the models and generate the Prisma client: `yarn prisma db push --preview-feature` or `npx prisma db push --preview-feature`

> IMPORTANT: Make sure to create the environment variable DATABASE_URL with the URI of connection to the database or create a .env file with the definition of said variable as defined above.

To launch the import, run `yarn start` or `npm start`.

The import will take several minutes so be patient.

### Prisma Schema

The Prisma schema is maintained in an external repository [https://github.com/doncicuto/dir3-prisma-scheme](https://github.com/doncicuto/dir3-prisma-scheme) using a submodule. You can update this submodule with `git submodule update`.
