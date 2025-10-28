YOLO E-Commerce Platform - Ansible & Docker Deployment

Welcome to YOLO, your personal e-commerce dashboard built to quickly manage retail products. This repository contains the automation setup that provisions a virtual machine, installs dependencies, and runs the application inside Docker containers using Ansible.

Think of this as a “click-and-go” deployment—you don’t need to manually install anything beyond Vagrant and Ansible.

Features

Full-stack web application (Frontend + Backend)

 Dockerized setup for easy deployment

 MongoDB database running in a container

 Add, view, and manage products from the frontend

 Fully automated environment provisioning with Ansible

Prerequisites

Before you start, make sure you have the following installed on your machine:

Vagrant (https://www.vagrantup.com/
)

VirtualBox (https://www.virtualbox.org/
)

Ansible (version ≥ 2.13 recommended)

Internet connection (to pull Docker images and GitHub repo)

Optional (if cloning via SSH):

GitHub SSH key set up and added to your account

Private key copied to the project folder (/vagrant/id_rsa)

Getting Started
Step 1: Clone the project
git clone https://github.com/l3shan-sv/yolo.git
cd yolo

Step 2: Start the Vagrant VM
vagrant up


This will:

Boot up a fresh Ubuntu VM.

Set up networking and port forwarding.

Share your project folder with the VM.

Step 3: SSH into the VM
vagrant ssh
cd /vagrant

Step 4: Run the Ansible Playbook
ansible-playbook -i inventory.ini playbook.yml --ask-become-pass


This playbook will:

Update Ubuntu packages.

Install Docker and required dependencies.

Set up MongoDB container with persistent volume.

Pull backend and frontend Docker images.

Run the containers with correct ports.

Ports used:

Frontend: localhost:3000

Backend: localhost:5000

Step 5: Access the Application

Open your browser:

Frontend: http://localhost:8081

Backend (API): http://localhost:5000/products

You should see the YOLO e-commerce dashboard up and running. Add products through the frontend form and watch them appear in real-time.

Project Structure
yolo/
├─ inventory.ini         # Ansible inventory for localhost
├─ playbook.yml          # Main Ansible playbook
├─ roles/
│   ├─ frontend/         # Handles frontend Docker container
│   ├─ backend/          # Handles backend Docker container
│   └─ common/           # Common tasks (Docker installation, updates)
├─ id_rsa                # SSH private key for GitHub (optional)
└─ README.md             # You are here 

Troubleshooting

Docker permission issues:
Use sudo docker ps to check running containers. If you get a permission denied error, prefix commands with sudo.

Frontend or backend not showing up:
Check if containers are running:

sudo docker ps


Restart containers if needed:

sudo docker restart yolo-frontend
sudo docker restart yolo-backend


Git clone fails with HTTPS:
Make sure you have your SSH key configured and the playbook is using git@github.com:l3shan-sv/yolo.git.

Notes

The playbook is designed to run fully automated once SSH keys are in place.

Using Docker ensures that the environment is consistent across machines.

You can extend the playbook to include more roles or services in the future (like Redis, Nginx, etc.).

Author

Leshan Alan.