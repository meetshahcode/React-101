import classes from "./Post.module.css";

function Post({ author, body }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{ }</p>
    </div>
  );
}

export default Post;