import { useState } from "react";
import classes from "./NewFormPost.module.css";

function NewPost({ onClosePost, onAddPost }) {
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
        <button type="button" onClick={onClosePost}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
