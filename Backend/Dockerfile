FROM node:carbon-alpine

WORKDIR /app_backend

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3001

CMD ["node", "./index.js"]

