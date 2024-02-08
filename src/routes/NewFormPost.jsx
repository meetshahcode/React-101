import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NewFormPost.module.css";
import Modal from "../components/Modal";

function NewPost({ onAddPost }) {
  // const [nameRef,setNameRef] = useState('') // useState is hook with default value in function
  // // why const? we are chaging value
  // // what is hook?
  // // useState gives two value
  // // 1. variable to store value (current value of state)
  // // 2. function to change variable value (function to change state)
  // function ChangeBodyHandler(event) {
  //     setNameRef(event.target.value)
  // }

  const [authorState, setAuthorState] = useState("");
  const [bodyState, setBodyState] = useState("");

  function AuthoreHandller(event) {
    setAuthorState(event.target.value);
  }
  function bodyHandller(event) {
    setBodyState(event.target.value);
  }

  function onSubmitPost(event) {
    event.preventDefault();
    const postData = {
      body: bodyState,
      author: authorState,
    };
    onAddPost(postData);
    onClosePost();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={onSubmitPost}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" onChange={AuthoreHandller} required />
        </p>
        {/* <p>{nameRef}</p> */}
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyHandller} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
