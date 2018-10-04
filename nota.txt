1.- crear proyecto
$ docker-compose run web django-admin.py startproject comuniTree .

2.- configurar base de datos con las credenciales que corresponden
  -> ENGINE: django.db.backends.postgresql
  -> NAME: postgres
  -> USER: postgres
  -> HOST: db
  -> PORT: 5432

3.- correr servicio web
$ docker-compose up -d

4.- migraciones
$ docker run web python manage.py migrate

5.- acceder a localhost:8080/admin
