FROM node:carbon-alpine

WORKDIR /app_frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["node", "./_app.js"]
