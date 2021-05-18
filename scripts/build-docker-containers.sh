# shellcheck disable=SC2164
cd ../client
docker build -t client:prod .
cd ../server
docker build -t server:prod .
cd ../python-api
docker build -t api:prod .
