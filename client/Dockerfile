# Step 1: Build the app
FROM node:18-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .


ENV NODE_OPTIONS=--openssl-legacy-provider

RUN npm run build

# Step 2: Serve the built app with nginx
FROM nginx:alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# changing base image