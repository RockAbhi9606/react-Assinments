import React from 'react';
import ReactDOM from 'react-dom/client';

const container = React.createElement("div", { className: "container" },
    React.createElement("div", { className: "sub-container" },
        [React.createElement("img", { src: "#", alt: "image" }),
        React.createElement("h1", {}, "Creating nested react elements!")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);




