import { render, screen, fireEvent } from "@testing-library/react";
import Home from "@/app/page";
import { calculateWinner } from "@/app/page";

// Mock Supabase
jest.mock("@supabase/supabase-js", () => ({
  createClient: jest.fn(() => ({
    from: jest.fn(() => ({
      insert: jest.fn().mockResolvedValue({ data: [{ id: 1 }], error: null }),
      update: jest.fn().mockResolvedValue({ error: null }),
    })),
  })),
}));

describe("Tic-Tac-Toe Game", () => {
  it("renders the game board", () => {
    render(<Home />);
    expect(screen.getByText("Tic Tac Toe")).toBeInTheDocument();
    expect(screen.getByText("Next player: X")).toBeInTheDocument();
  });

  it("updates the board when a square is clicked", () => {
    render(<Home />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    expect(squares[0]).toHaveTextContent("X");
  });

  it("detects a winner", () => {
    const board = ["X", "X", "X", null, null, null, null, null, null];
    expect(calculateWinner(board)).toBe("X");
  });

  it("resets the game when the reset button is clicked", () => {
    render(<Home />);
    const squares = screen.getAllByRole("button");
    fireEvent.click(squares[0]);
    fireEvent.click(screen.getByText("Reset Game"));
    expect(squares[0]).toHaveTextContent("");
  });
});