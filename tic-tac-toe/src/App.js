// APP BUILT FOLLOWING THE LEARNING TUTORIAL https://react.dev/learn/tutorial-tic-tac-toe

import { useState } from "react";
import Board from "./components/Board";

export default function Game() {
  // states to track which player is next and the history of moves
  const [history, setHistory] = useState([Array(9).fill(null)]); // [Array(9).fill(null)] is an array with a single item, which itself is an array of 9 nulls.

  const [currentMove, setCurrentMove] = useState(0); // to keep track of which step the user is currently viewing

  const xIsNext = currentMove % 2 === 0; // set xIsNext to true if the number that you’re changing currentMove to is even

  const currentSquares = history[currentMove]; // read the last squares array from history

  // function to be called by Board component to update the game
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
