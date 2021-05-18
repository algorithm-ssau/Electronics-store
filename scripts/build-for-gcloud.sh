# shellcheck disable=SC2164
cd ../client
docker build -f gcloud.Dockerfile -t client:gcloud .
cd ../server
docker build -f gcloud.Dockerfile -t server:gcloud .
cd ../python-api
docker build -f gcloud.Dockerfile -t api:gcloud .
