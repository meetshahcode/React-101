import { Link, Form, redirect } from "react-router-dom";
import classes from "./NewFormPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
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

export async function actions({ request }) {
  const formData = await request.formData();
  const newPostData = Object.fromEntries(formData);
  console.log(newPostData)
  await fetch("http://localhost:8089/posts", {
    method: "POST",
    body: JSON.stringify(newPostData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
}
