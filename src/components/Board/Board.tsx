import './Board.css'

const restartIcon = require('../../assets/restart.png')
const logoIcon = require('../../assets/logo.png')
const loadingIcon = require('../../assets/loading.gif')
const cancelIcon = require('../../assets/icon-x.png')

const Board = () => {
  return (
    <>
      <div id='backdrop' className='backdrop d-none'>
        &nbsp;
      </div>
      <section className='gameplay container '>
        <div className='gameplay__xo'>
          <div className='logo'>
            <div className='logo__icon'>
              <img src={logoIcon} alt='logo' />
            </div>
          </div>
        </div>
        <div className='gameplay__turn heading-xs'>
          <div className='gameplay__turn-icon'>
            <img src={cancelIcon} alt='icon-change' />
            <div>Turn</div>
          </div>
        </div>
        <div id='restart-btn' className='gameplay__restart'>
          <div className='gameplay__restart-icon'>
            <img src={restartIcon} alt='icon-restart' />
          </div>
        </div>
        <div id='gameplay-board' className='gameplay__board'>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
          <div className='gameplay__card'></div>
        </div>
        <div id='x-win' className='gameplay__win'>
          X (cpu)
        </div>
        <div id='tie' className='gameplay__tie'>
          Ties
        </div>
        <div id='o-win' className='gameplay__loss'>
          O (you)
        </div>
        <div
          id='opponent-message'
          className='gameplay__opponent-message d-none'
        >
          <p>Whats your next move</p>
          <img src={loadingIcon} alt='Your opponent message' />
        </div>
      </section>
    </>
  )
}

export default Board
