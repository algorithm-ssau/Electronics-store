FROM node:14

WORKDIR /app

COPY . .

RUN npm i
RUN npm ci --only=production

CMD ["npm", "run", "start:gcloud"]