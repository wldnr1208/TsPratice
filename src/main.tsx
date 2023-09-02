import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

//HTMLElement은 TypeScript에서 DOM 요소를 나타내는 인터페이스입니다.
//이는 웹 페이지에서 HTML 요소와 관련된 기본적인 속성과 메서드를 제공합니다.
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
