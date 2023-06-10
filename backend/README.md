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

v
lịch sử: 1 order/s
demo với test: 5 orders/s

+- 0.01%

coin 1 debut price = 10\$ vs supply 100 market cap 1000\$ order sell

person 1 mua 50 coin 10\$ = > 500\$ ai giu

person 1 ban 40 coin gia 8\$
person 2 mua 100 coin gia 8\$
