# Django Boilerplate

I'm learning Django and interested to integrate the [Inertia.js](https://inertiajs.com/) because i want to use [Vue.js](https://vuejs.org) as a view layer.

## How to run

1. Create python environment

```bash
  python -m venv .venv
```

2. Activate the environment

- Mac / Linux

```bash
  source .venv/bin/activate
```

- Windows

```bash
  env\Scripts\activate.bat
```

3. Install the required modules

```bash
  pip install -r requirements.txt
```

4. copy .env.example and adjust it

```bash
  cp .env.example .env
```

5. Install node dependencies and build

```bash
  npm install
  npm run build

  # If you want to start developing
  npm run dev
```

6. Start the server

```bash
python manage.py runserver
```
