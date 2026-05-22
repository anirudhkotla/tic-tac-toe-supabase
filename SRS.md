# Software Requirements Specification (SRS)

## 1. Introduction
### 1.1 Purpose
This document outlines the software requirements for the **TericSoft Company Page**, a static website with a dynamic Contact Us form integrated with Supabase for storing user queries.

### 1.2 Scope
The website will consist of four pages:
- Home Page
- About Us Page
- Projects Page
- Contact Us Page

The Contact Us form will store submissions in a Supabase database.

### 1.3 Definitions
- **SAAS**: Software as a Service.
- **Supabase**: Open-source Firebase alternative for database and authentication.
- **Vercel**: Cloud platform for static site deployment.

---

## 2. Functional Requirements
| ID    | Requirement                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------|
| FR-1  | The website must have a **Home Page** with a brief introduction to `TericSoft`.                    |
| FR-2  | The website must have an **About Us Page** with company history, mission, and team details.        |
| FR-3  | The website must have a **Projects Page** showcasing `TericSoft`'s SAAS products.                  |
| FR-4  | The website must have a **Contact Us Page** with a form to submit queries.                         |
| FR-5  | The **Contact Us form** must collect: Name, Email, Subject, and Message.                           |
| FR-6  | Form submissions must be stored in a **Supabase database**.                                        |
| FR-7  | The website must be **responsive** and work on mobile, tablet, and desktop devices.                |
| FR-8  | The website must be deployed to **Vercel**.                                                        |

---

## 3. Non-Functional Requirements
| ID    | Requirement                                                                                         |
|-------|-----------------------------------------------------------------------------------------------------|
| NFR-1 | The website must load in under **2 seconds** for users with a stable internet connection.          |
| NFR-2 | The website must be **secure** and protect user data submitted via the Contact Us form.            |
| NFR-3 | The website must be **accessible** and comply with WCAG 2.1 AA standards.                          |
| NFR-4 | The Supabase database must have **row-level security (RLS)** enabled to protect user data.         |

---

## 4. Assumptions
1. The user has a **Supabase account** and can provide credentials for database setup.
2. The user has a **Vercel account** for deployment.
3. The website will be **static** except for the Contact Us form, which requires Supabase integration.
4. The user will provide **content** (text, images) for the Home, About Us, and Projects pages.

---

## 5. Risks
| Risk ID | Risk Description                                                                                     | Mitigation Strategy                                                                                     |
|---------|-----------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------|
| R-1     | Supabase credentials may be exposed in client-side code.                                            | Use environment variables and Supabase's **Row-Level Security (RLS)** to restrict access.              |
| R-2     | Contact form submissions may fail due to network issues.                                            | Implement client-side validation and error handling.                                                   |
| R-3     | Vercel deployment may fail due to misconfiguration.                                                 | Test the deployment locally before pushing to Vercel.                                                  |
| R-4     | Website may not be fully responsive on all devices.                                                 | Use a responsive CSS framework like **Bootstrap** or **TailwindCSS**.                                  |

---

## 6. Acceptance Criteria
1. The website must have **4 pages**: Home, About Us, Projects, and Contact Us.
2. The **Contact Us form** must successfully submit data to Supabase.
3. The website must be **responsive** and render correctly on mobile, tablet, and desktop devices.
4. The website must be deployed to **Vercel** and accessible via a public URL.
5. The Supabase database must have a **contact_queries** table with the following columns:
   - `id` (UUID, primary key)
   - `name` (Text)
   - `email` (Text)
   - `subject` (Text)
   - `message` (Text)
   - `created_at` (Timestamp)

---

## 7. Implementation Procedure
### Phase 1: Setup
1. Create a new directory for the project.
2. Initialize a Git repository and connect it to the **`tic-tac-toe-supabase`** GitHub repository.
3. Set up a basic project structure:
   ```
   /tericsoft
   ├── index.html          # Home Page
   ├── about.html          # About Us Page
   ├── projects.html       # Projects Page
   ├── contact.html        # Contact Us Page
   ├── styles/             # CSS files
   │   └── main.css
   ├── scripts/            # JavaScript files
   │   └── main.js
   └── README.md           # Project documentation
   ```

### Phase 2: Frontend Development
1. Create the **Home Page** (`index.html`) with:
   - Company introduction.
   - Call-to-action buttons.
2. Create the **About Us Page** (`about.html`) with:
   - Company history.
   - Mission and vision.
   - Team details.
3. Create the **Projects Page** (`projects.html`) with:
   - Showcase of `TericSoft`'s SAAS products.
4. Create the **Contact Us Page** (`contact.html`) with:
   - Form fields: Name, Email, Subject, Message.
   - Client-side validation.
   - JavaScript to submit form data to Supabase.

### Phase 3: Supabase Integration
1. Create a **Supabase project** and enable PostgreSQL database.
2. Create a **contact_queries** table with the schema defined in the acceptance criteria.
3. Enable **Row-Level Security (RLS)** and create policies to restrict access.
4. Configure **environment variables** for Supabase credentials.

### Phase 4: Deployment
1. Deploy the static website to **Vercel**.
2. Configure environment variables in Vercel for Supabase integration.
3. Test the deployed website and Supabase functionality.