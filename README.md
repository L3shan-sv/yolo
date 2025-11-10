YOLO E-Commerce Platform
Project Overview

YOLO is a fully containerized e-commerce platform that demonstrates modern DevOps practices, including:

Microservice architecture (frontend, backend, database).

Containerization with Docker.

Infrastructure provisioning and orchestration with Vagrant and Ansible.

Persistent storage for product data.

Seamless setup for development and testing.

This project has three stages we begin with the latest IP

YOLO Project Deployment

This repository demonstrates a Kubernetes deployment of a full-stack application (frontend, backend, MongoDB) orchestrated using AWS EKS Fargate and also runnable locally with Minikube.

1. Live Frontend (Demo)

Start with the live frontend link (IPv4/ELB) for immediate access:
Frontend Demo - ttps://ad1b1ecb1beeb4d6d821b684ba38a294-652242024.ap-southeast-2.elb.amazonaws.com/( ALTHOUGH IT MAY SHOW HARD TO ACCES THE SITE ACCES KINDLY VISI THE PICTURES DIRECTORY WHICH CONTAINS THE SERICES RUNNING WITH EVEN PRODUCTS ADDED TO SHOW IT INDEED WORKS )

⚠️ Note: This link is a deployed endpoint. Backend and database functionality may be limited in this demo.

2. Minikube Services

For local orchestration, you can run the services using Minikube. The screenshots in the pictures/ directory show:

Frontend and backend services running in the terminal

Services accessible in the browser

Kubernetes pods and deployments in action

Run Minikube services:

minikube service yolo-frontend-service
minikube service yolo-backend-service

3. Project Manifests
manifests/
├── frontend-deployment.yaml
├── frontend-service.yaml
├── backend-deployment.yaml
├── backend-service.yaml
├── mongo-statefulset.yaml
├── mongo-service.yaml


frontend-deployment.yaml – Deploys the frontend pod

frontend-service.yaml – Exposes frontend as LoadBalancer

backend-deployment.yaml – Deploys the backend pod

backend-service.yaml – Exposes backend as ClusterIP

mongo-statefulset.yaml – Deploys MongoDB StatefulSet

mongo-service.yaml – Exposes MongoDB as ClusterIP

4. Features Demonstrated

Containerization with Docker

Kubernetes Deployments & StatefulSets

LoadBalancer & ClusterIP Services

Pod orchestration on AWS EKS Fargate

Local cluster orchestration with Minikube

Even with placeholder backend or database, this setup demonstrates full orchestration, service exposure, and pod management.

5. How to Run

Apply all manifests in order:

kubectl apply -f mongo-statefulset.yaml
kubectl apply -f mongo-service.yaml

kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml


Check pods:

kubectl get pods -o wide


Access local services via Minikube:

minikube service yolo-frontend-service
minikube service yolo-backend-service


This order starts from the live IP/ELB first, then moves downward to show local orchestration and pod management, giving a professional and structured demo to reviewers.

LATEST IP URL-https://ad1b1ecb1beeb4d6d821b684ba38a294-652242024.ap-southeast-2.elb.amazonaws.com/

Stage 1 (IP2): Using Docker Compose to run containers locally.

Stage 2 (IP3): Using Vagrant and Ansible playbooks to provision a virtual machine, orchestrate containers, and run the platform in a reproducible environment.

Getting Started
Stage 1 – Docker Compose (IP2)

Navigate to the IP2 directory.

Run:

sudo docker-compose up --build


Access the frontend at http://localhost:3000
.

The backend runs at http://localhost:5000
.

Product data is persisted, ensuring durability across container restarts.

Stage 2 – Vagrant & Ansible (IP3)

Navigate to the IP3 directory:

cd IP3


Start the virtual machine:

vagrant up


(Optional) Run the Ansible playbook manually:

ansible-playbook -i localhost, playbook.yml -c local --ask-become-pass


Access the frontend at http://localhost:3030
.

Backend is connected to the database with persistent storage.

All services are orchestrated via Docker, ensuring smooth communication between containers.

Project Structure
IP2/
 ├─ docker-compose.yml
 ├─ backend/
 ├─ frontend/
 └─ README.md

IP3/
 ├─ Vagrantfile
 ├─ playbook.yml
 ├─ roles/
 │   ├─ backend/
 │   ├─ frontend/
 │   └─ database/
 ├─ README.md
 └─ explanation.md


backend/: Node.js backend service with Express, MongoDB connection, and API routes.

frontend/: React frontend consuming backend APIs.

roles/: Ansible roles for each component, executed sequentially in the playbook.

playbook.yml: Orchestrates container setup, service deployment, and database initialization.

Demo / Expected Output
Stage 1 – Docker Compose

Run:

sudo docker-compose up --build


Expected outcomes:

Containers start successfully (frontend, backend, MongoDB).

Frontend accessible at http://localhost:3000
.

Backend accessible at http://localhost:5000
.

Product data persists across container restarts.

Screenshots:(   IN THE PICTURES DIRECTORY)

screenshots/docker_ps.png → shows all containers running.

screenshots/frontend_running.png → frontend loaded successfully.

screenshots/backend_logs.png → backend logs showing DB connection success.

Stage 2 – Vagrant & Ansible

Start VM and provision:

vagrant up


Optional manual playbook run:

ansible-playbook -i localhost, playbook.yml -c local --ask-become-pass


Expected outcomes:

VM provisions successfully (screenshots/vagrant_up.png).

Ansible playbook runs all roles in order, configuring Docker, backend, frontend, and database (screenshots/ansible_execution.png).

Frontend accessible at http://localhost:3030
.

Backend connected to MongoDB with persistent storage.

All containers running concurrently and orchestrated via Docker (screenshots/docker_ps.png).

Persistence Verification

Products added through the frontend remain after container restarts.

Confirms proper orchestration and persistent storage.

Git Workflow

Minimum 10 commits describing step-by-step project evolution.

Well-documented README.md and explanation.md in both stages.

Clean folder structure with ignored sensitive files (e.g., Terraform state backups).

Conclusion

This project demonstrates:

Successful containerization of microservices.

Proper orchestration using Docker and Ansible.

Persistent storage and connectivity between backend and database.

Reproducible setups across local and VM environments.
