import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import cssClass from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  return (
    <>
      {/* post list */}
      {posts.length > 0 && (
        <ul className={cssClass.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {/* no post div */}
      {posts.length == 0 && (
        <div className={cssClass.nopost}>
          <h2>No Post</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
