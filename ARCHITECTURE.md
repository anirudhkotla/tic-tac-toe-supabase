# Architecture for TeamFlow

**Project Name**: TeamFlow – Internal Project & Task Management Platform
**Date**: 2026-05-25
**Author**: SRS Documentation Agent

---

## 1. Overview
TeamFlow is a full-stack web application built using **Next.js** for both frontend and backend. It uses **TypeScript** for type safety, **Tailwind CSS** for styling, and **REST APIs** for communication between the frontend and backend. The system supports **JWT-based authentication** and **role-based access control**.

---

## 2. System Architecture
The system follows a **monolithic architecture** with the following components:

1. **Frontend**:
   - Built with Next.js and React.
   - Uses Server Components where appropriate.
   - Styled with Tailwind CSS.
   - Responsive design with dark/light mode support.

2. **Backend**:
   - Built with Next.js API Routes.
   - REST APIs for all project, task, and user operations.
   - JWT-based authentication.
   - Input validation and error handling.

3. **Database**:
   - Supabase (PostgreSQL) for data storage.
   - Tables for users, projects, tasks, and activity logs.

4. **Authentication**:
   - JWT tokens for session management.
   - Password reset via email.

5. **Deployment**:
   - Containerized using Docker.
   - Deployed on Vercel or a similar cloud platform.

---

## 3. Data Flow

1. **User Authentication**:
   - User signs up or logs in.
   - JWT token is generated and stored in cookies.
   - Token is used for subsequent API requests.

2. **Project Management**:
   - User creates/edits/deletes a project.
   - Project data is sent to the backend via REST API.
   - Backend validates the request and updates the database.
   - Frontend updates the UI in real-time.

3. **Task Management**:
   - User creates/edits/deletes a task.
   - Task data is sent to the backend via REST API.
   - Backend validates the request and updates the database.
   - Frontend updates the UI in real-time.

4. **Activity Timeline**:
   - All actions on projects/tasks are logged in the database.
   - Activity logs are displayed on the project dashboard.

---

## 4. Component Breakdown
| Component          | Responsibilities                                                                 |
|--------------------|---------------------------------------------------------------------------------|
| **Frontend**       | Render UI, handle user interactions, communicate with backend via REST APIs.    |
| **Backend**        | Handle API requests, validate inputs, interact with the database.               |
| **Database**       | Store user, project, task, and activity data.                                   |
| **Authentication** | Manage user sessions, generate JWT tokens, handle password resets.              |
| **Deployment**     | Containerize the application, deploy to cloud platform.                         |

---

## 5. API Endpoints
| Method | Endpoint                  | Description                                      |
|--------|---------------------------|--------------------------------------------------|
| POST   | `/api/auth/login`         | Log in a user.                                   |
| POST   | `/api/auth/register`      | Register a new user.                             |
| GET    | `/api/projects`           | Get all projects for the authenticated user.     |
| POST   | `/api/projects`           | Create a new project.                            |
| GET    | `/api/tasks`              | Get all tasks for a project.                     |
| POST   | `/api/tasks`              | Create a new task.                               |
| PUT    | `/api/tasks/:id`          | Update a task.                                   |
| DELETE | `/api/tasks/:id`          | Delete a task.                                   |

---

## 6. Database Schema
| Table      | Fields                                                                       |
|------------|------------------------------------------------------------------------------|
| Users      | `id`, `name`, `email`, `password_hash`, `role`, `created_at`, `updated_at`   |
| Projects   | `id`, `name`, `description`, `start_date`, `end_date`, `created_at`, `updated_at` |
| Tasks      | `id`, `title`, `description`, `status`, `priority`, `due_date`, `assignee_id`, `project_id`, `created_at`, `updated_at` |
| Activity   | `id`, `user_id`, `action`, `entity_type`, `entity_id`, `created_at`          |