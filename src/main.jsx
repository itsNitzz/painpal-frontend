import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "../App";

import QuestionProvider from "./contexts/questionContext";
import { store } from "./store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <QuestionProvider>
        <App />
      </QuestionProvider>
    </Provider>
  </StrictMode>
);
