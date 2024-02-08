import { useEffect, useState } from "react";
import Post from "./Post";
import cssClass from "./PostList.module.css";

function PostList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  function updatePosts(newPostData) {
    fetch('http://localhost:8080/posts',{
      method:'POST',
      body: JSON.stringify(newPostData),
      headers: {
        'Content-Type':'application/json'
      }
    });
    setPosts((existingPost) => [...existingPost,newPostData]);
  }

  useEffect(
    ()=>{
      async function fetchPost(){
        setIsFetching(true);
        const response = await fetch('http://localhost:8089/posts');
        const resData = await response.json()
        console.log(resData)
        setPosts(resData?.posts)
        setIsFetching(false);
      };
      fetchPost();
    },
    []
  )

  return (
    <>
      {/* post list */}
      {posts.length > 0 && !isFetching && (
        <ul className={cssClass.posts}>
          {posts.map((post) => (
              <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}

      {/* no post div */}
      {posts.length==0 && !isFetching && (
        <div className={cssClass.nopost}>
          <h2>No Post</h2>
        </div>
      )}

      {/* Loading screen */}
      {
        isFetching && (
          <div className={cssClass.nopost}>
          <h2>Loading...</h2>
        </div>
        )
      }
    </>
  );
}

export default PostList;
