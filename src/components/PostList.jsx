import { useState } from "react";
import NewPost from "./NewFormPost";
import Post from "./Post";
import cssClass from "./PostList.module.css";
import Modal from "./Modal";
function PostList() {
  let modalContent = null;
  const [authorState, setAuthorState] = useState("");
  const [modalVisibleState, setModalVisibeState] = useState(true);
  const [bodyState, setBodyState] = useState("");

  function hideModalHandler() {
    setModalVisibeState(false);
  }
  function AuthoreHandller(event) {
    setAuthorState(event.target.value);
  }
  function bodyHandller(event) {
    setBodyState(event.target.value);
  }

  if (modalVisibleState) {
    modalContent = (
      <Modal onClose={hideModalHandler}>
        <NewPost
          ChangeNameHandler={AuthoreHandller}
          ChangeBodyHandler={bodyHandller}
        />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={cssClass.posts}>
        <li>
          <Post author={authorState} body={bodyState} />
        </li>
        <li>
          <Post author="jk rowling" body="Writter of Harry Potter" />
        </li>
        <li>
          <Post author="robert greene" body="Writter of 48 Laws" />
        </li>
      </ul>
    </>
  );
}

export default PostList;
