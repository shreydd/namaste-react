import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1",
    {
        id: "title"
    },
    "heading 1"
);

const heading2 = React.createElement("h2",
    {
        id: "title-2"
    },
    "heading 2"
);

const container = React.createElement("div",
    {
        id: "container"
    },
    [heading, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container)