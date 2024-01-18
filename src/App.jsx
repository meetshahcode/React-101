import { useState } from "react";
import PostList from "../src/components/PostList";
import MainHeader from "../src/components/MainHeader";

function App() {
  const [modalVisibleState, setModalVisibeState] = useState(false);

  function hideModalHandler() {
    setModalVisibeState(false);
  }

  function showModalHandler() {
    setModalVisibeState(true);
  }
  return (
    <>
      <header>
        <MainHeader onCreatePost={showModalHandler} />
      </header>
      <main>
        <PostList
          onClosePosting={hideModalHandler}
          isPosting={modalVisibleState}
        />
      </main>
    </>
  );
}

export default App;
