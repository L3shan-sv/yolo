
FROM node:14 AS build

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm install


COPY . .


FROM alpine:3.16.7

WORKDIR /app

RUN apk update && apk add --update nodejs

COPY --from=build /usr/src/app /app

# Expose the port the app runs on
EXPOSE 5000
 
CMD ["node", "server.js"]
# Backend Dockerfile for YOLO app (Node.js + Express)
