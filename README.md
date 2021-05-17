# Electronics-store

Purpose of this project is to create simple electronics store website
using modern technologies and tools.


Frontend: React + TypeScript + Redux

building:
1) download and install docker
2) cd client
3) docker build -t client:prod .

running:
1) docker run -it -p 3000:3000 client:prod

Server: Express + Node.js + MongoDB

building:
1) download and install docker
2) cd server
3) docker build -t server:prod .

running:
1) docker run -it -p 5000:5000 server:prod

API: Python

building:
1) download and install docker
2) cd python-api
3) docker build -t api:prod .

running:
1) docker run -it -p 80:8000 api:prod

OR if you do not have docker installed, you can visit Dockerfile in each folder to see and copy its build instructions