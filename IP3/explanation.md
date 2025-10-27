YOLO E-Commerce Platform - Explanation of Ansible Playbook

This document explains the setup, commands, and tags used in your YOLO e-commerce Ansible deployment. Think of it as your “behind-the-scenes” guide to what’s happening when you run the playbook.

Overview

The goal of this playbook is to automate the deployment of the YOLO e-commerce platform inside a Vagrant Ubuntu VM using Docker.

The playbook does the following:

Updates Ubuntu packages.

Installs required packages like curl and apt-transport-https.

Installs Docker.

Sets up Docker containers for MongoDB, backend, and frontend.

Uses roles, tags, and blocks for clean, maintainable automation.

Playbook Structure
playbook.yml          # Main playbook
inventory.ini         # Hosts definition (localhost)
roles/
├─ common/            # Docker installation & system setup
├─ backend/           # Backend container tasks
└─ frontend/          # Frontend container tasks


Each role handles a specific part of the deployment:

common: Updates the system, installs Docker, ensures the Docker service is running.

backend: Pulls the backend Docker image and runs the container.

frontend: Pulls the frontend Docker image and runs the container.

MongoDB: Runs MongoDB in its own container with a persistent volume.

Key Commands and Tags

Ansible provides a way to control which tasks run using tags. This is useful if you don’t want to run the full playbook every time.

Running the full playbook
ansible-playbook -i inventory.ini playbook.yml --ask-become-pass


-i inventory.ini specifies the host (localhost in this case).

--ask-become-pass asks for the sudo password to run tasks that require elevated privileges.

Running specific tags

The playbook has tags for major steps:

setup → System and Docker setup

backend → Pull & run backend container

frontend → Pull & run frontend container

mongo → Create MongoDB volume and run MongoDB container

Example: Run only backend tasks:

ansible-playbook -i inventory.ini playbook.yml --tags backend --ask-become-pass


Example: Run setup tasks:

ansible-playbook -i inventory.ini playbook.yml --tags setup --ask-become-pass


Example: Run everything except MongoDB:

ansible-playbook -i inventory.ini playbook.yml --skip-tags mongo --ask-become-pass

Step-by-Step Task Explanation
1. Gathering Facts
- name: Gathering Facts
  hosts: all
  tasks:
    - setup:


Collects information about the target VM (OS, IP, memory, etc.).

Required for conditional tasks later.

2. Update apt cache (setup tag)
- name: Update apt cache
  apt:
    update_cache: yes


Ensures the VM’s package index is up-to-date.

Avoids errors when installing packages.

3. Install required packages (setup tag)
- name: Install required packages
  apt:
    name:
      - apt-transport-https
      - ca-certificates
      - curl
      - software-properties-common
    state: present


Installs packages needed to add repositories and download software securely.

4. Docker installation (setup tag)
- name: Add Docker GPG key
- name: Add Docker repository
- name: Install Docker
- name: Ensure Docker service is running


Adds Docker’s official GPG key.

Adds Docker repository for Ubuntu.

Installs Docker CE.

Starts and enables Docker service.

5. MongoDB container (mongo tag)
- name: Create MongoDB volume
- name: Run MongoDB container


Creates a Docker volume for persistent MongoDB storage.

Runs MongoDB container with the volume mounted.

6. Backend container (backend tag)
- name: Pull backend Docker image
- name: Run backend container


Pulls the backend image from Docker Hub.

Runs the container, exposing the API port (default 5000).

7. Frontend container (frontend tag)
- name: Pull frontend Docker image
- name: Run frontend container


Pulls the frontend image from Docker Hub.

Runs the container, mapping the web server port (default 3000).

Troubleshooting Tips

Docker permission denied
Use sudo docker ps instead of just docker ps inside the VM.

Playbook fails at cloning GitHub repo

GitHub removed password authentication.

Use SSH keys or skip the Git clone task if the repo is already present.

Containers not showing updates

Ensure you restart the container after rebuilding the image:

sudo docker restart yolo-backend
sudo docker restart yolo-frontend


Run only certain steps
Use tags to skip unnecessary steps:

ansible-playbook -i inventory.ini playbook.yml --tags frontend
