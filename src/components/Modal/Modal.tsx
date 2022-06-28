import './Modal.css'
import React, { FC } from 'react'

// type ModalProps = {
//   winLossTie: string
//   restart: string
// }

// const Modal = ({ winLossTie, restart }: ModalProps) => {
//   return (
//     <>
//       {}
//       {/* WIN / LOSS / TIE / RESTART MODAL */}
//       <section id='modal' className='modal d-none'></section>
//     </>
//   )
// }

// export default Modal

type ResetModalComponentType = {
  setIsOpen: Function
  // isOpen: boolean
}

const ResetModal: FC<ResetModalComponentType> = ({ setIsOpen }) => {
  return (
    <>
      <div className='darkBG'>
        <div className='centered'>
          <div className='modal'>
            <div className='modalContent'>
              <h3>RESET GAME?</h3>
            </div>
            {/* <div className="modalActions"> */}
            <div className='actionsContainer'>
              <button className='cancelBtn' onClick={() => setIsOpen(false)}>
                NO, CANCEL
              </button>
              <button className='deleteBtn' onClick={() => setIsOpen(false)}>
                YES, RESET
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetModal
