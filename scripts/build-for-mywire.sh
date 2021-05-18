# shellcheck disable=SC2164
cd ../client
docker build -f mywire.Dockerfile -t client:mywire .
cd ../server
docker build -f mywire.Dockerfile -t server:mywire .
cd ../python-api
docker build -f mywire.Dockerfile -t api:mywire .
