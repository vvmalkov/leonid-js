import React from "react";
import ReactDOM from "react-dom/client";
import TSApp from "./TSApp";

const rootElement = document.getElementById("root")!;

const root = ReactDOM.createRoot(rootElement);
root.render(
  React.createElement(TSApp, { title: "Заголовок", text: "Приветик" })
);
