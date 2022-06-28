import './Board.css'
import React, { useState } from 'react'
import ResetModal from '../Modal/Modal'

const restartIcon = require('../../assets/restart.png')
const logoIcon = require('../../assets/logo.png')
const loadingIcon = require('../../assets/loading.gif')
const cancelIcon = require('../../assets/icon-x.png')

const Board = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      {/* <div id='backdrop' className='backdrop d-none'>
        &nbsp;
      </div> */}
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
        <div className='gameplay__restart' onClick={() => setIsOpen(!isOpen)}>
          <div className='gameplay__restart-icon'>
            <img src={restartIcon} alt='icon-restart' />
          </div>
          {isOpen && <ResetModal setIsOpen={setIsOpen} />}
          {/* <ResetModal setIsOpen={setIsOpen} /> */}
        </div>
        <div className='gameplay__board'>
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
        <div className='gameplay__win'>X (cpu)</div>
        <div className='gameplay__tie'>T Ties</div>
        <div className='gameplay__loss'>O (you)</div>
        <div className='gameplay__opponent-message d-none'>
          <p>Whats your next move</p>
          <img src={loadingIcon} alt='Your opponent message' />
        </div>
      </section>
    </>
  )
}

export default Board
