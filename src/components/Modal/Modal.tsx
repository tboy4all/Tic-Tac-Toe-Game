import './Modal.css'

type ModalProps = {
  winLossTie: string
  restart: string
}

const Modal = ({ winLossTie, restart }: ModalProps) => {
  return (
    <>
      {}
      {/* WIN / LOSS / TIE / RESTART MODAL */}
      <section id='modal' className='modal d-none'></section>
    </>
  )
}

export default Modal
