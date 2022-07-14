import React, { useState } from 'react'
import './App.css'
import Board from './components/Board/Board'
import Game from './components/Game/Game'
// import { Board } from './components/Board/Board'

function App() {
  const [gameScreen, setGameScreen] = useState('game')
  return (
    // REVIEW: smart way to implement multipage
    <div className='App'>
      {gameScreen === 'game' && <Game setGameScreen={setGameScreen} />}
      {gameScreen === 'board' && <Board />}
    </div>
  )
}

export default App
