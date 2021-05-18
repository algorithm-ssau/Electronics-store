FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

WORKDIR /app
COPY . .
ADD envs/mywire.env .env

RUN pip install -r pip_packages.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]