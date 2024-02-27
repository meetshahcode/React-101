import { Link, Form } from "react-router-dom";
import classes from "./NewFormPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        {/* <p>{nameRef}</p> */}
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export function actions(data) {
  data.request
  fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
