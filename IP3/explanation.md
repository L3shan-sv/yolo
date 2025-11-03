# YOLO E-Commerce Platform - Explanation & Design Decisions

This document explains the architecture, implementation, project structure, and rationale behind the technical choices for the YOLO e-commerce platform.

---

## **1. Project Overview**

YOLO is a modular, containerized e-commerce application that allows users to browse products, add items to a cart, and make purchases. Admins can manage products. The platform is designed for **scalability, maintainability, and rapid deployment**.

---

## **2. Project Structure**

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
├── screenshots/ # Playbook & containers images
├── README.md # Project overview & usage
└── EXPLANATION.md # Architecture & rationale

markdown
Copy code

**Rationale for Structure:**

- **backend/** contains backend code with clear separation:  
  - `routes/` → API endpoints  
  - `controllers/` → Business logic  
  - `models/` → Database schemas  
  - `middleware/` → Authentication and error handling  
- **ansible/** automates deployment  
- **screenshots/** visually documents setup  
- **Dockerfile** ensures consistent backend environment  
- **.env** keeps sensitive configuration separate  

---

## **3. Tech Stack & Why**

| Layer        | Technology           | Rationale |
|--------------|-------------------|-----------|
| Frontend     | React.js (`localhost:3030`) | Component-based, reusable UI, dynamic interface |
| Backend      | Node.js + Express (`localhost:5000`) | Efficient async API handling, flexible routing |
| Database     | MongoDB            | Flexible schema, JSON-friendly, scalable |
| Containerization | Docker          | Reproducible and isolated environment |
| Automation   | Ansible            | Repeatable deployment, reduces human error |

---

## **4. Architecture & Design Decisions**

- **Container Separation:** Backend and MongoDB in different containers  
  - Decouples services for easier scaling, updates, and maintenance
- **Docker Network (`yolo_app-net`):** Isolated communication between backend and database
- **Environment Variables:** Keep secrets out of code, configurable per environment
- **REST API:** Standardized interface, compatible with multiple clients

---

## **5. Key Implementation Choices**

1. **Dockerized Backend**  
   - Isolated Node.js environment, reproducible setup  
   - Supports scaling and CI/CD pipelines

2. **MongoDB Container**  
   - Self-contained database  
   - Easy to backup, migrate, or replace

3. **Ansible Automation**  
   - Automates container builds, network setup, and env config  
   - Screenshots of playbook show successful deployment:

   ![Playbook Screenshot](./screenshots/playbook-run.png)  
   *Demonstrates that all containers were successfully built, network created, and environment variables applied.*

4. **Running Containers**  

   ![Containers Screenshot](./screenshots/docker-containers.png)  
   *Shows backend and MongoDB containers running on `yolo_app-net`, with backend accessible on port 5000 and frontend on 3030.*

5. **Folder Organization**  
   - Clean separation improves maintainability and scalability

---

## **6. How It Works Together**

1. Start **MongoDB container** on `yolo_app-net`  
2. Start **Backend container** pointing to MongoDB via `MONGO_URI`  
3. Backend exposes REST API at `localhost:5000`  
4. **Frontend** (React) runs on `localhost:3030` and interacts with API  
5. All data (users, products, orders) persists in MongoDB container

---

## **7. Future-Proofing & Considerations**

- **Scalability:** Add more backend containers if traffic increases  
- **Security:** Network isolation, secrets in `.env`  
- **Extensibility:** Frontend container or CI/CD pipeline can be added  
- **Portability:** Docker ensures consistent behavior anywhere

---

## **8. Summary of Decisions**

- **Tech stack:** Selected for speed, scalability, and relevance  
- **Containerization:** Provides reproducibility, isolation  
- **Automation with Ansible:** Reduces errors, standardizes deployment  
- **Environment variables:** Secure and flexible configuration  
- **Project structure:** Maintains clean separation of concerns  
- **Screenshots:** Provides visual proof of successful deployment and running container ( found in the screenshot directory).