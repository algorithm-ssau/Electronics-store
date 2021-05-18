# shellcheck disable=SC2164
cd ../client
docker build -f localhost.Dockerfile -t client:localhost .
cd ../server
docker build -f localhost.Dockerfile -t server:localhost .
cd ../python-api
docker build -f localhost.Dockerfile -t api:localhost .
