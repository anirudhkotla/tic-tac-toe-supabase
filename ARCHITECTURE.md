# Architecture Document
**Project Name**: TeamFlow – Internal Project & Task Management Platform
**Version**: 1.0
**Date**: 2026-05-25

---

## **1. System Overview**
TeamFlow is a **full-stack web application** built using:
- **Frontend**: Next.js (React), TypeScript, Tailwind CSS.
- **Backend**: Next.js API Routes, REST APIs, JWT authentication.
- **Database**: Supabase (PostgreSQL).

---

## **2. Component Diagram**
```
┌───────────────────────────────────────────────────────────────────────────────┐
│                                TeamFlow Application                            │
├─────────────────┬─────────────────┬─────────────────┬─────────────────────────┤
│    Frontend     │     Backend     │    Database     │      Authentication     │
│ (Next.js/React) │ (Next.js APIs)  │   (Supabase)    │        (JWT)           │
└────────┬────────┴────────┬────────┴────────┬────────┴──────────┬─────────────┘
         │                 │                 │                  │
         ▼                 ▼                 ▼                  ▼
┌─────────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────────┐
│   User Interface│ │   REST APIs │ │  PostgreSQL │ │   JWT Tokens    │
│ (React Components)│ (API Routes)│ │ (Supabase)  │ │ (Session Mgmt)  │
└─────────────────┘ └─────────────┘ └─────────────┘ └─────────────────┘
```

---

## **3. Data Flow**
1. **User Authentication**:
   - User logs in via `/api/auth/login`.
   - Backend validates credentials and returns a **JWT token**. 
   - Frontend stores the token and uses it for subsequent requests.

2. **Project Management**:
   - User creates a project via `/api/projects`.
   - Backend stores the project in **Supabase**. 
   - Frontend updates the UI to reflect the new project.

3. **Task Management**:
   - User creates a task via `/api/tasks`.
   - Backend stores the task in **Supabase** and updates the project.
   - Frontend updates the UI to reflect the new task.

---

## **4. Database Schema**
### **4.1 Tables**
| Table       | Description                          | Fields                                                                 |
|-------------|--------------------------------------|------------------------------------------------------------------------|
| `users`     | Stores user information.             | `id`, `email`, `password_hash`, `role`, `created_at`                   |
| `projects`  | Stores project information.          | `id`, `name`, `description`, `created_by`, `created_at`                |
| `tasks`     | Stores task information.             | `id`, `title`, `description`, `status`, `priority`, `due_date`, `project_id`, `assigned_to` |
| `teams`     | Stores team information.             | `id`, `name`, `created_by`, `created_at`                               |
| `team_members` | Stores team-member relationships. | `id`, `team_id`, `user_id`, `role`                                     |

---

## **5. API Design**
### **5.1 Authentication**
- `POST /api/auth/login`: Log in a user.
- `POST /api/auth/register`: Register a new user.

### **5.2 Projects**
- `GET /api/projects`: Get all projects.
- `POST /api/projects`: Create a new project.

### **5.3 Tasks**
- `GET /api/tasks`: Get all tasks.
- `POST /api/tasks`: Create a new task.
- `PUT /api/tasks/:id`: Update a task.
- `DELETE /api/tasks/:id`: Delete a task.

---

## **6. Frontend Components**
| Component          | Description                          |
|--------------------|--------------------------------------|
| `AuthForm`         | Handles login and signup.            |
| `Dashboard`        | Displays project overview.           |
| `ProjectList`      | Lists all projects.                  |
| `TaskList`         | Lists all tasks.                     |
| `TaskForm`         | Form to create/edit tasks.           |
| `ActivityTimeline` | Displays project updates.            |

---

## **7. Deployment**
- The application will be deployed using **Docker**.
- Environment variables will be used for **Supabase credentials** and **JWT secrets**. 