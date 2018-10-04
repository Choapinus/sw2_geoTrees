FROM python:3

ENV PYTHONBUFFERED 1

RUN mkdir /code

WORKDIR /code

ADD requeriments.txt /code/

RUN pip install -r requeriments.txt

ADD . /code/
