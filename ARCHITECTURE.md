# Architecture Document

## 1. System Overview
The **TericSoft Company Page** is a static website with a dynamic Contact Us form. The website consists of four pages:
- Home Page
- About Us Page
- Projects Page
- Contact Us Page

The Contact Us form submits data to a **Supabase database** for storage.

---

## 2. Architecture Diagram
```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   User     │       │  Static     │       │  Supabase   │
│            │──────▶│  Website    │──────▶│  Database   │
└─────────────┘       └─────────────┘       └─────────────┘
```

---

## 3. Components
### 3.1 Frontend
- **Static Pages**: Home, About Us, Projects, and Contact Us.
- **Technologies**: HTML, CSS, JavaScript.
- **Responsibilities**:
  - Render static content.
  - Handle client-side routing.
  - Submit Contact Us form data to Supabase.

### 3.2 Backend
- **Supabase**: PostgreSQL database for storing contact form submissions.
- **Responsibilities**:
  - Store and retrieve contact form data.
  - Enforce Row-Level Security (RLS) policies.

### 3.3 Deployment
- **Vercel**: Hosting platform for the static website.
- **Responsibilities**:
  - Serve static files.
  - Configure environment variables for Supabase integration.

---

## 4. Data Flow
1. User fills out the **Contact Us form** on the website.
2. Form data is sent to **Supabase** via a JavaScript client.
3. Supabase stores the data in the **contact_queries** table.
4. Confirmation is displayed to the user.

---

## 5. Database Schema
### 5.1 Table: `contact_queries`
| Column     | Type      | Description                          |
|------------|-----------|--------------------------------------|
| id         | UUID      | Primary key.                         |
| name       | Text      | Name of the user.                    |
| email      | Text      | Email of the user.                   |
| subject    | Text      | Subject of the query.                |
| message    | Text      | Message content.                     |
| created_at | Timestamp | Timestamp of submission.             |

---

## 6. Security
- **Row-Level Security (RLS)**: Enabled on the Supabase database to restrict access.
- **Environment Variables**: Used to store Supabase credentials securely.
- **Client-Side Validation**: Ensures data integrity before submission.

---

## 7. Deployment
- The website is deployed to **Vercel**.
- Environment variables are configured in Vercel for Supabase integration.
- The deployment is tested to ensure functionality.