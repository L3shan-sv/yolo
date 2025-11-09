Project Overview

This project demonstrates a complete DevOps pipeline for setting up and orchestrating a containerized e-commerce platform (“YOLO E-commerce”) across two stages of automation.

Stage 1 (IP2) focuses on Docker-based containerization and local orchestration.

Stage 2 (IP3) transitions to a fully automated provisioning and configuration process using Vagrant and Ansible, achieving infrastructure-as-code (IaC) and service orchestration principles.

All relevant screenshots for proof of execution are available in the screenshots/ directory for reference.

Stage 1 — Docker & Local Orchestration
Objective

To containerize and locally orchestrate the YOLO E-commerce application using Docker Compose.

Implementation

In this stage, each major service (frontend, backend, and database) was defined as an independent microservice within the docker-compose.yml file.
The containers were networked together using Docker’s internal bridge network to ensure seamless communication between services.

Frontend was exposed on port 3000

Backend was exposed on port 5000

Database (PostgreSQL) ran internally on port 5432

Persistent data was achieved through Docker volumes, ensuring product data remained intact even when containers were stopped or rebuilt.

Running the Application

To launch the services, the following command was used:

sudo docker-compose up --build


This command built all services from their respective Dockerfiles and started the entire stack in the correct dependency order.

Verification of Orchestration

Once all services were successfully launched, the frontend became accessible at:

http://localhost:3000


A screenshot of the running frontend and backend logs is available in the screenshots/ folder (frontend_running.png, backend_logs.png) showing successful orchestration of all components.

Stage 2 — Vagrant & Ansible Automation
Objective

To extend Stage 1 by automating environment provisioning and service setup using Vagrant and Ansible. This stage showcases Infrastructure as Code (IaC) and full service orchestration capabilities.

Implementation Breakdown

Vagrant Provisioning

The Vagrantfile provisions a virtual machine based on Ubuntu Focal (20.04).

Shared folders were mounted to enable easy syncing between the host and VM.

Once the VM was launched, Ansible was automatically provisioned to run playbooks against it.

vagrant up


Ansible Configuration

The ansible/playbook.yml file handles the automation of:

Installing Docker and Docker Compose

Setting up environment variables

Pulling and building container images

Running the entire application stack automatically

The Ansible playbook is modularized using roles, promoting reusability and clean structure:

roles/docker/ — Handles Docker installation

roles/backend/ — Deploys the backend container

roles/frontend/ — Deploys the frontend container

roles/database/ — Configures PostgreSQL and initializes data

Execution Command

To run the playbook manually (if needed), the following command was used:

ansible-playbook -i localhost, playbook.yml -c local --ask-become-pass

Verification of Orchestration

The Ansible logs and backend container logs (available in the screenshots/ folder) show each step being executed — from package installation to container launch.
Successful orchestration is confirmed when the frontend is accessible at:

http://localhost:3030


This confirms that the entire infrastructure — from VM provisioning to service deployment — is handled automatically through a single command, fulfilling the orchestration requirement.

Best Practices Implemented

Consistent use of variables in Ansible roles for portability and maintainability.

Separation of concerns between roles (frontend, backend, and database).

Infrastructure as Code principles through declarative automation.

Persistent storage configuration ensuring continuity of data.

All sensitive files (e.g., environment variables) were properly ignored via .gitignore for security.

Reflection & Design Choices

Containerization was chosen for its scalability and portability, allowing each service to run in isolation while remaining interconnected.

Ansible was used to automate configuration tasks, reducing manual effort and potential for error.

Vagrant provided a consistent environment for testing and deploying the application on any machine.

Using roles improved maintainability, as tasks for each service were logically separated.

Using variables ensured configuration flexibility across environments.

Proof of Orchestration

Refer to the following screenshots for visual evidence:( PRESENT IN THE PICTURES DIRECTORY)

screenshots/vagrant_up.png – Successful Vagrant provisioning

screenshots/ansible_execution.png – Successful playbook execution

screenshots/backend_logs.png – Backend container logs showing successful startup

screenshots/frontend_running.png – Application running at localhost:3030

screenshots/docker_ps.png – All containers running concurrently

These outputs collectively prove successful orchestration of the YOLO E-commerce system — the application runs automatically through infrastructure provisioning and configuration management tools.

Conclusion

Through both stages, this project demonstrates:

Understanding of containerization and microservice architecture

Application of automation tools (Docker, Vagrant, Ansible) for real-world DevOps workflows

Use of best practices such as roles, variables, and persistent data management

Successful orchestration and deployment of a multi-service application

This marks a fully functional and production-ready deployment workflow illustrating the core principles of DevOps, automation, and service orchestration.