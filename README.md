# Overview
This project involved the containerization and deployment of a full-stack yolo application using Docker.

A full-stack containerized app built with React, Node.js, and MongoDB.
# Requirements
Install the docker engine here:
- [Docker](https://docs.docker.com/engine/install/) 

## How to launch the application 


![Alt text](image.png)

## How to run the app
Use vagrant up --provison command

Features
- Add, view, edit, and delete products.
- Persistent product storage using MongoDB.
- Fully containerized frontend, backend, and database.

REQUIREMENTS
- [Docker](https://docs.docker.com/engine/install/)
- [Vagrant](https://www.vagrantup.com/)

HOW TO SET UP

1. CLONE THIS REPO
```bash
git clone https://github.com/L3shan-sv/yolo.git
cd <repo-directory>

2. LAUNCHING VAGRANT WITH PROVISIONING
First shh into the server- run " vagrant ssh"
run " sudo docker ps -a "- this lists all the containers running
remove all running containers by running " sudo docker rm -f $(sudo docker ps -aq)

3. START PROVISIONING VM
Run " vagrant up -- provision"
 Verify the running containers by running- "docker ps"
expected containers are : (app-mongo → MongoDB
brian-yolo-backend → Node.js API
brian-yolo-client → React frontend)

4. Acces
Test the fronted on :http://localhost:3000
test the backend on :curl http://localhost:5000/api/products- checks the items added through the frontend you should lots of items called leshan



