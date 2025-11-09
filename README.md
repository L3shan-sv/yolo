YOLO E-Commerce Platform
Project Overview

YOLO is a fully containerized e-commerce platform that demonstrates modern DevOps practices, including:

Microservice architecture (frontend, backend, database).

Containerization with Docker.

Infrastructure provisioning and orchestration with Vagrant and Ansible.

Persistent storage for product data.

Seamless setup for development and testing.

This project has two stages:

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

Screenshots are provided in the screenshots/ directory for reference.