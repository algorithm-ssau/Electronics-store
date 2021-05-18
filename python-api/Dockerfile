FROM tiangolo/uvicorn-gunicorn-fastapi:python3.7

WORKDIR /app
COPY . .

RUN pip install -r pip_packages.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]