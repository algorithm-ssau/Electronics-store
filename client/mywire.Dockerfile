FROM node:14 as react-build

WORKDIR /app

COPY . .

RUN npm i
RUN npm i -g serve
RUN npm run build:mywire

CMD ["serve", "-n", "-s", "build", "-l", "3000"]