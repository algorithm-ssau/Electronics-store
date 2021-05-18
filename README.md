# Electronics-store

Purpose of this project is to create simple electronics store website
using modern technologies and tools.

In order to build this project, it is convenient to have docker installed.

Frontend: React + TypeScript + Redux
Server: Express + Node.js + MongoDB
API: Python

Building for YOUR_TARGET_NAME, where YOUR_TARGET_NAME is one of the following:
   1) localhost
   2) gcloud
   3) mywire 
gcloud means google cloud.

Building for YOUR_TARGET_NAME:
1) cd client
2) docker build -f YOUR_TARGET_NAME.Dockerfile -t client:YOUR_TARGET_NAME .
3) cd ../server
4) docker build -f YOUR_TARGET_NAME.Dockerfile -t server:YOUR_TARGET_NAME .
5) cd ../python-api
6) docker build -f YOUR_TARGET_NAME.Dockerfile -t api:YOUR_TARGET_NAME .
OR:
   1) cd scripts
   2) sh build-for-YOUR_TARGET_NAME.sh
    
Running for YOUR_TARGET_NAME:
1) docker compose -f docker-compose-YOUR_TARGET_NAME.yml up

If you do not have docker installed, you can visit Dockerfile in each folder to see and copy its build instructions.
Pay attention to .env files though.