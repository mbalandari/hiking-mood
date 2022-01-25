import { BG, Close, Modal } from './styles';
;


const ModalComponent = ({ toggleModal }) => (
    <>
        <Modal>
            <Close onClick={toggleModal} />
        </Modal>
        <BG onClick={toggleModal} />
    </>
)

export default ModalComponent;