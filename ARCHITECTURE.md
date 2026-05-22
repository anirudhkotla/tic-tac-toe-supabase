# Architecture Document

## 1. Overview
This document describes the architecture of the **Tic Tac Toe** application with **Supabase** integration. The application consists of a frontend for gameplay and a backend for data storage and retrieval.

---

## 2. System Architecture
### 2.1 High-Level Architecture
The application follows a **client-server architecture** with the following components:

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Frontend  │──────▶│  Supabase   │◀─────┤   Players   │
└─────────────┘       └─────────────┘       └─────────────┘
```

- **Frontend**: Handles gameplay, user interface, and interactions.
- **Supabase**: Provides database storage, real-time updates, and authentication.

---

## 3. Component Breakdown
### 3.1 Frontend Components
| Component          | Responsibilities                                                                                     |
|--------------------|------------------------------------------------------------------------------------------------------|
| Game Board         | Renders the Tic Tac Toe grid and handles player moves.                                              |
| Game Logic         | Validates moves, determines the winner, and tracks game state.                                       |
| Player Input       | Captures player names before starting a game.                                                        |
| Leaderboard        | Displays top players based on wins.                                                                  |
| Supabase Client    | Interacts with Supabase for data storage and retrieval.                                              |

### 3.2 Backend Components
| Component          | Responsibilities                                                                                     |
|--------------------|------------------------------------------------------------------------------------------------------|
| Supabase Database  | Stores game results, player names, and scores.                                                      |
| Supabase API       | Provides endpoints for data operations (insert, update, query).                                      |

---

## 4. Data Flow
### 4.1 Gameplay Flow
1. Players input their names.
2. The game board is rendered, and players take turns.
3. After each game, the result (win/loss/draw) is sent to Supabase.
4. The leaderboard is updated with the latest scores.

### 4.2 Data Flow Diagram
```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Players   │──────▶│   Frontend  │──────▶│  Supabase   │
└─────────────┘       └─────────────┘       └─────────────┘
```

---

## 5. Database Schema
### 5.1 Tables
| Table       | Description                                                                                         |
|-------------|-----------------------------------------------------------------------------------------------------|
| `games`     | Stores game results, including player names, winner, and timestamp.                                |
| `players`   | Stores player names and their win counts.                                                          |

### 5.2 Schema Details
#### `games` Table
| Column      | Type        | Description                                                                                     |
|-------------|-------------|-------------------------------------------------------------------------------------------------|
| `id`        | UUID        | Primary key.                                                                                    |
| `player1`   | Text        | Name of Player 1.                                                                               |
| `player2`   | Text        | Name of Player 2.                                                                               |
| `winner`    | Text        | Name of the winner (or "draw" if no winner).                                                  |
| `created_at`| Timestamp   | Timestamp of the game.                                                                          |

#### `players` Table
| Column      | Type        | Description                                                                                     |
|-------------|-------------|-------------------------------------------------------------------------------------------------|
| `id`        | UUID        | Primary key.                                                                                    |
| `name`      | Text        | Player name.                                                                                     |
| `wins`      | Integer     | Number of wins for the player.                                                                  |

---

## 6. Integration Points
### 6.1 Supabase API
- **Endpoint**: `https://<project-ref>.supabase.co/rest/v1/`
- **Operations**:
  - Insert game results into the `games` table.
  - Update player win counts in the `players` table.
  - Query the `players` table for the leaderboard.

---

## 7. Deployment
### 7.1 Frontend
- Hosted on **GitHub Pages**, **Vercel**, or **Netlify**.

### 7.2 Backend
- **Supabase**: Cloud-hosted database and API.

---

## 8. Security Considerations
- **Data Storage**: Player data is stored securely in Supabase.
- **Authentication**: Optional player authentication can be added in future iterations.
- **Input Validation**: All user inputs are validated before processing.

---