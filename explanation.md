explanation.md – YOLO E-Commerce Platform (IP4 Update)
# YOLO E-Commerce Platform – Project Evolution

This document explains the evolution of the YOLO E-Commerce Platform from IP2 through IP4, highlighting architectural changes, deployment strategies, and configuration updates.

---

## Stage 1 – IP2: Docker Compose (Local Containers)

**Objective:** Run all services locally using Docker Compose for development and testing.

- **Backend:** Node.js with Express connected to MongoDB.
- **Frontend:** React consuming backend APIs.
- **Database:** MongoDB container with persistent storage.

**Workflow:**

1. Navigate to project root.
2. Run:

```bash
sudo docker-compose up --build


Verify services:

Frontend: http://localhost:3000

Backend: http://localhost:5000

Observations:

Containers started successfully.

Product data persisted across container restarts.

API URLs were local (localhost:5000) for frontend consumption.

Stage 2 – IP3: Vagrant + Ansible (VM Provisioning)

Objective: Move platform to a reproducible VM environment with orchestration.

Provisioned a VM using Vagrant.

Automated backend, frontend, and MongoDB setup with Ansible roles.

Ensured persistent storage for database volumes.

Workflow:

Navigate to roles/.

Start VM:

vagrant up


Run playbook (optional):

ansible-playbook -i localhost, playbook.yml -c local --ask-become-pass


Access services:

Frontend: http://localhost:3030

Backend connected to MongoDB

Key Updates:

Frontend URLs updated in ProductControl.js to point to VM backend.

All containers orchestrated via Ansible roles.

Verified persistence of products added via frontend.

Stage 3 – IP4: Kubernetes Deployment

Objective: Deploy the platform on a Kubernetes cluster (Minikube or EKS) for scalable, containerized orchestration.

Steps:

Start cluster:

Minikube:

minikube start --cpus=4 --memory=8192
minikube status


AWS EKS:

eksctl create cluster --name yolo-cluster --region ap-southeast-2
aws eks update-kubeconfig --name yolo-cluster --region ap-southeast-2


Apply manifests:

kubectl apply -f manifests/


Verify pods and services:

kubectl get pods -o wide
kubectl get svc
kubectl logs <pod-name>


Port-forward for local access:

kubectl port-forward svc/yolo-backend-service 5000:5000
kubectl port-forward svc/yolo-frontend-service 3000:3000


Frontend: http://localhost:3000

Backend: http://localhost:5000

Key Updates in IP4:

Kubernetes manifests created for all services (backend, frontend, mongo).

Frontend URLs updated to consume yolo-backend-service inside the cluster.

MongoDB configured as a StatefulSet with persistent volumes.

Testing workflow verified by adding products and ensuring persistence after pod restarts.

Minikube/EKS used to simulate production-like environment.

Testing & Verification

Verified all pods reach Running status.

Confirmed backend logs show successful DB connections.

Frontend correctly communicates with backend service via cluster DNS.

Persistence verified: products added via frontend remain after pod restarts.

Optional: kubectl describe pod <pod> and kubectl get events used for troubleshooting.

Deployment & Live Links

Deployment Strategy:

Local testing: Minikube

Cloud testing: AWS EKS

Persistent storage: Volume mounts for MongoDB StatefulSet

Orchestration: Kubernetes manifests and service definitions

Live Access:

Frontend: [INSERT DEPLOYED FRONTEND URL HERE]

Backend: [INSERT DEPLOYED BACKEND URL HERE]

Conclusion

The YOLO E-Commerce Platform evolved as follows:

IP2: Quick local testing with Docker Compose.

IP3: Reproducible VM deployment with Ansible orchestration.

IP4: Kubernetes deployment with full container orchestration, persistent storage, and scalable services.

All stages ensure:

Microservices communicate seamlessly.

Data persistence is maintained.

Platform is reproducible across environments.

Frontend URLs correctly point to backend services in respective environments.