YOLO E-Commerce Platform

A fully containerized e-commerce app built to demonstrate modern full-stack development and Docker-based deployment. YOLO lets users view and add products through a React frontend, with a Node.js/Express backend and MongoDB for storage. Every component is containerized to ensure consistency, portability, and persistence.


Overview

YOLO is an e-commerce platform showcasing how to containerize a full-stack application. The frontend is built with React, styled with Tailwind CSS, and the backend is Node.js with Express and Mongoose connecting to MongoDB. The project demonstrates Docker best practices, including multi-stage builds, minimal images, networking, and volume persistence.

Features

View products and add new products via the frontend

Data persistence using MongoDB volumes

Multi-container setup with Docker Compose

Frontend production build served by Nginx

Minimal, optimized images to reduce storage overhead

Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express

Database: MongoDB

Containerization: Docker, Docker Compose

Docker & Containerization
Base Images

Frontend: node:18-alpine (lightweight, production-ready Node.js)

Backend: node:18-alpine (minimal Node.js environment)

Frontend Production Server: nginx:alpine (fast, tiny image)

Database: mongo:6.0 (official MongoDB image)

Multi-Stage Builds

Frontend uses a multi-stage build:

Stage 1: Build React app with Node.js

Stage 2: Serve production build with Nginx, keeping final image small (~83MB)

Docker Compose

Networking: Frontend, backend, and database connected on a custom bridge network

Volumes: MongoDB volume ensures product data persists across container restarts

Port Mapping:

Frontend: 3000

Backend: 5000

MongoDB: 27017

Running the Project

Clone the repository:

git clone <https://github.com/L3shan-sv/yolo.git>
cd yolo


Build and start containers:

docker compose up --build


Access the app:

Frontend: http://localhost:3000

Backend API: http://localhost:5000/api/products

Add products via frontend and verify persistence via MongoDB volume.

Screenshots

(In the screenshot Directory)

Docker Hub Images
Image	Tag	Size
leshan/yolo-client	latest	83.3MB
leshan/yolo-backend	latest	280MB

Images were optimized using Alpine base images and minimal packages to keep them lightweight.

Implementation Notes

Minimalist Approach: Using Alpine images and multi-stage builds reduced image sizes (frontend ~83MB, backend ~280MB).

Persistence: MongoDB stores product data in a Docker volume to survive container restarts.

Networking: Custom bridge network ensures frontend can talk to backend and database seamlessly.

Build Practices: Used npm ci --only=production for cleaner production installs.

Git Workflow: Feature branches were used for Docker setup, merged to main after testing.

Debugging: Resolved ERR_OSSL_EVP_UNSUPPORTED by using node:18-alpine and setting NODE_OPTIONS=--openssl-legacy-provider for frontend build.