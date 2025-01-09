import ReactDOM, {createPortal} from 'react-dom'
import Image from 'next/image'
import close from "../../public/assets/close.svg"
import modalstyle from "../components/styles/modal.module.scss"

const Modal = ({ moreTxt, isOpen, onClose }) => {

    if(!isOpen) return null;

  return ReactDOM.createPortal (

    <div className={modalstyle.modal} id="modal">

        <div onClick={onClose} id={modalstyle.close}>

            <Image src={close} alt="Picture of the author" width={30} height={30} />
            
        </div>

        <div id={modalstyle.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis augue id enim laoreet, id euismod nisl congue. Praesent vitae ipsum vitae velit ullamcorper ullamcorper nec nec quam. Nunc rutrum dapibus turpis, in vehicula purus congue eu. Donec a leo vel ligula porta pulvinar nec vel augue. Phasellus ut turpis porta lectus condimentum iaculis sed et sem. Fusce non nisi dapibus velit dictum bibendum. Cras eu tincidunt tellus.</div>

    </div>, document.body

  )

}

export default Modal;