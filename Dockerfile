FROM node:18.6.0-alpine3.16

EXPOSE 8080

WORKDIR /app

COPY . .

CMD ["yarn", "start"]
