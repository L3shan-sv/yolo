# Use Node image for building
FROM node:16

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build React app
RUN npm run build

# Use Nginx to serve static files
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]