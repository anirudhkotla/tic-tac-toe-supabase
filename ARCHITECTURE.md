# Architecture for College Attendance System

## 1. System Architecture
The application follows a **client-server architecture** with the following components:

1. **Frontend**: React with Next.js
2. **Backend**: Next.js API routes
3. **Database**: Supabase (PostgreSQL)
4. **Authentication**: Supabase Auth or OAuth/LDAP
5. **Hosting**: Vercel

---

## 2. Component Diagram
```
┌───────────────────────────────────────────────────────────────────────────────┐
│                                                                               │
│                                College Attendance System                      │
│                                                                               │
└───────────────────┬───────────────────────┬───────────────────────┬───────────┘
                    │                       │                       │
                    ▼                       ▼                       ▼
┌───────────────────────────┐ ┌───────────────────────┐ ┌───────────────────────┐
│                           │ │                       │ │                       │
│         Frontend          │ │       Backend         │ │      Database        │
│ (React + Next.js)         │ │ (Next.js API Routes)  │ │ (Supabase)           │
│                           │ │                       │ │                       │
└───────────────┬───────────┘ └───────────┬───────────┘ └───────────┬───────────┘
                │                       │                       │
                ▼                       ▼                       ▼
┌───────────────────────────┐ ┌───────────────────────┐ ┌───────────────────────┐
│                           │ │                       │ │                       │
│   User Interface (UI)     │ │   Authentication      │ │   Student Data       │
│   - Glassmorphism Design  │ │   - OAuth/LDAP        │ │   - Attendance       │
│   - Responsive Layout     │ │   - Supabase Auth     │ │   - Class Details    │
│                           │ │                       │ │                       │
└───────────────────────────┘ └───────────────────────┘ └───────────────────────┘
```

---

## 3. Data Flow
1. **User Login**:
   - User enters credentials → Frontend sends request to Next.js API → API validates credentials with Supabase Auth → Returns JWT token.
2. **Attendance Marking**:
   - Faculty selects a class → Frontend sends attendance data to Next.js API → API updates Supabase database → Returns success/failure.
3. **Attendance Viewing**:
   - Student requests attendance records → Frontend sends request to Next.js API → API fetches data from Supabase → Returns attendance records.

---

## 4. Technology Stack
| Component          | Technology                                                                 |
|--------------------|----------------------------------------------------------------------------|
| **Frontend**       | React, Next.js, Tailwind CSS, Framer Motion (for glassmorphism effects)   |
| **Backend**        | Next.js API Routes                                                        |
| **Database**       | Supabase (PostgreSQL)                                                     |
| **Authentication** | Supabase Auth / OAuth / LDAP                                              |
| **Hosting**        | Vercel                                                                    |
| **Version Control**| GitHub                                                                    |

---

## 5. Database Schema
### Tables

1. **Users**
   - `id` (UUID, Primary Key)
   - `email` (String, Unique)
   - `role` (String: "student", "faculty", "staff")
   - `created_at` (Timestamp)

2. **Students**
   - `id` (UUID, Primary Key)
   - `user_id` (UUID, Foreign Key: Users)
   - `name` (String)
   - `roll_number` (String, Unique)
   - `department` (String)

3. **Faculties**
   - `id` (UUID, Primary Key)
   - `user_id` (UUID, Foreign Key: Users)
   - `name` (String)
   - `department` (String)

4. **Classes**
   - `id` (UUID, Primary Key)
   - `faculty_id` (UUID, Foreign Key: Faculties)
   - `name` (String)
   - `code` (String, Unique)
   - `schedule` (String)

5. **Attendance**
   - `id` (UUID, Primary Key)
   - `student_id` (UUID, Foreign Key: Students)
   - `class_id` (UUID, Foreign Key: Classes)
   - `date` (Date)
   - `status` (String: "present", "absent", "late")