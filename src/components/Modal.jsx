import Classes from "./Modal.module.css";

function Modal({ children,onClose }) {
  return (
    <>
      <div className={Classes.backdrop} onClick={onClose}/>
      <dialog open className={Classes.modal}>{children}</dialog>
    </>
  );
}
export default Modal;
