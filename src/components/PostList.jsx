import { useState } from "react";
import NewPost from "./NewFormPost";
import Post from "./Post";
import cssClass from "./PostList.module.css";
import Modal from "./Modal";

function PostList({ isPosting, onClosePosting }) {
  var modalContent = "";
  const [posts, setPosts] = useState([]);

  function updatePosts(newPostData) {
    setPosts((existingPost) => [newPostData, ...existingPost]);
  }
  if (isPosting) {
    modalContent = (
      <Modal onClose={onClosePosting}>
        <NewPost onClosePost={onClosePosting} onAddPost={updatePosts} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      {posts.length > 0 ? (
        <ul className={cssClass.posts}>
          {posts.map((post) => (
            <li>
              <Post key={post.body} author={post.author} body={post.body} />
            </li>
          ))}
        </ul>
      ) : (
        <div className={cssClass.nopost}>
          <h2>No Post</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
