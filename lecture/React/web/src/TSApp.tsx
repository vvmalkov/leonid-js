import React from "react";

const TSApp = ({title, text}) => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, title),
    React.createElement('p', null, text)
  );
};

export default TSApp;
