# Tic Tac Toe with Supabase

A **Tic Tac Toe** application with **Supabase** integration to store game scores and player names.

## Features
- Two-player Tic Tac Toe gameplay.
- Store game results (win/loss/draw) and player names in Supabase.
- Display a leaderboard of top players based on wins.
- Simple and responsive user interface.

## Documentation
- [Software Requirements Specification (SRS)](./SRS.md)
- [Architecture Document](./ARCHITECTURE.md)
- [Implementation Plan](./IMPLEMENTATION_PLAN.md)

## Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/anirudhkotla/tic-tac-toe-supabase.git
   cd tic-tac-toe-supabase
   ```

2. **Configure Supabase**
   - Create a new project in [Supabase](https://supabase.com/).
   - Set up the `games` and `players` tables as described in the [Architecture Document](./ARCHITECTURE.md).
   - Configure API keys and permissions.

3. **Run the Application**
   - Open `index.html` in a web browser.

## Deployment
### GitHub Pages
- The repository is configured to deploy automatically to GitHub Pages via a workflow.

### Vercel
1. **Import the Repository**
   - Go to [Vercel](https://vercel.com/) and import the `tic-tac-toe-supabase` repository.

2. **Configure Environment Variables**
   - Add the following environment variables in Vercel:
     - `SUPABASE_URL`: Your Supabase project URL.
     - `SUPABASE_ANON_KEY`: Your Supabase anonymous key.

3. **Deploy**
   - Click **Deploy** to publish the application.

4. **Automate Deployments**
   - The repository includes a GitHub Actions workflow (`.github/workflows/vercel.yml`) to automate deployments to Vercel on every push to the `main` branch.

## License
This project is licensed under the MIT License.