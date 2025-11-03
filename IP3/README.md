# YOLO E-Commerce Platform

![YOLO Logo](https://img.shields.io/badge/YOLO-E-Commerce-red) ![Docker](https://img.shields.io/badge/Docker-Container-blue) ![Node.js](https://img.shields.io/badge/Node.js-Backend-green) ![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen)

YOLO is a full-stack, containerized e-commerce platform that allows users to browse products, add items to a cart, and make purchases. Admins can manage products. The platform is designed for **scalability, maintainability, and easy deployment**.

---

## **Table of Contents**
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)
- [Docker & Deployment](#docker--deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## **Features**
- User registration and authentication
- Product browsing and search
- Add to cart and checkout functionality
- Admin interface for product management
- Containerized backend for easy deployment
- MongoDB database
- Automated deployment via Ansible

---

## **Tech Stack**
- **Frontend:** React.js (`localhost:3030`)
- **Backend:** Node.js + Express (`localhost:5000`)
- **Database:** MongoDB
- **Containerization:** Docker
- **Automation:** Ansible

---

## **Project Structure**
yolo-ecommerce/
├── backend/
│ ├── Dockerfile # Builds backend container
│ ├── package.json # Node.js dependencies
│ ├── server.js # Backend entry point
│ ├── routes/ # API routes
│ │ ├── authRoutes.js
│ │ ├── productRoutes.js
│ │ └── orderRoutes.js
│ ├── models/ # MongoDB schemas
│ │ ├── User.js
│ │ ├── Product.js
│ │ └── Order.js
│ ├── controllers/ # Business logic
│ │ ├── authController.js
│ │ ├── productController.js
│ │ └── orderController.js
│ ├── middleware/ # Auth & error handling
│ └── .env # Environment variables
├── ansible/
│ └── playbook.yml # Deployment automation
├── README.md # Project overview & usage
└── EXPLANATION.md # Architecture & rationale

yaml
Copy code

---

## **Setup & Installation**

### Prerequisites
- Docker & Docker Compose
- Node.js & npm
- Ansible (for automation)

### Clone the repo
```bash
git clone https://github.com/yourusername/yolo-ecommerce.git
cd yolo-ecommerce
Environment Variables
Create a .env file in the backend directory:

env
Copy code
MONGO_URI=mongodb://yolo-mongo-1:27017/yolo
PORT=5000
JWT_SECRET=your_secret_key
Docker & Deployment
Build & Run Backend
bash
Copy code
# Build backend image
docker build -t yolo-backend ./backend

# Create a custom network
docker network create yolo_app-net

# Run MongoDB container
docker run -d --name yolo-mongo-1 --network yolo_app-net mongo:latest

# Run Backend container
docker run -d --name yolo-backend-1 \
  --network yolo_app-net \
  -p 5000:5000 \
  -e MONGO_URI="mongodb://yolo-mongo-1:27017/yolo" \
  yolo-backend
Run via Ansible
bash
Copy code
ansible-playbook -i localhost, playbook.yml -c local --ask-become-pass
Usage
Frontend: Visit http://localhost:3030 in your browser.

Backend API: http://localhost:5000 for endpoints (Postman or frontend interacts here)

Admin routes require authentication.

Screenshots
1. Playbook Run

2. Running Containers
( screenshots are found in the screenshot directory)