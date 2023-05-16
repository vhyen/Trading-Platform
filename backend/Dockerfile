FROM python:3

ENV PYTHONUNBUFFERED=1
ENV DJANGO_ENV=dev
ENV DOCKER_CONTAINER=1

RUN mkdir /app
WORKDIR /app
EXPOSE 8000

ADD requirements.txt .
#COPY ./requirements.txt ./requirements.txt
RUN pip install -U pip && pip install -r requirements.txt

RUN python manage.py collectstatic --noinput
# CMD gunicorn myproject.wsgi:application -b 0.0.0.0:8000