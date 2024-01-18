import classes from "./NewFormPost.module.css";

function NewPost(props) {
  // const [nameRef,setNameRef] = useState('') // useState is hook with default value in function
  // // why const? we are chaging value
  // // what is hook?
  // // useState gives two value
  // // 1. variable to store value (current value of state)
  // // 2. function to change variable value (function to change state)
  // function ChangeBodyHandler(event) {
  //     setNameRef(event.target.value)
  // }

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">Your name</label>
        <input
          type="text"
          id="name"
          onChange={props.ChangeNameHandler}
          required
        />
      </p>
      {/* <p>{nameRef}</p> */}
      <p>
        <label htmlFor="body">Text</label>
        <textarea
          id="body"
          required
          rows={3}
          onChange={props.ChangeBodyHandler}
        />
      </p>
    </form>
  );
}

export default NewPost;
