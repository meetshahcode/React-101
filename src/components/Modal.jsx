import { useNavigate } from "react-router-dom";
import Classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate()

  function  closeHandler(){
    navigate('/');
    // navigate('..');
  }
  return (
    <>
      <div className={Classes.backdrop} onClick={closeHandler}/>
      <dialog open className={Classes.modal}>{children}</dialog>
    </>
  );
}
export default Modal;
