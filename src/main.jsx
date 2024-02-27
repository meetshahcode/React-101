import React from "react";
import ReactDOM from "react-dom/client";
import Posts, { loader as postLoader } from "./routes/Posts";
import NewPost, { actions as postSubmitAction } from "./routes/NewFormPost";
import RootLayout from "./routes/RootLayout";
import "./index.css";
import PostDetails, {loader as PostDetailsLoader} from "./routes/PostDetails";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        loader: postLoader,
        children: [
          { path: "/new-post", element: <NewPost />, action: postSubmitAction },
          { path : "/:postId", element: <PostDetails />, loader:PostDetailsLoader }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // TODO remove this once devlopment is completed
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
