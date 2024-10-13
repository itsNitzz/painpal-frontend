import "react-toastify/dist/ReactToastify.css";

import React from "react";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import routes from "./src/routes/root";

const App = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <ToastContainer />
    </>
  );
};

export default App;
