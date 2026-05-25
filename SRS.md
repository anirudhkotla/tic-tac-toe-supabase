# Software Requirements Specification (SRS)
**Project Name**: TeamFlow – Internal Project & Task Management Platform
**Version**: 1.0
**Date**: 2026-05-25

---

## **1. Introduction**
### **1.1 Purpose**
This document outlines the functional and non-functional requirements for **TeamFlow**, a modern web application designed to help teams manage projects, tasks, and collaboration in one place.

### **1.2 Scope**
TeamFlow is a full-stack web application built using **Next.js (React)**, **TypeScript**, **Tailwind CSS**, and **Next.js API Routes**. It includes:
- User authentication (signup, login, logout).
- Project and task management.
- Role-based access control (Admin, Manager, Member).
- Responsive UI with dark/light mode.
- Activity timeline and search/filter functionality.

### **1.3 Definitions**
| Term          | Definition                                                                 |
|---------------|---------------------------------------------------------------------------|
| JWT           | JSON Web Token for secure authentication.                                |
| API           | Application Programming Interface for client-server communication.       |
| Responsive UI | A user interface that adapts to different screen sizes.                  |

---

## **2. Functional Requirements**
### **2.1 User Authentication**
- Users must be able to **sign up**, **log in**, and **log out**. 
- Passwords must be securely hashed.
- JWT tokens must be used for session management.

### **2.2 Project Management**
- Users must be able to **create**, **edit**, **archive**, and **delete** projects.
- Projects must have a **name**, **description**, and **team members**. 

### **2.3 Task Management**
- Users must be able to **create**, **assign**, and **track** tasks.
- Tasks must support **statuses** (To Do, In Progress, Review, Done).
- Tasks must support **priority levels** (Low, Medium, High) and **due dates**. 

### **2.4 Team Management**
- Admins must be able to **add/remove team members**. 
- Roles must include **Admin**, **Manager**, and **Member**. 

### **2.5 Activity Timeline**
- Users must be able to view a **timeline of project updates**. 

### **2.6 Search and Filter**
- Users must be able to **search and filter** projects and tasks.

### **2.7 Dark/Light Mode**
- The UI must support **dark and light mode**. 

---

## **3. Non-Functional Requirements**
### **3.1 Performance**
- The application must load in **under 2 seconds** for authenticated users.

### **3.2 Security**
- All API endpoints must validate input and handle errors securely.
- JWT tokens must expire after **24 hours**. 

### **3.3 Usability**
- The UI must be **responsive** and work on **mobile, tablet, and desktop**. 

### **3.4 Compatibility**
- The application must support **Chrome, Firefox, Safari, and Edge**. 

---

## **4. Assumptions**
- Users have access to a modern web browser.
- The application will be deployed on **Vercel** or a similar platform.

---

## **5. Risks**
| Risk                          | Mitigation Strategy                                  |
|-------------------------------|------------------------------------------------------|
| Security vulnerabilities      | Use JWT best practices and input validation.         |
| Performance bottlenecks       | Optimize database queries and use caching.           |
| Browser compatibility issues  | Test on multiple browsers during development.        |

---

## **6. Acceptance Criteria**
- All functional requirements must be implemented and tested.
- The application must pass **unit tests** for critical functionality.
- The UI must be **responsive** and support **dark/light mode**. 
- The application must be deployed with **Docker support**. 

---

## **7. API Endpoints**
| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| POST   | `/api/auth/login`      | Log in a user.                       |
| POST   | `/api/auth/register`   | Register a new user.                 |
| GET    | `/api/projects`        | Get all projects.                    |
| POST   | `/api/projects`        | Create a new project.                |
| GET    | `/api/tasks`           | Get all tasks.                       |
| POST   | `/api/tasks`           | Create a new task.                   |
| PUT    | `/api/tasks/:id`       | Update a task.                       |
| DELETE | `/api/tasks/:id`       | Delete a task.                       |