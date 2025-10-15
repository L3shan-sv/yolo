YOLO App Containerization Explanation

This file explains how I containerized the YOLO ecommerce app and why I made certain choices. It covers base images, Dockerfiles, networking, volumes, Git workflow, and how I handled running and debugging the app.

1. Base Images

Backend: node:16-alpine

Frontend: node:16-alpine

Database: mongo:6.0

Why these?
Alpine Node.js images are small and fast, which makes builds quicker. Using the official Mongo image keeps things stable and predictable. Basically, I wanted lightweight, official, and easy to use images for all services.

2. Dockerfiles

For frontend and backend, I used a similar structure:

FROM → pick the base image

WORKDIR /app → sets the working folder inside the container

COPY package*.json ./ → copy dependency files first

RUN npm install → install dependencies

COPY . . → copy the rest of the code

EXPOSE <port> → note which port the app listens on

CMD ["npm", "start"] → start the app

Why this way?
Copying dependencies first and installing them separately makes rebuilding faster. Only rebuilds the code if dependencies haven’t changed, which is convenient.

3. Networking with Docker Compose

Docker Compose creates a bridge network automatically.

Services talk to each other over this network.

Ports mapped to host:

Frontend: 3000:80

Backend: 5000:5000

Mongo: 27017:27017

Why?
It keeps things secure inside the network and only exposes what’s needed to the host. Frontend talks to backend, backend talks to Mongo, all inside the network.

4. Volumes

MongoDB uses a volume:

volumes:
  mongo-data:
    driver: local


Mounted at /data/configdb

Why?
This keeps the data even if the container gets removed. So all the products you add stay there and don’t vanish when you rebuild the containers.

5. Git Workflow

Forked the repo and cloned locally.

Made changes in small commits with descriptive messages.

Used feature branches for big changes, merged into main after testing.

Why?
Keeps history clean and easy to follow. Makes collaboration and debugging simpler.

6. Running & Debugging

Start everything with:

vagrant up --provision


If containers fail (like duplicate names), I remove the old ones:

docker rm -f <container_id>


Checked logs with:

docker logs <container_name>


Verified connectivity with curl or by opening the app in the browser.

Why?
Doing it step by step ensures nothing breaks silently and helps identify what went wrong fast.

7. Good Practices

Image tags:

Backend: brianbwire/brian-yolo-backend:v1.0.0

Frontend: brianbwire/brian-yolo-client:v1.0.0

Makes it easy to know which version you’re running, roll back if needed, and keep DockerHub organized.

8. DockerHub Screenshot

Screenshot well provided in the screenshot directory