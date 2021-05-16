#FROM node:14
#
#WORKDIR /server
#
#COPY . .
#
#EXPOSE 5000
#
#RUN npm install
#RUN npm run dev

FROM ubuntu

RUN apt-get update

CMD ["echo", "hello world"]