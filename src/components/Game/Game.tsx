import './Game.css'
import { FC } from 'react'

// const restartIcon = require('../../assets/restart.png')
const logoIcon = require('../../assets/logo.png')
// const loadingIcon = require('../../assets/loading.gif')
const cancelIcon = require('../../assets/icon-x.png')
const circleIcon = require('../../assets/icon-o.png')

type BoardPros = {
  setGameScreen: Function
}

const Game: FC<BoardPros> = ({ setGameScreen }) => {
  return (
    <>
      {/*  GAME START SECTION */}
      <section id='game-start' className='game-start container d-block'>
        <div className='logo'>
          <a className='logo__link' href='index.html' aria-label='logo'>
            <div className='logo__icon'>
              <img src={logoIcon} alt='logo' />
            </div>
          </a>
        </div>

        <div className='game-start__choices'>
          <header className='game-start__header'>
            <h4 className='heading-xs'>Pick player 1's mark</h4>
          </header>
          <div id='game-start-marks' className='game-start__marks'>
            <div id='x' className='game-start__x-mark'>
              <div className='game-start__x-icon'>
                <img src={cancelIcon} alt='icon-x' />
              </div>
            </div>
            <div id='o' className='game-start__o-mark selected'>
              <div className='game-start__o-icon'>
                <img src={circleIcon} alt='icon-o-default' />
              </div>
            </div>
          </div>
          <footer className='game-start__footer'>Remember: x goes first</footer>
        </div>

        <div className='game-start__buttons'>
          <button
            id='vs-cpu'
            className='btn btn--yellow'
            onClick={() => setGameScreen('board')}
          >
            New game (vs cpu)
          </button>
          <button id='vs-player' className='btn btn--blue'>
            New game (vs player)
          </button>
        </div>
      </section>
    </>
  )
}

export default Game
