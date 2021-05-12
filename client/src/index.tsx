import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/store";

ReactDOM.render(
  <React.StrictMode>
    <div className="Application">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
