Explanation of Dockerization for YOLO E-commerce App
1. Choice of Base Images

For our containers, we chose minimalist base images to keep the final images small and efficient:

Frontend: node:18-alpine for building the React app and nginx:alpine to serve the production build. Alpine images are lightweight and have minimal packages installed by default.

Backend: node:18-alpine was used to run the Express server. Its small size and compatibility with Node.js make it ideal for production environments.

Database: mongo:6.0 provides an official, stable MongoDB image suitable for local and production testing.

Using lightweight base images ensures our containers stay below the recommended size limits while including only essential dependencies.

2. Dockerfile Directives

We structured our Dockerfiles following best practices:

Frontend Dockerfile:

WORKDIR /app – sets the working directory.

COPY package*.json ./ & npm ci --only=production – installs only production dependencies for a smaller build.

COPY . . – copies source code into the container.

RUN npm run build – builds the React app for production.

FROM nginx:alpine stage – serves the built React app.

Backend Dockerfile:

WORKDIR /app – sets working directory.

COPY package*.json ./ & npm ci --only=production – installs backend dependencies efficiently.

COPY . . – adds server files.

CMD ["node", "server.js"] – runs the Express server on container start.

This multi-stage build approach ensures we don’t ship unnecessary development files in the production images.

3. Docker-Compose Networking

We used Docker Compose to orchestrate the frontend, backend, and database containers:

Containers communicate over the default bridge network created by Docker Compose.

Ports mapping:

Frontend: 3000 → 80 (Nginx)

Backend: 5000 → 5000

MongoDB: 27017 → internal only (not exposed externally for security)

This allows seamless communication between containers while keeping external exposure limited.

4. Docker-Compose Volumes

Persistence was essential for our database:

We defined a volume for MongoDB:

volumes:
  - mongo-data:/data/db


This ensures that all products added through the frontend persist even if containers are restarted.

Volumes were only used where necessary to maintain a minimalist image design.

5. Git Workflow

Our workflow for this project:

Branching: Created a feature branch for Dockerization.

Commits: Incrementally committed Dockerfile, docker-compose, and config changes.

Pull Requests: Reviewed locally, tested builds with docker compose up --build.

Merge: Merged into main branch after confirming all containers run correctly.

This workflow ensures reproducibility and clean version control.

6. Running and Debugging

Startup command:

docker compose up --build


Verified container connectivity:

Accessed frontend at http://localhost:3000

Verified backend at http://localhost:5000/api/products

Checked database persistence via Mongo shell inside the container.

Debugging measures applied:

Resolved Node.js crypto errors (ERR_OSSL_EVP_UNSUPPORTED) by using Node 18 Alpine and rebuilding images.

Ensured MongoDB hostname matched service name in Docker Compose.

7. Image Naming and Tagging

We followed clear naming and tagging standards for easy identification:

Frontend: leshan/yolo-client:latest

Backend: leshan/yolo-backend:latest

MongoDB: official image, versioned mongo:6.0

This allows anyone cloning the repo to pull images consistently from Docker Hub.

8. Screenshots

Screenshots of images on Docker Hub, showing sizes and tags, are included to demonstrate:

Image size compliance (frontend < 100MB, backend < 300MB)

Correct versioning and tags

These confirm our adherence to minimalism and best practices.