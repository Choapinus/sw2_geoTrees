FROM python:3

ENV PYTHONBUFFERED 1

RUN mkdir /code

WORKDIR /code

COPY requeriments.txt /code/

RUN pip install -r requeriments.txt

COPY . /code/

EXPOSE 8080

CMD python manage.py runserver 0:$PORT
