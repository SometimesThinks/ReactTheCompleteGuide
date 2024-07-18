import Player from "./components/Player.jsx";

function App() {
  return (
    <main>
      <div className="game-container">
        <ol>
          <Player name='Player 1' symbol="X" />
          <Player name='Player 2' symbol="O" />
        </ol>

        Game Board
      </div>

      Log
    </main>
  )
}

export default App
