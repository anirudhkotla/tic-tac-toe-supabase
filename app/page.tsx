import { createClient } from '@supabase/supabase-js';
import { useState, useEffect } from 'react';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameId, setGameId] = useState(null);

  useEffect(() => {
    const initializeGame = async () => {
      const { data, error } = await supabase
        .from('games')
        .insert([{ board: Array(9).fill(null), is_x_next: true }])
        .select();
      if (error) console.error(error);
      else setGameId(data[0].id);
    };
    initializeGame();
  }, []);

  const handleClick = async (index) => {
    if (winner || board[index]) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const { error } = await supabase
      .from('games')
      .update({ board: newBoard, is_x_next: !isXNext })
      .eq('id', gameId);
    if (error) console.error(error);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      const { error } = await supabase
        .from('games')
        .update({ winner: newWinner })
        .eq('id', gameId);
      if (error) console.error(error);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const renderSquare = (index) => {
    return (
      <button className="w-16 h-16 border border-gray-400 text-2xl font-bold" onClick={() => handleClick(index)}>
        {board[index]}
      </button>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="mb-4 text-xl">{status}</div>
      <div className="grid grid-cols-3 gap-0">
        {Array(9).fill(null).map((_, i) => renderSquare(i))}
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => window.location.reload()}
      >
        Reset Game
      </button>
    </div>
  );
}