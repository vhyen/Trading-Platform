### Set up

1. Create virtual environment && run venv

```
python3 -m venv venv
source venv/bin/activate
```

2. Install packages in requirements

```
pip install -r requirements.txt
```

3. Turn on containers

```
docker compose up
```

4. Run celery worker and celery beat

```
celery -A backend worker -l INFO
celery -A backend beat
```

5. App setup

To run dersire {app_name}, need to write to its local environment and run server with corresponding {port_number}.

```
export APP_ENV={app_name}
python manage.py runserver {port_number}
```

